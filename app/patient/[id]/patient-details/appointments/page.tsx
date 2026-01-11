import { Calendar, Clock, User } from "lucide-react";

export default function PatientAppointmentsPage() {
  return (
    <div className="space-y-6">
      <div className="border-b border-border pb-4">
        <h1 className="text-2xl font-semibold text-foreground">Appointments</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Scheduled visits and consultation history
        </p>
      </div>

      {/* Upcoming Appointments */}
      <div className="rounded-lg border border-border bg-card">
        <div className="border-b border-border px-6 py-4">
          <h2 className="text-lg font-semibold">Upcoming Appointments</h2>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            <div className="flex items-start gap-4 rounded-lg border border-border bg-muted/30 p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                <Calendar className="h-5 w-5 text-blue-600" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">Annual Physical Exam</h3>
                  <span className="text-sm text-muted-foreground">
                    Confirmed
                  </span>
                </div>
                <div className="mt-1 flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    Jan 25, 2026
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    10:00 AM
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    Dr. Johnson
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-lg border border-border bg-muted/30 p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                <Calendar className="h-5 w-5 text-green-600" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">Follow-up Consultation</h3>
                  <span className="text-sm text-muted-foreground">
                    Confirmed
                  </span>
                </div>
                <div className="mt-1 flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    Feb 8, 2026
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    2:30 PM
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    Dr. Smith
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Past Appointments */}
      <div className="rounded-lg border border-border bg-card">
        <div className="border-b border-border px-6 py-4">
          <h2 className="text-lg font-semibold">Recent Appointments</h2>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                <Calendar className="h-5 w-5 text-gray-600" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">Routine Checkup</h3>
                  <span className="text-sm text-green-600">Completed</span>
                </div>
                <div className="mt-1 flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    Jan 9, 2026
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    9:00 AM
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    Dr. Johnson
                  </span>
                </div>
                <div className="mt-2 text-sm">
                  <span className="font-medium">Notes:</span> Patient in good
                  health. Blood pressure normal.
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                <Calendar className="h-5 w-5 text-gray-600" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">Blood Work</h3>
                  <span className="text-sm text-green-600">Completed</span>
                </div>
                <div className="mt-1 flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    Dec 15, 2025
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    8:30 AM
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    Lab Tech
                  </span>
                </div>
                <div className="mt-2 text-sm">
                  <span className="font-medium">Notes:</span> All results within
                  normal ranges.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
