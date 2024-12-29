'use client'
import React, { useRef, useEffect } from "react";
import "./skeleton.css";
import Mark from "./mark";
import Navbar from "./navbar";

export default function Skeleton(props) {
  const markRef = useRef(null);
  const markWidth = 1000;
  const markHeight = .843 * markWidth;



  useEffect(() => {
    if (props.page == 'about') { //center mark for about page
        const xPos = (window.innerWidth/2) - (markWidth/2);
        if (markRef.current) {
            markRef.current.style.left = `${xPos}px`;
        }
    } else if (props.page == 'exp' || props.page == 'port') { // mark to x-scroll position
         const yPos = (window.innerHeight/2) - (markHeight/2);
         if (markRef.current) {
             markRef.current.style.top = `${yPos}px`;
         }
    }

    function opacitySpikeTimer() {
      if (markRef.current) {
        const randomTime = Math.random() * 3500;
        const randomPeak = Math.random() * 0.04 + 0.03;
        const randomX = (Math.random() * 150) * (Math.random() < 0.5 ? 1 : -1); 
        const randomY = (Math.random() * 150) * (Math.random() < 0.5 ? 1 : -1);

        // markRef.current.style.opacity = randomPeak;
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
    <div className={"skeleton"}>
      <div className={"noise-wrapper"}></div>
      <Navbar page={props.page} />
      <Mark ref={markRef} page={props.page} size={markWidth}/>
    </div>
  );
}
