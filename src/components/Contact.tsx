import { profile } from "../data/resume";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <p className="eyebrow">Contact</p>
        <h2 className="section__title">Let's talk</h2>
        <p className="contact__lead">
          I'm actively looking for full-time opportunities. Feel free to reach out and
          I'll get back to you quickly.
        </p>

        <div className="contact__grid">
          <a className="contact__card" href={`mailto:${profile.email}`}>
            <span className="contact__label">Email</span>
            <span className="contact__value">{profile.email}</span>
          </a>
          <a className="contact__card" href={`tel:${profile.phone.replace(/[^\d+]/g, "")}`}>
            <span className="contact__label">Phone</span>
            <span className="contact__value">{profile.phone}</span>
          </a>
          <a
            className="contact__card"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact__label">LinkedIn</span>
            <span className="contact__value">Connect with me</span>
          </a>
          <a className="contact__card" href={profile.github} target="_blank" rel="noreferrer">
            <span className="contact__label">GitHub</span>
            <span className="contact__value">See my code</span>
          </a>
        </div>
      </div>
    </section>
  );
}
