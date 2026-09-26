import { useInView } from "../hooks/useInView";

const steps = [
  {
    number: "01",
    title: "Consultation",
    desc: "We visit your space, or you bring us your plan — and we talk through what you're picturing.",
  },
  {
    number: "02",
    title: "Sourcing & Selection",
    desc: "You choose from granite, marble & quartz slabs, matched to your space and budget.",
  },
  {
    number: "03",
    title: "Fitting & Installation",
    desc: "Our own team handles the cutting, fitting & finishing — no third-party fundis.",
  },
  {
    number: "04",
    title: "Handover",
    desc: "A final walkthrough, a clean site, and a space that's ready to live in.",
  },
];

function Step({ step, index }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={`flex gap-6 transition-all duration-700 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <span className="font-serif text-4xl text-bronze shrink-0">
        {step.number}
      </span>
      <div>
        <h3 className="font-serif text-xl text-charcoal">{step.title}</h3>
        <p className="text-stone-600 mt-2 max-w-[42ch]">{step.desc}</p>
      </div>
    </div>
  );
}

export default function ProcessSteps() {
  return (
    <section className="max-w-4xl mx-auto px-7 py-20">
      <div className="mb-12">
        <p className="text-bronze text-xs md:text-sm uppercase tracking-[0.2em] font-semibold">
          How it works
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-charcoal mt-3">
          From first visit to final polish
        </h2>
      </div>
      <div className="flex flex-col gap-10">
        {steps.map((step, i) => (
          <Step key={step.number} step={step} index={i} />
        ))}
      </div>
    </section>
  );
}
