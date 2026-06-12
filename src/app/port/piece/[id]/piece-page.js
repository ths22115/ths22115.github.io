'use client';

import { useEffect } from "react";
import Link from "next/link";
import Skeleton from "../../../components/skeleton";
import PieceDetails from "../../../components/piece-details";
import { usePort } from "../../../contexts/port-context";
import "../../page.css";
import "./page.css";

export default function PiecePage({ piece }) {
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
        <Link href="/port" className="piece-back-link">
          &larr; BACK TO WORK
        </Link>
        <PieceDetails piece={piece} titleClassName="piece-page-title" />
      </div>
    </div>
  );
}
