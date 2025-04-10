'use client'
import React, { useRef, useEffect, useState } from "react";

export default function Job(props) {
    /* .company == comapny name
       .title == job title
       .desc == job description
       .start == start date
       .end == end date 
       .cat == job category (swe, design, etc)
       .active == bool, true if position is still held */
    const [preview, setPreview] = useState(false);
    const [focus, setFocus] = useState(false);

    function isFocused() {
        if (props.focus == props.id) {
            return true
        }
        return false
    }
    // console.log(isFocused())

    // console.log(props.active)
    function jobDefault(e) {
        setPreview(false);
        
    }
    function jobPreview(e) {
        setPreview(true);
    }
    console.log(props.filter)
    console.log(props.company + ": " + props.type)
 
    return (
    <div id={props.id} className={"job" + (props.type == "all" || props.filter == "all" || props.filter == props.type ? " job-visible" : "") 
        + (props.isMobile ? " mobile" : "")} onMouseEnter={jobPreview} onMouseLeave={jobDefault} onClick={props.onClick}>
        <div className={"job-company"}>{props.company}</div>
        <div className={"job-preview " + ((preview || isFocused()) ? "job-preview-active" : "") }>
            <div className={"job-title"}>{props.title}</div> 
            <div className="job-date">
                ( <div className={"job-start"}>{props.start}</div> ~ 
                <div className={"job-end"}>{props.end}</div> )
            </div>
        </div>
        <div className={"job-desc " + (isFocused() ? "job-desc-active" : "") }>
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
    )
}