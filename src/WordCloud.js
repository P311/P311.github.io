import React, { useState, useEffect } from 'react';
import { SKILLS } from './constants';

const WordCloud = () => {

  const words = SKILLS;

  const [placedWords, setPlacedWords] = useState([]);
  const containerWidth = window.innerWidth - 20;
  const containerHeight = 600;
  const padding = 8;

  const getFontSize = (value) => {
    const baseSize = 12;
    const scale = 0.36;
    return baseSize + value * scale;
  }

  const getTextDimensions = (text, fontSize) => {
    const charWidth = fontSize * 0.6;
    return {
      width: text.length * charWidth + padding * 2,
      height: fontSize + padding * 2
    };
  };

  const checkOverlap = (rect1, rect2) => {
    return !(rect1.x + rect1.width < rect2.x ||
           rect1.x > rect2.x + rect2.width ||
           rect1.y + rect1.height < rect2.y ||
           rect1.y > rect2.y + rect2.height);
  };

  const isValidPosition = (newRect, placedRects) => {
    // Check container bounds
    if (newRect.x < 0 || newRect.x + newRect.width > containerWidth ||
        newRect.y < 0 || newRect.y + newRect.height > containerHeight) {
      return false;
    }
    
    // Check overlaps with placed words
    return !placedRects.some(rect => checkOverlap(newRect, rect));
  };

  const findPosition = (width, height, placedRects) => {
    const centerX = containerWidth / 2;
    const centerY = containerHeight / 2;
    let angle = 0;
    let radius = 0;
    const step = 0.1;  // Angle increment
    const radiusStep = 2;  // Radius increment

    while (radius < Math.max(containerWidth, containerHeight)) {
      const x = centerX + radius * Math.cos(angle) - width / 2;
      const y = centerY + radius * Math.sin(angle) - height / 2;

      const newRect = { x, y, width, height };
      
      if (isValidPosition(newRect, placedRects)) {
        return { x, y };
      }

      angle += step;
      radius += step * radiusStep;
    }

    return null;  // No valid position found
  };

  useEffect(() => {
    const sortedWords = [...words].sort((a, b) => b.value - a.value);

    const newPlacedWords = [];
    const placedRects = [];

    for (const word of sortedWords){
      const fontSize = getFontSize(word.value);
      const {width, height} = getTextDimensions(word.text, fontSize);

      const position = findPosition(width, height, placedRects);

      if (position){
        placedRects.push({
          x: position.x,
          y: position.y,
          width,
          height
        });

        newPlacedWords.push({
          ...word,
          fontSize,
          x: position.x,
          y: position.y
        });

        setPlacedWords(newPlacedWords);
      }
    }
  }, [words]);

  return (
        <div 
          className="relative rounded-lg overflow-hidden mx-auto"
          style={{ width: containerWidth, height: containerHeight }}
        >
          {placedWords.map((word, index) => (
            <div
              key={index}
              className="absolute transform cursor-pointer text-white hover:text-gray-300 transition-colors duration-200"
              style={{
                left: word.x,
                top: word.y,
                fontSize: `${word.fontSize}px`,
                opacity: word.value / 100,
              }}
            >
              {word.text}
            </div>
          ))}
        </div>
)};

export default WordCloud;