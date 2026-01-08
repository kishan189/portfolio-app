import React from 'react';
import WordAnimation from './WordAnimation';
import heroSectionImage from '../../images/heroSectionImage.svg';
import '../../App.css';
import { Tilt } from 'react-tilt';

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 35, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: 'cubic-bezier(.03,.98,.52,.99)', // Easing on enter/exit.
};

const HeroSection = () => {
  return (
    <div className='heroSectionDiv max-w-maxContent w-11/12 h-80v lg:h-90v gap-10 lg:gap-0  flex flex-col lg:flex-row  justify-center items-center mx-auto py-5 lg:px-14'>
      <div className='  flex flex-col  items-center justify-center lg:justify-start  h-2/3 lg:h-full  w-full overflow-hidden  lg:pb-20'>
        <div className=' flex flex-col  items-center justify-end  text-3xl md:text-5xl lg:text-5xl  font-Montserrat, sans-serif; font-bold  text-[#e4e4e7] h-2/3 w-full  pb-10  '>
          <div className='flex flex-row w-full  items-center justify-center lg:text-5xl  lg:justify-start '>
            I'm a Web & Software
          </div>
          <div className='flex flex-row w-full  items-center justify-center lg:justify-start '>
            Developer from India.
          </div>
        </div>

        <div className='flex flex-col w-full items-center  justify-center h-1/3 lg:gap-3'>
          <div className='flex flex-row w-full  h-1/3 text-xl md:text-4xl lg:text-3xl  text-[#e4e4e7] items-center justify-center  lg:justify-start '>
            {/* <div>Seamlessly Blending Code and Quality</div>
     <div> for Exceptional Web Experiences</div>*/}
            Currently making Web Apps with
          </div>

          <div className='flex flex-row items-center justify-center lg:justify-start  overflow-hidden text-3xl md:text-4xl lg:text-5xl h-14 relative  font-bold w-full'>
            {<WordAnimation />}
          </div>
        </div>
      </div>
      <div className=' flex flex-row items-center  h-1/3 lg:h-full w-full mt-5 lg:mt-20 '>
        <div className='heroSectionImage flex flex-row justify-end items-end lg:items-center  w-full max-h-full  '>
          <Tilt options={defaultOptions}>
            <img
              src={heroSectionImage}
              alt='hero-section'
              className='w-10/12  md:w-7/12 lg:w-full  h-full mx-auto'
              draggable={false}
            />
          </Tilt>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
