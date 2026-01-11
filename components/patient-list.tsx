"use client";

import { useState, useMemo } from "react";
import { PatientCard, type Patient } from "./patient-card";
import {
  PatientSearchFilters,
  type FilterOptions,
} from "./patient-search-filters";
import { Users } from "lucide-react";

type PatientListProps = {
  patients: Patient[];
  selectedPatientId?: string;
  onPatientSelect?: (patientId: string) => void;
};

export function PatientList({
  patients,
  selectedPatientId,
  onPatientSelect,
}: PatientListProps) {
  const [filters, setFilters] = useState<FilterOptions>({
    search: "",
    status: "All",
    gender: "All",
    ageRange: "All",
  });

  const filteredPatients = useMemo(() => {
    return patients.filter((patient) => {
      // Search filter
      if (filters.search) {
        const searchTerm = filters.search.toLowerCase();
        const matchesSearch =
          patient.fullName.toLowerCase().includes(searchTerm) ||
          patient.id.toLowerCase().includes(searchTerm) ||
          patient.primaryCondition.toLowerCase().includes(searchTerm);

        if (!matchesSearch) return false;
      }

      // Status filter
      if (filters.status !== "All" && patient.status !== filters.status) {
        return false;
      }

      // Gender filter
      if (filters.gender !== "All" && patient.gender !== filters.gender) {
        return false;
      }

      // Age range filter
      if (filters.ageRange !== "All") {
        const age = patient.age;
        switch (filters.ageRange) {
          case "0-18":
            if (age < 0 || age > 18) return false;
            break;
          case "19-35":
            if (age < 19 || age > 35) return false;
            break;
          case "36-55":
            if (age < 36 || age > 55) return false;
            break;
          case "56-75":
            if (age < 56 || age > 75) return false;
            break;
          case "75+":
            if (age <= 75) return false;
            break;
        }
      }

      return true;
    });
  }, [patients, filters]);

  const handlePatientClick = (patientId: string) => {
    onPatientSelect?.(patientId);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-foreground">Patients</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Manage and view patient information
          </p>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Users className="h-4 w-4" />
          <span>
            {filteredPatients.length} of {patients.length} patients
          </span>
        </div>
      </div>

      {/* Search and Filters */}
      <PatientSearchFilters filters={filters} onFiltersChange={setFilters} />

      {/* Patient Cards */}
      <div className="space-y-3">
        {filteredPatients.length === 0 ? (
          <div className="rounded-lg border border-dashed border-border bg-muted/30 p-8 text-center">
            <Users className="mx-auto h-12 w-12 text-muted-foreground/50" />
            <h3 className="mt-4 text-lg font-medium text-foreground">
              No patients found
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {filters.search ||
              filters.status !== "All" ||
              filters.gender !== "All" ||
              filters.ageRange !== "All"
                ? "Try adjusting your search or filter criteria."
                : "No patients have been added yet."}
            </p>
          </div>
        ) : (
          filteredPatients.map((patient) => (
            <PatientCard
              key={patient.id}
              patient={patient}
              isSelected={selectedPatientId === patient.id}
              onClick={() => handlePatientClick(patient.id)}
            />
          ))
        )}
      </div>

      {/* Results Summary */}
      {filteredPatients.length > 0 && (
        <div className="border-t border-border pt-4">
          <p className="text-center text-sm text-muted-foreground">
            Showing {filteredPatients.length} patient
            {filteredPatients.length !== 1 ? "s" : ""}
            {filters.search && ` matching "${filters.search}"`}
          </p>
        </div>
      )}
    </div>
  );
}
