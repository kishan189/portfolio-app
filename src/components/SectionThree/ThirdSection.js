import React from 'react';
import Grid from './Grid';

const ThirdSection = () => {
  return (
    <div className='flex flex-col w-11/12 mx-auto mt-10 customCursor '>
      <div className='flex flex-row  items-center justify-center  text-3xl md:text-5xl lg:text-5xl   font-Montserrat, sans-serif; font-bold  text-[#e4e4e7]  w-full h-10v pt-20 customCursor  '>
        Creations
      </div>
      <Grid />
    </div>
  );
};

export default ThirdSection;
