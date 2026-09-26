export default function FounderNote() {
  return (
    <section className="max-w-5xl mx-auto px-7 py-20 grid md:grid-cols-[220px_1fr] gap-10 items-center">
      <div className="w-full aspect-square rounded-full overflow-hidden mx-auto md:mx-0 max-w-[220px]">
        <img
          src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=600&auto=format&fit=crop"
          alt="Juma, founder"
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <p className="text-bronze text-xs uppercase tracking-[0.2em] font-semibold">
          Founder
        </p>
        <h2 className="font-serif text-2xl md:text-3xl text-charcoal mt-2">
          Juma
        </h2>
        <p className="text-stone-600 mt-4 max-w-[52ch] leading-relaxed">
          Every slab that leaves our workshop is fitted by the same hands that
          sourced it. That's the idea behind Juma's Granite & Marble Interiors —
          one team, one standard, from the quarry to your kitchen.
        </p>
      </div>
    </section>
  );
}
