import React, { useState } from "react";
import { ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react";
import Intro from "./sections/Intro";
import Research from "./sections/Research";
import Experience from "./sections/Experience";
import AgentMode from "./components/AgentMode";
import EmailCopy from "./components/EmailCopy";
import Project from "./components/Project";
import projectData from "./data/projectData";
import "./App.css";

function App() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const projects = projectData.projects.filter(
    (project) => project.name !== "PoliticsBench",
  );

  return (
    <div className="site-shell">
      <a className="skip-link" href="#about">
        Skip to content
      </a>
      <header className="site-header">
        <div className="header-inner">
          <a className="brand-mark" href="#about">
            Ashna Khetan
          </a>
          <nav className="site-nav" aria-label="Main navigation">
            <a href="#research">Research</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a
              href="https://ashnak03.substack.com/"
              target="_blank"
              rel="noreferrer"
            >
              Writing
            </a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main id="main-content">
        <section
          id="about"
          className="intro-section"
          aria-labelledby="intro-title"
        >
          <Intro />
        </section>

        <section
          id="research"
          className="section-block"
          aria-labelledby="research-title"
        >
          <Research />
        </section>

        <section
          id="experience"
          className="section-block"
          aria-labelledby="experience-title"
        >
          <Experience />
        </section>

        <section
          id="projects"
          className="section-block"
          aria-labelledby="projects-title"
        >
          <div className="section-heading">
            <h2 id="projects-title">Selected projects</h2>
            <span className="section-aside">
              Robotics, vision &amp; applied AI
            </span>
          </div>
          <div className="project-list" id="project-list">
            {(showAllProjects ? projects : projects.slice(0, 3)).map(
              (project) => (
                <Project key={project.name} {...project} />
              ),
            )}
          </div>
          <button
            className="project-toggle"
            onClick={() => setShowAllProjects(!showAllProjects)}
            aria-expanded={showAllProjects}
            aria-controls="project-list"
          >
            {showAllProjects
              ? "Show selected projects"
              : `View all ${projects.length} projects`}
            {showAllProjects ? (
              <ChevronUp size={16} />
            ) : (
              <ChevronDown size={16} />
            )}
          </button>
        </section>

        <section
          id="contact"
          className="section-block contact-section"
          aria-labelledby="contact-title"
        >
          <div>
            <p className="eyebrow">Get in touch</p>
            <h2 id="contact-title">Research conversations welcome.</h2>
            <p>
              For collaborations and conversations about world models, robotics,
              and AI evaluation.
            </p>
          </div>
          <EmailCopy
            text="ashnakhetan@gmail.com"
            label="Copy email"
            buttonClassName="contact-button"
          />
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-main">
          <p>Ashna Khetan</p>
          <div className="footer-links">
            <a
              href="https://x.com/ashna_khetan"
              target="_blank"
              rel="noreferrer"
            >
              X <ArrowUpRight size={13} />
            </a>
            <a href="https://cs4good.com/" target="_blank" rel="noreferrer">
              CS for social good <ArrowUpRight size={13} />
            </a>
            <a
              href="https://basmatiraas.wixsite.com/stanford"
              target="_blank"
              rel="noreferrer"
            >
              Dance <ArrowUpRight size={13} />
            </a>
            <AgentMode />
          </div>
        </div>
        <p className="footer-note">
          World models, robotics, and agentic systems
        </p>
      </footer>
    </div>
  );
}

export default App;
