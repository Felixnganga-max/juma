export default function AboutHero() {
  return (
    <div
      className="relative h-[60vh] md:h-[75vh] bg-fixed bg-center bg-cover flex items-center justify-center text-center"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1800&auto=format&fit=crop)",
      }}
    >
      <div className="absolute inset-0 bg-charcoal/60" />
      <div className="relative z-10 px-7 max-w-2xl">
        <p className="text-bronze text-xs md:text-sm uppercase tracking-[0.25em] font-semibold">
          Est. in Nairobi
        </p>
        <h1 className="font-serif text-4xl md:text-6xl text-white mt-4 leading-tight">
          Stone, shaped around your life
        </h1>
        <p className="text-stone-200 mt-5 max-w-md mx-auto">
          Juma's Granite & Marble Interiors — supply, design & fitting, under
          one roof.
        </p>
      </div>
    </div>
  );
}
