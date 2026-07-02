"use client";

import { useStaticEffects } from "../contexts/static-effects-context";
import "./frame.css";

export default function Frame() {
  const { isStaticEnabled } = useStaticEffects();

  return (
    <div
      className={"frame" + (!isStaticEnabled ? " static-off" : "")}
      aria-hidden="true"
    />
  );
}
