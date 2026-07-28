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

function PieceThumb({ id, src, poster, title, glitchSrc, glitchDelay, isWip }) {
  const media = (
    <PieceMedia
      id={id}
      src={src}
      poster={poster}
      title={title}
    />
  );

  if (isWip) {
    return (
      <div className="piece-link piece-link--wip" aria-disabled="true">
        <span className="piece-glitch">
          {media}
        </span>
      </div>
    );
  }

  return (
    <Link href={`/port/piece/${id}`} className="piece-link">
      <span
        className="piece-glitch"
        style={{ "--piece-img": `url(${glitchSrc})`, "--glitch-delay": glitchDelay }}
      >
        {media}
      </span>
    </Link>
  );
}

export default function Piece(props) {
  const { isStaticEnabled } = useStaticEffects();
  const isWip = props.wip === true;
  const glitchSrc = props.poster || props.src;
  const glitchDelay = `${((Number(props.id) || 0) % 5) * 0.2}s`;
  const typeLabel = isWip ? "Coming Soon" : formatPieceType(props.type);

  if (props.isMobile) {
    return (
      <div className={isWip ? "piece-card piece-card--wip" : undefined}>
        {isWip ? (
          <>
            <div className="piece-link piece-link--wip" aria-disabled="true">
              <PieceMedia
                id={props.id}
                src={props.src}
                poster={props.poster}
                title={props.title}
              />
            </div>
            <div className="piece-gallery-title">{props.title}</div>
            <div className="piece-gallery-type">{typeLabel}</div>
          </>
        ) : (
          <Link href={`/port/piece/${props.id}`}>
            <PieceMedia
              id={props.id}
              src={props.src}
              poster={props.poster}
              title={props.title}
            />
            <div className="piece-gallery-title">{props.title}</div>
            <div className="piece-gallery-type">{typeLabel}</div>
          </Link>
        )}
      </div>
    );
  }

  return (
    <div
      className={
        "piece-card " +
        (isWip ? "piece-card--wip " : "") +
        (isStaticEnabled ? "piece-card--static" : "piece-card--bw")
      }
    >
      <PieceThumb
        id={props.id}
        src={props.src}
        poster={props.poster}
        title={props.title}
        glitchSrc={glitchSrc}
        glitchDelay={glitchDelay}
        isWip={isWip}
      />
    </div>
  );
}
