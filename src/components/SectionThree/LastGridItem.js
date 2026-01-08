import React from 'react';
import heroImg from '../../images/smilingFace.svg';
const LastGridItem = ({ bgColor, textColor, ringColor }) => {
  return (
    <div className='pt-6 pl-6 mt-3 group  cursor-pointer sm:-rotate-2 card customCursor  '>
      <div className='w-2/12  aspect-square rounded-full p-0 bg-zinc-600 absolute z-10 -ml-6 -mt-6 ring-8 ring-zinc-800 group-hover:scale-105 transition-all ease-in-out duration-300'>
        <img
          src={heroImg}
          alt='SmileFace'
          className='pointer-events-none select-none group-hover:scale-90 transition-all ease-in-out duration-300'
          draggable='false'
        />
      </div>
      <div
        className={`w-10/12  rounded-xl ring-4   p-4 shadow-xl group-hover:scale-[0.99] transition-all ease-in-out duration-300  ${bgColor} ${textColor} ${ringColor}`}
      >
        <p className='text-lg font-medium opacity-90 pt-10 px-2 pb-0'>
          More exciting Creations are on the way.
        </p>
        <p className='text-lg font-medium opacity-90 px-2 pb-0'>Stay tuned !</p>
      </div>
    </div>
  );
};

export default LastGridItem;
