'use client'
import React, { useRef, useEffect, useState } from "react";
import Skeleton from './components/skeleton';

export default function Landing() {
  const [isMobile, setMobile] = useState(true);
  return (
    <div>
    <Skeleton page={'landing'} isMobile={isMobile} updateIsMobile={setMobile} />
    <div className="text landing-text">
      Hi. I create that which embodies me.</div>
    </div>
  );
}
