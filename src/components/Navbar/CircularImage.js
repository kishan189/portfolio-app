import React from 'react';

const CircularImage = ({ imgPath,altText,ringColorClass,socialProfileUrl,title ,bgColorClass}) => {
  const circleStyle = {
    
    borderRadius: '50%',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const handleDivClick = (url) => {
    window.open(url, '_blank');
  };
   
  return (
    <div style={circleStyle} className={`w-9 h-9 lg:w-10 lg:h-10 ${bgColorClass} hover:cursor-pointer ring-2 ${ringColorClass}`} title={title} onClick={()=>{handleDivClick(socialProfileUrl)}}>
    <img src={imgPath} alt={altText} className='w-6 h-6' draggable={false}/>
     </div>
  );
};

export default CircularImage;
