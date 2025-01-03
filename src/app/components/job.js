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
        // console.log(props.id + ", " + props.focus === props.id)
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
 
    return (
    <div id={props.id} className={"job " + (props.filter == "all" || props.filter == props.type ? "job-visible" : "")} onMouseEnter={jobPreview} onMouseLeave={jobDefault} onClick={props.onClick}>
        <div className={"job-company"}>{props.company}</div>
        <div className={"job-preview " + ((preview || isFocused()) ? "job-preview-active" : "") }>
            <div className={"job-title"}>{props.title}</div> 
            <div className="job-date">
                ( <div className={"job-start"}>{props.start}</div> ~ 
                <div className={"job-end"}>{props.end}</div> )
            </div>
        </div>
        <div className={"job-desc " + (isFocused() ? "job-desc-active" : "") }>
        Designed, developed, and deployed a fully documented AWS Lambda API to deliver cloud maturity metrics for 
        all 30+ cloud infrastructure systems used at Capital One, to be adopted by over 11,000 software engineers 
        organized in over 2,000 agile teams.
        <br />
        Collaborated with associate and senior engineers in a scrum-based agile environment, leveraging JIRA for 
        issue tracking and sprint management, Python for software implementation, GraphQL for complex database 
        queries, and Jenkins for seamless deployment.
        <br />
        Utilized the Pytest framework to implement and execute over 50 unit tests designed with both black-box 
        and white-box testing methodologies to validate API functionality and robustness, providing over 90% 
        statement coverage comprehensively.
        </div>
        
    </div>
    )
}