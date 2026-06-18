import React, { useRef, useState } from "react";

/* Sections */
import Intro from "./sections/Intro";
import Experience from "./sections/Experience";

import EmailCopy from "./components/EmailCopy";
import AgentMode from "./components/AgentMode";
import ProjectCard from "./components/Project";

/* Icons + Images */
import LinkedInIcon from "./icons/LinkedInIcon";
import GithubIcon from "./icons/GithubIcon";

/* Data */
import projectData from "./data/projectData";

import "./App.css";
import { Grid } from "@mui/material";
import DevpostIcon from "./icons/DevpostIcon";
import InstaIcon from "./icons/InstaIcon";
import TwitterIcon from "./icons/TwitterIcon";
import SubstackIcon from "./icons/SubstackIcon";

function App() {
  const initialProjectCount = 5;
  const [numProjDisplayed, setNumProjDisplayed] = useState(initialProjectCount);

  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  const headerHeight = 90;

  const scrollToSection = (sectionRef) => {
    if (sectionRef.current) {
      window.scrollTo({
        top: sectionRef.current.offsetTop - headerHeight,
        behavior: "smooth",
      });
    }
  };

  const scrollToMoreProjects = () => {
    const seventhProject = document.getElementById("project-5"); // Assuming IDs start from 0
    if (seventhProject) {
      window.scrollTo({
        top: seventhProject.offsetTop - headerHeight,
        behavior: "smooth",
      });
    }
  };

  const showMoreProjects = () => {
    setNumProjDisplayed(projectData.projects.length);
    window.setTimeout(scrollToMoreProjects, 0);
  };

  const showLessProjects = () => {
    setNumProjDisplayed(initialProjectCount);
  };

  return (
    <div className="site-shell">
      <header className="site-header">
        <button className="brand-mark" onClick={() => scrollToSection(section1Ref)}>
          ashna.me
        </button>
        <div className="navButtons">
          <button onClick={() => scrollToSection(section1Ref)}>Me</button>
          <button onClick={() => scrollToSection(section2Ref)}>Projects</button>
          <button onClick={() => scrollToSection(section3Ref)}>
            Experience
          </button>
        </div>

        <div className="contactButtons">
          {/* Social media and contact links */}
          <a
            href="https://www.linkedin.com/in/ashna-khetan/"
            target="_blank"
            rel="noreferrer"
            className="linkedin-button"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://github.com/ashnakhetan/"
            target="_blank"
            rel="noreferrer"
            className="linkedin-button"
            aria-label="GitHub"
          >
            <GithubIcon />
          </a>
          <a
            href="https://devpost.com/ashnakhetan/"
            target="_blank"
            rel="noreferrer"
            className="linkedin-button"
            aria-label="Devpost"
          >
            <DevpostIcon />
          </a>
          <a
            href="https://twitter.com/ashna_khetan"
            target="_blank"
            rel="noreferrer"
            className="linkedin-button"
            aria-label="Twitter"
          >
            <TwitterIcon />
          </a>
          <a
            href="https://instagram.com/ashnakhetan/"
            target="_blank"
            rel="noreferrer"
            className="linkedin-button"
            aria-label="Instagram"
          >
            <InstaIcon />
          </a>
          <a
            href="https://ashnak03.substack.com/"
            target="_blank"
            rel="noreferrer"
            className="linkedin-button"
            aria-label="Substack"
          >
            <SubstackIcon />
          </a>
          <AgentMode />
          <EmailCopy text="ashnak@stanford.edu" />
        </div>
      </header>

      <main>
        {/* Section 1 */}
        <section ref={section1Ref}>
          <Intro />
        </section>

        {/* Section 2 */}
        <section
          ref={section2Ref}
          className="section-block projects-section"
        >
          <div className="section-heading">
            <p className="eyebrow">projects</p>
            <h2>Little machines from my brain attic.</h2>
          </div>
          <Grid container spacing={8} className="projects">
            {projectData.projects
              .slice(0, numProjDisplayed)
              .map((project, index) => (
                <Grid item xs={12} sm={6} md={index < 2 ? 6 : 4} key={index}>
                  <ProjectCard
                    id={`project-${index}`}
                    imageUrl={project.imageUrl}
                    name={project.name}
                    description={project.description}
                    tools={project.tools}
                    linkUrl={project.linkUrl}
                    featured={index < 2}
                  />
                </Grid>
              ))}

            <div className="project-toggle">
              {numProjDisplayed < projectData.projects.length ? (
                <button className="outline-button" onClick={showMoreProjects}>
                  See More
                </button>
              ) : (
                <button className="outline-button" onClick={showLessProjects}>
                  See Less
                </button>
              )}
            </div>
          </Grid>
        </section>

        <section
          ref={section3Ref}
          className="section-block experience-section"
        >
          <Experience />
          <footer className="footer">
            made with React, MUI, Codex, and a little imagination by ashna
          </footer>
        </section>
      </main>
    </div>
  );
}

export default App;
