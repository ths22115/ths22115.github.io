'use client'
import React from "react";
import "./about.css";
import { useMobile } from "../contexts/mobile-context";

export default function AboutView() {
const { isMobile } = useMobile();

  return (
    <div className="text about-text">
      <div className={"subtext about-subtext" + (isMobile ? " mobile" : "")}>
        21-year-old Northern Virginia native based in Greater Baltimore.
      </div>
      <div className={"subtext about-subtext" + (isMobile ? " mobile" : "")}>
        Seeking full-time opportunities at the intersection of software engineering and design.
      </div>
      <div className={"subtext about-subtext" + (isMobile ? " mobile" : "")}>
        Received a B.S. in Computer Science with minors in 
        Information Technology & Web Science and Graphic Design from Rensselaer Polytechnic Institute.
      </div>
      <div className={"subtext about-subtext" + (isMobile ? " mobile" : "")}>
        Passionate designer, web developer, stylist, soccer player, creative, and Manchester United fan.
      </div>
    </div>
  );
}
