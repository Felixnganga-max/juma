import { Link } from "react-router-dom";
import AboutHero from "../components/AboutHero.jsx";
import StatsStrip from "../components/StatsStrip.jsx";
import SeeWork from "../components/SeeWork.jsx";
import ProcessSteps from "../components/ProcessSteps.jsx";
import FounderNote from "../components/FounderNote.jsx";

export default function About() {
  return (
    <div>
      <AboutHero />
      <StatsStrip />
      <SeeWork />
      <ProcessSteps />
      {/* <FounderNote /> */}

      <section className="bg-charcoal text-center py-20 px-7">
        <h2 className="font-serif text-3xl md:text-4xl text-white">
          Ready to start?
        </h2>
        <p className="text-stone-300 mt-3 max-w-md mx-auto">
          Tell us about your space & we'll help you find the right stone for it.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-bronze text-charcoal font-semibold text-sm px-7 py-3.5 rounded-lg hover:bg-bronze-dark transition-colors mt-7"
        >
          Reach out to us
        </Link>
      </section>
    </div>
  );
}
