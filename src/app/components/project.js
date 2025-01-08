'use client'
import React, { useRef, useEffect, useState } from "react";

export default function Project(props) {
    /* .img == path to piece or img of project
       .title == enity + site type (web app, portfolio site, etc)
       .desc == job description
       .date == finish date
       .cat == job category (project, piece)
       .repo == link to github if project */
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
        <div className="project-company" onClick={props.onClick}>SAMOTH</div>
        <div className={"project-details " + (isFocused() ? "project-details-visible" : "")}>
            <div className="project-subtitle">
                <div className="project-type"><a className={"hyperlink"} href={"https://samoth.us"}>PORTFOLIO SITE <div className={"hyperlink-arrow"}>&#8599;</div></a></div>
                <div className="project-repo"><a className={"hyperlink"} href={"https://github.com"}>GITHUB REPO <div className={"hyperlink-arrow"}>&#8599;</div></a></div>
                <div className="project-date">AUG 2023</div>
            </div>
            <div className="project-desc">
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
    </div>
    )
}