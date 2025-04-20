'use client'
import React, { useEffect, useState } from "react";
import "./page.css";
import Skeleton from '../components/skeleton';
import Job from '../components/job';
import ExpData from '../data/exp.json'
// import getData from '@/lib/getdata'
// import { usePathname } from 'next/navigation'

export default function Experience() {
  const [jobFocus, setJobFocus] = useState(-1);
  const [jobFilter, setJobFilter] = useState("all");
  const [filterChange, setfilterChange] = useState(false);
  const [isMobile, setMobile] = useState(false);
  
  const data = ExpData;
  console.log(data)

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
      <Skeleton page={'exp'} expFocus={jobFocus} expFilter={jobFilter} updateExpFilter={updateJobFilter} isMobile={isMobile} updateIsMobile={setMobile} />
      <div className={"resume " + (isMobile ? "mobile" : "")}>
        { isMobile ? (
        <ul className="job-filter">
          <li id={"exp-all"} className={"tab exp-tab " + (jobFilter == "all" ? "tab-active" : "")} onClick={updateJobFilter}>( ALL )</li>
          <li id={"exp-swe"} className={"tab exp-tab " + (jobFilter == "swe" ? "tab-active" : "")} onClick={updateJobFilter}>( SWE )</li> 
          <li id={"exp-design"} className={"tab exp-tab " + (jobFilter == "design" ? "tab-active" : "")} onClick={updateJobFilter}>( DESIGN )</li>
        </ul>
        ) : "" }
        <div className={"job-list" + (filterChange ? " filter-trans " : "") + (isMobile ? " mobile" : "")}>
          { data.jobs.map((job) =>
            <Job key={job.id} id={job.id} type={job.type} company={job.company.toUpperCase()} title={job.title.toUpperCase()}  start={job.start} end={job.end} 
            desc={job.desc} onClick={focusJob} focus={jobFocus} filter={jobFilter} isMobile={isMobile} />)
          }
        </div>
      </div>
    </div>
  );
}
