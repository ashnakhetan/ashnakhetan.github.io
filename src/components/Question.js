import React, { useState } from 'react';

const QuestionCard = () => {
  const [theme, setTheme] = useState(null);

  const handleChristmas = () => {
    setTheme("Christmas");
  }

  const handleAI = () => {
    setTheme("AI");
  }

  const cardStyle = {
    border: '1px solid black',
    borderRadius: '15px',
    padding: '20px',
    width: '300px',
    textAlign: 'center',
    fontFamily: '"Arial", sans-serif',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
  };

  const buttonStyle = {
    marginTop: '10px',
    margin: '10px',
    padding: '10px 20px',
    border: '1px solid black',
    borderRadius: '20px',
    cursor: 'pointer',
    background: 'none',
    fontFamily: '"Arial", sans-serif',
  };

  return (
    <div style={cardStyle}>
      <div>what are u into?</div>
      <button style={{...buttonStyle, backgroundColor: '#f9bfbf'}}>
        <a style={{color: 'black', textDecoration: "none"}} target="_blank" rel="noopener noreferrer" href="https://youtu.be/fyJTAbjwDUk">film</a>
      </button>
      <button style={{...buttonStyle, backgroundColor: '#CDFFCD', color: 'black', textDecoration: "none"}}>
        <a style={{color: 'black', textDecoration: "none"}} target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=F1nBmpszLNU">planes</a>
      </button>
      <button style={{...buttonStyle, backgroundColor: '#D2D2D2'}}>
        <a style={{color: 'black', textDecoration: "none"}} href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer">nothing, i'm boring</a>
      </button>
    </div>
  );
};

export default QuestionCard;
