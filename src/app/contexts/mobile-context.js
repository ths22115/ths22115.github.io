"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

const MOBILE_BREAKPOINT = 768;
const MobileContext = createContext(null);

export function MobileProvider({ children }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function updateIsMobile() {
      setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    }

    updateIsMobile();
    window.addEventListener("resize", updateIsMobile);

    return () => {
      window.removeEventListener("resize", updateIsMobile);
    };
  }, []);

  const value = useMemo(() => ({ isMobile }), [isMobile]);

  return <MobileContext.Provider value={value}>{children}</MobileContext.Provider>;
}

export function useMobile() {
  const context = useContext(MobileContext);

  if (!context) {
    throw new Error("useMobile must be used within MobileProvider");
  }

  return context;
}
