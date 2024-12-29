'use client'
import React, { useRef, useEffect } from "react";
import "./page.css";
import Skeleton from '../components/skeleton';

export default function About() {
  return (
    <div>
    <Skeleton page={'contact'} />
    <div className="lol" style={{position: 'absolute', top: 50+'%', left: 50+'%', fontSize: 1+'rem'}}>LOL</div>
    </div>
  );
}
