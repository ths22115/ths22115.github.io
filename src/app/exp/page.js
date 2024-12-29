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
    <Job company={'CAPITAL ONE'} title={'SOFTWARE ENGINEERING INTERN'}  active={true}/>
    <Job company={'CAPITAL ONE'} title={'SOFTWARE ENGINEERING INTERN'}  active={true}/>
    <Job company={'CAPITAL ONE'} title={'SOFTWARE ENGINEERING INTERN'}  active={true}/>
    <Job company={'CAPITAL ONE'} title={'SOFTWARE ENGINEERING INTERN'}  active={true}/>
    <Job company={'CAPITAL ONE'} title={'SOFTWARE ENGINEERING INTERN'}  active={false}/>
    <Job company={'CAPITAL ONE'} title={'SOFTWARE ENGINEERING INTERN'}  active={false}/>
    <Job company={'CAPITAL ONE'} title={'SOFTWARE ENGINEERING INTERN'}  active={false}/>
    </div>
    </div>
  );
}
