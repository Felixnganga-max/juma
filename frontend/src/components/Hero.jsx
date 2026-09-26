import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const slides = [
  {
    image: assets.one,
    heading: "How beautiful do you want your house to look?",
  },
  {
    image: assets.two,
    heading: "Feel the value of your money with our elegant interior services.",
  },
  {
    image: assets.three,
    heading:
      "We are the best dealers in Granite, Marble, Gypsum, and whatever else makes your house elegant.",
  },
];

export default function Hero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <div
      className="relative h-screen w-full overflow-hidden bg-charcoal"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt=""
            loading={i === 0 ? "eager" : "lazy"}
            fetchPriority={i === 0 ? "high" : "auto"}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/55" />
        </div>
      ))}

      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
        <div className="max-w-2xl">
          <h1
            key={active}
            className="font-serif text-white text-3xl md:text-5xl leading-[1.25]"
            style={{ animation: "fadeUp 0.8s ease" }}
          >
            {slides[active].heading}
          </h1>
          <div className="flex gap-3 flex-wrap justify-center mt-8">
            <Link
              to="/contact"
              className="bg-bronze text-charcoal font-semibold text-sm px-6 py-3 rounded-lg hover:bg-bronze-dark transition-colors"
            >
              Contact Us
            </Link>
            <Link
              to="/work"
              className="border border-white/35 text-white font-semibold text-sm px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
            >
              See Our Work
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2.5 rounded-full transition-all ${
              i === active
                ? "w-6 bg-bronze"
                : "w-2.5 bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
