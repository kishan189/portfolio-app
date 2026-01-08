import React from 'react';

const GridItem = ({
  projectName,
  projectDescription,
  projectLogoUrl,
  projectLogoAltText,

  bgColorClass,
  ringColorClass,
  textColorClass,
  projectHostedLink
}) => {
  const handleDivClick = (url) => {
    window.open(url, '_blank');
  };
  return (
    <div className='pt-6 pl-6 mt-3 group  cursor-pointer sm:-rotate-2 card  customCursor '>
      <div className='w-2/12  aspect-square rounded-full p-3 bg-zinc-600 absolute z-10 -ml-6 -mt-6 ring-8 ring-zinc-800 group-hover:scale-105 transition-all ease-in-out duration-300'>
        <img
          src={projectLogoUrl}
          alt={projectLogoAltText}
          className='pointer-events-none select-none group-hover:scale-90 transition-all ease-in-out duration-300'
          draggable='false'
        />
      </div>
      <div
        className={`w-10/12  rounded-xl ring-4 text-cyan-700  p-4 ${textColorClass} shadow-xl group-hover:scale-[0.99] transition-all ease-in-out duration-300 ${bgColorClass}   ${ringColorClass} `}
        onClick={() => handleDivClick(`${projectHostedLink}`)} title='Click to view Project'>
        <div
          className={`flex justify-end text-2xl font-semibold underline  pt-4 pr-1 decoration-4 group-hover:decoration-wavy underline-offset-8	 `}
        >
          {projectName}
        </div>
        <p className='text-lg font-medium opacity-90 p-6 px-2 pb-0 '>
          {projectDescription}
        </p>
      </div>
    </div>
  );
};

export default GridItem;
