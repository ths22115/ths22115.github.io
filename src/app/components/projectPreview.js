"use client"
import React from "react";

const ProjectPreview = (props) => {
    return (
        <img className={"project-img " + (props.project == props.focus ? "project-img-visible" : "")} src={props.src} alt={"project img"}/>
    )
};
export default ProjectPreview;