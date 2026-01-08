export default function Storybook() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Medical Patient Tracking
          </h1>
          <p className="text-lg text-muted-foreground">
            Color System Demo - Healthcare SaaS Theme
          </p>
        </div>

        {/* Primary Brand Colors */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            Primary Brand Colors
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-11 gap-2">
            <div className="flex flex-col items-center">
              <div className="w-full h-16 rounded-lg bg-primary-50 border border-border"></div>
              <span className="text-xs text-muted-foreground mt-1">50</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-full h-16 rounded-lg bg-primary-100"></div>
              <span className="text-xs text-muted-foreground mt-1">100</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-full h-16 rounded-lg bg-primary-200"></div>
              <span className="text-xs text-muted-foreground mt-1">200</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-full h-16 rounded-lg bg-primary-300"></div>
              <span className="text-xs text-muted-foreground mt-1">300</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-full h-16 rounded-lg bg-primary-400"></div>
              <span className="text-xs text-muted-foreground mt-1">400</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-full h-16 rounded-lg bg-primary ring-2 ring-ring ring-offset-2"></div>
              <span className="text-xs text-foreground font-medium mt-1">
                500 ★
              </span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-full h-16 rounded-lg bg-primary-600"></div>
              <span className="text-xs text-muted-foreground mt-1">600</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-full h-16 rounded-lg bg-primary-700"></div>
              <span className="text-xs text-muted-foreground mt-1">700</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-full h-16 rounded-lg bg-primary-800"></div>
              <span className="text-xs text-muted-foreground mt-1">800</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-full h-16 rounded-lg bg-primary-900"></div>
              <span className="text-xs text-muted-foreground mt-1">900</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-full h-16 rounded-lg bg-primary-950"></div>
              <span className="text-xs text-muted-foreground mt-1">950</span>
            </div>
          </div>
        </section>

        {/* Semantic Status Colors */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            Semantic Status Colors
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-lg bg-success">
              <span className="text-success-foreground font-medium">
                Success
              </span>
              <p className="text-success-foreground/80 text-sm mt-1">
                Healthy, positive
              </p>
            </div>
            <div className="p-4 rounded-lg bg-warning">
              <span className="text-warning-foreground font-medium">
                Warning
              </span>
              <p className="text-warning-foreground/80 text-sm mt-1">
                Attention needed
              </p>
            </div>
            <div className="p-4 rounded-lg bg-destructive">
              <span className="text-destructive-foreground font-medium">
                Destructive
              </span>
              <p className="text-destructive-foreground/80 text-sm mt-1">
                Critical, error
              </p>
            </div>
            <div className="p-4 rounded-lg bg-info">
              <span className="text-info-foreground font-medium">Info</span>
              <p className="text-info-foreground/80 text-sm mt-1">
                Informational
              </p>
            </div>
          </div>
        </section>

        {/* Buttons */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            Buttons
          </h2>
          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary-600 active:bg-primary-700 transition-colors focus:ring-2 focus:ring-ring focus:ring-offset-2">
              Primary
            </button>
            <button className="px-6 py-2.5 rounded-lg bg-secondary text-secondary-foreground font-medium hover:bg-secondary/80 transition-colors focus:ring-2 focus:ring-ring focus:ring-offset-2">
              Secondary
            </button>
            <button className="px-6 py-2.5 rounded-lg border border-primary text-primary font-medium hover:bg-primary-50 transition-colors focus:ring-2 focus:ring-ring focus:ring-offset-2">
              Outline
            </button>
            <button className="px-6 py-2.5 rounded-lg bg-success text-success-foreground font-medium hover:bg-success/90 transition-colors">
              Success
            </button>
            <button className="px-6 py-2.5 rounded-lg bg-warning text-warning-foreground font-medium hover:bg-warning/90 transition-colors">
              Warning
            </button>
            <button className="px-6 py-2.5 rounded-lg bg-destructive text-destructive-foreground font-medium hover:bg-destructive/90 transition-colors">
              Destructive
            </button>
            <button className="px-6 py-2.5 rounded-lg bg-muted text-muted-foreground font-medium cursor-not-allowed opacity-50">
              Disabled
            </button>
          </div>
        </section>

        {/* Status Badges */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            Patient Status Badges
          </h2>
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-success/15 text-success border border-success/30">
              ● Healthy
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-warning/15 text-warning-foreground border border-warning/30">
              ● Needs Attention
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-destructive/15 text-destructive border border-destructive/30">
              ● Critical
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-info/15 text-info border border-info/30">
              ● Scheduled
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-700 border border-primary-200">
              ● Confirmed
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-muted text-muted-foreground border border-border">
              ● Pending
            </span>
          </div>
        </section>

        {/* Alerts */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            Alerts
          </h2>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-success/10 border border-success/30">
              <h3 className="font-medium text-success">
                ✓ Appointment Confirmed
              </h3>
              <p className="text-success/80 text-sm mt-1">
                Your appointment has been scheduled for tomorrow at 10:00 AM.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-warning/10 border border-warning/30">
              <h3 className="font-medium text-warning-foreground">
                ⚠ Insurance Verification Pending
              </h3>
              <p className="text-warning-foreground/80 text-sm mt-1">
                Please verify your insurance information before your visit.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/30">
              <h3 className="font-medium text-destructive">
                ✕ Appointment Cancelled
              </h3>
              <p className="text-destructive/80 text-sm mt-1">
                Your appointment has been cancelled. Please reschedule.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-info/10 border border-info/30">
              <h3 className="font-medium text-info">ℹ New Message</h3>
              <p className="text-info/80 text-sm mt-1">
                You have a new message from Dr. Smith.
              </p>
            </div>
          </div>
        </section>

        {/* Cards */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6">Cards</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Standard Card */}
            <div className="p-6 rounded-xl bg-card border border-border shadow-sm">
              <h3 className="font-semibold text-card-foreground">John Doe</h3>
              <p className="text-muted-foreground text-sm">
                Patient ID: #12345
              </p>
              <div className="mt-4 flex items-center gap-2">
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-success/15 text-success">
                  Stable
                </span>
                <span className="text-muted-foreground text-xs">
                  Last visit: Dec 15
                </span>
              </div>
            </div>

            {/* Highlighted Card */}
            <div className="p-6 rounded-xl bg-primary-50 border border-primary-200">
              <h3 className="font-semibold text-primary-900">Premium Plan</h3>
              <p className="text-primary-700 text-sm">
                Full access to all features
              </p>
              <button className="mt-4 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary-600 transition-colors">
                Upgrade Now
              </button>
            </div>

            {/* Warning Card */}
            <div className="p-6 rounded-xl bg-warning/5 border border-warning/30">
              <h3 className="font-semibold text-warning-foreground">
                Action Required
              </h3>
              <p className="text-warning-foreground/80 text-sm">
                Update your profile information
              </p>
              <button className="mt-4 px-4 py-2 rounded-lg bg-warning text-warning-foreground text-sm font-medium hover:bg-warning/90 transition-colors">
                Update Now
              </button>
            </div>
          </div>
        </section>

        {/* Text Hierarchy */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            Text Hierarchy
          </h2>
          <div className="p-6 rounded-xl bg-card border border-border space-y-4">
            <h1 className="text-3xl font-bold text-foreground">
              Heading 1 - Primary Text
            </h1>
            <h2 className="text-2xl font-semibold text-foreground">
              Heading 2 - Primary Text
            </h2>
            <p className="text-foreground">
              Body text - Standard readable content with good contrast.
            </p>
            <p className="text-muted-foreground">
              Muted text - Secondary information, labels, descriptions.
            </p>
            <a
              href="#"
              className="text-primary hover:text-primary-600 underline"
            >
              Link text - Interactive elements
            </a>
            <p className="text-muted-foreground/50">
              Disabled text - Inactive or unavailable content.
            </p>
          </div>
        </section>

        {/* Chart Colors */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            Chart Colors
          </h2>
          <div className="flex gap-4">
            <div className="flex-1 h-24 rounded-lg bg-chart-1 flex items-end justify-center pb-2">
              <span className="text-white text-xs font-medium">Chart 1</span>
            </div>
            <div className="flex-1 h-20 rounded-lg bg-chart-2 flex items-end justify-center pb-2">
              <span className="text-white text-xs font-medium">Chart 2</span>
            </div>
            <div className="flex-1 h-28 rounded-lg bg-chart-3 flex items-end justify-center pb-2">
              <span className="text-white text-xs font-medium">Chart 3</span>
            </div>
            <div className="flex-1 h-16 rounded-lg bg-chart-4 flex items-end justify-center pb-2">
              <span className="text-white text-xs font-medium">Chart 4</span>
            </div>
            <div className="flex-1 h-20 rounded-lg bg-chart-5 flex items-end justify-center pb-2">
              <span className="text-white text-xs font-medium">Chart 5</span>
            </div>
          </div>
        </section>

        {/* Background Surfaces */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            Background Surfaces
          </h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="p-4 rounded-lg bg-background border border-border">
              <span className="text-sm font-medium text-foreground">
                Background
              </span>
              <p className="text-xs text-muted-foreground mt-1">Page surface</p>
            </div>
            <div className="p-4 rounded-lg bg-card border border-border shadow-sm">
              <span className="text-sm font-medium text-card-foreground">
                Card
              </span>
              <p className="text-xs text-muted-foreground mt-1">
                Elevated surface
              </p>
            </div>
            <div className="p-4 rounded-lg bg-muted">
              <span className="text-sm font-medium text-foreground">Muted</span>
              <p className="text-xs text-muted-foreground mt-1">
                Subtle sections
              </p>
            </div>
            <div className="p-4 rounded-lg bg-accent">
              <span className="text-sm font-medium text-accent-foreground">
                Accent
              </span>
              <p className="text-xs text-muted-foreground mt-1">
                Highlighted areas
              </p>
            </div>
          </div>
        </section>

        {/* Form Elements */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            Form Elements
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Default Input
              </label>
              <input
                type="text"
                placeholder="Enter patient name..."
                className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-destructive mb-2">
                Error State
              </label>
              <input
                type="text"
                placeholder="Required field"
                className="w-full px-4 py-2 rounded-lg border border-destructive bg-destructive/5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-destructive"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-success mb-2">
                Success State
              </label>
              <input
                type="text"
                defaultValue="Verified"
                className="w-full px-4 py-2 rounded-lg border border-success bg-success/5 text-foreground focus:outline-none focus:ring-2 focus:ring-success"
              />
            </div>
          </div>
        </section>

        {/* Dark Mode Toggle Info */}
        <section className="mb-12">
          <div className="p-6 rounded-xl bg-muted border border-border">
            <h2 className="text-xl font-semibold text-foreground mb-2">
              Dark Mode Support
            </h2>
            <p className="text-muted-foreground">
              Add the{" "}
              <code className="px-2 py-0.5 rounded bg-background text-primary font-mono text-sm">
                dark
              </code>{" "}
              class to the{" "}
              <code className="px-2 py-0.5 rounded bg-background text-primary font-mono text-sm">
                &lt;html&gt;
              </code>{" "}
              element to enable dark mode. All colors automatically adapt.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
