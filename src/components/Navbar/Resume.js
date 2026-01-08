import React from 'react';

const Resume = ({ imgPath,altText,ringColorClass ,bgColorClass,title}) => {
  

   
  const handleDownload = () => {
    // Replace 'YOUR_SERVER_ENDPOINT' with the actual server endpoint where the file is served.
    const fileUrl = 'http://localhost:4000/resume';

    // Open a new window or use a hidden iframe to initiate the file download.
    window.open(fileUrl, '_blank');
  };
  

  return (
    <div className={`flex px-3 rounded-2xl text-green-900 gap-1 Montserrat, sans-serif; flex-row justify-center items-center w-25 md:w-30 md:h-10 h-9  hover:cursor-pointer ${bgColorClass} ring-2 ${ringColorClass}`} title={title} onClick={handleDownload}>
    <div>Resume</div>
    <img src={imgPath} alt={altText} className='w-5 h-5' draggable={false}/>
     </div>
  );
};

export default Resume;
