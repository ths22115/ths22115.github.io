'use client'
import React, { useRef, useEffect } from "react";
import Skeleton from './components/skeleton';

export default function Landing() {
  return (
    <div>
    <Skeleton page={'landing'} />
    <div className="landing-text">Hi. I create that of which emobides me.</div>
    </div>
  );
}
