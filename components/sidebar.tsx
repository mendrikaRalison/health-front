"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  Calendar,
  ChevronLeft,
  ChevronRight,
  CreditCard,
  LayoutDashboard,
  Users,
  X,
} from "lucide-react";

import { cn } from "@/lib/utils";

type SidebarProps = {
  collapsed: boolean;
  onToggleCollapsed: () => void;
  mobileOpen: boolean;
  onCloseMobile: () => void;
};

const navItems = [
  { label: "Patient", href: "/patient", Icon: Users },
  { label: "Agenda", href: "/agenda", Icon: Calendar },
  { label: "Statistics", href: "/statistics", Icon: BarChart3 },
  { label: "Billing", href: "/billing", Icon: CreditCard },
] as const;

export function Sidebar({
  collapsed,
  onToggleCollapsed,
  mobileOpen,
  onCloseMobile,
}: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/40 transition-opacity md:hidden",
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={onCloseMobile}
      />

      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex shrink-0 flex-col border-r border-sidebar-border bg-sidebar text-sidebar-foreground shadow-sm transition-[width,transform] duration-300 ease-in-out",
          collapsed ? "w-[72px]" : "w-64",
          mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        )}
        aria-label="Primary"
      >
        <div className="flex items-center gap-3 px-3 py-3">
          <Link
            href="/"
            className={cn(
              "flex items-center gap-3 rounded-md px-2 py-2 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
            )}
            onClick={onCloseMobile}
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sidebar-accent">
              <LayoutDashboard className="h-5 w-5" />
            </div>
            <div
              className={cn("min-w-0 flex-1", collapsed ? "hidden" : "block")}
            >
              <div className="truncate text-sm font-semibold">Health</div>
              <div className="truncate text-xs text-muted-foreground">
                Patient tracking
              </div>
            </div>
          </Link>

          <button
            type="button"
            className={cn(
              "ml-auto inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-sidebar-accent hover:text-sidebar-accent-foreground md:hidden"
            )}
            onClick={onCloseMobile}
            aria-label="Close sidebar"
          >
            <X className="h-5 w-5" />
          </button>

          <button
            type="button"
            className={cn(
              "ml-auto hidden h-9 w-9 items-center justify-center rounded-md hover:bg-sidebar-accent hover:text-sidebar-accent-foreground md:inline-flex"
            )}
            onClick={onToggleCollapsed}
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {collapsed ? (
              <ChevronRight className="h-5 w-5" />
            ) : (
              <ChevronLeft className="h-5 w-5" />
            )}
          </button>
        </div>

        <nav className="flex-1 px-2 py-2">
          <div className="space-y-1">
            {navItems.map(({ href, label, Icon }) => {
              const isActive =
                pathname === href || pathname?.startsWith(`${href}/`);

              return (
                <Link
                  key={href}
                  href={href}
                  onClick={onCloseMobile}
                  className={cn(
                    "group relative flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                    isActive &&
                      "bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary"
                  )}
                >
                  <Icon className="h-5 w-5 shrink-0" />
                  <span
                    className={cn("truncate", collapsed ? "hidden" : "block")}
                  >
                    {label}
                  </span>

                  {collapsed && (
                    <span
                      className={cn(
                        "pointer-events-none absolute left-full top-1/2 z-50 ml-2 -translate-y-1/2 whitespace-nowrap rounded-md border border-border bg-popover px-2 py-1 text-xs text-popover-foreground shadow-md",
                        "opacity-0 transition-opacity duration-150 group-hover:opacity-100",
                        "hidden md:block"
                      )}
                      role="tooltip"
                    >
                      {label}
                    </span>
                  )}
                </Link>
              );
            })}
          </div>
        </nav>

        <div className={cn("px-3 pb-4", collapsed ? "px-2" : "px-3")}>
          <div
            className={cn(
              "rounded-lg border border-sidebar-border bg-background/40 p-3",
              collapsed ? "hidden" : "block"
            )}
          >
            <div className="text-xs font-medium text-muted-foreground">Tip</div>
            <div className="mt-1 text-sm">Use the chevron to collapse.</div>
          </div>
        </div>
      </aside>
    </>
  );
}
