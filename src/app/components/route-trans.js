'use client'
import { useEffect, useState, useRef } from 'react'
import { usePathname } from 'next/navigation'
import './route-trans.css'
import Image from 'next/image'

export default function RouteTransition({ children }) {
  const pathname = usePathname()
  const [isTransitioning, setIsTransitioning] = useState(true)
  const prevPathnameRef = useRef(pathname)
  const [isMobile, setIsMobile] = useState(true)

  useEffect(() => {
    if (window.innerWidth <= 768) {
        setIsMobile(true);
    }
  }, [])

  useEffect(() => {
    // only trigger transition if pathname actually changed
    if (prevPathnameRef.current !== pathname) {
      setIsTransitioning(true)
      prevPathnameRef.current = pathname

      // hide transition after 800ms
      const hideTimer = setTimeout(() => {
        setIsTransitioning(false)
      }, 400)

      return () => {
        clearTimeout(hideTimer)
      }
    }
  }, [pathname])

  return (
    <>
      {isTransitioning && (
        !isMobile ? (
          <div className={"route-transition-overlay"}>
              <div className="trans-noise-wrapper"></div>
              <div className={"trans-scanlines"}></div>
              <div className={"trans-noise"}></div>
              <Image src="/miusWordmarkBlack.png" alt="Mius Thomas Logo" width={900} height={923} className="trans-wordmark" />
          </div>
        ) : (
          <div className={"route-transition-overlay mobile"}>
            <div className={"trans-scanlines mobile"}></div>
            <div className={"trans-noise mobile"}></div>
            <Image src="/miusWordmarkBlack.svg" alt="Mius Thomas Logo" width={900} height={923} className="trans-wordmark mobile" />
          </div>
        )
      )}
      {children}
    </>
  )
}

