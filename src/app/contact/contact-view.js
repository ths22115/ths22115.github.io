'use client'
import React from "react";
import "./contact.css";

export default function ContactView() {
  return (
    <div className="text contact-text">
        <div className="subtext contact-subtext"><a className={"hyperlink"} target="_blank" href={"mailto:milesmckinleythomas@gmail.com"}>EMAIL<div className={"hyperlink-arrow"}>&#8599;&#xFE0E;</div></a></div>
        <div className="subtext contact-subtext"><a className={"hyperlink"} target="_blank" href={"https://www.linkedin.com/in/mius-thomas/"}>LINKEDIN<div className={"hyperlink-arrow"}>&#8599;&#xFE0E;</div></a></div>
        <div className="subtext contact-subtext"><a className={"hyperlink"} target="_blank" href={"https://www.github.com/ths22115"}>GITHUB<div className={"hyperlink-arrow"}>&#8599;&#xFE0E;</div></a></div>
        {/* <div className="subtext contact-subtext"><a className={"hyperlink"} target="_blank" href={"https://www.instagram.com/urm1us/"}>INSTAGRAM<div className={"hyperlink-arrow"}>&#8599;&#xFE0E;</div></a></div> */}
      </div>
  );
}
