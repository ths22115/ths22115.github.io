'use client'
import React, { useRef, useEffect, useState } from "react";
import "./page.css";
import Skeleton from './../components/skeleton';

export default function About() {
const [isMobile, setMobile] = useState(false);

  return (
    <div>
      <Skeleton page={'about'} isMobile={isMobile} updateIsMobile={setMobile} />
      <div className="text about-text">
        <div className={"subtext about-subtext" + isMobile ? " mobile" : ""}>
          20-year-old Northern Virginia native based in Greater Philadelphia.
          </div>
        <div className={"subtext about-subtext" + isMobile ? " mobile" : ""}>
          {/* {isMobile ? "LOL" : "Third year student at Rensselaer Polytechnic Institute w/ Spring 2026 expected graduation."} */}
          Third year student at Rensselaer Polytechnic Institute w/ Spring 2026 expected graduation. 
        </div>
        <div className={"subtext about-subtext" + isMobile ? " mobile" : ""}>
          Pursing a B.S. of Computer Science with concentrations in 
          Information Technology & Web Science, Visualization & Graphics, and Graphic Design.
        </div>
        <div className={"subtext about-subtext" + isMobile ? " mobile" : ""}>
          Passionate UI/UX designer, web developer, creative, soccer player, and Manchester United fan.
          </div>
      </div>
    </div>
  );
}
