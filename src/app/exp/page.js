'use client'
import React, { useRef, useEffect, useState } from "react";
import "./page.css";
import Skeleton from '../components/skeleton';
import Job from '../components/job';

export default function Experience() {
  const [jobFocus, setJobFocus] = useState(-1);

  function focusJob(e) {
    // if(e.target.className)
    var jobElem = e.target
    console.log(jobElem)
    console.log(jobElem.parentElement)
    while(jobElem.className !== "job") {
      jobElem = jobElem.parentElement
    }
    setJobFocus(jobElem.id)
    console.log(jobElem.props) 
    // setJobFocus(jobElem.)
    // console.log(e.target.className)
    // setJobFocus(true);
    // setFocus(true);
  }

  return (
    <div>
    <Skeleton page={'exp'} />
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

      <div className="job-list">
        <Job id={0} onClick={focusJob} focus={jobFocus} company={'CAPITAL ONE'} title={'SOFTWARE ENGINEERING INTERN'}  start={"MAY 2024"} end={"AUG 2024"}/>
        <Job id={1} onClick={focusJob} focus={jobFocus} company={'CAPITAL ONE'} title={'SOFTWARE ENGINEERING INTERN'}  active={true}/>
        <Job id={2} onClick={focusJob} focus={jobFocus} company={'CAPITAL ONE'} title={'SOFTWARE ENGINEERING INTERN'}  active={true}/>
        <Job id={3} onClick={focusJob} focus={jobFocus} company={'CAPITAL ONE'} title={'SOFTWARE ENGINEERING INTERN'}  active={true}/>
        <Job id={4} onClick={focusJob} focus={jobFocus} company={'CAPITAL ONE'} title={'SOFTWARE ENGINEERING INTERN'}  active={false}/>
        <Job id={5} onClick={focusJob} focus={jobFocus} company={'CAPITAL ONE'} title={'SOFTWARE ENGINEERING INTERN'}  active={false}/>
        <Job id={6} onClick={focusJob} focus={jobFocus} company={'CAPITAL ONE'} title={'SOFTWARE ENGINEERING INTERN'}  active={false}/>
      </div>
    </div>
    </div>
  );
}
