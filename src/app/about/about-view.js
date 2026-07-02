'use client'
import React from "react";
import "./about.css";
import { useMobile } from "../contexts/mobile-context";

export default function AboutView() {
const { isMobile } = useMobile();

  return (
    <div className="text about-text">
      <div className={"subtext about-subtext" + (isMobile ? " mobile" : "")}>
        21-year-old Northern Virginia native currently based in Greater Baltimore.
      </div>
      <div className={"subtext about-subtext" + (isMobile ? " mobile" : "")}>
        Seeking full-time opportunities at the intersection of software engineering and design.
      </div>
      <div className={"subtext about-subtext" + (isMobile ? " mobile" : "")}>
        2026 graduate of Rensselaer Polytechnic Institute — B.S. in Computer Science, minors in IT & Web Science and Graphic Design.
      </div>
      <div className={"subtext about-subtext" + (isMobile ? " mobile" : "")}>
        Passionate designer, web developer, stylist, soccer player, creative, and Manchester United fan.
      </div>
    </div>
  );
}
