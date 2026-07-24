import { education, focusAreas } from "../data/resume";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <p className="eyebrow">About</p>
        <h2 className="section__title">A quick introduction</h2>

        <div className="about__grid">
          <p className="about__text">
            I'm a Computer Engineering graduate from the University of Nebraska–Lincoln
            ({education.date}), focused on AI engineering, full-stack development, and
            embedded systems. I like building things end-to-end, from an embedded
            control loop to a full-stack web app with a proper evaluation pipeline
            behind it. I recently led an industry-sponsored senior design project and
            I'm building an AI-assisted prompt engineering platform on the side.
          </p>

          <div className="about__card">
            <h3>{education.school}</h3>
            <p className="about__degree">{education.degree}</p>
            <p className="about__meta">
              {education.date} · GPA {education.gpa}
            </p>
            <ul className="about__honors">
              {education.honors.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="focus-tags">
          {focusAreas.map((f) => (
            <span key={f} className="focus-tag">
              {f}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
