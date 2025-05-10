// src/components/CustomCursor.js

import React, { useState, useEffect } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        className={`cursor ${isHovered ? 'hovered' : ''}`}
        style={{
          left: `${cursorPosition.x - 10}px`,
          top: `${cursorPosition.y - 10}px`,
        }}
      />
      {/* Add more shapes or elements to follow the cursor */
      // In CustomCursor.js, inside the return statement
// Add an animated geometric line following the cursor

<div
  className="geometric-line"
  style={{
    left: `${cursorPosition.x}px`,
    top: `${cursorPosition.y}px`,
    animation: 'moveLine 2s infinite linear',
  }}
></div>

      }
    </>
  );
};

export default CustomCursor;
