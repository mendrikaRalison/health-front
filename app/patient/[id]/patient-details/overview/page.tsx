import { Activity, Heart, Thermometer, Weight } from "lucide-react";

export default function PatientOverviewPage() {
  return (
    <div className="space-y-6">
      <div className="border-b border-border pb-4">
        <h1 className="text-2xl font-semibold text-foreground">
          Patient Overview
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Comprehensive patient summary and vital statistics
        </p>
      </div>

      {/* Vital Signs */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border border-border bg-card p-4">
          <div className="flex items-center gap-2">
            <Heart className="h-4 w-4 text-red-500" />
            <span className="text-sm font-medium">Heart Rate</span>
          </div>
          <div className="mt-2">
            <div className="text-2xl font-bold">72 bpm</div>
            <div className="text-xs text-muted-foreground">Normal range</div>
          </div>
        </div>

        <div className="rounded-lg border border-border bg-card p-4">
          <div className="flex items-center gap-2">
            <Activity className="h-4 w-4 text-blue-500" />
            <span className="text-sm font-medium">Blood Pressure</span>
          </div>
          <div className="mt-2">
            <div className="text-2xl font-bold">120/80</div>
            <div className="text-xs text-muted-foreground">mmHg</div>
          </div>
        </div>

        <div className="rounded-lg border border-border bg-card p-4">
          <div className="flex items-center gap-2">
            <Thermometer className="h-4 w-4 text-orange-500" />
            <span className="text-sm font-medium">Temperature</span>
          </div>
          <div className="mt-2">
            <div className="text-2xl font-bold">98.6°F</div>
            <div className="text-xs text-muted-foreground">Normal</div>
          </div>
        </div>

        <div className="rounded-lg border border-border bg-card p-4">
          <div className="flex items-center gap-2">
            <Weight className="h-4 w-4 text-green-500" />
            <span className="text-sm font-medium">Weight</span>
          </div>
          <div className="mt-2">
            <div className="text-2xl font-bold">165 lbs</div>
            <div className="text-xs text-muted-foreground">BMI: 22.4</div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="rounded-lg border border-border bg-card">
        <div className="border-b border-border px-6 py-4">
          <h2 className="text-lg font-semibold">Recent Activity</h2>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="mt-1 h-2 w-2 rounded-full bg-green-500"></div>
              <div className="min-w-0 flex-1">
                <div className="text-sm font-medium">
                  Annual Checkup Completed
                </div>
                <div className="text-xs text-muted-foreground">2 days ago</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1 h-2 w-2 rounded-full bg-blue-500"></div>
              <div className="min-w-0 flex-1">
                <div className="text-sm font-medium">
                  Blood Work Results Available
                </div>
                <div className="text-xs text-muted-foreground">1 week ago</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1 h-2 w-2 rounded-full bg-orange-500"></div>
              <div className="min-w-0 flex-1">
                <div className="text-sm font-medium">
                  Prescription Refill Requested
                </div>
                <div className="text-xs text-muted-foreground">2 weeks ago</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
