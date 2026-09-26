import { useEffect, useState } from "react";
import { useInView } from "../hooks/useInView.js";

const stats = [
  { value: 5, suffix: "+", label: "Years of experience" },
  {
    value: 3,
    suffix: "",
    label: "Premium materials — granite, marble & quartz",
  },
  { value: 18, suffix: "+", label: "Types of spaces we finish" },
];

function Counter({ value, suffix }) {
  const [ref, inView] = useInView(0.5);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let frame;
    const duration = 1200;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      setCount(Math.round(progress * value));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  return (
    <span ref={ref} className="font-serif text-5xl md:text-6xl text-charcoal">
      {count}
      {suffix}
    </span>
  );
}

export default function StatsStrip() {
  return (
    <section className="bg-stone-50 border-y border-stone-200">
      <div className="max-w-6xl mx-auto px-7 py-16 grid sm:grid-cols-3 gap-10 text-center">
        {stats.map((stat) => (
          <div key={stat.label}>
            <Counter value={stat.value} suffix={stat.suffix} />
            <p className="text-stone-500 text-sm mt-2 max-w-[26ch] mx-auto">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
