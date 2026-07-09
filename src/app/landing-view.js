'use client'
import React from "react";
import Link from "next/link";
import "./landing.css";
import { useMobile } from "./contexts/mobile-context";

export default function LandingView() {
  const { isMobile } = useMobile();

  return (
    <div className="text landing-text">
      {
        isMobile
          ? "Engineer by logic.\n\nDesigner by instinct.\n\nBuilding products as beautiful as they are meaningful."
          :
          <>
            <Link href="/exp" className={"subtext landing-subtext hyperlink"}>
              Engineer by logic.
            </Link>
            <Link href="/port" className={"subtext landing-subtext hyperlink"}>
              Designer by instinct.
            </Link>
            <Link href="/about" className={"subtext landing-subtext hyperlink"}>
              Building products as beautiful as they are meaningful.
            </Link>
          </>
      }
    </div>
  );
}
