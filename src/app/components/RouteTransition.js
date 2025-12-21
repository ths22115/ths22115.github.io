'use client'
import { useEffect, useState, useRef } from 'react'
import { usePathname } from 'next/navigation'
import './routeTransition.css'
import Image from 'next/image'

export default function RouteTransition({ children }) {
  const pathname = usePathname()
  const [isTransitioning, setIsTransitioning] = useState(false )
  const prevPathnameRef = useRef(pathname)

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
          <div className={"route-transition-overlay"}>
              <div className="trans-noise-wrapper"></div>
              <div className={"trans-scanlines"}></div>
              <div className={"trans-noise"}></div>
              <Image src="/miusWordmarkBlack.png" alt="Mius Thomas Logo" width={900} height={923} className="trans-wordmark" />
              <div className="route-transition-content">
                  
                  {/* <div className={"noise"}></div> */}
                  {/* <Mark ref={markRef} page={props.page} size={markWidth} isMobile={props.isMobile} focus={(props.page == 'exp' ? props.expFocus : props.portFocus)}/> */}
                  {/* You can customize this content */}
                  {/* <div className="route-transition-spinner"></div> */}
              </div>
          </div>
      )}
      <div>
        {children}
      </div>
    </>
  )
}

