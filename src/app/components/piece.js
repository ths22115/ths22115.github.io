'use client';

import Link from "next/link";
import { formatPieceType } from "../lib/piece-format";
import { isVideoMedia } from "../lib/piece-media";
import { useStaticEffects } from "../contexts/static-effects-context";

function PieceMedia({ id, src, poster, title }) {
  if (isVideoMedia({ src })) {
    return (
      <video
        id={id}
        className="piece-img piece-gallery-img"
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={title}
      />
    );
  }

  return (
    <img
      id={id}
      className="piece-img piece-gallery-img"
      src={src}
      alt={title}
    />
  );
}

export default function Piece(props) {
  const pieceHref = `/port/piece/${props.id}`;
  const { isStaticEnabled } = useStaticEffects();
  const glitchSrc = props.poster || props.src;

  if (props.isMobile) {
    return (
      <Link href={pieceHref}>
        <PieceMedia
          id={props.id}
          src={props.src}
          poster={props.poster}
          title={props.title}
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
          style={{ "--piece-img": `url(${glitchSrc})`, "--glitch-delay": glitchDelay }}
        >
          <PieceMedia
            id={props.id}
            src={props.src}
            poster={props.poster}
            title={props.title}
          />
        </span>
      </Link>
    </div>
  );
}
