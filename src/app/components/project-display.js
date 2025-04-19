"use client"
import React from "react";

const ProjectDisplay = (props) => {
    return (
        <img className={"project-img " + (props.project == props.focus || props.isMobile ? "project-img-visible" : "")} src={props.src} alt={"project img"}/>
    )
};
export default ProjectDisplay;