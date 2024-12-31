'use client'
import React, { useRef, useEffect } from "react";
import "./page.css";
import Skeleton from '../components/skeleton';
import Job from '../components/job';

export default function About() {
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
        <Job company={'CAPITAL ONE'} title={'SOFTWARE ENGINEERING INTERN'}  start={"MAY 2024"} end={"AUG 2024"}/>
        <Job company={'CAPITAL ONE'} title={'SOFTWARE ENGINEERING INTERN'}  active={true}/>
        <Job company={'CAPITAL ONE'} title={'SOFTWARE ENGINEERING INTERN'}  active={true}/>
        <Job company={'CAPITAL ONE'} title={'SOFTWARE ENGINEERING INTERN'}  active={true}/>
        <Job company={'CAPITAL ONE'} title={'SOFTWARE ENGINEERING INTERN'}  active={false}/>
        <Job company={'CAPITAL ONE'} title={'SOFTWARE ENGINEERING INTERN'}  active={false}/>
        <Job company={'CAPITAL ONE'} title={'SOFTWARE ENGINEERING INTERN'}  active={false}/>
      </div>
    </div>
    </div>
  );
}
