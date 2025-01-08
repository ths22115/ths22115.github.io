'use client'
import React, { useRef, useEffect, useState } from "react";
import "./page.css";
import Skeleton from '../components/skeleton';
import Project from '../components/project';

export default function Portfolio() {
  const [projectFocus, setProjectFocus] = useState(-1);
  const [jobFilter, setJobFilter] = useState("all");
  const [filterChange, setfilterChange] = useState(false);

  function focusProject(e) {
    // if(e.target.className)
    var projectElem = e.target
    // console.log(jobElem)
    // console.log(jobElem.parentElement)
    while(projectElem.className.split(" ")[0] !== "project") {
      projectElem = projectElem.parentElement
    }
    setProjectFocus(projectFocus == projectElem.id ? -1 : projectElem.id)
    // console.log(jobElem.props) 
    // setJobFocus(jobElem.)
    // console.log(e.target.className)
    // setJobFocus(true);
    // setFocus(true);
  }

  // function updateJobFilter(e) {
  //   // console.log(e.target) 
  //   setfilterChange(true)
  //   setTimeout(function() { 
  //     setJobFilter(e.target.id.split("-")[1])
  //     setfilterChange(false)
  //   }, 200);
    
  // }

  return (
    <div>
    <Skeleton page={"port"}/>
    <div className="port-container">
      
      <div className={"project-piece-list project-list"}>
        <Project id={0} onClick={focusProject} focus={projectFocus}/>
        <Project id={1} onClick={focusProject} focus={projectFocus}/>
        <Project id={2} onClick={focusProject} focus={projectFocus}/>
      </div>
    </div>
    </div>
  );
}
