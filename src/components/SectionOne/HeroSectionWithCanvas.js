import React from 'react';
import CanvasAnimation from './CanvasAnimation';
import HeroSection from './HeroSection';
import '../../App.css';
const HeroSectionWithCanvas = () => {
  return (
    <div className='relative'>
      <HeroSection />
      <CanvasAnimation />
    </div>
  );
};

export default HeroSectionWithCanvas;
