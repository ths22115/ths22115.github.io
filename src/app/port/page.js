'use client'
import React, { useRef, useEffect, useState } from "react";
import "./page.css";
import Skeleton from '../components/skeleton';
import Project from '../components/project';
import ProjectDisplay from '../components/project-display';
import Piece from '../components/piece';
import WebDevData from '../data/port-webdev.json'
import DesignData from '../data/port-design.json'
import { useMobile } from "../contexts/mobile-context";
import { usePort } from "../contexts/port-context";

export default function Portfolio() {
  const [portFocus, setPortFocus] = useState(-1);
  const [displayChange, setDisplayChange] = useState(false);
  const { isMobile } = useMobile();
  const { portSection, sectionChange } = usePort();

  const webdevData = WebDevData;
  const designData = DesignData;
  const transDelay = 200

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
    }, transDelay);
  }

  useEffect(() => {
    setPortFocus(-1);
  }, [portSection]);

  if (isMobile) {
    return (
      <div>
        <Skeleton page={"port"} />
        <div className={"port-container mobile"}>
          <div className={"section project-section " + (portSection == "webdev" ? "section-active " : "") + (displayChange ? "filter-trans" : "")}>
          { webdevData.projects.map((project) => 
                <Project key={project.id} id={project.id} img={project.img} imgCount={project.imgCount} title={project.title.toUpperCase()} type={project.type.toUpperCase()} link={project.link} 
                repo={project.repo}  date={project.date} desc={project.desc} onClick={focusProject} focus={portFocus} isMobile={isMobile} />
          )}
          </div>

          <div className={"section piece-section " + (portSection == "design" ? "section-active " : "") + (displayChange ? "filter-trans" : "")}>
          { designData.pieces.map((piece) => 
                <Piece key={piece.id} id={piece.id} src={"/design" + piece.id + ".jpg"} title={piece.title.toUpperCase()} type={piece.type} date={piece.date} 
                desc={piece.desc} isMobile={isMobile} />
          )}
          </div>
        </div>
    </div>
    )
  }
 
  return (
    <div>
    <Skeleton page={"port"} />
    <div className={"port-container " + (sectionChange ? "filter-trans " : "") + (isMobile ? "mobile" : "")}>
      <div className={"display project-display " + (portSection == "webdev" ? "display-active " : "") + (displayChange ? "filter-trans" : "")}>
        { webdevData.projects.flatMap(project =>
            Array(project.imgCount).fill(null).map((_, index) => (
              <ProjectDisplay key={project.title + (index+1)} src={"/" + project.img + (index+1) + ".jpg"} project={project.id} focus={portFocus}/>
            ))
        )}
      </div>
      <div className={"details project-details " + (portSection == "webdev" ? "details-active" : "")}>
        { webdevData.projects.map((project) =>
            <Project key={project.id} id={project.id} title={project.title.toUpperCase()} type={project.type.toUpperCase()} link={project.link} 
            repo={project.repo}  date={project.date} desc={project.desc} onClick={focusProject} focus={portFocus} />
          )}
      </div>
      <div className={"display piece-display " + (portSection == "design" ? "display-active " : "")}>
        { designData.pieces.map((piece) => 
            <Piece key={piece.id} id={piece.id} src={"/design" + piece.id + ".jpg"} title={piece.title} type={piece.type} date={piece.date} 
            desc={piece.desc} />
        )}
      </div>
    </div>
    </div>
  );
}
