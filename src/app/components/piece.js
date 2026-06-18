'use client';

import Link from "next/link";
import { formatPieceType } from "../lib/piece-format";

export default function Piece(props) {
  const pieceHref = `/port/piece/${props.id}`;

  if (props.isMobile) {
    return (
      <div>
        <Link href={pieceHref}>
          <img
            id={props.id}
            className="piece-img piece-gallery-img"
            src={props.src}
            alt={props.title}
          />
        </Link>
        <div className="piece-gallery-title">{props.title}</div>
        <div className="piece-gallery-type">{formatPieceType(props.type)}</div>
      </div>
    );
  }

  return (
    <Link href={pieceHref}>
      <img
        id={props.id}
        className="piece-img piece-gallery-img"
        src={props.src}
        alt={props.title}
      />
    </Link>
  );
}
