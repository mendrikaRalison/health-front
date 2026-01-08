"use client";

import { useState } from "react";
import { Menu } from "lucide-react";

import { Sidebar } from "@/components/sidebar";
import { cn } from "@/lib/utils";

type AppShellProps = {
  children: React.ReactNode;
};

const STORAGE_KEY = "health-front.sidebar.collapsed";

export function AppShell({ children }: AppShellProps) {
  const [collapsed, setCollapsed] = useState(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      return raw === "1";
    } catch {
      return false;
    }
  });
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed((prev) => {
      const next = !prev;
      try {
        window.localStorage.setItem(STORAGE_KEY, next ? "1" : "0");
      } catch {
        // ignore
      }
      return next;
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Sidebar
        collapsed={collapsed}
        onToggleCollapsed={toggleCollapsed}
        mobileOpen={mobileOpen}
        onCloseMobile={() => setMobileOpen(false)}
      />

      <div
        className={cn(
          "flex min-h-screen flex-col transition-[padding-left] duration-300 ease-in-out",
          collapsed ? "md:pl-[72px]" : "md:pl-64"
        )}
      >
        <header className="sticky top-0 z-30 border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="flex h-14 items-center gap-2 px-4">
            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-accent hover:text-accent-foreground md:hidden"
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation"
            >
              <Menu className="h-5 w-5" />
            </button>

            <div className="min-w-0 flex-1">
              <div className="truncate text-sm font-medium">
                Medical Patient Tracking
              </div>
              <div className="truncate text-xs text-muted-foreground">
                Dashboard
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 p-4 md:p-6">{children}</main>
      </div>
    </div>
  );
}
