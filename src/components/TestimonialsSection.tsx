const testimonials = [
  {
    name: "Client-1",
    niche: "Finance Creator",
    text: "My CTR went from 3% to almost 7% on multiple videos. He doesn't just make things look good, he understands why people click.",
  },
  {
    name: "Client-2",
    niche: "Education Channel",
    text: "Finally someone who treats thumbnails like a growth lever, not just art. The strategic approach changed how I think about every upload.",
  },
  {
    name: "Client-3",
    niche: "Documentary Creator",
    text: "Clean, fast, and the results were immediate. My best performing video uses his thumbnail.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-secondary">
      <div className="container mx-auto px-6 py-28 md:py-36">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          What Creators Say
        </h2>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="border border-border rounded-lg p-6 bg-background">
              <p className="text-foreground leading-relaxed">"{t.text}"</p>
              <div className="mt-6">
                <p className="font-semibold text-foreground text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.niche}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
