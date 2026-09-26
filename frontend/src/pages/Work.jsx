import projects from "../data/projects.js";
import ProjectCard from "../components/ProjectCard.jsx";

export default function Work() {
  return (
    <section className="max-w-6xl mx-auto px-7 py-16">
      <div className="mb-8">
        <div className="text-bronze text-sm font-semibold">Portfolio</div>
        <h2 className="text-3xl mt-1">Projects we've completed</h2>
      </div>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(270px,1fr))] gap-x-5 gap-y-6.5">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}
