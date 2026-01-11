"use client";

import { PatientSidebar } from "@/components/patient-sidebar";
import { useSidebar } from "@/contexts/sidebar-context";
import { cn } from "@/lib/utils";

export default function PatientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { collapsed } = useSidebar();

  return (
    <>
      <PatientSidebar />
      <div
        className={cn(
          "transition-[padding-left] duration-300 ease-in-out",
          collapsed ? "md:pl-[250px]" : "md:pl-[275px]"
        )}
      >
        {children}
      </div>
    </>
  );
}
