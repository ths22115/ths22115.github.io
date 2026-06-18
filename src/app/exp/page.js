'use client'
import React, { useState } from "react";
import "./exp.css";
import Skeleton from '../components/skeleton';
import Job from '../components/job';
import ExpData from '../data/exp.json'
import { useMobile } from "../contexts/mobile-context";
import { useExp } from "../contexts/exp-context";
// import getData from '@/lib/getdata'
// import { usePathname } from 'next/navigation'

export default function Experience() {
  const [jobFocus, setJobFocus] = useState(-1);
  const { isMobile } = useMobile();
  const { jobFilter, filterChange } = useExp();
  
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

  return (
    <div>
      <Skeleton page={'exp'} />
      <div className={"resume " + (isMobile ? "mobile" : "")}>
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
