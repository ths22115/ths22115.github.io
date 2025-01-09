'use client'
import React, { useRef, useEffect, useState } from "react";
import "./page.css";
import Skeleton from '../components/skeleton';
import Project from '../components/project';
import ProjectPreview from '../components/projectPreview';

export default function Portfolio() {
  const [isProjectsActive, setIsProjectsActive] = useState(true);
  const [portFocus, setPortFocus] = useState(-1);
  const [portSection, setPortSection] = useState("webdev");
  const [sectionChange, setSectionChange] = useState(false);
  const [displayChange, setDisplayChange] = useState(false);

  function focusProject(e) {
    // if(e.target.className)
    var projectElem = e.target
    // console.log(jobElem)
    // console.log(jobElem.parentElement)
    while(projectElem.className.split(" ")[0] !== "project") {
      projectElem = projectElem.parentElement
    }

    setDisplayChange(true)
    setTimeout(function() { 
      setPortFocus(portFocus == projectElem.id ? -1 : projectElem.id)
      setDisplayChange(false)
    }, 200);
  }

  function updatePortSection(e) {
    // console.log(e.target) 
    setSectionChange(true)
    setTimeout(function() { 
      setPortSection(e.target.id.split("-")[1])
      setPortFocus(-1)
      setSectionChange(false)
    }, 200);
  }
 
  return (
    <div>
    <Skeleton page={"port"} portFocus={portFocus} portSection={portSection} updatePortSection={updatePortSection}/>
    <div className={"port-container " + (sectionChange ? "filter-trans" : "")}>
      <div className={"project-display " + (portSection == "webdev" ? "display-active " : "") + (displayChange ? "filter-trans" : "")}>
        <ProjectPreview src={"samothSite1.jpg"} project={0} focus={portFocus}/>
        <ProjectPreview src={"samothSite1.jpg"} project={0} focus={portFocus}/>
        <ProjectPreview src={"samothSite1.jpg"} project={0} focus={portFocus}/>
        <ProjectPreview src={"samothSite2.jpg"} project={1} focus={portFocus}/>
        <ProjectPreview src={"samothSite2.jpg"} project={1} focus={portFocus}/>
        <ProjectPreview src={"samothSite2.jpg"} project={1} focus={portFocus}/>
        <ProjectPreview src={"samothSite3.jpg"} project={2} focus={portFocus}/>
        <ProjectPreview src={"samothSite3.jpg"} project={2} focus={portFocus}/>
        <ProjectPreview src={"samothSite3.jpg"} project={2} focus={portFocus}/>
      </div>
      <div className={"project-piece-list project-list " + (portSection == "webdev" ? "list-active" : "")}>
        <Project id={0} onClick={focusProject} focus={portFocus}/>
        <Project id={1} onClick={focusProject} focus={portFocus}/>
        <Project id={2} onClick={focusProject} focus={portFocus}/>
      </div>
    </div>
    </div>
  );
}
