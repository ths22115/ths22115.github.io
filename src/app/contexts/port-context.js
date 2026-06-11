"use client";

import React, { createContext, useContext, useMemo, useState } from "react";

const PortContext = createContext(null);
const SECTION_CHANGE_DELAY = 200;

export function PortProvider({ children }) {
  const [portSection, setPortSection] = useState("webdev");
  const [sectionChange, setSectionChange] = useState(false);

  const value = useMemo(
    () => ({
      portSection,
      sectionChange,
      updatePortSection: (section) => {
        setSectionChange(true);
        setTimeout(() => {
          setPortSection(section);
          setSectionChange(false);
        }, SECTION_CHANGE_DELAY);
      },
    }),
    [portSection, sectionChange]
  );

  return (
    <PortContext.Provider value={value}>
      {children}
    </PortContext.Provider>
  );
}

export function usePort() {
  const context = useContext(PortContext);

  if (!context) {
    throw new Error("usePort must be used within PortProvider");
  }

  return context;
}
