import thumbEmail from "@/assets/thumb-email.png";
import thumbAutomation from "@/assets/thumb-automation.png";
import ctrBefore from "@/assets/ctr-before.png";
import ctrAfter from "@/assets/ctr-after.png";

interface CaseStudy {
  title: string;
  thumbnail: string;
  problem: string;
  strategy: string;
  whyItWorked: string;
  result: string;
  beforeImg?: string;
  afterImg?: string;
  beforeVal: string;
  afterVal: string;
}

const caseStudies: CaseStudy[] = [
  {
    title: "Email Marketing Channel, List Building Video",
    thumbnail: thumbEmail,
    problem: "Email list building thumbnails in this niche usually show dashboards or email icons. They explain the topic but ignore the real pain point, sending emails and getting no replies. Because of this, the thumbnails feel generic and fail to trigger curiosity or emotion.",
    strategy: "The design directly highlights that frustration. The line “Your List Sucks.” acts as a bold hook, while the phone screen showing “Sent: 500 / 0 Replies” visualizes a painfully relatable scenario. A face close-up adds human emotion and tension.",
    whyItWorked: "The thumbnail targets a specific frustration email marketers face. The bold statement stops the scroll, while the phone screen adds believable proof. Instead of explaining the topic, it makes the viewer feel the problem.",
    result: "CTR jumped from 5.1% to 7.1%, a 39% increase.",
    beforeImg: ctrBefore,
    afterImg: ctrAfter,
    beforeVal: "5.1%",
    afterVal: "7.1%",
  },
  {
    title: "Tech Automation Channel, Workflow Video",
    thumbnail: thumbAutomation,
    problem: "Automation niche thumbnails often become cluttered with multiple tools, arrows, and UI screenshots, making them unreadable on mobile. At the same time, many competitors use similar layouts, so thumbnails start blending together in the feed. This reduces clarity and weakens their scroll-stopping power.",
    strategy: "The concept was simplified using color coded vertical segments, a visual pattern already common in automation content. Each segment represents a workflow stage, while recognizable app logos explain the tools. A single bold word “automate!” acts as the main hook, and the “shh” gesture introduces curiosity.",
    whyItWorked: "The segmented colors instantly communicate a workflow system while keeping the design clean and readable. This visual style was also trending across multiple niches, so adapting that pattern to the automation niche increased familiarity and stopping power. The secretive gesture adds curiosity, hinting at a hidden automation trick.",
    result: "CTR increased to 7.2% from 4.1%.",
    beforeVal: "4.1%",
    afterVal: "7.2%",
  },
];

const CaseStudies = () => {
  return (
    <section id="case-studies" className="bg-secondary">
      <div className="container mx-auto px-6 py-28 md:py-36">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          Case Studies
        </h2>
        <p className="mt-3 text-muted-foreground text-lg max-w-lg">
          Real results from real channels. Here's how strategic thumbnail design drives clicks.
        </p>

        <div className="mt-20 space-y-28">
          {caseStudies.map((cs, idx) => (
            <div key={idx} className="space-y-10">
              {/* Thumbnail — constrained on desktop */}
              <div className="overflow-hidden rounded-lg border border-border mx-auto max-w-3xl">
                <img
                  src={cs.thumbnail}
                  alt={cs.title}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>

              {/* Content grid — text gets more space on desktop */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-10 max-w-5xl mx-auto">
                <div className="md:col-span-3 space-y-8">
                  <h3 className="text-2xl font-bold text-foreground">{cs.title}</h3>

                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-accent mb-2">Problem</p>
                    <p className="text-muted-foreground leading-relaxed">{cs.problem}</p>
                  </div>

                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-accent mb-2">Strategy</p>
                    <p className="text-muted-foreground leading-relaxed">{cs.strategy}</p>
                  </div>

                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-accent mb-2">Why It Worked</p>
                    <p className="text-muted-foreground leading-relaxed">{cs.whyItWorked}</p>
                  </div>
                </div>

                <div className="md:col-span-2 flex flex-col justify-center items-center gap-8">
                  {cs.beforeImg && cs.afterImg ? (
                    <div className="flex gap-6 w-full">
                      <div className="flex-1 text-center">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-3">Before</p>
                        <img src={cs.beforeImg} alt="CTR Before" className="rounded-lg border border-border w-full" />
                      </div>
                      <div className="flex-1 text-center">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-3">After</p>
                        <img src={cs.afterImg} alt="CTR After" className="rounded-lg border border-border w-full" />
                      </div>
                    </div>
                  ) : (
                    <div className="flex gap-10 w-full justify-center">
                      <div className="text-center">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-2">Before</p>
                        <p className="text-4xl font-black text-muted-foreground">{cs.beforeVal}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-2">After</p>
                        <p className="text-5xl font-black text-accent">{cs.afterVal}</p>
                      </div>
                    </div>
                  )}
                  <div className="bg-background rounded-lg border-2 border-border p-6 w-full text-center">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-accent mb-2">Result</p>
                    <p className="text-foreground font-bold text-lg">{cs.result}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
