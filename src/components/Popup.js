import React from 'react';

const CursorPopup = ({ text }) => {
  return (
    <div className="popup fade-in" role="status" aria-live="polite">
      {text}
    </div>
  );
};

export default CursorPopup;
