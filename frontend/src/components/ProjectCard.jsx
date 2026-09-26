import { Link } from "react-router-dom";
import { PlayCircle } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <Link
      to={`/work/${project.id}`}
      className="group block rounded-xl overflow-hidden border border-stone-200 hover:border-bronze/40 hover:shadow-lg transition-all"
    >
      <div className="aspect-[4/3] relative overflow-hidden bg-stone-200">
        <img
          src={project.images[0]}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {project.hasVideo && (
          <span className="absolute top-3 right-3 flex items-center gap-1.5 bg-charcoal/70 backdrop-blur text-white text-xs font-semibold px-2.5 py-1 rounded-full">
            <PlayCircle size={14} /> Video
          </span>
        )}
      </div>
      <div className="p-5">
        <p className="text-xs uppercase tracking-wide text-bronze font-semibold">
          {project.tag}
        </p>
        <h3 className="font-serif text-lg text-charcoal group-hover:text-bronze transition-colors mt-1">
          {project.title}
        </h3>
        <p className="text-sm text-stone-500 mt-1">
          {project.client} · {project.location}
        </p>
      </div>
    </Link>
  );
}
