import React from 'react';
 
const Experience = ({designation,companyName,companyLogoUrl,periodOfService, bgColorClass, textColorClass,ringClass }) => {
 
  return (<div className={`flex flex-col items-center w-48 justify-center h-full ${ringClass} ${bgColorClass} ${textColorClass} ring-4  item`} >
    <div className='flex flex-col h-80 rounded-lg justify-center items-center overflow-hidden gap-2 '>
    <div>
      <img src={companyLogoUrl} alt={'backgroundColor'} className='w-28 h-28' draggable={false} />
    </div>
    <div className='p-5 flex flex-col justify-center items-center text-lg Montserrat, sans-serif;'>
      <div>{designation} </div>
      <div>@{companyName}</div>
    </div>
    <div className='pt-2'>
       <div>{periodOfService}</div>
    </div>
    </div>
  </div>);
};

export default Experience;
