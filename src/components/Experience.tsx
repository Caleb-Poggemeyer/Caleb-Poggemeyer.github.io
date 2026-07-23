import { experience, leadership } from "../data/resume";

export default function Experience() {
  return (
    <section id="experience" className="section section--alt">
      <div className="container">
        <p className="eyebrow">Experience</p>
        <h2 className="section__title">Work &amp; leadership</h2>

        <div className="timeline">
          {experience.map((item) => (
            <div key={item.id} className="timeline__item">
              <div className="timeline__dot" />
              <div className="timeline__content">
                <div className="timeline__heading">
                  <h3>{item.org}</h3>
                  <span className="timeline__date">{item.date}</span>
                </div>
                <p className="timeline__role">{item.role}</p>
                <ul>
                  {item.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <h3 className="leadership__title">Leadership &amp; Involvement</h3>
        <div className="leadership__grid">
          {leadership.map((item) => (
            <div key={item.id} className="leadership__card">
              <p className="leadership__role">{item.role}</p>
              <p className="leadership__org">{item.org}</p>
              <p className="leadership__date">{item.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
