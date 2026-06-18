import { notFound } from "next/navigation";
import { getAllPieces, getPieceById, getAdjacentPieces } from "../../../lib/pieces";
import PiecePage from "./piece-page";

// export function generateStaticParams() {
//   return getAllPieces().map((piece) => ({
//     id: String(piece.id),
//   }));
// }

export async function generateMetadata({ params }) {
  const { id } = await params;
  const piece = getPieceById(id);

  if (!piece) {
    return {};
  }

  return {
    title: `${piece.title.toUpperCase()} ) MIUS THOMAS`,
  };
}

export default async function Page({ params }) {
  const { id } = await params;
  const piece = getPieceById(id);

  if (!piece) {
    notFound();
  }

  const { prevPiece, nextPiece } = getAdjacentPieces(id);

  return <PiecePage piece={piece} prevPiece={prevPiece} nextPiece={nextPiece} />;
}
