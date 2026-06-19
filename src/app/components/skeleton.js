'use client'
import React from "react";
import "./skeleton.css";
import Navbar from "./navbar";
import { useStaticEffects } from "../contexts/static-effects-context";
import { useMobile } from "../contexts/mobile-context";

export default function Skeleton(props) {
	const { isStaticEnabled } = useStaticEffects();
  const { isMobile } = useMobile();
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

			<Navbar page={props.page} />
			{ !isMobile ? (
			<div className={"footer" + (props.page == "port" ? " footer-port" : "")}>&copy; Miles Mckinley Thomas. All rights reserved.</div>
			) : ""}
		</div>
	);
}
