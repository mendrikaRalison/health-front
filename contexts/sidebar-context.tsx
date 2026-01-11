"use client";

import { createContext, useContext, useState, useEffect } from "react";

type SidebarContextType = {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
};

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

const STORAGE_KEY = "health-front.sidebar.collapsed";

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      setCollapsed(raw === "1");
    } catch {
      // ignore
    }
  }, []);

  const handleSetCollapsed = (newCollapsed: boolean) => {
    setCollapsed(newCollapsed);
    try {
      window.localStorage.setItem(STORAGE_KEY, newCollapsed ? "1" : "0");
    } catch {
      // ignore
    }
  };

  return (
    <SidebarContext.Provider
      value={{ collapsed, setCollapsed: handleSetCollapsed }}
    >
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  const context = useContext(SidebarContext);
  if (context === undefined) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
}
