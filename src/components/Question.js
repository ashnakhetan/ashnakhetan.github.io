import React from 'react';

const QuestionCard = () => {
  return (
    <div className="question-card">
      <p>what are u into?</p>
      <div className="question-options">
        <a className="question-option film" target="_blank" rel="noopener noreferrer" href="https://youtu.be/fyJTAbjwDUk">film</a>
        <a className="question-option planes" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=F1nBmpszLNU">planes</a>
        <a className="question-option nothing" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer">nothing, i'm boring</a>
      </div>
    </div>
  );
};

export default QuestionCard;
