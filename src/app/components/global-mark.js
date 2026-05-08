"use client";

import { useEffect, useMemo, useRef } from "react";
import { usePathname } from "next/navigation";
import Mark from "./mark";
import { useMobile } from "../contexts/mobile-context";
import { useStaticEffects } from "../contexts/static-effects-context";

function getPageFromPathname(pathname) {
  if (pathname === "/") {
    return "landing";
  }

  return pathname.split("/")[1] || "landing";
}

export default function GlobalMark() {
  const pathname = usePathname();
  const page = useMemo(() => getPageFromPathname(pathname), [pathname]);
  const { isMobile } = useMobile();
  const { isStaticEnabled } = useStaticEffects();
  const markRef = useRef(null);

  const markWidth = isMobile ? (isStaticEnabled ? 800 : 1250) : 1000;
  const markHeight = 0.843 * markWidth;

  useEffect(() => {
    let spikeTimeoutId;
    let resetTimeoutId;
    let isCancelled = false;
    const markElement = markRef.current;

    if (!markElement) {
      return undefined;
    }

    if (isMobile) {
      markElement.style.left = "";
      markElement.style.top = "";
    } else {
      if (page === "about") {
        const xPos = window.innerWidth / 2 - markWidth / 2;
        const yPos = window.innerHeight / 2 - markHeight / 2;
        markElement.style.left = `${xPos}px`;
        markElement.style.top = `${yPos}px`;
      } else if (page === "exp" || page === "port") {
        const yPos = window.innerHeight / 2 - markHeight / 2;
        markElement.style.top = `${yPos}px`;
      } else {
        markElement.style.top = "";
      }
    }

    function glitchTimer() {
      if (isCancelled || !isStaticEnabled) {
        return;
      }

      const randomTime = Math.random() * 3500;
      const randomX = Math.random() * 150 * (Math.random() < 0.5 ? 1 : -1);
      const randomY = Math.random() * 150 * (Math.random() < 0.5 ? 1 : -1);

      markElement.style.transform = `translate(${randomX}px, ${randomY}px)`;

      resetTimeoutId = setTimeout(() => {
        markElement.style.transform = "";
      }, 50);
      spikeTimeoutId = setTimeout(glitchTimer, randomTime);
    }

    if (isStaticEnabled) {
      glitchTimer();
    } else {
      markElement.style.transform = "";
    }

    return () => {
      isCancelled = true;
      clearTimeout(spikeTimeoutId);
      clearTimeout(resetTimeoutId);
      markElement.style.transform = "";
    };
  }, [isMobile, isStaticEnabled, markHeight, markWidth, page]);

  return <Mark ref={markRef} page={page} size={markWidth} focus={-1} />;
}
