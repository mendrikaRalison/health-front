"use client";

import Link from "next/link";
import { usePathname, useParams } from "next/navigation";
import {
  User,
  FileText,
  History,
  Calendar,
  Pill,
  FolderOpen,
  CreditCard,
  StickyNote,
  Activity,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { useSidebar } from "@/contexts/sidebar-context";

type PatientSidebarProps = {
  className?: string;
};

const patientNavItems = [
  {
    label: "Overview",
    href: "/patient-details/overview",
    Icon: Activity,
    description: "Patient summary and vital stats",
  },
  {
    label: "Personal Information",
    href: "/patient-details/personal",
    Icon: User,
    description: "Contact details and demographics",
  },
  {
    label: "Medical History",
    href: "/patient-details/history",
    Icon: History,
    description: "Past diagnoses and treatments",
  },
  {
    label: "Appointments",
    href: "/patient-details/appointments",
    Icon: Calendar,
    description: "Scheduled visits and consultations",
  },
  {
    label: "Prescriptions",
    href: "/patient-details/prescriptions",
    Icon: Pill,
    description: "Current and past medications",
  },
  {
    label: "Documents",
    href: "/patient-details/documents",
    Icon: FolderOpen,
    description: "Lab results and medical files",
  },
  {
    label: "Billing",
    href: "/patient-details/billing",
    Icon: CreditCard,
    description: "Invoices and payment history",
  },
  {
    label: "Notes",
    href: "/patient-details/notes",
    Icon: StickyNote,
    description: "Clinical notes and observations",
  },
] as const;

export function PatientSidebar({ className }: PatientSidebarProps) {
  const pathname = usePathname();
  const params = useParams();
  const patientId = params?.id as string;
  const { collapsed } = useSidebar();

  if (!patientId) {
    return null;
  }

  return (
    <aside
      className={cn(
        "fixed top-14 bottom-0 z-20 w-60 border-r border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
        "hidden md:flex md:flex-col",
        "shadow-sm transition-[left] duration-300 ease-in-out",
        collapsed ? "left-[72px]" : "left-64",
        className
      )}
      aria-label="Patient navigation"
    >
      {/* Patient Header */}
      <div className="border-b border-border bg-muted/30 px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
            <User className="h-4 w-4 text-primary" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="truncate text-sm font-medium">
              Patient #{patientId}
            </div>
            <div className="truncate text-xs text-muted-foreground">
              Patient Details
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 overflow-y-auto px-2 py-3">
        <div className="space-y-1">
          {patientNavItems.map(({ href, label, Icon, description }) => {
            const fullHref = `/patient/${patientId}${href}`;
            const isActive = pathname === fullHref;

            return (
              <Link
                key={href}
                href={fullHref}
                className={cn(
                  "group flex items-start gap-3 rounded-lg px-3 py-2.5 text-sm transition-all duration-200",
                  "hover:bg-accent/50 hover:text-accent-foreground",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                  isActive && [
                    "bg-primary/10 text-primary border-l-2 border-primary",
                    "hover:bg-primary/15",
                  ]
                )}
              >
                <Icon
                  className={cn(
                    "h-4 w-4 shrink-0 mt-0.5 transition-colors",
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground group-hover:text-foreground"
                  )}
                />
                <div className="min-w-0 flex-1">
                  <div
                    className={cn(
                      "font-medium leading-none",
                      isActive ? "text-primary" : "text-foreground"
                    )}
                  >
                    {label}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground leading-tight">
                    {description}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Footer */}
      <div className="border-t border-border bg-muted/20 px-4 py-3">
        <div className="text-xs text-muted-foreground">
          <div className="font-medium">Patient Context</div>
          <div className="mt-1">Navigate patient-specific information</div>
        </div>
      </div>
    </aside>
  );
}
