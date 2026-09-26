import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function PhotoGalleryModal({ images, startIndex = 0, onClose }) {
  const [index, setIndex] = useState(startIndex);

  const next = () => setIndex((i) => (i + 1) % images.length);
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, []);

  const current = images[index];

  return (
    <div className="fixed inset-0 z-50 flex flex-col">
      <div
        className="absolute inset-0 bg-black"
        style={{
          backgroundImage: `url(${current})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(50px) brightness(0.35)",
          transform: "scale(1.15)",
        }}
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex items-center justify-center px-4 py-4">
        <span className="text-sm text-stone-300">
          {index + 1} / {images.length}
        </span>
      </div>

      <div className="relative z-10 flex-1 flex items-center justify-center px-4 min-h-0">
        <button
          onClick={prev}
          aria-label="Previous"
          className="absolute left-3 md:left-8 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        >
          <ChevronLeft size={24} />
        </button>

        <div className="relative">
          <img
            src={current}
            alt=""
            className="max-h-[80vh] max-w-full object-contain rounded-lg shadow-2xl"
          />
          <button
            onClick={onClose}
            aria-label="Close gallery"
            className="absolute -top-3 -right-3 bg-charcoal text-white rounded-full p-1.5 shadow-lg hover:bg-bronze hover:text-charcoal transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        <button
          onClick={next}
          aria-label="Next"
          className="absolute right-3 md:right-8 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="relative z-10 flex gap-2 overflow-x-auto px-6 py-4">
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`shrink-0 w-16 h-16 rounded-md overflow-hidden border-2 transition-colors ${
              i === index
                ? "border-bronze"
                : "border-transparent opacity-60 hover:opacity-100"
            }`}
          >
            <img src={src} alt="" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
