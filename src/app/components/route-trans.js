'use client'
import { createContext, useContext, useEffect, useMemo, useState, useRef } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import './route-trans.css'
import Image from 'next/image'
import { useStaticEffects } from '../contexts/static-effects-context'
import { useMobile } from '../contexts/mobile-context'
import { getInternalNavigationHref } from '../lib/route-trans'

const RouteTransitionContext = createContext(null)

export function useRouteTransition() {
  const context = useContext(RouteTransitionContext)
  if (!context) {
    throw new Error('useRouteTransition must be used within RouteTransition')
  }
  return context
}

const FADE_DURATION_MS = 250

function getFadeDuration() {
  if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return 0
  }
  return FADE_DURATION_MS
}


export default function RouteTransition({ children }) {
  const pathname = usePathname()
  const router = useRouter()
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isFading, setIsFading] = useState(false)
  const prevPathnameRef = useRef(pathname)
  const pendingHrefRef = useRef(null)
  const fadeTimerRef = useRef(null)
  const { isMobile } = useMobile()
  const transitionDuration = 400
  const mobileTransitionDuration = 600
  const { isStaticEnabled } = useStaticEffects()

  useEffect(() => {
    if (isStaticEnabled) {
      if (pendingHrefRef.current) {
        const dest = pendingHrefRef.current
        pendingHrefRef.current = null
        router.push(dest)
      }
      setIsFading(false)
      if (fadeTimerRef.current) {
        clearTimeout(fadeTimerRef.current)
        fadeTimerRef.current = null
      }
    }
  }, [isStaticEnabled, router])

  useEffect(() => {
    if (isStaticEnabled) return

    const onClick = (event) => {
      if (event.button !== 0) return
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return

      const dest = getInternalNavigationHref(
        event.target.closest('a[href]'),
        new URL(window.location.href)
      )
      if (!dest) return

      event.preventDefault()

      pendingHrefRef.current = dest
      setIsFading(true)

      if (fadeTimerRef.current) clearTimeout(fadeTimerRef.current)
      fadeTimerRef.current = setTimeout(() => {
        fadeTimerRef.current = null
        router.push(dest)
      }, getFadeDuration())
    }

    document.addEventListener('click', onClick, true)
    return () => {
      document.removeEventListener('click', onClick, true)
      if (fadeTimerRef.current) {
        clearTimeout(fadeTimerRef.current)
        fadeTimerRef.current = null
      }
    }
  }, [isStaticEnabled, router])

  useEffect(() => {
    if (prevPathnameRef.current === pathname) return

    prevPathnameRef.current = pathname

    if (isStaticEnabled) {
      setIsFading(false)
      setIsTransitioning(true)

      const hideTimer = setTimeout(() => {
        setIsTransitioning(false)
      }, isMobile ? mobileTransitionDuration : transitionDuration)

      return () => {
        clearTimeout(hideTimer)
      }
    }

    setIsTransitioning(false)
    const initiatedByUs = pendingHrefRef.current !== null
    pendingHrefRef.current = null

    if (initiatedByUs) {
      const fadeInFrame = requestAnimationFrame(() => {
        setIsFading(false)
      })
      return () => cancelAnimationFrame(fadeInFrame)
    }

    setIsFading(true)
    let innerFrame
    const outerFrame = requestAnimationFrame(() => {
      innerFrame = requestAnimationFrame(() => {
        setIsFading(false)
      })
    })
    return () => {
      cancelAnimationFrame(outerFrame)
      if (innerFrame) cancelAnimationFrame(innerFrame)
    }
  }, [isMobile, isStaticEnabled, pathname])

  const fadeValue = useMemo(
    () => ({ isFading: !isStaticEnabled && isFading }),
    [isFading, isStaticEnabled]
  )

  return (
    <RouteTransitionContext.Provider value={fadeValue}>
      {isStaticEnabled && isTransitioning && (
        !isMobile ? (
          <div className={"route-transition-overlay"}>
              <div className="trans-noise-wrapper"></div>
              <div className={"trans-scanlines"}></div>
              <div className={"trans-noise"}></div>
              <Image src="/miusWordmarkBlack.svg" alt="Mius Thomas Logo" width={900} height={923} className="trans-wordmark" />
          </div>
        ) : (
          <div className={"route-transition-overlay mobile"}>
            <div className={"trans-noise-wrapper mobile"}></div>
            <div className={"trans-scanlines mobile"}></div>
            <div className={"trans-noise-layers mobile"}>
              <div className={"trans-noise mobile"}></div>
              <div className={"trans-noise mobile"}></div>
              <div className={"trans-noise mobile"}></div>
            </div>
            <Image src="/miusWordmarkBlack.svg" alt="Mius Thomas Logo" width={900} height={923} className="trans-wordmark mobile" />
          </div>
        )
      )}
      {children}
    </RouteTransitionContext.Provider>
  )
}

