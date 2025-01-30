import { useState } from 'react';
import { getRandomColor } from '../utils/colors';

export function AnimatedText({ text, className = '' }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <span className={`inline-block ${className}`}>
      {text.split('').map((char, index) => (
        <span
          key={index}
          className={`${
            hoveredIndex === index ? getRandomColor() : ''
          } transition-colors duration-200`}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {char === ' ' ? ' ' : char}
        </span>
      ))}
    </span>
  );
} 