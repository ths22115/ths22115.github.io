'use client';

import Link from "next/link";
import PieceDetails from "./piece-details";

export default function Piece(props) {
  const pieceHref = `/port/piece/${props.id}`;
  const piece = {
    id: props.id,
    title: props.title,
    type: props.type,
  };

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
        <div className="piece-gallery-title">{piece.title}</div>
        <div className="piece-gallery-type">{piece.type}</div>
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
