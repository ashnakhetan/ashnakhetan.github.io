import React from "react";
import { ArrowUpRight } from "lucide-react";

const Project = ({ imageUrl, name, description, tools, linkUrl }) => (
  <article className="project-row">
    <div className="project-image-wrap">
      <img src={imageUrl} alt="" loading="lazy" className="project-image" />
    </div>
    <div className="project-body">
      <h3>
        {linkUrl ? (
          <a href={linkUrl} target="_blank" rel="noreferrer">
            {name}
            <ArrowUpRight size={16} />
          </a>
        ) : (
          name
        )}
      </h3>
      <p className="project-description">{description}</p>
      <p className="project-tools">{tools}</p>
    </div>
  </article>
);

export default Project;
