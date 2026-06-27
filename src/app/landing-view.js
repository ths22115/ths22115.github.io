'use client'
import React from "react";
import "./landing.css";
import { useMobile } from "./contexts/mobile-context";

export default function LandingView() {
  const { isMobile } = useMobile();

  return (
    <div className="text landing-text">
      {
        isMobile
          ? "Engineer by logic.\nDesigner by instinct.\nBuilding products as beautiful as they are meaningful."
          :
          <>
            <div className={"subtext landing-subtext"}>
              Engineer by logic.
            </div>
            <div className={"subtext landing-subtext"}>
              Designer by instinct.
            </div>
            <div className={"subtext landing-subtext"}>
              Building products as beautiful as they are meaningful.
            </div>
          </>
      }
    </div>
  );
}
