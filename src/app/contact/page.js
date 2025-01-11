'use client'
import React, { useRef, useEffect } from "react";
import "./page.css";
import Skeleton from '../components/skeleton';

export default function About() {
  return (
    <div>
    <Skeleton page={'contact'} />
    <div className="text contact-text"> 
        <div className="subtext contact-subtext"><a className={"hyperlink"} target="_blank" href={"https://www.linkedin.com/in/miles-thomas-552648245/"}>LINKEDIN<div className={"hyperlink-arrow"}>&#8599;</div></a></div>
        <div className="subtext contact-subtext"><a className={"hyperlink"} target="_blank" href={"mailto:milesmckinleythomas@gmail.com"}>EMAIL<div className={"hyperlink-arrow"}>&#8599;</div></a></div>
        <div className="subtext contact-subtext"><a className={"hyperlink"} target="_blank" href={"https://www.instagram.com/urm1us/"}>INSTAGRAM<div className={"hyperlink-arrow"}>&#8599;</div></a></div>
      </div>
    </div>
  );
}
