'use client';

import { useEffect } from "react";
import Skeleton from "../../../components/skeleton";
import PieceDetails from "../../../components/piece-details";
import { usePort } from "../../../contexts/port-context";
import "../../page.css";
import "./page.css";

export default function PiecePage({ piece, prevPiece, nextPiece }) {
  const { portSection, updatePortSection } = usePort();

  useEffect(() => {
    if (portSection !== "design") {
      updatePortSection("design");
    }
  }, [portSection, updatePortSection]);

  return (
    <div>
      <Skeleton page="port-details" />
      <div className="piece-page-container">
        <PieceDetails
          piece={piece}
          titleClassName="piece-page-title"
          prevPiece={prevPiece}
          nextPiece={nextPiece}
        />
      </div>
    </div>
  );
}
