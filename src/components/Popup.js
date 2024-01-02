import React, { useState, useEffect } from 'react';

const CursorPopup = ({ text }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const style = {
    position: 'fixed',
    left: `${position.x - 100}px`, // Adjust 100px to the left of the cursor
    top: `${position.y}px`, // Align with the vertical position of the cursor
    pointerEvents: 'none', // To ensure cursor events aren't blocked
    // Add other styling as needed
  };

  return <div className="popup fade-in" style={style}>{text}</div>;
};

export default CursorPopup;