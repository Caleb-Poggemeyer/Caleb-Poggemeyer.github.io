import type { Project } from "../data/resume";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <div className="project-card__image">
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          style={project.imageFit ? { objectFit: project.imageFit } : undefined}
        />
      </div>

      <div className="project-card__body">
        <div className="project-card__heading">
          <h3>{project.title}</h3>
          {project.status && <span className="badge">{project.status}</span>}
        </div>

        {project.role && <p className="project-card__role">{project.role}</p>}
        <p className="project-card__stack">{project.stack}</p>

        <ul className="project-card__bullets">
          {project.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>

        {project.gallery && project.gallery.length > 0 && (
          <div className="project-card__gallery">
            {project.gallery.map((g) => (
              <a
                key={g.src}
                href={g.src}
                target="_blank"
                rel="noreferrer"
                className="project-card__gallery-thumb"
                title={g.label}
              >
                <img src={g.src} alt={`${project.title} — ${g.label}`} />
              </a>
            ))}
          </div>
        )}

        {project.links && project.links.length > 0 && (
          <div className="project-card__links">
            {project.links.map((l) => (
              <a key={l.label} href={l.url} target="_blank" rel="noreferrer">
                {l.label} →
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
