'use client'
import React, { useRef, useEffect, useState } from "react";

export default function Project(props) {
    /* 
       .title == enity + site type (web app, portfolio site, etc)
       .desc == job description
       .date == finish date
       .cat == job category (project, piece)
       .repo == link to github if project 
    */
    const [preview, setPreview] = useState(false);

    function isFocused() {
        // console.log(props.id + ", " + props.focus === props.id)
        if (props.focus == props.id) {
            return true
        }
        return false
    }
 
    return (
    <div id={props.id} className={"project"}>
        <div className="project-company" onClick={props.onClick}>{props.title}</div>
        <div className={"expanded project-expanded " + (isFocused() || props.isMobile ? "project-expanded-visible" : "")}>
            <div className="project-subtitle">
                <div className="project-type">
                   {props.link != "" ? 
                        <a className={"hyperlink"} target="_blank" href={props.link}>{props.type}<div className={"hyperlink-arrow"}>&#8599;&#xFE0E;</div></a>
                        : props.type
                   } 
                </div>
                {props.repo != "" && !props.isMobile ? <div className="project-repo"><a className={"hyperlink"} href={props.repo}>GITHUB REPO<div className={"hyperlink-arrow"}>&#8599;&#xFE0E;</div></a></div> : ""}
                <div className="project-date">{props.date}</div>
            </div>
            <div className="project-desc">
                {
                    props.desc.split("<br />").map((line, index) => (
                        <React.Fragment key={index}>
                        {line}
                        {index < props.desc.split("<br />").length - 1 && <br />}
                        </React.Fragment>
                    ))
                }   
            </div>
        </div>
    </div>
    )
}