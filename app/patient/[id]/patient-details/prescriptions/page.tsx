import { Pill, Clock, AlertTriangle, CheckCircle } from "lucide-react";

export default function PatientPrescriptionsPage() {
  return (
    <div className="space-y-6">
      <div className="border-b border-border pb-4">
        <h1 className="text-2xl font-semibold text-foreground">
          Prescriptions
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Current and past medications for this patient
        </p>
      </div>

      {/* Active Prescriptions */}
      <div className="rounded-lg border border-border bg-card">
        <div className="border-b border-border px-6 py-4">
          <h2 className="text-lg font-semibold">Active Prescriptions</h2>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            <div className="flex items-start gap-4 rounded-lg border border-green-200 bg-green-50/50 p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                <Pill className="h-5 w-5 text-green-600" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">Lisinopril 10mg</h3>
                  <span className="flex items-center gap-1 text-sm text-green-600">
                    <CheckCircle className="h-4 w-4" />
                    Active
                  </span>
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  <div>For: High Blood Pressure</div>
                  <div>Dosage: Once daily, with food</div>
                  <div>Prescribed: Dec 1, 2025 by Dr. Johnson</div>
                  <div>Refills remaining: 3</div>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-lg border border-blue-200 bg-blue-50/50 p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                <Pill className="h-5 w-5 text-blue-600" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">Metformin 500mg</h3>
                  <span className="flex items-center gap-1 text-sm text-blue-600">
                    <CheckCircle className="h-4 w-4" />
                    Active
                  </span>
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  <div>For: Type 2 Diabetes</div>
                  <div>Dosage: Twice daily with meals</div>
                  <div>Prescribed: Nov 15, 2025 by Dr. Smith</div>
                  <div>Refills remaining: 5</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Prescription History */}
      <div className="rounded-lg border border-border bg-card">
        <div className="border-b border-border px-6 py-4">
          <h2 className="text-lg font-semibold">Prescription History</h2>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                <Pill className="h-5 w-5 text-gray-600" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">Amoxicillin 250mg</h3>
                  <span className="flex items-center gap-1 text-sm text-gray-600">
                    <Clock className="h-4 w-4" />
                    Completed
                  </span>
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  <div>For: Respiratory Infection</div>
                  <div>Dosage: Three times daily for 10 days</div>
                  <div>Prescribed: Oct 20, 2025 by Dr. Johnson</div>
                  <div>Completed: Oct 30, 2025</div>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100">
                <AlertTriangle className="h-5 w-5 text-orange-600" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">Ibuprofen 400mg</h3>
                  <span className="flex items-center gap-1 text-sm text-orange-600">
                    <AlertTriangle className="h-4 w-4" />
                    Discontinued
                  </span>
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  <div>For: Pain Management</div>
                  <div>Prescribed: Sep 5, 2025 by Dr. Smith</div>
                  <div>
                    Reason for discontinuation: Patient reported stomach upset
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Allergies & Warnings */}
      <div className="rounded-lg border border-orange-200 bg-orange-50/50">
        <div className="border-b border-orange-200 px-6 py-4">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-orange-600" />
            Drug Allergies & Warnings
          </h2>
        </div>
        <div className="p-6">
          <div className="space-y-2">
            <div className="text-sm">
              <span className="font-medium">Known Allergies:</span> Penicillin
              (severe reaction)
            </div>
            <div className="text-sm">
              <span className="font-medium">Drug Interactions:</span> None
              currently identified
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
