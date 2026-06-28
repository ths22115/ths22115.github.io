'use client';

import Link from "next/link";
import { formatPieceType } from "../lib/piece-format";
import { useStaticEffects } from "../contexts/static-effects-context";

export default function Piece(props) {
  const pieceHref = `/port/piece/${props.id}`;
  const { isStaticEnabled } = useStaticEffects();

  if (props.isMobile) {
    return (
      <Link href={pieceHref}>
          <img
            id={props.id}
            className="piece-img piece-gallery-img"
            src={props.src}
            alt={props.title}
          />
        <div className="piece-gallery-title">{props.title}</div>
        <div className="piece-gallery-type">{formatPieceType(props.type)}</div>
      </Link>
    );
  }

  const glitchDelay = `${((Number(props.id) || 0) % 5) * 0.2}s`;

  return (
    <div className={"piece-card " + (isStaticEnabled ? "piece-card--static" : "piece-card--bw")}>
      <Link href={pieceHref} className="piece-link">
        <span
          className="piece-glitch"
          style={{ "--piece-img": `url(${props.src})`, "--glitch-delay": glitchDelay }}
        >
          <img
            id={props.id}
            className="piece-img piece-gallery-img"
            src={props.src}
            alt={props.title}
          />
        </span>
      </Link>
    </div>
  );
}
