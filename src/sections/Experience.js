import React from "react";
import EmailCopy from "../components/EmailCopy";
import experienceData from "../data/experienceData";

const Experience = () => {
  return (
    <>
      <div className="section-heading experience-heading">
        <p className="eyebrow">experience</p>
        <h2>Places I have caused technical trouble</h2>
      </div>
      <div className="experience-list">
        {experienceData.internships.map((item, index) => (
          <article
            className={`experience-card ${item.type} ${
              item.highlight ? "experience-card-highlight" : ""
            }`}
            key={index}
          >
            <div className="experience-icon" aria-hidden="true">
              {item.emoji}
            </div>
            <div className="experience-main">
              <div className="experience-topline">
                <h3>{item.company}</h3>
                <div className="experience-meta">
                  <span className="experience-date">{item.dates}</span>
                </div>
              </div>
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
                    {item.linkText || item.linkUrl}
                  </a>
                )}
                {item.linkSuffix}
              </p>
            </div>
          </article>
        ))}
      </div>
      <div className="contact-callout">
        <p>Have a half-baked idea about robots, agents, or weird data?</p>
        <EmailCopy
          text="ashnakhetan@gmail.com"
          label="Say hi 👋"
          wrapperClassName="contact-copy"
          buttonClassName="contact-copy-button"
        />
      </div>
    </>
  );
};

export default Experience;
