import React from "react";
import experienceData from "../data/experienceData";

const Experience = () => (
  <>
    <div className="section-heading">
      <h2 id="experience-title">Experience</h2>
      <span className="section-aside">Research &amp; industry</span>
    </div>
    <div className="experience-list">
      {experienceData.internships.map((item) => (
        <article
          className={`experience-row${item.highlight ? " experience-current" : ""}`}
          key={`${item.company}-${item.dates}`}
        >
          <p className="experience-date">{item.dates}</p>
          <div className="experience-main">
            <h3>{item.company}</h3>
            <p className="experience-role">
              {item.role}
              {item.advisor && (
                <span className="experience-advisor"> with {item.advisor}</span>
              )}
            </p>
            <p className="experience-description">
              {item.description}
              {item.linkUrl && (
                <a href={item.linkUrl} target="_blank" rel="noreferrer">
                  {item.linkText}
                </a>
              )}
              {item.linkSuffix}
            </p>
          </div>
        </article>
      ))}
    </div>
  </>
);

export default Experience;
