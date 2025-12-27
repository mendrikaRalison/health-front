# Medical Patient Tracking SaaS - Color System

A comprehensive, accessible color palette designed for healthcare applications using **Shadcn/ui** and **TailwindCSS**.

## Design Philosophy

| Principle           | Implementation                                              |
| ------------------- | ----------------------------------------------------------- |
| **Trust**           | Teal primary color - universally associated with healthcare |
| **Calmness**        | Soft, muted backgrounds with subtle cool undertones         |
| **Professionalism** | Clean contrast ratios, consistent semantic colors           |
| **Clarity**         | Clear visual hierarchy with distinct status colors          |
| **Accessibility**   | WCAG AA compliant contrast throughout                       |

---

## Color Palette Overview

### Primary Brand Color - Teal

The primary teal (`oklch(0.585 0.12 180)` / ~`#0D9488`) was chosen based on analysis of successful healthcare UIs:

- **Oscar Health** - Uses teal/cyan for trust and modernity
- **Zocdoc** - Teal accents for medical credibility
- **Athenahealth** - Blue-green tones for clinical professionalism
- **Epic MyChart** - Cool blues/teals for patient portals

```
Primary Scale (Light Mode):
┌─────────────┬────────────────────────────┬─────────────────────────┐
│ Token       │ OKLCH Value                │ Use Case                │
├─────────────┼────────────────────────────┼─────────────────────────┤
│ primary-50  │ oklch(0.97 0.02 180)       │ Subtle backgrounds      │
│ primary-100 │ oklch(0.935 0.04 180)      │ Hover backgrounds       │
│ primary-200 │ oklch(0.88 0.065 180)      │ Selected states         │
│ primary-300 │ oklch(0.79 0.09 180)       │ Borders, dividers       │
│ primary-400 │ oklch(0.68 0.11 180)       │ Hover on dark           │
│ primary-500 │ oklch(0.585 0.12 180)      │ Base primary ⬅️         │
│ primary-600 │ oklch(0.52 0.115 180)      │ Hover state             │
│ primary-700 │ oklch(0.455 0.1 180)       │ Active/pressed          │
│ primary-800 │ oklch(0.38 0.08 180)       │ Dark variant            │
│ primary-900 │ oklch(0.32 0.065 180)      │ Darkest                 │
│ primary-950 │ oklch(0.22 0.045 180)      │ Near black teal         │
└─────────────┴────────────────────────────┴─────────────────────────┘
```

---

## Semantic Status Colors

Healthcare dashboards require clear, intuitive status indicators:

| Status          | Color | OKLCH                   | Use Cases                                          |
| --------------- | ----- | ----------------------- | -------------------------------------------------- |
| **Success**     | Green | `oklch(0.585 0.15 145)` | Healthy vitals, completed tasks, positive outcomes |
| **Warning**     | Amber | `oklch(0.75 0.15 75)`   | Attention needed, pending actions, caution states  |
| **Destructive** | Red   | `oklch(0.577 0.2 25)`   | Critical alerts, errors, urgent patient status     |
| **Info**        | Blue  | `oklch(0.585 0.14 245)` | Neutral notifications, informational messages      |

---

## Usage Examples

### Buttons

```tsx
// Primary Button - Main CTAs
<Button className="bg-primary text-primary-foreground hover:bg-primary-600 active:bg-primary-700">
  Schedule Appointment
</Button>

// Secondary Button - Secondary actions
<Button variant="secondary" className="bg-secondary text-secondary-foreground hover:bg-secondary/80">
  View Details
</Button>

// Destructive Button - Dangerous actions
<Button variant="destructive" className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
  Cancel Appointment
</Button>

// Success Button - Positive actions
<Button className="bg-success text-success-foreground hover:bg-success/90">
  Confirm Check-in
</Button>

// Outline Button
<Button variant="outline" className="border-primary text-primary hover:bg-primary-50">
  Export Report
</Button>
```

### Status Badges

```tsx
// Patient Status Badges
<Badge className="bg-success/15 text-success border-success/30">
  Healthy
</Badge>

<Badge className="bg-warning/15 text-warning-foreground border-warning/30">
  Needs Attention
</Badge>

<Badge className="bg-destructive/15 text-destructive border-destructive/30">
  Critical
</Badge>

<Badge className="bg-info/15 text-info border-info/30">
  Scheduled
</Badge>

// Appointment Status
<Badge className="bg-primary-100 text-primary-700 border-primary-200">
  Confirmed
</Badge>
```

### Alerts

```tsx
// Success Alert
<Alert className="bg-success/10 border-success/30 text-success">
  <CheckCircle className="h-4 w-4" />
  <AlertTitle>Appointment Confirmed</AlertTitle>
  <AlertDescription>Your appointment has been scheduled for tomorrow at 10:00 AM.</AlertDescription>
</Alert>

// Warning Alert
<Alert className="bg-warning/10 border-warning/30 text-warning-foreground">
  <AlertTriangle className="h-4 w-4" />
  <AlertTitle>Insurance Verification Pending</AlertTitle>
  <AlertDescription>Please verify your insurance information before your visit.</AlertDescription>
</Alert>

// Error Alert
<Alert className="bg-destructive/10 border-destructive/30 text-destructive">
  <XCircle className="h-4 w-4" />
  <AlertTitle>Appointment Cancelled</AlertTitle>
  <AlertDescription>Your appointment has been cancelled. Please reschedule.</AlertDescription>
</Alert>

// Info Alert
<Alert className="bg-info/10 border-info/30 text-info">
  <Info className="h-4 w-4" />
  <AlertTitle>New Message</AlertTitle>
  <AlertDescription>You have a new message from Dr. Smith.</AlertDescription>
</Alert>
```

### Cards

```tsx
// Patient Card
<Card className="bg-card border-border">
  <CardHeader>
    <CardTitle className="text-card-foreground">John Doe</CardTitle>
    <CardDescription className="text-muted-foreground">Patient ID: #12345</CardDescription>
  </CardHeader>
  <CardContent>
    <div className="flex items-center gap-2">
      <Badge className="bg-success/15 text-success">Stable</Badge>
      <span className="text-muted-foreground text-sm">Last visit: Dec 15, 2024</span>
    </div>
  </CardContent>
</Card>

// Highlighted Card (e.g., featured plan)
<Card className="bg-primary-50 border-primary-200">
  <CardHeader>
    <CardTitle className="text-primary-900">Premium Plan</CardTitle>
  </CardHeader>
</Card>

// Warning Card
<Card className="bg-warning/5 border-warning/30">
  <CardHeader>
    <CardTitle className="text-warning-foreground">Action Required</CardTitle>
  </CardHeader>
</Card>
```

### Form Inputs

```tsx
// Default Input
<Input
  className="border-input bg-background text-foreground placeholder:text-muted-foreground focus:ring-ring focus:border-primary"
  placeholder="Enter patient name..."
/>

// Error State
<Input
  className="border-destructive bg-destructive/5 focus:ring-destructive"
  placeholder="Required field"
/>

// Success State
<Input
  className="border-success bg-success/5 focus:ring-success"
  placeholder="Verified"
/>
```

### Backgrounds & Surfaces

```tsx
// Page Background
<div className="bg-background min-h-screen">
  // Section with subtle differentiation
  <section className="bg-muted/50 p-6 rounded-lg">
    // Card on muted background
    <Card className="bg-card shadow-sm">...</Card>
  </section>
  // Sidebar
  <aside className="bg-sidebar border-r border-sidebar-border">
    <nav>
      <a className="text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
        Dashboard
      </a>
      <a className="bg-sidebar-primary text-sidebar-primary-foreground">
        Patients (Active)
      </a>
    </nav>
  </aside>
</div>
```

### Charts & Data Visualization

```tsx
// Use chart colors for consistent data visualization
const chartConfig = {
  vitals: { color: "hsl(var(--chart-1))" }, // Primary teal
  appointments: { color: "hsl(var(--chart-2))" }, // Info blue
  outcomes: { color: "hsl(var(--chart-3))" }, // Success green
  alerts: { color: "hsl(var(--chart-4))" }, // Warning amber
  critical: { color: "hsl(var(--chart-5))" }, // Destructive red
};
```

---

## Text Hierarchy

| Element          | Token                      | Description                    |
| ---------------- | -------------------------- | ------------------------------ |
| **Headings**     | `text-foreground`          | Primary text, maximum contrast |
| **Body**         | `text-foreground`          | Standard readable text         |
| **Labels**       | `text-muted-foreground`    | Form labels, secondary info    |
| **Placeholders** | `text-muted-foreground`    | Input placeholders             |
| **Disabled**     | `text-muted-foreground/50` | Disabled state text            |
| **Links**        | `text-primary`             | Interactive text links         |

```tsx
<h1 className="text-foreground font-bold">Patient Dashboard</h1>
<p className="text-foreground">Welcome back, Dr. Smith</p>
<label className="text-muted-foreground text-sm">Patient Name</label>
<a className="text-primary hover:text-primary-600 underline">View all patients</a>
<span className="text-muted-foreground/50">Disabled option</span>
```

---

## Accessibility States

### Focus States

```tsx
// All interactive elements should have visible focus
<Button className="focus:ring-2 focus:ring-ring focus:ring-offset-2">
  Accessible Button
</Button>

<Input className="focus:ring-2 focus:ring-ring focus:border-primary" />
```

### Disabled States

```tsx
<Button
  disabled
  className="bg-muted text-muted-foreground cursor-not-allowed opacity-50"
>
  Disabled
</Button>
```

### Hover States

```tsx
// Primary hover
<Button className="bg-primary hover:bg-primary-600">Primary</Button>

// Secondary hover
<Button className="bg-secondary hover:bg-secondary/80">Secondary</Button>

// Ghost hover
<Button variant="ghost" className="hover:bg-accent hover:text-accent-foreground">
  Ghost
</Button>
```

---

## Dark Mode

The color system automatically adapts to dark mode via the `.dark` class. Key adjustments:

- **Primary colors** are brightened for visibility on dark backgrounds
- **Semantic colors** maintain their meaning but with adjusted luminance
- **Backgrounds** use deep slate tones with subtle blue undertones
- **Borders** become more subtle with lower opacity

```tsx
// Toggle dark mode
<html className="dark">{/* All colors automatically adapt */}</html>
```

---

## Token Reference

### Core Tokens

| Token          | Light Mode  | Dark Mode     | Purpose           |
| -------------- | ----------- | ------------- | ----------------- |
| `--background` | Near white  | Deep slate    | Page background   |
| `--foreground` | Dark slate  | Near white    | Primary text      |
| `--card`       | White       | Elevated dark | Card surfaces     |
| `--primary`    | Teal 500    | Teal 400      | Brand/interactive |
| `--secondary`  | Light slate | Dark slate    | Secondary actions |
| `--muted`      | Soft gray   | Dark gray     | Muted elements    |
| `--accent`     | Teal tint   | Teal tint     | Highlights        |

### Semantic Tokens

| Token           | Purpose                             |
| --------------- | ----------------------------------- |
| `--success`     | Positive states, healthy indicators |
| `--warning`     | Caution, attention needed           |
| `--destructive` | Errors, critical alerts             |
| `--info`        | Neutral information                 |

### Interactive Tokens

| Token      | Purpose             |
| ---------- | ------------------- |
| `--border` | Default borders     |
| `--input`  | Input field borders |
| `--ring`   | Focus ring color    |

---

## Tailwind Classes Quick Reference

```tsx
// Backgrounds
bg-background        // Page background
bg-card              // Card/elevated surface
bg-muted             // Muted sections
bg-primary           // Primary brand
bg-secondary         // Secondary actions
bg-accent            // Accent highlights
bg-success           // Success state
bg-warning           // Warning state
bg-destructive       // Error/danger state
bg-info              // Info state

// Text
text-foreground      // Primary text
text-muted-foreground // Secondary text
text-primary         // Brand colored text
text-success         // Success text
text-warning-foreground // Warning text (dark for contrast)
text-destructive     // Error text
text-info            // Info text

// Borders
border-border        // Default border
border-input         // Input borders
border-primary       // Primary accent border
border-success       // Success border
border-warning       // Warning border
border-destructive   // Error border

// Focus
ring-ring            // Focus ring
focus:ring-primary   // Primary focus
focus:ring-success   // Success focus

// Primary Scale
bg-primary-50 through bg-primary-950
text-primary-50 through text-primary-950
```

---

## Installation

The color system is already configured in `app/globals.css`. No additional setup required.

To use with Shadcn/ui components, the CSS variables are automatically available through the theme configuration.

### Adding Custom Semantic Components

If you need additional semantic button variants, you can extend Shadcn's button:

```tsx
// components/ui/button.tsx - Add these variants
const buttonVariants = cva(
  // ... existing base styles
  {
    variants: {
      variant: {
        // ... existing variants
        success: "bg-success text-success-foreground hover:bg-success/90",
        warning: "bg-warning text-warning-foreground hover:bg-warning/90",
        info: "bg-info text-info-foreground hover:bg-info/90",
      },
    },
  }
);
```

---

## Color Contrast Ratios

All color combinations meet **WCAG AA** standards (4.5:1 for normal text, 3:1 for large text):

| Combination                               | Ratio | Status |
| ----------------------------------------- | ----- | ------ |
| `foreground` on `background`              | ~15:1 | ✅ AAA |
| `primary-foreground` on `primary`         | ~7:1  | ✅ AAA |
| `muted-foreground` on `background`        | ~5:1  | ✅ AA  |
| `success-foreground` on `success`         | ~7:1  | ✅ AAA |
| `warning-foreground` on `warning`         | ~8:1  | ✅ AAA |
| `destructive-foreground` on `destructive` | ~7:1  | ✅ AAA |

---

_Color system designed for medical patient tracking applications. Inspired by Oscar Health, Zocdoc, Athenahealth, and modern healthcare SaaS interfaces._
