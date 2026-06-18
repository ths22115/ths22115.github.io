import designData from "../data/port-design.json";

export function getAllPieces() {
  return designData.pieces;
}

export function getPieceById(id) {
  return designData.pieces.find((piece) => String(piece.id) === String(id));
}

export function getAdjacentPieces(id) {
  const pieces = getAllPieces();
  const index = pieces.findIndex((piece) => String(piece.id) === String(id));

  if (index === -1) {
    return { prevPiece: null, nextPiece: null };
  }

  const prevIndex = (index - 1 + pieces.length) % pieces.length;
  const nextIndex = (index + 1) % pieces.length;

  return {
    prevPiece: {id: pieces[prevIndex].id, title: pieces[prevIndex].title},
    nextPiece: {id: pieces[nextIndex].id, title: pieces[nextIndex].title},
  };
}
