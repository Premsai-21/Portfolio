import Header from "./Header.jsx";
import Reveal from "./Reveal.jsx";

const SKILLS = [
  "Java",
  "Python",
  "Spring Boot",
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "MySQL",
  "Git",
  "VS Code",
  "Eclipse",
  "Postman",
  "Machine Learning",
  "Azure (AZ-900)Food Delivery Management System",
];

export default function App() {
  const year = new Date().getFullYear();

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />

      <main id="main">
        <section className="hero" id="top">
          <div className="hero-inner">
            <Reveal as="p" className="eyebrow">
              Hyderabad, India · Open to roles
            </Reveal>
            <Reveal as="h1" className="hero-title">
              Hi, I’m <span className="name">Prem Sai Donepudi</span>
            </Reveal>
            <Reveal as="p" className="hero-sub" delayClass="reveal-d1">
              Computer Science graduate focused on <strong>Java</strong>,{" "}
              <strong>Spring Boot</strong>, and modern web with{" "}
              <strong>React</strong>. I like shipping clear UIs and reliable
              backends.
            </Reveal>
            <Reveal as="div" className="hero-actions" delayClass="reveal-d2">
              <a className="btn btn-primary" href="#projects">
                View projects
              </a>
              <a className="btn btn-outline" href="#contact">
                Get in touch
              </a>
              <a
                className="btn btn-ghost"
                href="https://github.com/Premsai-21"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </Reveal>
          </div>
          <div className="hero-accent" aria-hidden="true" />
        </section>

        <section className="section about" id="about">
          <Reveal as="div" className="section-head">
            <h2>About</h2>
            <p className="lede">
              I’m eager to grow as an engineer—learn new stacks, ship real
              products, and contribute to a team that values quality and
              curiosity.
            </p>
          </Reveal>
          <Reveal as="div" className="about-grid" delayClass="reveal-d1">
            <div className="card">
              <h3>Focus</h3>
              <p>
                Full-stack leaning: REST APIs with Spring Boot, relational data
                with MySQL, and interactive front ends with React, HTML, CSS,
                and JavaScript.
              </p>
            </div>
            <div className="card">
              <h3>Education</h3>
              <ul className="timeline compact">
                <li>
                  <strong>B.Tech, Computer Science Engineering</strong>
                  <span>
                    Seshadri Rao Gudlavalleru Engineering College · Sep 2022 –
                    Apr 2025
                  </span>
                  <span className="meta">CGPA 7.9/10</span>
                </li>
                <li>
                  <strong>Diploma, Computer Engineering</strong>
                  <span>
                    AANM &amp; VVRSR Polytechnic College · Jul 2019 – May 2022
                  </span>
                  <span className="meta">90%</span>
                </li>
              </ul>
            </div>
          </Reveal>
        </section>

        <section className="section skills" id="skills">
          <Reveal as="div" className="section-head">
            <h2>Technical skills</h2>
          </Reveal>
          <Reveal
            as="ul"
            className="tag-grid"
            delayClass="reveal-d1"
            aria-label="Skills"
          >
            {SKILLS.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </Reveal>
        </section>

        <section className="section projects" id="projects">
          <Reveal as="div" className="section-head">
            <h2>Projects</h2>
          </Reveal>
          <ul className="project-list">
            <Reveal as="li" className="project">
              <div className="project-top">
                <span className="pill">Java · Spring Boot</span>
                <time dateTime="2025">2025</time>
              </div>
              <h3>Foodie Hub Delivery System </h3>
              <p>
                Full-stack system for browsing restaurants, placing orders,
                tracking deliveries, and handling payments via{" "}
                <strong>REST APIs</strong> with{" "}
                <strong>MySQL</strong> persistence and secure access patterns.
              </p>
              <div className="project-links">
                <a
                  href="https://github.com/Premsai-21"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Code on GitHub
                </a>
              </div>
            </Reveal>
            <Reveal as="li" className="project">
              <div className="project-top">
                <span className="pill">React.js</span>
                <time dateTime="2025-09">Sep 2025</time>
              </div>
              <h3>Online Movie Ticket Booking</h3>
              <p>
                Responsive web app for browsing films, picking seats, and
                managing showtimes. Seat state and bookings persist in{" "}
                <strong>local storage</strong>; automatic pricing and input
                validation; deployed on GitHub with a live demo.
              </p>
              <div className="project-links">
                <a
                  href="https://github.com/Premsai-21"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Code on GitHub
                </a>
              </div>
            </Reveal>
            <Reveal as="li" className="project">
              <div className="project-top">
                <span className="pill">ML · HTML · CSS · JS</span>
                <time dateTime="2025-04">Apr 2025</time>
              </div>
              <h3>FARM PREDICT — Crop suitability &amp; yield</h3>
              <p>
                Site connecting farmers with consumers, plus ML-driven crop
                recommendations using rainfall, temperature, pesticide use, and
                geography. Yield estimates per hectare support planning and
                leaner pesticide use.
              </p>
              <div className="project-links">
                <a
                  href="https://github.com/Premsai-21"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub profile
                </a>
              </div>
            </Reveal>
          </ul>
        </section>

        <section className="section creds" id="certificates">
          <Reveal as="div" className="section-head">
            <h2>Certificates</h2>
            <p className="lede">
              Formal certifications in cloud, networking, and full-stack
              development.
            </p>
          </Reveal>
          <Reveal as="div" className="creds-body">
            <div className="card">
              <ul className="bullet">
                <li>Microsoft Certified: Azure Fundamentals (AZ-900)</li>
                <li>Introduction to Networks — Cisco Networking Academy</li>
                <li>DotNet Full Stack — Wipro Talent Next</li>
              </ul>
            </div>
          </Reveal>
        </section>

        <section className="section creds" id="internships">
          <Reveal as="div" className="section-head">
            <h2>Internships</h2>
            <p className="lede">
              Virtual programs in cloud, machine learning, and analytics.
            </p>
          </Reveal>
          <Reveal as="div" className="creds-body" delayClass="reveal-d1">
            <div className="card">
              <ul className="bullet">
                <li>AWS Academy Cloud Virtual Internship</li>
                <li>Machine Learning — Smart Bridge (APSCHE), virtual</li>
                <li>
                  Data Analytics with Power BI — Smart Bridge (APSCHE), virtual
                </li>
              </ul>
            </div>
          </Reveal>
        </section>

        <section className="section creds" id="training">
          <Reveal as="div" className="section-head">
            <h2>Training</h2>
            <p className="lede">
              Structured full-stack program to deepen Java and web skills.
            </p>
          </Reveal>
          <Reveal as="div" className="creds-body" delayClass="reveal-d1">
            <div className="card">
              <ul className="bullet">
                <li>Java Full Stack Development — 10000 Coders Institute</li>
              </ul>
            </div>
          </Reveal>
        </section>

        <section className="section creds" id="soft-skills">
          <Reveal as="div" className="section-head">
            <h2>Soft skills</h2>
            <p className="lede">
              Strengths I rely on when learning, collaborating, and shipping work.
            </p>
          </Reveal>
          <Reveal as="div" className="creds-body" delayClass="reveal-d1">
            <div className="card">
              <ul className="bullet">
                <li>Time management</li>
                <li>Patience</li>
                <li>Problem solving</li>
              </ul>
            </div>
          </Reveal>
        </section>

        <section className="section contact" id="contact">
          <Reveal as="div" className="contact-card">
            <h2>Contact</h2>
            <p className="lede">
              I’d love to hear about internships, junior roles, or project
              collaborations.
            </p>
            <div className="contact-actions">
              <a
                className="btn btn-primary btn-large"
                href="mailto:premsaidonepudi58@gmail.com"
              >
                premsaidonepudi58@gmail.com
              </a>
              <a className="btn btn-outline" href="tel:+919949210688">
                +91 99492 10688
              </a>
            </div>
            <ul className="social-row">
              <li>
                <a
                  href="https://www.linkedin.com/in/prem-sai-donepudi-23388a254/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Premsai-21"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </Reveal>
        </section>
      </main>

      <footer className="footer">
        <p>
          © {year} Prem Sai Donepudi
        </p>
      </footer>
    </>
  );
}
