'use client'
import React, { useEffect } from "react";
import "./page.css";
import noiseImg from "../../../public/noiseTransparent.png"

export default function Mobile() {

    useEffect(() => {
        if (window.innerWidth > 768) {
            window.location.replace(window.location.origin);
          }
    })
    
    return (
    <div className="mobile">
        <div className="scanlines"></div>
        <div className={"noise"}></div>
        <div className="mobile-buffer">
            <a className="sry">Sorry!</a><br />
            Mobile UI still in development.<br />
            Please check back later for updates and visit on a desktop for the current experience.
        </div>
    </div>
    );
}
