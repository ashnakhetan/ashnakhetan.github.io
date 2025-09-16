import React from "react";

const ProjectCard = ({ imageUrl, name, description, tools, linkUrl }) => {
  const isClickable = linkUrl && linkUrl.trim() !== "";

  const cardStyle = {
    display: "flex",
    flexDirection: "column",
    borderRadius: "15px",
    padding: "10px",
    textAlign: "center",
    cursor: isClickable ? "pointer" : "default",
    boxShadow: "1px 2px 4px 1px rgba(0,0,0,0.1)",
    textDecoration: "none",
    color: "inherit",
    height: "auto",
    backgroundColor: "white",
    border: "1px solid #e9ecef",
    transition: "all 0.3s ease",
    transform: "scale(1)",
  };

  const hoverStyle = isClickable
    ? {
        boxShadow: "4px 8px 16px 4px rgba(0,0,0,0.2)",
        transform: "scale(1.02)",
        border: "2px solid #007bff",
      }
    : {};

  const imageStyle = {
    height: "17vh",
    // flex: 1,
    width: "100%",
    objectFit: "cover",
    objectPosition: "top",
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={(e) => {
        if (isClickable) {
          Object.assign(e.currentTarget.style, hoverStyle);
        }
      }}
      onMouseLeave={(e) => {
        if (isClickable) {
          e.currentTarget.style.boxShadow = "1px 2px 4px 1px rgba(0,0,0,0.1)";
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.border = "1px solid #e9ecef";
        }
      }}
    >
      {isClickable ? (
        <a
          href={linkUrl}
          style={{ textDecoration: "none", color: "inherit" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={imageUrl} alt="Card Image" style={imageStyle} />
          <p>
            <strong style={{ fontSize: "large" }}>{name}: </strong>
            {description}
          </p>
          <p style={{ fontSize: "smaller", color: "gray" }}>Tools: {tools}</p>
        </a>
      ) : (
        <div>
          <img src={imageUrl} alt="Card Image" style={imageStyle} />
          <p>
            <strong style={{ fontSize: "large" }}>{name}: </strong>
            {description}
          </p>
          <p style={{ fontSize: "smaller", color: "gray" }}>Tools: {tools}</p>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
