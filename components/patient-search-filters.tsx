"use client";

import { useState } from "react";
import { Search, Filter, X } from "lucide-react";
import { cn } from "@/lib/utils";
import type { PatientStatus } from "./patient-card";

export type FilterOptions = {
  search: string;
  status: PatientStatus | "All";
  gender: "All" | "Male" | "Female" | "Other";
  ageRange: "All" | "0-18" | "19-35" | "36-55" | "56-75" | "75+";
};

type PatientSearchFiltersProps = {
  filters: FilterOptions;
  onFiltersChange: (filters: FilterOptions) => void;
  className?: string;
};

export function PatientSearchFilters({
  filters,
  onFiltersChange,
  className,
}: PatientSearchFiltersProps) {
  const [showFilters, setShowFilters] = useState(false);

  const handleSearchChange = (value: string) => {
    onFiltersChange({ ...filters, search: value });
  };

  const handleFilterChange = (key: keyof FilterOptions, value: string) => {
    onFiltersChange({ ...filters, [key]: value });
  };

  const clearFilters = () => {
    onFiltersChange({
      search: "",
      status: "All",
      gender: "All",
      ageRange: "All",
    });
  };

  const hasActiveFilters =
    filters.status !== "All" ||
    filters.gender !== "All" ||
    filters.ageRange !== "All";

  return (
    <div className={cn("space-y-4", className)}>
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search by name, ID, or condition..."
          value={filters.search}
          onChange={(e) => handleSearchChange(e.target.value)}
          className="w-full rounded-lg border border-input bg-background pl-10 pr-4 py-2.5 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        />
      </div>

      {/* Filter Toggle */}
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={() => setShowFilters(!showFilters)}
          className={cn(
            "inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors",
            "hover:bg-accent hover:text-accent-foreground",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            showFilters && "bg-accent text-accent-foreground"
          )}
        >
          <Filter className="h-4 w-4" />
          Filters
          {hasActiveFilters && (
            <span className="ml-1 rounded-full bg-primary px-1.5 py-0.5 text-xs text-primary-foreground">
              {
                [filters.status, filters.gender, filters.ageRange].filter(
                  (f) => f !== "All"
                ).length
              }
            </span>
          )}
        </button>

        {hasActiveFilters && (
          <button
            type="button"
            onClick={clearFilters}
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
          >
            <X className="h-3 w-3" />
            Clear filters
          </button>
        )}
      </div>

      {/* Filter Options */}
      {showFilters && (
        <div className="rounded-lg border border-border bg-card p-4">
          <div className="grid gap-4 md:grid-cols-3">
            {/* Status Filter */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Status</label>
              <select
                value={filters.status}
                onChange={(e) => handleFilterChange("status", e.target.value)}
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <option value="All">All Statuses</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
                <option value="Critical">Critical</option>
              </select>
            </div>

            {/* Gender Filter */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Gender</label>
              <select
                value={filters.gender}
                onChange={(e) => handleFilterChange("gender", e.target.value)}
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <option value="All">All Genders</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Age Range Filter */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Age Range</label>
              <select
                value={filters.ageRange}
                onChange={(e) => handleFilterChange("ageRange", e.target.value)}
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <option value="All">All Ages</option>
                <option value="0-18">0-18 years</option>
                <option value="19-35">19-35 years</option>
                <option value="36-55">36-55 years</option>
                <option value="56-75">56-75 years</option>
                <option value="75+">75+ years</option>
              </select>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
