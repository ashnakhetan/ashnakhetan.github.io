import React from "react";
import { ArrowUpRight, FileText } from "lucide-react";
import publications from "../data/publicationData";

const Research = () => (
  <>
    <div className="section-heading">
      <h2 id="research-title">Publications</h2>
      <span className="section-aside">Selected research</span>
    </div>
    <div className="publication-list">
      {publications.map((publication) => (
        <article className="publication" key={publication.paperUrl}>
          <div className="publication-image">
            <img
              src={publication.imageUrl}
              alt={publication.imageAlt}
              loading="lazy"
              width="720"
              height="420"
            />
          </div>
          <div className="publication-body">
            <div className="publication-topline">
              <p className="publication-venue">{publication.venue}</p>
              <span className="publication-year">{publication.year}</span>
            </div>
            <h3>
              <a href={publication.paperUrl} target="_blank" rel="noreferrer">
                {publication.title}
              </a>
            </h3>
            <p className="publication-authors">
              {publication.authors.map((author, index) => (
                <React.Fragment key={author}>
                  {index > 0 && ", "}
                  {author === "Ashna Khetan" ? (
                    <strong>{author}</strong>
                  ) : (
                    author
                  )}
                </React.Fragment>
              ))}
            </p>
            <p className="publication-description">{publication.description}</p>
            <a
              className="paper-link"
              href={publication.paperUrl}
              target="_blank"
              rel="noreferrer"
            >
              <FileText size={14} /> Paper <ArrowUpRight size={14} />
            </a>
          </div>
        </article>
      ))}
    </div>
  </>
);

export default Research;
