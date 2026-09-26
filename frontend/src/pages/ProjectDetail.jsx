import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Grid3x3, PlayCircle } from "lucide-react";
import projects from "../data/projects.js";
import PhotoGalleryModal from "../components/PhotoGalleryModal.jsx";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  if (!project) {
    return (
      <div className="max-w-3xl mx-auto px-7 py-24 text-center">
        <p className="text-stone-500">We couldn't find that project.</p>
        <Link
          to="/work"
          className="text-bronze font-semibold mt-4 inline-block"
        >
          ← Back to Our Work
        </Link>
      </div>
    );
  }

  const openGallery = (i) => {
    setStartIndex(i);
    setGalleryOpen(true);
  };

  const [hero, ...rest] = project.images.slice(0, 5);

  return (
    <div className="max-w-6xl mx-auto px-7 py-10">
      <Link
        to="/work"
        className="inline-flex items-center gap-1.5 text-sm text-stone-500 hover:text-charcoal transition-colors mb-6"
      >
        <ArrowLeft size={16} /> Back to Our Work
      </Link>

      <p className="text-xs uppercase tracking-wide text-bronze font-semibold">
        {project.tag}
      </p>
      <h1 className="font-serif text-2xl md:text-3xl text-charcoal mt-1">
        {project.title}
      </h1>
      <p className="text-sm text-stone-500 mt-2">
        {project.client} · {project.location} · {project.year}
      </p>

      <div className="relative grid grid-cols-4 grid-rows-2 gap-2 rounded-2xl overflow-hidden h-[320px] md:h-[480px] mt-6">
        <button
          onClick={() => openGallery(0)}
          className="col-span-4 md:col-span-2 row-span-2 relative group"
        >
          <img
            src={hero}
            alt=""
            className="w-full h-full object-cover group-hover:brightness-90 transition"
          />
        </button>

        {rest.map((src, i) => (
          <button
            key={i}
            onClick={() => openGallery(i + 1)}
            className="hidden md:block relative group overflow-hidden"
          >
            <img
              src={src}
              alt=""
              className="w-full h-full object-cover group-hover:brightness-90 transition"
            />
          </button>
        ))}

        <button
          onClick={() => openGallery(0)}
          className="absolute bottom-4 right-4 bg-white text-charcoal text-sm font-semibold px-4 py-2 rounded-lg shadow-md flex items-center gap-2 hover:bg-stone-100 transition-colors"
        >
          <Grid3x3 size={16} /> Show all {project.images.length} photos
        </button>
      </div>

      {project.hasVideo && (
        <div className="mt-6 flex items-center gap-3 bg-charcoal text-stone-100 rounded-xl px-5 py-4">
          <PlayCircle size={22} className="text-bronze shrink-0" />
          <span className="text-sm">
            A video walkthrough is available for this project.
          </span>
        </div>
      )}

      <div className="h-px bg-stone-200 my-8" />

      <p className="text-stone-700 leading-relaxed">{project.desc}</p>

      <div className="mt-10">
        <h2 className="font-serif text-lg text-charcoal mb-4">
          Project details
        </h2>
        <dl className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
          {project.specs.map(([label, value]) => (
            <div
              key={label}
              className="flex justify-between sm:block border-b border-stone-100 sm:border-0 pb-2 sm:pb-0"
            >
              <dt className="text-xs uppercase tracking-wide text-stone-400">
                {label}
              </dt>
              <dd className="text-sm text-charcoal font-medium sm:mt-1">
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="mt-10 border border-stone-200 rounded-xl p-6">
        <h3 className="font-serif text-lg text-charcoal mb-2">
          Want something similar?
        </h3>
        <p className="text-sm text-stone-500 mb-5">
          Tell us about your space and we'll put together a plan like this one.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-bronze text-charcoal font-semibold text-sm px-5 py-3 rounded-lg hover:bg-bronze-dark transition-colors"
        >
          Start a project
        </Link>
      </div>

      {galleryOpen && (
        <PhotoGalleryModal
          images={project.images}
          startIndex={startIndex}
          onClose={() => setGalleryOpen(false)}
        />
      )}
    </div>
  );
}
