import Link from "next/link";
import React from "react";
import { formatPieceType } from "../lib/piece-format";

function RichText({ text }) {
  if (!text) {
    return null;
  }

  const lines = text.split("<br />");

  return (
    <>
      {lines.map((line, index) => (
        <React.Fragment key={index}>
          {line}
          {index < lines.length - 1 && <br />}
        </React.Fragment>
      ))}
    </>
  );
}

function ExternalLink({ href, label }) {
  return (
    <a className="hyperlink" target="_blank" rel="noreferrer" href={href}>
      {label}
      <div className="hyperlink-arrow">&#8599;&#xFE0E;</div>
    </a>
  );
}

function getLinkLabel(type) {
  const types = Array.isArray(type) ? type : [type];

  if (types.includes("ux study")) {
    return "VIEW STUDY";
  }

  if (types.includes("web app") || types.includes("digital portfolio")) {
    return "VIEW LIVE";
  }

  return "VIEW PROJECT";
}

export default function PieceDetails({ piece, titleClassName = "piece-title", prevPiece, nextPiece }) {
  const hasLinks = piece.link || piece.repo;

  return (
    <div className="details details-active piece-details">
      <div className="piece-title">{piece.title}</div>
      <div className="expanded piece-expanded">
        <div className="piece-subtitle">
          <div className="piece-type">{formatPieceType(piece.type)}</div>
          <div className="piece-date">{piece.date}</div>
          {hasLinks ? (
            <>
              {piece.link ? (
                <ExternalLink href={piece.link} label={getLinkLabel(piece.type)} />
              ) : null}
              {piece.repo ? (
                <ExternalLink href={piece.repo} label="GITHUB REPO" />
              ) : null}
            </>
          ) : null}
        </div>

        <div className="piece-background">
          <RichText text={piece.background} />
        </div>

        <div className="piece-process">
          <div className="piece-header">Process</div>
          <RichText text={piece.process} />
        </div>

        <div className="piece-images piece-process-images">
          {piece.processImages.map((image, index) => (
            <img className="piece-image" key={index} src={image.src} alt={image.alt} />
          ))}
        </div>

        <div className="piece-result">
          <div className="piece-header">Result</div>
          <RichText text={piece.result} />
        </div>

        <div className="piece-images piece-result-images">
          {piece.resultImages.map((image, index) => (
            <img className="piece-image" key={index} src={image.src} alt={image.alt} />
          ))}
        </div>
      </div>
      {prevPiece && nextPiece ? (
        <nav className="piece-nav-links">
          <Link href={`/port/piece/${prevPiece.id}`} className="piece-nav-link piece-nav-link-prev">
            <span>(- PREV</span>
            <span className="piece-nav-link-title">{prevPiece.title}</span>
          </Link>
          <Link href={`/port/piece/${nextPiece.id}`} className="piece-nav-link piece-nav-link-next">
            <span className="piece-nav-link-next">NEXT -)</span>
            <span className="piece-nav-link-title">{nextPiece.title}</span>
          </Link>
        </nav>
      ) : null}
    </div>
  );
}
