import { assets } from "../assets/assets.js";
import { useInView } from "../hooks/useInView.js";

const heroSegments = [
  {
    label: "Kitchens",
    sub: "Custom Cabinetry · Marble Islands · Backsplashes",
    image: assets.kit,
  },
  {
    label: "Living Spaces",
    sub: "TV Walls · Fireplace Features · Feature Panels",
    image: assets.living,
  },
  {
    label: "Staircases",
    sub: "Marble & Granite Finishes · Balustrades",
    image: assets.stairs,
  },
  {
    label: "Cabinetry & Finishes",
    sub: "Kitchen Cabinets · Wardrobes · Built-ins",
    image: assets.elegance,
  },
];

function ParallaxPanel({ segment, index }) {
  const [ref, inView] = useInView(0.3);
  const alignRight = index % 2 === 1;

  return (
    <div
      ref={ref}
      className="relative h-[55vh] md:h-[70vh] bg-fixed bg-center bg-cover flex items-end md:items-center"
      style={{ backgroundImage: `url(${segment.image})` }}
    >
      <div className="absolute inset-0 bg-charcoal/45" />
      <div
        className={`relative z-10 px-7 md:px-16 pb-10 md:pb-0 max-w-xl transition-all duration-1000 ease-out ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        } ${alignRight ? "md:ml-auto md:text-right" : ""}`}
      >
        <h3 className="font-serif text-3xl md:text-5xl text-white leading-tight">
          {segment.label}
        </h3>
        <p className="text-white text-sm md:text-base uppercase tracking-wide mt-3">
          {segment.sub}
        </p>
      </div>
    </div>
  );
}

export default function WhereWeWork() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-7 pt-16 pb-8 text-center">
        <p className="text-bronze text-xs md:text-sm uppercase tracking-[0.2em] font-semibold">
          Every space
        </p>
        <h2 className="font-serif text-3xl md:text-5xl text-charcoal mt-3">
          Where we work
        </h2>
      </div>

      <div className="flex flex-col gap-1 mt-1">
        {heroSegments.map((segment, i) => (
          <ParallaxPanel key={segment.label} segment={segment} index={i} />
        ))}
      </div>
    </section>
  );
}
