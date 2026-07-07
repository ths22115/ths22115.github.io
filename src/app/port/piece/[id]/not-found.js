import Link from "next/link";
import "./piece-detail.css";

export default function NotFound() {
  return (
    <div className="piece-page-container page-scroll">
      <Link href="/port" className="piece-nav-link">
        &larr; BACK TO WORK
      </Link>
      <div className="piece-page-title">Piece not found.</div>
    </div>
  );
}
