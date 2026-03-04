const stats = [
  { value: "100K+", label: "Views Generated", desc: "Across multiple channels and niches" },
  { value: "1.8×", label: "Average CTR Increase", desc: "Compared to previous thumbnails" },
  { value: "10+", label: "Creators Helped", desc: "From small channels to established brands" },
  { value: "5+", label: "Niches Covered", desc: "Finance, Education, Tech, and more" },
];

const ResultsSection = () => {
  return (
    <section className="container mx-auto px-6 py-28 md:py-36">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center">
        Results That Speak
      </h2>
      <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-12">
        {stats.map((stat, i) => (
          <div key={i} className="text-center">
            <p className="text-4xl md:text-5xl font-black text-foreground">{stat.value}</p>
            <p className="mt-3 text-sm font-semibold text-foreground">{stat.label}</p>
            <p className="mt-1 text-xs text-muted-foreground">{stat.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResultsSection;
