'use client';

import Link from "next/link";
import "../exp/exp.css";
import { usePort } from "../contexts/port-context";

const BUFFER_COPY = {
  webdev: {
    lead: "Case studies in progress. Engineering and UI/UX write-ups are being updated.",
    otherSection: "design",
    otherLabel: "BROWSE GRAPHIC WORK",
  },
  design: {
    lead: "Building out graphic and print case studies.",
    otherSection: "webdev",
    otherLabel: "BROWSE UI/UX WORK",
  },
};

export default function PortSectionBuffer({ section, isMobile }) {
  const { updatePortSection } = usePort();
  const copy = BUFFER_COPY[section];

  return (
    <div className={"job job-visible job-buffer port-section-buffer" + (isMobile ? " mobile" : "")}>
      <div className="job-company">COMING SOON</div>
      <div className="job-desc job-desc-active">
        <div className="job-desc-block job-buffer-lead">{copy.lead}</div>
      </div>
      <div className="job-preview job-preview-active">
        <Link href="/exp" className="hyperlink job-buffer-sublink">
          <span className="job-title">VIEW CV</span>
          <div className="hyperlink-arrow">&#8599;&#xFE0E;</div>
        </Link>
        <a
          className="hyperlink job-buffer-sublink"
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
        >
          <span className="job-title">DOWNLOAD RÉSUMÉ</span>
          <div className="hyperlink-arrow">&#8599;&#xFE0E;</div>
        </a>
        <Link
          href="/port"
          className="hyperlink job-buffer-sublink"
          onClick={() => updatePortSection(copy.otherSection)}
        >
          <span className="job-title">{copy.otherLabel}</span>
          <div className="hyperlink-arrow">&#8599;&#xFE0E;</div>
        </Link>
        <Link href="/contact" className="hyperlink job-buffer-sublink">
          <span className="job-title">REACH OUT</span>
          <div className="hyperlink-arrow">&#8599;&#xFE0E;</div>
        </Link>
      </div>
    </div>
  );
}
