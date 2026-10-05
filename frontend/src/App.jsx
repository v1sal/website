import { useState } from "react";
import { Analytics } from "@vercel/analytics/react";

const email = "alikhan.skyranger@gmail.com";
const sections = [
  ["profile", "Profile"],
  ["education", "Education"],
  ["projects", "Projects"],
  ["skills", "Skills"],
  ["experience", "Volunteering"],
  ["contact", "Contact"],
];

function SectionHeading({ number, command, children }) {
  return (
    <div className="section-heading">
      <span className="section-number">{number}</span>
      <div>
        <p className="command">$ {command}</p>
        <h2>{children}</h2>
      </div>
    </div>
  );
}

export default function App() {
  const [copyStatus, setCopyStatus] = useState("");
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopyStatus("Email copied.");
    } catch {
      setCopyStatus("Copy unavailable. Use the email link to get in touch.");
    }
  }
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <a
          href="#profile"
          className="brand"
          aria-label="Alikhan Abay, back to profile"
        >
          <span className="brand-mark">a_</span>
          <span>
            ALIKHAN ABAY
            <span className="brand-sub">PERSONAL PROFILE / 2026</span>
          </span>
        </a>
        <nav aria-label="Main navigation">
          {sections.slice(1).map(([id, label]) => (
            <a key={id} href={`#${id}`}>
              {label}
            </a>
          ))}
        </nav>
        <a className="header-cv" href="/Alikhan-Abay-CV.pdf" download>
          CV <span aria-hidden="true">↗</span>
        </a>
      </header>
      <main id="main">
        <section className="hero" id="profile" aria-labelledby="hero-title">
          <div className="hero-main">
            <p className="eyebrow">
              <span className="status-dot" aria-hidden="true" /> OPEN TO
              INTERNSHIPS{" "}
              <span className="eyebrow-location">/ ASTANA + REMOTE</span>
            </p>
            <p className="command hero-command">$ whoami</p>
            <h1 id="hero-title">
              Alikhan
              <br />
              <span>
                Abay
                <span className="cursor" aria-hidden="true">
                  _
                </span>
              </span>
            </h1>
            <p className="hero-role">
              Cybersecurity student.
              <br />
              Curious by nature.
            </p>
            <p className="hero-description">
              I follow questions, connect clues, and keep learning. I’m a
              first-year student at Astana IT University, looking for an early
              start in cybersecurity and IT.
            </p>
            <div className="hero-actions">
              <a className="button primary" href={`mailto:${email}`}>
                Let’s connect <span aria-hidden="true">↗</span>
              </a>
              <a
                className="button secondary"
                href="/Alikhan-Abay-CV.pdf"
                download
              >
                Download CV <span className="file-type">PDF ↓</span>
              </a>
            </div>
            <a className="scroll-link" href="#education">
              <span aria-hidden="true">↓</span> Explore my background
            </a>
          </div>
          <aside className="terminal" aria-label="Profile at a glance">
            <div className="terminal-bar">
              <span className="terminal-dots" aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
              <span>profile.json</span>
              <span aria-hidden="true">⌘</span>
            </div>
            <div className="terminal-body">
              <p className="terminal-comment">// a little context</p>
              <div className="json-line">{"{"}</div>
              <dl className="profile-data">
                <div>
                  <dt>"name"</dt>
                  <dd>"Alikhan Abay",</dd>
                </div>
                <div>
                  <dt>"studying"</dt>
                  <dd>"Cybersecurity",</dd>
                </div>
                <div>
                  <dt>"university"</dt>
                  <dd>"Astana IT University",</dd>
                </div>
                <div>
                  <dt>"year"</dt>
                  <dd>"Freshman",</dd>
                </div>
                <div>
                  <dt>"interests"</dt>
                  <dd>["OSINT", "Research"],</dd>
                </div>
                <div>
                  <dt>"learning"</dt>
                  <dd>["C++", "Korean"],</dd>
                </div>
                <div>
                  <dt>"seeking"</dt>
                  <dd>"An internship"</dd>
                </div>
              </dl>
              <div className="json-line">{"}"}</div>
              <div className="terminal-footer">
                <span className="status-dot" aria-hidden="true" /> ready for the
                next chapter
                <span className="terminal-cursor" aria-hidden="true">
                  ▌
                </span>
              </div>
            </div>
            <div className="terminal-note">
              <span>01 / PERSONAL INTEREST</span>
              <p>Open-source intelligence</p>
              <span className="note-description">
                Research. Observation. Connecting the dots.
              </span>
            </div>
          </aside>
        </section>
        <div className="section-strip">
          <span>BASED IN KAZAKHSTAN</span>
          <span>LEARNING WITH INTENT</span>
          <span>CONTRIBUTING TO MY COMMUNITY</span>
        </div>
        <section className="content-section" id="education">
          <SectionHeading number="01" command="cat education.log">
            A foundation in progress.
          </SectionHeading>
          <div className="section-content">
            <article className="timeline-item">
              <div className="timeline-meta">
                <span>2026 — PRESENT</span>
                <span className="tag">CURRENT</span>
              </div>
              <h3>Astana IT University</h3>
              <p className="entry-subtitle">
                Cybersecurity · First-year student
              </p>
              <p>
                Building my foundation in cybersecurity while seeking practical
                experience through an internship.
              </p>
            </article>
            <article className="timeline-item">
              <div className="timeline-meta">
                <span>2022 — 2026</span>
                <span className="tag muted-tag">COMPLETED</span>
              </div>
              <h3>Alikhan Bokeikhan BINOM School-Lyceum</h3>
              <p className="entry-subtitle">Secondary education</p>
              <p className="small-detail">Graduated in 2026 · GPA 4.3 / 5</p>
            </article>
            <div className="credential">
              <span>ENGLISH PROFICIENCY</span>
              <strong>
                IELTS <span>7.0</span>
              </strong>
            </div>
          </div>
        </section>
        <section className="content-section" id="projects">
          <SectionHeading number="02" command="ls projects/">
            Learning by building.
          </SectionHeading>
          <div className="section-content">
            <article>
              <p className="eyebrow">PERSONAL SIDE PROJECT</p>
              <h3>LoadWise</h3>
              <a
                className="button secondary"
                href="https://loadwise-virid.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore LoadWise <span aria-hidden="true">↗</span>
                <span className="file-type">NEW TAB</span>
              </a>
            </article>
          </div>
        </section>
        <section className="content-section" id="skills">
          <SectionHeading number="03" command="cat learning.md">
            Always a work in progress.
          </SectionHeading>
          <div className="section-content">
            <div className="skill-row">
              <div>
                <h3>C++</h3>
                <p>Currently learning</p>
              </div>
              <span className="tag">BEGINNER</span>
            </div>
            <div className="interest-block">
              <p className="eyebrow">PERSONAL INTEREST</p>
              <h3>OSINT & research</h3>
              <p>
                I’m drawn to researching publicly available information and
                connecting clues. It’s an interest driven by curiosity that I
                want to develop through further learning.
              </p>
            </div>
            <div className="languages">
              <p className="eyebrow">LANGUAGES</p>
              <dl>
                <div>
                  <dt>Kazakh</dt>
                  <dd>Spoken language</dd>
                </div>
                <div>
                  <dt>Russian</dt>
                  <dd>Spoken language</dd>
                </div>
                <div>
                  <dt>English</dt>
                  <dd>IELTS 7.0</dd>
                </div>
                <div>
                  <dt>Korean</dt>
                  <dd>Beginner · learning</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>
        <section className="content-section" id="experience">
          <SectionHeading number="04" command="ls community/">
            Showing up matters.
          </SectionHeading>
          <div className="section-content">
            <p className="section-intro">
              I communicate confidently and enjoy helping people feel informed
              and supported. My volunteering experience has given me
              opportunities to connect with people from different backgrounds
              and contribute to my community.
            </p>
            <article className="experience-item">
              <div className="timeline-meta">
                <span>2025 + 2026</span>
                <span>EVENT VOLUNTEER</span>
              </div>
              <h3>PGL Astana</h3>
              <p>
                Helped attendees navigate the venue and find their way between
                areas.
              </p>
            </article>
            <article className="experience-item">
              <div className="timeline-meta">
                <span>2025</span>
                <span>EVENT VOLUNTEER</span>
              </div>
              <h3>President’s Trophy Hockey Tournament</h3>
              <p className="entry-subtitle">Kazakhstan national championship</p>
              <p>
                Guided spectators between seating sectors, helping manage crowd
                flow and reduce congestion for a smoother visitor experience.
              </p>
            </article>
            <article className="experience-item">
              <div className="timeline-meta">
                <span>INTERNATIONAL EVENT</span>
                <span>ATTACHÉ VOLUNTEER</span>
              </div>
              <h3>Games of the Future</h3>
              <p>
                Supported international players as an attaché volunteer
                throughout the event. Guided them through an unfamiliar
                environment and served as a point of contact, helping them
                understand event arrangements and feel supported during their
                experience abroad.
              </p>
            </article>
          </div>
        </section>
        <section id="contact" className="contact-section">
          <p className="command">$ start next_chapter</p>
          <div className="contact-layout">
            <div>
              <h2>
                Let’s put curiosity
                <br />
                to work<span>.</span>
              </h2>
              <p>
                Seeking cybersecurity or IT internships in Astana or remotely.
                I’m ready to learn, contribute, and gain practical experience.
              </p>
            </div>
            <div className="contact-actions">
              <a className="email-link" href={`mailto:${email}`}>
                {email}
                <span aria-hidden="true">↗</span>
              </a>
              <div className="contact-tools">
                <button onClick={copyEmail}>Copy email</button>
                <a href="/Alikhan-Abay-CV.pdf" download>
                  Download CV ↓
                </a>
              </div>
              <p role="status" className="copy-status">
                {copyStatus}
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <span>© 2026 Alikhan Abay</span>
        <span className="footer-status">
          <span className="status-dot" aria-hidden="true" /> Curious. Learning.
          Available.
        </span>
        <a href="#profile">Back to top ↑</a>
      </footer>
      <Analytics />
    </>
  );
}
