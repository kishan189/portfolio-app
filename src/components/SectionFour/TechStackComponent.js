import React from 'react';

const TechStackComponent = ({ filePath, altText, logoWidth }) => {
  // console.log('demo', filePath, altText, logoWidth);
  return (
    <img
      src={filePath}
      alt={altText}
      width={logoWidth}
      className='aspect-auto'
      draggable={false}
    />
  );
};

export default TechStackComponent;
/*import React from 'react';

const TechStackComponent = ({ filePath, altText, logoWidth }) => {
  console.log(filePath);
  console.log(altText);

  console.log(logoWidth);

  return (
    <img
      src={'./images/techStackImages/bootstrapSvgImage.svg'}
      alt={'demo'}
      width={100}
      className='aspect-auto'
      draggable='false'
    />
  );
};

export default TechStackComponent;
*/
