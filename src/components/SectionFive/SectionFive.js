import React, { useState } from 'react';
import contactImage from '../../images/contactImg.svg';
import ContactForm from './ContactForm';
 
  
const SectionFive = ({contactMeRef}) => {
 
  // console.log('state', stackArray);
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className='flex justify-center items-center h-32'>
        <div className='text-center'>
          <h2 className='text-2xl font-bold mb-4 text-gray-400'>Thank you for reaching out ✨ </h2>
          <p className='text-gray-400'>
            I'll get back to you soon.
          </p>
        </div>
      </div>
    );
  }
  return (
    <div className='flex flex-col items-center justify-center h-80v mt-5 md:mt-5' ref={contactMeRef}>
      <div className=' flex flex-row  items-center justify-center  text-3xl md:text-5xl lg:text-5xl   font-Montserrat, sans-serif; font-bold  text-[#e4e4e7]  w-full h-10v  customCursor  '>
       Get in Touch  
      </div>
      <div className='flex flex-row justify-center items-center w-11/12  h-60v md:h-80v lg:h-80v xl:h-80v customCursor'>
        

        <div className='  flex-row w-11/12 h-full  hidden lg:flex items-center justify-center '>
          <img
            src={contactImage}
            alt='techStack '
            className='w-5/12 mx-auto max-w-md  transform -scale-x-150 scale-y-150'
            draggable={false}
          />
        </div>

        <div className='flex flex-col h-full w-11/12  justify-centers '>
         <ContactForm setSubmitted={setSubmitted}/>
        </div>
      </div>
    </div>
  );
};

export default SectionFive;
