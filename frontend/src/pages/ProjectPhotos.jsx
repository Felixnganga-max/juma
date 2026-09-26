import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import projects from "../data/projects.js";
import PhotoGalleryModal from "../components/PhotoGalleryModal.jsx";

export default function ProjectPhotos() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);
  const [openIndex, setOpenIndex] = useState(null);

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

  return (
    <div className="max-w-5xl mx-auto px-7 py-8">
      <div className="sticky top-0 z-10 -mx-7 px-7 py-4 bg-white/90 backdrop-blur border-b border-stone-200 flex items-center justify-between mb-8">
        <Link
          to={`/work/${project.id}`}
          className="inline-flex items-center gap-1.5 text-sm text-stone-500 hover:text-charcoal transition-colors"
        >
          <ArrowLeft size={16} /> Back to project
        </Link>
        <span className="text-sm text-stone-500">
          {project.images.length} photos
        </span>
      </div>

      <h1 className="font-serif text-2xl text-charcoal mb-6">
        {project.title}
      </h1>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 mb-14">
        {project.images.map((src, i) => (
          <button
            key={i}
            onClick={() => setOpenIndex(i)}
            className="aspect-square rounded-lg overflow-hidden group"
          >
            <img
              src={src}
              alt=""
              className="w-full h-full object-cover group-hover:brightness-90 transition"
            />
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-6">
        {project.images.map((src, i) => (
          <button
            key={i}
            onClick={() => setOpenIndex(i)}
            className="block w-full rounded-xl overflow-hidden group"
          >
            <img
              src={src}
              alt=""
              className="w-full h-auto object-cover group-hover:brightness-95 transition"
            />
          </button>
        ))}
      </div>

      {openIndex !== null && (
        <PhotoGalleryModal
          images={project.images}
          startIndex={openIndex}
          onClose={() => setOpenIndex(null)}
        />
      )}
    </div>
  );
}
