'use client'
import "./port.css";
import Piece from '../components/piece';
import { getPiecesBySection } from '../lib/pieces';
import { useMobile } from "../contexts/mobile-context";
import { usePort } from "../contexts/port-context";

export default function PortfolioView() {
  const { isMobile } = useMobile();
  const { portSection, sectionChange } = usePort();
  const webdevPieces = getPiecesBySection("webdev");
  const designPieces = getPiecesBySection("design");

  if (isMobile) {
    return (
      <div className={"port-container mobile"}>
        <div className={"section piece-section " + (portSection == "webdev" ? "section-active page-scroll " : "")}>
          {webdevPieces.map((piece) => (
            <Piece
              key={piece.id}
              id={piece.id}
              src={piece.thumbnail}
              title={piece.title}
              type={piece.type}
              isMobile={isMobile}
            />
          ))}
        </div>

        <div className={"section piece-section " + (portSection == "design" ? "section-active page-scroll " : "")}>
          {designPieces.map((piece) => (
            <Piece
              key={piece.id}
              id={piece.id}
              src={piece.thumbnail}
              title={piece.title}
              type={piece.type}
              isMobile={isMobile}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={"port-container " + (sectionChange ? "filter-trans " : "")}>
      <div className={"display piece-display " + (portSection == "webdev" ? "display-active " : "")}>
        {webdevPieces.map((piece) => (
          <Piece
            key={piece.id}
            id={piece.id}
            src={piece.thumbnail}
            title={piece.title}
            type={piece.type}
          />
        ))}
      </div>
      <div className={"display piece-display " + (portSection == "design" ? "display-active " : "")}>
        {designPieces.map((piece) => (
          <Piece
            key={piece.id}
            id={piece.id}
            src={piece.thumbnail}
            title={piece.title}
            type={piece.type}
          />
        ))}
      </div>
    </div>
  );
}
