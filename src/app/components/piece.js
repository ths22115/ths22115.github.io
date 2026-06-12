'use client';

import Link from "next/link";
import PieceDetails from "./piece-details";

export default function Piece(props) {
  const pieceHref = `/port/piece/${props.id}`;
  const piece = {
    id: props.id,
    title: props.title,
    type: props.type,
    date: props.date,
    desc: props.desc,
  };

  if (props.isMobile) {
    return (
      <div>
        <Link href={pieceHref}>
          <img
            id={props.id}
            className="piece-img"
            src={props.src}
            alt={props.title}
          />
        </Link>
        <PieceDetails piece={piece} />
      </div>
    );
  }

  return (
    <Link href={pieceHref}>
      <img
        id={props.id}
        className="piece-img"
        src={props.src}
        alt={props.title}
      />
    </Link>
  );
}
