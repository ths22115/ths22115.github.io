import designData from "../data/port-design.json";

export function getAllPieces() {
  return designData.pieces;
}

export function getPieceById(id) {
  return designData.pieces.find((piece) => String(piece.id) === String(id));
}
