'use client'
import React, { useRef, useEffect, useState } from "react";
import Skeleton from './components/skeleton';

export default function Landing() {
  const [isMobile, setMobile] = useState(false);
  return (
    <div>
      <Skeleton page={'landing'} isMobile={isMobile} updateIsMobile={setMobile} />
      <div className="text landing-text">
        { isMobile ? 
        "Software engineer and designer creating that which embodies the self." :
        "Creating that which embodies the self."
        }
      </div>
    </div>
  );
}
