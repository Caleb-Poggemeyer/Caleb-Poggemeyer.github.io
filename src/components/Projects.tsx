import { projects } from "../data/resume";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <p className="eyebrow">Projects</p>
        <h2 className="section__title">Things I've built</h2>

        <div className="project-grid">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
