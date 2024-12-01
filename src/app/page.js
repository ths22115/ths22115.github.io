'use client'
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import "./page.css";
import Mark from "./components/mark";

export default function Home() {
  const markRef = useRef(null);

  useEffect(() => {
    function opacitySpikeTimer() {
      if (markRef.current) {
        const randomTime = Math.random() * 3500;
        const randomPeak = Math.random() * 0.1 + 0.1;
        const randomX = (Math.random() * 100) * (Math.random() < 0.5 ? 1 : -1); 
        const randomY = (Math.random() * 100) * (Math.random() < 0.5 ? 1 : -1);

        markRef.current.style.opacity = randomPeak;
        markRef.current.style.transform = `translate(${randomX}px, ${randomY}px)`;
        // markRef.current.style.transform = 'translate(50px, 100px)';
        
        setTimeout(function() { 
          markRef.current.style.opacity = '';
          markRef.current.style.transform = '';
        }, 50);
        setTimeout(opacitySpikeTimer, randomTime); // Recursive call
      }
    }

    opacitySpikeTimer();
  }, []);

  return (
    <div className={"page"}>
      <div className={"noise-wrapper"}></div>
      <div className="nav">
        <a className="title mius">MIUS THOMAS</a>
        <ul className="nav-list">
          <li className="nav-button">ABOUT</li>
          <li className="nav-button">PORTFOLIO</li>
          <li className="nav-button">EXPERIENCE</li>
          <li className="nav-button">CONTACT</li>
        </ul>
      </div>
      <Mark ref={markRef} page={"landing"} />
    </div>
  );
}
