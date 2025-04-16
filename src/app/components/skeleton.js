'use client'
import React, { useRef, useEffect, useState } from "react";
import "./skeleton.css";
import Mark from "./mark";
import Navbar from "./navbar";

export default function Skeleton(props) {
	const markRef = useRef(null);
	const markWidth = props.isMobile ? 800 : 1000;
	const markHeight = .843 * markWidth;

	useEffect(() => {
		if (props.isMobile) {
			// const rootUrl = window.location.origin;
			// window.location.replace(rootUrl+"/mobile");

			if (props.page == 'contact') { // center mark for mobile contact page
				const yShift = 0;
				const xPos = (window.innerWidth/2) - (markWidth/2);
				const yPos = (window.innerHeight/2) - (markHeight/2) + yShift;
				// const xPos = (360/2) - (markWidth/2);
				// const yPos = (800/2) - (markHeight/2) + yShift;
				// console.log(window.innerWidth)
				// console.log(window.innerHeight)
				if (markRef.current) {
						markRef.current.style.left = `${xPos}px`;
						markRef.current.style.top = `${yPos}px`;
				}
			}
		} else {
			if (props.page == 'about') { // center mark for about page
				const xPos = (window.innerWidth/2) - (markWidth/2);
				const yPos = (window.innerHeight/2) - (markHeight/2);
				if (markRef.current) {
						markRef.current.style.left = `${xPos}px`;
						markRef.current.style.top = `${yPos}px`;
				}
			} else if (props.page == 'exp' || props.page == 'port') { // mark to x-scroll position
					const yPos = (window.innerHeight/2) - (markHeight/2);
					if (markRef.current) {
							markRef.current.style.top = `${yPos}px`;
					}
			}
		}

		function opacitySpikeTimer() {
			// if (window.innerWidth <= 768) {
			//   props.updateIsMobile(true);
			// }

			if (markRef.current) {
				const randomTime = Math.random() * 3500;
				const randomPeak = Math.random() * 0.04 + 0.03;
				const randomX = (Math.random() * 150) * (Math.random() < 0.5 ? 1 : -1); 
				const randomY = (Math.random() * 150) * (Math.random() < 0.5 ? 1 : -1);

				// markRef.current.style.opacity = randomPeak;
				markRef.current.style.transform = `translate(${randomX}px, ${randomY}px)`;
				// markRef.current.style.transform = 'translate(50px, 100px)';
				
				setTimeout(function() { 
					// markRef.current.style.opacity = '';
					markRef.current.style.transform = '';
				}, 50);
				setTimeout(opacitySpikeTimer, randomTime); // Recursive call
			}
		}

		opacitySpikeTimer();
	}, [props.isMobile, props.page, markHeight, markWidth]);

	return (
		<div className={"skeleton" + (props.isMobile ? " mobile " : "") + 
		// (props.page != "landing" ? 
		" nonlanding"
		//  : "")
		 }>
			<div className={"noise-wrapper"}></div>
			<Navbar page={props.page} isMobile={props.isMobile} expFilter={props.expFilter} updateExpFilter={props.updateExpFilter} 
			portSection={props.portSection} updatePortSection={props.updatePortSection} focus={(props.page == 'exp' ? props.expFocus : props.portFocus)}/>
			<Mark ref={markRef} page={props.page} size={markWidth} isMobile={props.isMobile} focus={(props.page == 'exp' ? props.expFocus : props.portFocus)}/>
		</div>
	);
}
