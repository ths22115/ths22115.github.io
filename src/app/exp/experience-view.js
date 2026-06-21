'use client'
import React, { useState } from "react";
import "./exp.css";
import Job from '../components/job';
import ExpData from '../data/exp.json'
import { useMobile } from "../contexts/mobile-context";
import { useExp } from "../contexts/exp-context";

export default function ExperienceView() {
  const [jobFocus, setJobFocus] = useState(-1);
  const { isMobile } = useMobile();
  const { jobFilter, filterChange } = useExp();
  
  const data = ExpData;

  function focusJob(e) {
    var jobElem = e.target
    while(jobElem.className.split(" ")[0] !== "job") {
      jobElem = jobElem.parentElement
    }
    setJobFocus(jobFocus == jobElem.id ? -1 : jobElem.id)
  }

  return (
    <div className={"resume " + (isMobile ? "mobile" : "")}>
      <div className={"job-list" + (filterChange ? " filter-trans " : "") + (isMobile ? " mobile" : "")}>
        { data.jobs.map((job) =>
          <Job key={job.id} id={job.id} type={job.type} company={job.company.toUpperCase()} title={job.title.toUpperCase()}  start={job.start} end={job.end} 
          desc={job.desc} onClick={focusJob} focus={jobFocus} filter={jobFilter} isMobile={isMobile} />)
        }
      </div>
    </div>
  );
}
