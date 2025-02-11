'use client'
import React, { useRef, useEffect } from "react";
import Skeleton from './components/skeleton';

export default function Landing() {
  return (
    <div>
    <Skeleton page={'landing'} />
    <div className="text landing-text">
      Hi. I create that which embodies me.</div>
    </div>
  );
}
