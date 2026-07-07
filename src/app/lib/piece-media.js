import { motion } from "framer-motion";

const VIDEO_EXTENSION = /\.(mp4|webm|mov)(\?.*)?$/i;

export function isVideoMedia(item) {
  if (item.type === "video") {
    return true;
  }

  if (item.type === "image") {
    return false;
  }

  return VIDEO_EXTENSION.test(item.src);
}

export function PieceMedia({ item, className, fallbackAlt }) {
  if (isVideoMedia(item)) {
    return (
      <video
        className={className}
        src={item.src}
        poster={item.poster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={item.alt || fallbackAlt}
      />
    );
  }

  return (
    <img
      className={className}
      src={item.src}
      alt={item.alt || fallbackAlt}
    />
  );
}

export function AnimatedPieceMedia({ item, fallbackAlt, motionProps }) {
  if (isVideoMedia(item)) {
    return (
      <motion.video
        className="piece-stage-img"
        src={item.src}
        poster={item.poster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={item.alt || fallbackAlt}
        {...motionProps}
      />
    );
  }

  return (
    <motion.img
      className="piece-stage-img"
      src={item.src}
      alt={item.alt || fallbackAlt}
      {...motionProps}
    />
  );
}
