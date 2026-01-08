import React, { useState, useEffect } from 'react';
import SliderComponent from './SliderComponent';
import experienceImage from '../../images/experienceImage.svg';
import axios from 'axios';

const SecondSection = () => {
  const [experienceDetails, setExperienceDetails] = useState(null);

  useEffect(()=>{
    
    axios
      .get('http://localhost:4000/api/v1/getAllExperience')
      .then((response) => {
        setExperienceDetails(response.data.message);
        // console.log(response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  },[])
 
  // console.log('details',experienceDetails);
  return (
    <div className=' max-w-maxContent w-11/12 h-80v lg:h-100v  flex flex-col justify-center items-center mx-auto -mt-5 lg:gap-0  customCursor'>
      <div className=' flex flex-col items-center justify-center h-2/6 lg:1/6 w-full gap-5 lg:gap-0 mt-20 '>
        <div className='flex flex-col  items-end justify-center text-xl md:text-3xl lg:text-5xl  font-Montserrat, sans-serif; font-bold  text-[#e4e4e7] h-4/6 w-full px-2  '>
          <div className='flex flex-row w-full h-1/2  items-end justify-center  '>
            Seamlessly Blending Code & Quality
          </div>
          <div className='flex flex-row w-full h-1/2  items-center justify-center mt-2'>
            for Exceptional Web Experiences
          </div>
        </div>
      </div>
      <div className=' flex flex-col justify-center items-center gap-2  h-4/6 lg:h-5/6 w-11/12 lg:w-full mt-20 '>
        <div className='flex flex-col w-full items-center text-2xl md:text-4xl lg:text-4xl uppercase font-bold  justify-end h-10  text-[#e4e4e7] p-10 md:p-0'>
          Experience
        </div>

        <div className='flex flex-row justify-center items-center w-11/12  h-5/6 customCursor '>
          <div className='  flex-row w-5/12  hidden lg:flex items-center justify-center'>
            <img
              src={experienceImage}
              alt='hero-section'
              className='w-full  h-full mx-auto'
              draggable={false}
            />
          </div>

          <div className='flex flex-row w-full lg:w-7/12  lg:p-10'>
            <SliderComponent experienceDetails={experienceDetails} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
