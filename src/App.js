import React, { useRef, useState } from "react";

/* Sections */
import Intro from "./sections/Intro";
import Experience from "./sections/Experience";

/* Components */
import EmailCopy from "./components/EmailCopy";
import ProjectCard from "./components/Project";
import Header from "./components/Header";

/* Icons + Images */
import LinkedInIcon from "./icons/LinkedInIcon";
import GithubIcon from "./icons/GithubIcon";

/* Data */
import projectData from "./data/projectData";

/* Styles */
import colors from "./themes/colors";
import "./App.css";
import { Grid } from "@mui/material";
import DevpostIcon from "./icons/DevpostIcon";
import InstaIcon from "./icons/InstaIcon";
import TwitterIcon from "./icons/TwitterIcon";

function App() {
  const [numProjDisplayed, setNumProjDisplayed] = useState(6);
  const [theme, setTheme] = useState("normal"); // ['ai', 'christmas', 'normal']

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
    console.log(seventhProject);
    if (seventhProject) {
      window.scrollTo({
        top: seventhProject.offsetTop - headerHeight,
        behavior: "smooth",
      });
    }
  };

  const showMoreProjects = () => {
    setNumProjDisplayed(projectData.projects.length);
    console.log("here");
    scrollToMoreProjects();
  };

  const showLessProjects = () => {
    setNumProjDisplayed(6);
  };

  return (
    <div>
      <header style={{ backgroundColor: colors.header }}>
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
            className="linkedin-button"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://github.com/ashnakhetan/"
            target="_blank"
            className="linkedin-button"
          >
            <GithubIcon />
          </a>
          <a
            href="https://devpost.com/ashnakhetan/"
            target="_blank"
            className="linkedin-button"
          >
            <DevpostIcon />
          </a>
          <a
            href="https://twitter.com/ashna_khetan"
            target="_blank"
            className="linkedin-button"
          >
            <TwitterIcon />
          </a>
          <a
            href="https://instagram.com/ashnakhetan/"
            target="_blank"
            className="linkedin-button"
          >
            <InstaIcon />
          </a>
          <EmailCopy text="ashnak@stanford.edu" />
        </div>
      </header>

      <div style={{ paddingTop: "30px", backgroundColor: colors.offwhite }}>
        {/* Section 1 */}
        <section ref={section1Ref} style={{}}>
          <Intro />
        </section>

        {/* Section 2 */}
        <section
          ref={section2Ref}
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: colors.offwhite,
          }}
        >
          <h1>Projects</h1>
          <Grid container spacing={8} className="projects">
            {projectData.projects
              .slice(0, numProjDisplayed)
              .map((project, index) => (
                <Grid item xs={8} md={4} key={index}>
                  <ProjectCard
                    id={`project-${index}`}
                    key={index}
                    imageUrl={project.imageUrl}
                    name={project.name}
                    description={project.description}
                    tools={project.tools}
                    linkUrl={project.linkUrl}
                  />
                </Grid>
              ))}

            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              {numProjDisplayed < projectData.projects.length ? (
                <button
                  style={{ flex: 1, marginTop: "30px" }}
                  onClick={showMoreProjects}
                >
                  See More
                </button>
              ) : (
                <button
                  style={{ flex: 1, marginTop: "30px" }}
                  onClick={showLessProjects}
                >
                  See Less
                </button>
              )}
            </div>
          </Grid>
        </section>

        <section
          ref={section3Ref}
          style={{
            marginTop: "20px",
            display: "flex",
            flexDirection: "column",
            backgroundColor: colors.offwhite,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Experience />
          <footer className="footer">
            made in 2023, last updated sept 16 2025, made using React.js, mui, +
            a little imagination, by ashna
          </footer>
        </section>
      </div>
    </div>
  );
}

export default App;
