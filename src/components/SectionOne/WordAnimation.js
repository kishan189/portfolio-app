import React, { useState, useEffect } from 'react';
import './WordAnimation.css'; // Import CSS file for styling

const AnimatedWord = ({ word, color, shouldAnimate }) => {
  return (
    <span
      className={`animated-word ${shouldAnimate ? 'animate' : ''}`}
      style={{ color }} // Apply the specified color as an inline style
      onAnimationEnd={() => {
        if (!shouldAnimate) {
          return;
        }
        setTimeout(() => {
          // Reset the animation after completion
          const el = document.querySelector('.animationContainer');
          el.classList.remove('restart-animation');
          void el.offsetWidth; // Trigger a reflow
          el.classList.add('restart-animation');
        }, 1000); // Adjust the stay on screen duration as needed (e.g., 2000ms = 2 seconds)
      }}
    >
      {word}
    </span>
  );
};

const WordAnimation = () => {
  const words = [
    { text: 'Modern Tech', color: '#A5F3FC' },
    { text: 'Beautiful UI', color: '#FECACA' },
    { text: 'Responsiveness', color: '#FDE68A' },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); // Adjust the interval duration as needed (e.g., 3000ms = 3 seconds)

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className='animationContainer flex flex-row h-full justify-center lg:justify-start items-center'>
      {words.map((word, index) => (
        <AnimatedWord
          key={index}
          word={word.text}
          color={word.color}
          shouldAnimate={currentIndex === index}
        />
      ))}
    </div>
  );
};

export default WordAnimation;
