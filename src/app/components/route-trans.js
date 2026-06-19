'use client'
import { useEffect, useState, useRef } from 'react'
import { usePathname } from 'next/navigation'
import './route-trans.css'
import Image from 'next/image'
import { useStaticEffects } from '../contexts/static-effects-context'
import { useMobile } from '../contexts/mobile-context'

export default function RouteTransition({ children }) {
  const pathname = usePathname()
  const [isTransitioning, setIsTransitioning] = useState(false)
  const prevPathnameRef = useRef(pathname)
  const { isMobile } = useMobile()
  const transitionDuration = 400
  const mobileTransitionDuration = 800
  const { isStaticEnabled } = useStaticEffects()

  useEffect(() => {
    if (!isStaticEnabled) {
      setIsTransitioning(false)
      prevPathnameRef.current = pathname
      return
    }

    // only trigger transition if pathname actually changed
    if (prevPathnameRef.current !== pathname) {
      setIsTransitioning(true)
      prevPathnameRef.current = pathname

      // hide transition after 800ms
      const hideTimer = setTimeout(() => {
        setIsTransitioning(false)
      }, isMobile ? mobileTransitionDuration : transitionDuration)

      return () => {
        clearTimeout(hideTimer)
      }
    }
  }, [isMobile, isStaticEnabled, pathname])

  return (
    <>
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
    </>
  )
}

