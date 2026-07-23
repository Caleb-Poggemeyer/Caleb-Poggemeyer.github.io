import { skillGroups } from "../data/resume";

export default function Skills() {
  return (
    <section id="skills" className="section section--alt">
      <div className="container">
        <p className="eyebrow">Skills</p>
        <h2 className="section__title">Technical toolkit</h2>

        <div className="skills__grid">
          {skillGroups.map((group) => (
            <div key={group.label} className="skills__group">
              <h3>{group.label}</h3>
              <div className="skills__pills">
                {group.skills.map((s) => (
                  <span key={s} className="pill">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
