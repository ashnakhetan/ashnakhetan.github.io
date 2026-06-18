import React from "react";

const ProjectCard = ({ id, imageUrl, name, description, tools, linkUrl, featured }) => {
  const isClickable = linkUrl && linkUrl.trim() !== "";

  const cardContent = (
    <>
      <div className="project-image-wrap">
        <img src={imageUrl} alt="" className="project-image" />
      </div>
      <div className="project-body">
        <div>
          <p className="project-kicker">{featured ? "featured project" : "project"}</p>
          <h3>{name}</h3>
          <p className="project-description">{description}</p>
        </div>
        <p className="project-tools">{tools}</p>
      </div>
    </>
  );

  return (
    <article
      id={id}
      className={`project-card ${featured ? "project-card-featured" : ""} ${
        isClickable ? "project-card-linkable" : ""
      }`}
    >
      {isClickable ? (
        <a
          href={linkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          {cardContent}
        </a>
      ) : (
        cardContent
      )}
    </article>
  );
};

export default ProjectCard;
