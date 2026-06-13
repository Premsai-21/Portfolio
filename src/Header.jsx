import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  function closeNav() {
    setOpen(false);
  }

  return (
    <header className="header">
      <a className="logo" href="#top" onClick={closeNav}>
        PREM SAI DONEPUDI
      </a>
      <button
        type="button"
        className="nav-toggle"
        aria-expanded={open}
        aria-controls="nav"
        aria-label={open ? "Close menu" : "Menu"}
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
      </button>
      <nav
        className={`nav${open ? " is-open" : ""}`}
        id="nav"
        aria-label="Primary"
      >
        <a href="#about" onClick={closeNav}>
          About
        </a>
        <a href="#skills" onClick={closeNav}>
          Skills
        </a>
        <a href="#projects" onClick={closeNav}>
          Projects
        </a>
        <a href="#certificates" onClick={closeNav}>
          Certificates
        </a>
        <a href="#internships" onClick={closeNav}>
          Internships
        </a>
        <a href="#training" onClick={closeNav}>
          Training
        </a>
        <a href="#soft-skills" onClick={closeNav}>
          Soft skills
        </a>
        <a href="#contact" className="nav-cta" onClick={closeNav}>
          Contact
        </a>
      </nav>
    </header>
  );
}
