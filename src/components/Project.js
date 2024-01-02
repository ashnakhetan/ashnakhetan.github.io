import React from 'react';

const ProjectCard = ({ imageUrl, name, description, tools, linkUrl }) => {
  const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '15px',
    padding: '10px',
    textAlign: 'center',
    cursor: 'pointer',
    boxShadow: '2px 4px 8px 2px rgba(0,0,0,0.2)',
    textDecoration: 'none',
    color: 'inherit', // Ensures text inherits the default color and doesn't get link styling
    height: 'auto',
    // height: '100%',
    // margin: '20px',
    backgroundColor: 'white',
  };

  const imageStyle = {
    height: '17vh',
    // flex: 1,
    width: '100%',
    objectFit: 'cover',
    objectPosition: 'top'
  };

  return (
    <a href={linkUrl} style={cardStyle} target="_blank" rel="noopener noreferrer">
      <img src={imageUrl} alt="Card Image" style={imageStyle} />
      <p><strong style={{fontSize:'large'}}>{name}: </strong>{description}</p>
      <p style={{fontSize:'smaller', color:'gray'}}>Tools: {tools}</p>
    </a>
  );
};

export default ProjectCard;