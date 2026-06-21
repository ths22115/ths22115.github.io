'use client'
import React from "react";
import "./about.css";
import { useMobile } from "../contexts/mobile-context";

export default function AboutView() {
const { isMobile } = useMobile();

  return (
    <div className="text about-text">
      <div className={"subtext about-subtext" + (isMobile ? " mobile" : "")}>
        20-year-old Northern Virginia native based in Greater Philadelphia.
        </div>
      <div className={"subtext about-subtext" + (isMobile ? " mobile" : "")}>
        {/* {isMobile ? "LOL" : "Third year student at Rensselaer Polytechnic Institute w/ Spring 2026 expected graduation."} */}
        Fourth year student at Rensselaer Polytechnic Institute w/ Spring 2026 expected graduation. 
      </div>
      <div className={"subtext about-subtext" + (isMobile ? " mobile" : "")}>
        Pursing a B.S. in Computer Science with minors in 
        Information Technology & Web Science and Graphic Design.
      </div>
      <div className={"subtext about-subtext" + (isMobile ? " mobile" : "")}>
        Passionate UI/UX designer, web developer, creative, soccer player, and Manchester United fan.
        </div>
    </div>
  );
}
