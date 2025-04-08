'use client'
import React, { useRef, useEffect } from "react";
import "./page.css";
import Skeleton from './../components/skeleton';

export default function About() {
  return (
    <div>
      <Skeleton page={'about'} />
      <div className="text about-text">
        <div className="subtext about-subtext">
          20 y/o nothern VA born DE resident.
          </div>
        <div className="subtext about-subtext">
          Third year student at Rensselaer Polytechnic Institute w/ Spring 2026 expected graduation. 
        </div>
        <div className="subtext about-subtext">
          Pursing a B.S. of Computer Science with concentrations in 
          Information Technology & Web Science, Visualization & Graphics, and Graphic Design.
        </div>
        <div className="subtext about-subtext">
          Passionate UI/UX designer, web developer, creative, soccer player, and Manchester United fan.
          </div>
      </div>
        
    </div>
  );
}
