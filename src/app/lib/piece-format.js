export function formatPieceType(type) {
  if (Array.isArray(type)) {
    return type.join(" · ");
  }

  return type ?? "";
}
