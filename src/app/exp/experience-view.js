'use client'
import React, { useState } from "react";
import Link from "next/link";
import "./exp.css";
import Job from '../components/job';
import ExpData from '../data/exp.json'
import { useMobile } from "../contexts/mobile-context";
import { useExp } from "../contexts/exp-context";
import { usePort } from "../contexts/port-context";

export default function ExperienceView() {
  const [jobFocus, setJobFocus] = useState(-1);
  const { isMobile } = useMobile();
  const { jobFilter, filterChange } = useExp();
  const { updatePortSection } = usePort();

  const data = ExpData;
  const hasDesignJobs = data.jobs.some((job) => job.type === "design");
  const showDesignBuffer = jobFilter === "design" && !hasDesignJobs;

  function focusJob(e) {
    var jobElem = e.target
    while(jobElem.className.split(" ")[0] !== "job") {
      jobElem = jobElem.parentElement
    }
    setJobFocus(jobFocus == jobElem.id ? -1 : jobElem.id)
  }

  return (
    <div className={"page-scroll exp-container"}>
      <a
        className="hyperlink exp-resume-link"
        href="/resume.pdf"
        target="_blank"
        rel="noreferrer"
      >
        <span className="job-title">DOWNLOAD RÉSUMÉ</span>
        <div className="hyperlink-arrow">&#8599;&#xFE0E;</div>
      </a>
      <div className={"job-list " + (isMobile ? "mobile " : "") + (filterChange ? "filter-trans " : "")}>
        {showDesignBuffer && (
          <div className={"job job-visible job-buffer" + (isMobile ? " mobile" : "")}>
            <div className="job-company">COMING SOON</div>
            <div className="job-desc job-desc-active">
              <div className="job-desc-block job-buffer-lead">
                Building toward full-time design roles.
              </div>
            </div>
            <div className="job-preview job-preview-active">
              <Link
                href="/port"
                className="hyperlink job-buffer-sublink"
                onClick={() => updatePortSection("design")}
              >
                <span className="job-title">BROWSE DESIGN WORK</span>
                <div className="hyperlink-arrow">&#8599;&#xFE0E;</div>
              </Link>
              <Link href="/contact" className="hyperlink job-buffer-sublink">
                <span className="job-title">REACH OUT</span>
                <div className="hyperlink-arrow">&#8599;&#xFE0E;</div>
              </Link>
            </div>
          </div>
        )}
        {data.jobs.map((job) =>
          <Job key={job.id} id={job.id} type={job.type} company={job.company.toUpperCase()} title={job.title.toUpperCase()}  start={job.start} end={job.end}
          desc={job.desc} onClick={focusJob} focus={jobFocus} filter={jobFilter} isMobile={isMobile} />)
        }
      </div>
    </div>
  );
}
