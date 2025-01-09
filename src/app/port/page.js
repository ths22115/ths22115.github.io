'use client'
import React, { useRef, useEffect, useState } from "react";
import "./page.css";
import Skeleton from '../components/skeleton';
import Project from '../components/project';
import ProjectDisplay from '../components/project-display';
import Piece from '../components/piece';

export default function Portfolio() {
  const [portFocus, setPortFocus] = useState(-1);
  const [portSection, setPortSection] = useState("webdev");
  const [sectionChange, setSectionChange] = useState(false);
  const [displayChange, setDisplayChange] = useState(false);
  const [detailsChange, setDetailsChange] = useState(false);

  const [pieceTitle, setPieceTitle] = useState("");
  const [pieceType, setPieceType] = useState("");
  const [pieceDate, setPieceDate] = useState("");
  const [pieceDesc, setPieceDesc] = useState("");

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

  function focusPiece(pieceProps) {
    // console.log(piece)
    console.log(pieceProps)
    // while(projectElem.className.split(" ")[0] !== "project") {
    //   projectElem = projectElem.parentElement
    // }

    setDetailsChange(true)
    setTimeout(function() { 
      if (portFocus == pieceProps.id) {
        setPortFocus(-1)
        setPieceTitle("")
        setPieceType("")
        setPieceDate("")
        setPieceDesc("")
      } else {
        // setPortFocus(pieceProps.id)
        // setPieceTitle(pieceProps.title)
        // setPieceType(pieceProps.type)
        // setPieceDate(pieceProps.date)
        // setPieceDesc(pieceProps.desc)
        setPortFocus(pieceProps.id)
        setPieceTitle("SAMOTH")
        setPieceType("COURSEWORK")
        setPieceDate("MAY 2029")
        setPieceDesc("Designed, developed, and deployed a fully documented AWS Lambda API to deliver cloud maturity metrics for jsdkn skndkand nasd n knsdn jkndnsndand nasn sk dn ksd  d dkshdhad khdhsdhd sa dhad hd hdashouau sd shdasd")
      }
      setDetailsChange(false)
    }, 200);
  }

  function updatePortSection(e) {
    // console.log(e.target) 
    setSectionChange(true)
    setTimeout(function() { 
      setPortSection(e.target.id.split("-")[1])
      setPortFocus(-1)
      setPieceTitle("")
      setPieceType("")
      setPieceDate("")
      setPieceDesc("")
      setSectionChange(false)
    }, 200);
  }
 
  return (
    <div>
    <Skeleton page={"port"} portFocus={portFocus} portSection={portSection} updatePortSection={updatePortSection}/>
    <div className={"port-container " + (sectionChange ? "filter-trans" : "")}>
      <div className={"display project-display " + (portSection == "webdev" ? "display-active " : "") + (displayChange ? "filter-trans" : "")}>
        <ProjectDisplay src={"samothSite1.jpg"} project={0} focus={portFocus}/>
        <ProjectDisplay src={"samothSite1.jpg"} project={0} focus={portFocus}/>
        <ProjectDisplay src={"samothSite1.jpg"} project={0} focus={portFocus}/>
        <ProjectDisplay src={"samothSite2.jpg"} project={1} focus={portFocus}/>
        <ProjectDisplay src={"samothSite2.jpg"} project={1} focus={portFocus}/>
        <ProjectDisplay src={"samothSite2.jpg"} project={1} focus={portFocus}/>
        <ProjectDisplay src={"samothSite3.jpg"} project={2} focus={portFocus}/>
        <ProjectDisplay src={"samothSite3.jpg"} project={2} focus={portFocus}/>
        <ProjectDisplay src={"samothSite3.jpg"} project={2} focus={portFocus}/>
      </div>
      <div className={"details project-details " + (portSection == "webdev" ? "details-active" : "")}>
        <Project id={0} onClick={focusProject} focus={portFocus}/>
        <Project id={1} onClick={focusProject} focus={portFocus}/>
        <Project id={2} onClick={focusProject} focus={portFocus}/>
      </div>
      <div className={"display piece-display " + (portSection == "design" ? "display-active " : "")}>
        <Piece id={0} src={"samothSite1.jpg"} onClick={focusPiece} focus={portFocus}/>
        <Piece id={1} src={"samothSite2.jpg"} onClick={focusPiece} focus={portFocus}/>
        <Piece id={2} src={"samothSite3.jpg"} onClick={focusPiece} focus={portFocus}/>
      </div>
      <div className={"details piece-details " + (portSection == "design" ? "details-active " : "") + (detailsChange ? "filter-trans" : "")}>
        <div className="piece-title">{pieceTitle}</div>
        <div className={"expanded piece-expanded"}>
            <div className="piece-subtitle">
                <div className="piece-type">{pieceType}</div>
                <div className="piece-date">{pieceDate}</div>
            </div>
            <div className="piece-desc">{pieceDesc}</div>
        </div>
      </div>
    </div>
    </div>
  );
}
