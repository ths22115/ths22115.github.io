'use client'
import React, { useRef, useEffect, useState } from "react";
import "./page.css";
import Skeleton from '../components/skeleton';

export default function Contact() {
  const [isMobile, setMobile] = useState(true);

  return (
    <div>
    <Skeleton page={'contact'} isMobile={isMobile} updateIsMobile={setMobile} />
    <div className="text contact-text">
        <div className="subtext contact-subtext"><a className={"hyperlink"} target="_blank" href={"mailto:milesmckinleythomas@gmail.com"}>EMAIL<div className={"hyperlink-arrow"}>&#8599;</div></a></div>
        <div className="subtext contact-subtext"><a className={"hyperlink"} target="_blank" href={"https://www.linkedin.com/in/miles-thomas-552648245/"}>LINKEDIN<div className={"hyperlink-arrow"}>&#8599;</div></a></div>
        <div className="subtext contact-subtext"><a className={"hyperlink"} target="_blank" href={"https://www.github.com/ths22115"}>GITHUB<div className={"hyperlink-arrow"}>&#8599;</div></a></div>
        <div className="subtext contact-subtext"><a className={"hyperlink"} target="_blank" href={"https://www.instagram.com/urm1us/"}>INSTAGRAM<div className={"hyperlink-arrow"}>&#8599;</div></a></div>
      </div>
    </div>
  );
}
