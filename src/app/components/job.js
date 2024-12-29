'use client'
import React, { useRef, useEffect } from "react";

export default function Job(props) {
    /* .company == comapny name
       .title == job title
       .desc == job description
       .start == start date
       .end == end date 
       .cat == job category (swe, design, etc)
       .active == bool, true if position is still held */
    console.log(props.active)
    return (
    <div className={"job " + (props.active ? "active-job" : "")}>
        <div className="job-company">{props.company}</div>
        <div className="job-title">{props.title}</div>
    </div>
    )
}