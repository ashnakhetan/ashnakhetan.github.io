import React from 'react';

const QuestionCard = () => {
  return (
    <div className="question-card">
      <p>what are u into?</p>
      <div className="question-options">
        <a className="question-option film" target="_blank" rel="noopener noreferrer" href="https://youtu.be/fyJTAbjwDUk">film</a>
        <a className="question-option planes" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=F1nBmpszLNU">planes</a>
        <a className="question-option tea" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/posts/nvidia_how-do-you-explain-world-models-to-your-sibling-activity-7490875182417571840-CFiU?utm_source=share&utm_medium=member_desktop&rcm=ACoAADGUvNABhDcK9ZQO_V2EohVN4cyl-3z7iZQ">tea</a>
        <a className="question-option nothing" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer">nothing, i'm boring</a>
      </div>
    </div>
  );
};

export default QuestionCard;
