import { User, Phone, Mail, MapPin, Calendar } from "lucide-react";

export default function PatientPersonalPage() {
  return (
    <div className="space-y-6">
      <div className="border-b border-border pb-4">
        <h1 className="text-2xl font-semibold text-foreground">
          Personal Information
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Patient contact details and demographic information
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Basic Information */}
        <div className="rounded-lg border border-border bg-card">
          <div className="border-b border-border px-6 py-4">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <User className="h-5 w-5" />
              Basic Information
            </h2>
          </div>
          <div className="p-6 space-y-4">
            <div>
              <label className="text-sm font-medium text-muted-foreground">
                Full Name
              </label>
              <div className="mt-1 text-sm">John Michael Smith</div>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">
                Date of Birth
              </label>
              <div className="mt-1 text-sm flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                March 15, 1985 (38 years old)
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">
                Gender
              </label>
              <div className="mt-1 text-sm">Male</div>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">
                Blood Type
              </label>
              <div className="mt-1 text-sm">O+</div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="rounded-lg border border-border bg-card">
          <div className="border-b border-border px-6 py-4">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <Phone className="h-5 w-5" />
              Contact Information
            </h2>
          </div>
          <div className="p-6 space-y-4">
            <div>
              <label className="text-sm font-medium text-muted-foreground">
                Primary Phone
              </label>
              <div className="mt-1 text-sm flex items-center gap-2">
                <Phone className="h-4 w-4" />
                (555) 123-4567
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">
                Email
              </label>
              <div className="mt-1 text-sm flex items-center gap-2">
                <Mail className="h-4 w-4" />
                john.smith@email.com
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">
                Address
              </label>
              <div className="mt-1 text-sm flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5" />
                <div>
                  123 Main Street
                  <br />
                  Apartment 4B
                  <br />
                  New York, NY 10001
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Contact */}
      <div className="rounded-lg border border-border bg-card">
        <div className="border-b border-border px-6 py-4">
          <h2 className="text-lg font-semibold">Emergency Contact</h2>
        </div>
        <div className="p-6">
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <label className="text-sm font-medium text-muted-foreground">
                Name
              </label>
              <div className="mt-1 text-sm">Sarah Smith</div>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">
                Relationship
              </label>
              <div className="mt-1 text-sm">Spouse</div>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">
                Phone
              </label>
              <div className="mt-1 text-sm">(555) 987-6543</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
