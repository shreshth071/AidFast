"use client";

import React, { createContext, useState, useContext, useCallback } from "react";
import { useRouter } from "next/navigation";

const LoadingContext = createContext(undefined);

export function LoadingProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const startLoading = useCallback((path) => {
    setLoading(true);
    setTimeout(() => {
      router.push(path);
      setTimeout(() => setLoading(false), 300);
    }, 500);
  }, [router]);

  return (
    <LoadingContext.Provider value={{ loading, startLoading }}>
      {children}
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
}