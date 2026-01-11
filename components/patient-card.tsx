"use client";

import Link from "next/link";
import Image from "next/image";
import { Calendar, User } from "lucide-react";
import { cn } from "@/lib/utils";

export type PatientStatus = "Active" | "Inactive" | "Critical";

export type Patient = {
  id: string;
  fullName: string;
  gender: "Male" | "Female" | "Other";
  age: number;
  primaryCondition: string;
  lastAppointment: string;
  status: PatientStatus;
  avatar?: string;
};

type PatientCardProps = {
  patient: Patient;
  isSelected?: boolean;
  onClick?: () => void;
};

const getStatusColor = (status: PatientStatus) => {
  switch (status) {
    case "Active":
      return "bg-green-100 text-green-800 border-green-200";
    case "Inactive":
      return "bg-gray-100 text-gray-800 border-gray-200";
    case "Critical":
      return "bg-red-100 text-red-800 border-red-200";
    default:
      return "bg-gray-100 text-gray-800 border-gray-200";
  }
};

const getInitials = (fullName: string) => {
  return fullName
    .split(" ")
    .map((name) => name.charAt(0).toUpperCase())
    .join("")
    .slice(0, 2);
};

export function PatientCard({
  patient,
  isSelected = false,
  onClick,
}: PatientCardProps) {
  const {
    id,
    fullName,
    gender,
    age,
    primaryCondition,
    lastAppointment,
    status,
    avatar,
  } = patient;

  return (
    <Link
      href={`/patient/${id}/patient-details/overview`}
      onClick={onClick}
      className={cn(
        "block w-full rounded-lg border bg-card p-4 shadow-sm transition-all duration-200",
        "hover:shadow-md hover:border-primary/20 hover:-translate-y-0.5",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        isSelected && "border-primary bg-primary/5 shadow-md"
      )}
    >
      <div className="flex items-center gap-4">
        {/* Avatar */}
        <div className="flex-shrink-0">
          {avatar ? (
            <Image
              src={avatar}
              alt={`${fullName} avatar`}
              width={48}
              height={48}
              className="h-12 w-12 rounded-full object-cover"
            />
          ) : (
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary font-medium">
              {getInitials(fullName)}
            </div>
          )}
        </div>

        {/* Main Content */}
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between">
            <div className="min-w-0 flex-1">
              {/* Name and Basic Info */}
              <div className="flex items-center gap-3 mb-1">
                <h3 className="font-semibold text-foreground truncate">
                  {fullName}
                </h3>
                <span
                  className={cn(
                    "inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium",
                    getStatusColor(status)
                  )}
                >
                  {status}
                </span>
              </div>

              {/* Patient Details */}
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                <span className="flex items-center gap-1">
                  <User className="h-3 w-3" />
                  {gender}, {age} years
                </span>
                <span className="text-xs">ID: {id}</span>
              </div>

              {/* Condition and Last Appointment */}
              <div className="space-y-1">
                <div className="text-sm">
                  <span className="font-medium text-foreground">
                    Condition:
                  </span>{" "}
                  <span className="text-muted-foreground">
                    {primaryCondition}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  <span>Last visit: {lastAppointment}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
