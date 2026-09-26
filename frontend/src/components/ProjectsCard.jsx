import { Link } from "react-router-dom";
import { PlayCircle } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <Link
      to={`/work/${project.id}`}
      className="group block rounded-xl border border-stone-200 overflow-hidden hover:border-bronze/40 hover:shadow-lg transition-all"
    >
      <div className="aspect-[4/3] bg-gradient-to-br from-charcoal to-stone-700 flex items-end p-5 relative">
        {project.hasVideo && (
          <span className="absolute top-4 right-4 flex items-center gap-1.5 bg-white/10 backdrop-blur text-white text-xs font-semibold px-2.5 py-1 rounded-full">
            <PlayCircle size={14} /> Video
          </span>
        )}
        <span className="text-xs uppercase tracking-wide text-bronze font-semibold">
          {project.tag}
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-serif text-lg text-charcoal group-hover:text-bronze transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-stone-500 mt-1">
          {project.client} · {project.location}
        </p>
      </div>
    </Link>
  );
}
