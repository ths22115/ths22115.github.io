'use client'
import React, { useMemo } from "react";
import { usePathname } from "next/navigation";
import "./skeleton.css";
import Navbar from "./navbar";
import { useStaticEffects } from "../contexts/static-effects-context";
import { useMobile } from "../contexts/mobile-context";
import { getPageFromPathname } from "../lib/get-page-from-pathname";

export default function Skeleton({ children }) {
	const { isStaticEnabled } = useStaticEffects();
  const { isMobile } = useMobile();
  const pathname = usePathname();
  const page = useMemo(() => getPageFromPathname(pathname), [pathname]);
  const showMobileStaticEffects = isMobile && isStaticEnabled;

	return (
		<div className={"skeleton" + (isMobile ? " mobile nonlanding" : "") }>
      
			{ isStaticEnabled ? (
			<div className={"noise-wrapper"}></div>
			) : "" }

			{ showMobileStaticEffects ? (
			<div className={"scanlines"}></div>
			) : "" }
      {showMobileStaticEffects && (
        <div className="noise-layers">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={`noise-${index}`} className={"noise"}></div>
          ))}
        </div>
      )}

			<Navbar page={page} />
			<main className="skeleton-content">{children}</main>
			{ !isMobile ? (
			<div className={"footer" + (page == "port" ? " footer-port" : "")}>&copy; Miles Mckinley Thomas. All rights reserved.</div>
			) : ""}
		</div>
	);
}
