import designData from "../data/port-design.json";
import webdevData from "../data/port-webdev.json";

const SECTIONS = {
  design: "design",
  webdev: "webdev",
};

function normalizeThumbnail(piece, section) {
  const raw =
    piece.thumbnail ??
    piece.resultImages?.[0] ??
    (section === SECTIONS.design ? `/design${piece.id}.jpg` : null);

  if (!raw) {
    return { src: null };
  }

  if (typeof raw === "string") {
    return { src: raw };
  }

  return {
    src: raw.src ?? null,
    poster: raw.poster,
  };
}

function withSection(pieces, section) {
  return pieces.map((piece) => ({
    ...piece,
    section,
    thumbnail: normalizeThumbnail(piece, section),
  }));
}

const allPieces = [
  ...withSection(webdevData, SECTIONS.webdev),
  ...withSection(designData.pieces, SECTIONS.design),
];

export function getPiecesBySection(section) {
  return allPieces.filter((piece) => piece.section === section);
}

export function getAllPieces() {
  return allPieces;
}

export function getPieceById(id) {
  return allPieces.find((piece) => String(piece.id) === String(id));
}

export function getAdjacentPieces(id) {
  const piece = getPieceById(id);

  if (!piece) {
    return { prevPiece: null, nextPiece: null };
  }

  const pieces = getPiecesBySection(piece.section);
  const index = pieces.findIndex((entry) => String(entry.id) === String(id));

  if (index === -1) {
    return { prevPiece: null, nextPiece: null };
  }

  const prevIndex = (index - 1 + pieces.length) % pieces.length;
  const nextIndex = (index + 1) % pieces.length;

  return {
    prevPiece: { id: pieces[prevIndex].id, title: pieces[prevIndex].title },
    nextPiece: { id: pieces[nextIndex].id, title: pieces[nextIndex].title },
  };
}
