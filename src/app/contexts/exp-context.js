"use client";

import React, { createContext, useContext, useMemo, useState } from "react";

const ExpContext = createContext(null);
const FILTER_CHANGE_DELAY = 200;

export function ExpProvider({ children }) {
  const [jobFilter, setJobFilter] = useState("all");
  const [filterChange, setFilterChange] = useState(false);

  const value = useMemo(
    () => ({
      jobFilter,
      filterChange,
      updateJobFilter: (filter) => {
        setFilterChange(true);
        setTimeout(() => {
          setJobFilter(filter == jobFilter ? "all" : filter);
          setFilterChange(false);
        }, FILTER_CHANGE_DELAY);
      },
      resetJobFilter: () => {
        if (jobFilter === "all") return;
        setFilterChange(true);
        setTimeout(() => {
          setJobFilter("all");
          setFilterChange(false);
        }, FILTER_CHANGE_DELAY);
      },
    }),
    [jobFilter, filterChange]
  );

  return (
    <ExpContext.Provider value={value}>
      {children}
    </ExpContext.Provider>
  );
}

export function useExp() {
  const context = useContext(ExpContext);

  if (!context) {
    throw new Error("useExp must be used within ExpProvider");
  }

  return context;
}
