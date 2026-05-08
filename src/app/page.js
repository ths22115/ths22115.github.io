'use client'
import React from "react";
import Skeleton from './components/skeleton';
import { useMobile } from "./contexts/mobile-context";

export default function Landing() {
  const { isMobile } = useMobile();
  return (
    <div>
      <Skeleton page={'landing'} />
      <div className="text landing-text">
        { isMobile ? 
        "Software engineer and designer creating that which embodies the self." :
        "Creating that which embodies the self."
        }
      </div>
    </div>
  );
}
