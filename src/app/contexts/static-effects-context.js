"use client";

import React, { createContext, useContext, useMemo, useState } from "react";

const StaticEffectsContext = createContext(null);

export function StaticEffectsProvider({ children }) {
  const [isStaticEnabled, setIsStaticEnabled] = useState(true);

  const value = useMemo(
    () => ({
      isStaticEnabled,
      setIsStaticEnabled,
      toggleStaticEffects: () => setIsStaticEnabled((prev) => !prev),
    }),
    [isStaticEnabled]
  );

  return (
    <StaticEffectsContext.Provider value={value}>
      {children}
    </StaticEffectsContext.Provider>
  );
}

export function useStaticEffects() {
  const context = useContext(StaticEffectsContext);

  if (!context) {
    throw new Error("useStaticEffects must be used within StaticEffectsProvider");
  }

  return context;
}
