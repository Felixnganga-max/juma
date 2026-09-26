import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

export default function SeeWork() {
  return (
    <section className="grid md:grid-cols-2 min-h-[600px]">
      <div className="flex items-center px-7 md:px-14 py-16">
        <div className="max-w-md">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal leading-tight">
            Dreaming of a beautiful kitchen?
          </h2>
          <p className="text-stone-600 mt-6 leading-relaxed">
            Want a beautiful kitchen, custom cabinets, or any part of your house
            that needs elegant stone design & finishing? Reach out to us & we'll
            be happy to help bring that vision to life — from the first slab to
            the final polish.
          </p>

          <h3 className="font-serif text-2xl md:text-3xl text-charcoal mt-10">
            Why homeowners trust us
          </h3>
          <p className="text-stone-600 mt-6 leading-relaxed">
            With over 5 years of hands-on experience in granite, marble &
            quartz, Juma's Granite & Marble Interiors brings supply, delivery &
            professional fitting together under one roof — so you don't have to
            juggle separate suppliers & fundis.
          </p>

          <Link
            to="/contact"
            className="inline-block bg-bronze text-charcoal font-semibold text-sm px-6 py-3 rounded-lg hover:bg-bronze-dark transition-colors mt-8"
          >
            Reach out to us
          </Link>
        </div>
      </div>

      <div className="min-h-[320px] md:min-h-0">
        <img
          src={assets.work}
          alt="Granite and marble kitchen installation"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
