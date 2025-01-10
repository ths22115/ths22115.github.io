'use client'
import React, { useEffect } from "react";
import "./page.css";

export default function Mobile() {

    useEffect(() => {
        if (window.innerWidth > 768) {
            window.location.replace(window.location.origin);
          }
    })
    
    return (
    <div className="mobile">
        <div className={"noise-wrapper"}></div>
        <div className="mobile-buffer">
            Sorry! <br />
            Mobile UI still in development.<br />
            Please check back later for updates and visit on a desktop for the current experience.
        </div>
    </div>
    );
}
