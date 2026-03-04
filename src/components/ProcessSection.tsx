const steps = [
  { num: "01", title: "Channel Research", desc: "Deep dive into your content, audience, and positioning." },
  { num: "02", title: "Audience Psychology", desc: "Understand what makes your viewers click, and why." },
  { num: "03", title: "Competitor Breakdown", desc: "Analyze top performers in your niche for patterns." },
  { num: "04", title: "Hook Engineering", desc: "Craft a visual hook that stops the scroll." },
  { num: "05", title: "Visual Hierarchy", desc: "Design with clarity, contrast, and focus." },
  { num: "06", title: "A/B Testing Ready", desc: "Deliver variations optimized for split testing." },
];

const ProcessSection = () => {
  return (
    <section className="bg-secondary">
      <div className="container mx-auto px-6 py-28 md:py-36">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          The Process
        </h2>
        <p className="mt-3 text-muted-foreground text-lg max-w-lg">
          Not just design, strategy. Every thumbnail is built with intent.
        </p>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-lg overflow-hidden border border-border">
          {steps.map((step) => (
            <div key={step.num} className="bg-background p-8">
              <p className="text-[11px] font-semibold tracking-[0.15em] text-accent mb-3">{step.num}</p>
              <h3 className="text-lg font-bold text-foreground">{step.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
