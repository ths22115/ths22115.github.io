'use client'
import React from "react";
import { useMobile } from "./contexts/mobile-context";

export default function LandingView() {
  const { isMobile } = useMobile();
  return (
    <div className="text landing-text">
      { isMobile ? 
      "Software engineer and designer creating that which embodies the self." :
      "Creating that which embodies the self."
      }
    </div>
  );
}
