'use client'
import React, { useRef, useEffect, useState } from "react";
import "./page.css";
import Skeleton from '../components/skeleton';
import Job from '../components/job';

export default function Experience() {
  const [jobFocus, setJobFocus] = useState(-1);
  const [jobFilter, setJobFilter] = useState("all");
  const [filterChange, setfilterChange] = useState(false);

  function focusJob(e) {
    // if(e.target.className)
    var jobElem = e.target
    console.log(jobElem)
    console.log(jobElem.parentElement)
    while(jobElem.className.split(" ")[0] !== "job") {
      jobElem = jobElem.parentElement
    }
    setJobFocus(jobFocus == jobElem.id ? -1 : jobElem.id)
    // console.log(jobElem.props) 
    // setJobFocus(jobElem.)
    // console.log(e.target.className)
    // setJobFocus(true);
    // setFocus(true);
  }

  function updateJobFilter(e) {
    // console.log(e.target) 
    setfilterChange(true)
    setTimeout(function() { 
      setJobFilter(e.target.id.split("-")[1])
      setfilterChange(false)
    }, 200);
    
  }

  return (
    <div>
    <Skeleton page={'exp'} expFocus={jobFocus} expFilter={jobFilter} updateExpFilter={updateJobFilter} />
    <div className="resume">
    {/* <div className="filter-key">
        {/* <div className="exp-filter">
          <ul className="exp-list exp-filter-list">
            <li className="exp-filter-item exp-filter-active">SWE</li>
            <li className="exp-filter-item exp-filter-active">DESIGN</li>
          </ul>
        </div>
        <div className="exp-key">
          <ul className="exp-key-list exp-key-list">
              <li className="exp-key-item exp-key-current">CURRENT</li>
              <li className="exp-key-item exp-key-past">PAST</li>
          </ul>
        </div>
    </div> */}

      <div className={"job-list " + (filterChange ? "filter-trans" : "")}>
        <Job id={0} onClick={focusJob} focus={jobFocus} filter={jobFilter} type={"swe"} company={'CAPITAL ONE'} title={'SOFTWARE ENGINEERING INTERN'}  start={"MAY 2024"} end={"AUG 2024"}/>
        <Job id={1} onClick={focusJob} focus={jobFocus} filter={jobFilter} type={"swe"} company={'RENSSELAER UNION'} title={'SYSTEM ADMINISTRATOR'} start={"OCT 2023"} end={"CURRENT"}/>
        <Job id={2} onClick={focusJob} focus={jobFocus} filter={jobFilter} type={"all"} company={'SAMOTH'} title={'FOUNDER, EXECUTIVE DIRECTOR'} start={"AUG 2023"} end={"CURRENT"}/>
        <Job id={3} onClick={focusJob} focus={jobFocus} filter={jobFilter} type={"design"} company={'RPI BSA FASHION'} title={'GRAPHIC DESIGNER'} start={"OCT 2024"} end={"CURRENT"}/>
      </div>
    </div>
    </div>
  );
}
