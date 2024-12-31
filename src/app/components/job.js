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

    // console.log(props.active)
    function jobPreview(e) {
        setPreview(true);
    }
    function jobDefault(e) {
        setPreview(false);
    }
 
    return (
    <div className={"job"} onMouseOver={jobPreview} onMouseLeave={jobDefault}>
        <div className={"job-company"}>{props.company}</div>
        <div className={"job-preview " + (preview ? "job-preview-active" : "") }>
            <div className={"job-title"}>{props.title}</div> 
            <div className="job-date">
                ( <div className={"job-start"}>{props.start}</div> ~ 
                <div className={"job-end"}>{props.end}</div> )
            </div>
        </div>
        
    </div>
    )
}