'use client';

import { useEffect } from "react";
import PieceDetails from "../../../components/piece-details";
import { usePort } from "../../../contexts/port-context";
import "../../port.css";
import "./piece-detail.css";

export default function PieceDetailView({ piece, prevPiece, nextPiece }) {
  const { portSection, updatePortSection } = usePort();

  useEffect(() => {
    if (portSection !== piece.section) {
      updatePortSection(piece.section);
    }
  }, [piece.section, portSection, updatePortSection]);

  return (
    <div className="piece-page-container page-scroll">
      <PieceDetails
        piece={piece}
        prevPiece={prevPiece}
        nextPiece={nextPiece}
      />
    </div>
  );
}
