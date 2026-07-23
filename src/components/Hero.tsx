import { profile } from "../data/resume";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero__inner">
        <div className="hero__text">
          <p className="eyebrow">Computer Engineering · AI Emphasis</p>
          <h1>
            Hi, I'm <span className="accent">Caleb Poggemeyer</span>.
          </h1>
          <p className="hero__tagline">{profile.tagline}</p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="#projects">
              View Projects
            </a>
            <a className="btn" href="#contact">
              Get in Touch
            </a>
          </div>
        </div>

        <div className="hero__portrait">
          <img src="/profile.svg" alt="Portrait of Caleb Poggemeyer (placeholder)" />
        </div>
      </div>
    </section>
  );
}
