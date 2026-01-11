"use client";

import { useState } from "react";
import { PatientList } from "@/components/patient-list";
import { mockPatients } from "@/lib/mock-patients";

export default function PatientPage() {
  const [selectedPatientId, setSelectedPatientId] = useState<string>();

  return (
    <div className="mx-auto w-full max-w-6xl">
      <PatientList
        patients={mockPatients}
        selectedPatientId={selectedPatientId}
        onPatientSelect={setSelectedPatientId}
      />
    </div>
  );
}
