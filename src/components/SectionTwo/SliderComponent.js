import React, { useState, useRef, useEffect } from 'react';
import './sliderStyles.css';
import Experience from './Experience';
import '../../App.css';

const SliderComponent = ({experienceDetails}) => {
  const sliderRef = useRef(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDown(true);
    sliderRef.current.classList.add('active');
    setStartX(e.clientX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDown(false);
    sliderRef.current.classList.remove('active');
  };

  const handleMouseUp = () => {
    setIsDown(false);
    sliderRef.current.classList.remove('active');
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.clientX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 3; // scroll-fast
    sliderRef.current.scrollLeft = scrollLeft - walk;
    // console.log(walk);
  };


 

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);




    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  });

   return (
    <div className='grid-container customCursor h-96'>
    
      <div
        ref={sliderRef}
        className='items customCursor customScrollBar'
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
      >
      {experienceDetails === null ? (
        <div >
          Loading...
        </div> // Display a loading message
      ) : (
        experienceDetails.map((experience) => {
          return (
            <Experience
              designation={experience.designation}
              companyName={experience.companyName}
              companyLogoUrl={experience.companyLogoUrl}
              periodOfService={experience.periodOfService}
              bgColorClass={experience.bgColorClass}
              ringColorClass={experience.ringColorClass}
              textColorClass={ experience.textColorClass}
              key={experience._id}
            />
          );
        })
      )}

        
      </div>
    </div>
  );
};

export default SliderComponent;
