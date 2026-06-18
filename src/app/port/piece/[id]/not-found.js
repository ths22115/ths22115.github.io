import Link from "next/link";
import Skeleton from "../../../components/skeleton";
import "./page.css";

export default function NotFound() {
  return (
    <div>
      <Skeleton page="port" />
      <div className="piece-page-container">
        <Link href="/port" className="piece-nav-link">
          &larr; BACK TO WORK
        </Link>
        <div className="piece-page-title">Piece not found.</div>
      </div>
    </div>
  );
}
