import React, { useEffect, useState } from 'react';
import FourthSectionImage from '../../images/FourthSectionImage.svg';
import TechStackComponent from './TechStackComponent';

import axios from 'axios';

const FourthSection = () => {
  const [stackArray, setStackArray] = useState(null);

  // http://localhost:4000/api/v1/getAllTechStack
  useEffect(() => {
    axios
      .get('http://localhost:4000/api/v1/getAllTechStack')
      .then((res) => {
        setStackArray(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // console.log('state', stackArray);

  return (
    <div className='flex flex-col items-center justify-center mt-10 md:mt-20 lg:mt-20'>
      <div className=' flex flex-row  items-center justify-center  text-3xl md:text-5xl lg:text-5xl   font-Montserrat, sans-serif; font-bold  text-[#e4e4e7]  w-full h-10v  customCursor  '>
        Tech Stack
      </div>
      <div className='flex flex-row justify-center items-center w-11/12  h-60v md:h-80v lg:h-80v customCursor mt-1 md:mt-10'>
        <div className='flex flex-col h-full w-full  justify-centers'>
          <div className='flex flex-wrap mt-5 text-xl md:text-2xl lg:text-2xl mx-auto  font-Montserrat, sans-serif;  text-[#e4e4e7]'>
            Language
          </div>
          {/*Code to display languages starts here*/}

          {stackArray === null ? (
            <div className='flex flex-wrap mt-5 text-xl md:text-xl lg:text-xl mx-auto  font-Montserrat, sans-serif;  text-[#e4e4e7]'>
              Loading...
            </div> // Display a loading message
          ) : (
            <div className='flex flex-wrap w-full justify-center gap-5    mx-auto mt-5 '>
              {stackArray
                .filter((item) => item.category === 'language')
                .map((item) => {
                  return (
                    <TechStackComponent
                      filePath={item.imageUrl}
                      altText={item.altText}
                      logoWidth={item.widthOfImage}
                      key={item._id}
                    />
                  );
                })}
            </div>
          )}
          {/*Code to display languages ends here*/}

          {/*Code to display Js frameworks starts here*/}
          <div className='flex flex-wrap mt-5 text-xl md:text-2xl lg:text-2xl mx-auto  font-Montserrat, sans-serif;  text-[#e4e4e7]'>
            JS Library / Frameworks
          </div>
          {stackArray === null ? (
            <div className='flex flex-wrap mt-5 text-xl md:text-xl lg:text-xl mx-auto  font-Montserrat, sans-serif;  text-[#e4e4e7]'>
              Loading...
            </div> // Display a loading message
          ) : (
            <div className='flex flex-wrap w-full justify-center gap-5    mx-auto mt-5 '>
              {stackArray
                .filter((item) => item.category === 'js_framework_or_library')
                .map((item) => {
                  return (
                    <TechStackComponent
                      filePath={item.imageUrl}
                      altText={item.altText}
                      logoWidth={item.widthOfImage}
                      key={item._id}
                    />
                  );
                })}
            </div>
          )}
          {/*Code to display JS frameworks ends here*/}

          {/*Code to display css related starts here*/}
          <div className='flex flex-wrap mt-5 text-xl md:text-2xl lg:text-2xl mx-auto  font-Montserrat, sans-serif;  text-[#e4e4e7]'>
            CSS Framework / Library / Preprocessors
          </div>
          {stackArray === null ? (
            <div className='flex flex-wrap mt-5 text-xl md:text-xl lg:text-xl mx-auto  font-Montserrat, sans-serif;  text-[#e4e4e7]'>
              Loading...
            </div> // Display a loading message
          ) : (
            <div className='flex flex-wrap w-full justify-center gap-5    mx-auto mt-5 '>
              {stackArray
                .filter((item) => item.category === 'css_related')
                .map((item) => {
                  return (
                    <TechStackComponent
                      filePath={item.imageUrl}
                      altText={item.altText}
                      logoWidth={item.widthOfImage}
                      key={item._id}
                    />
                  );
                })}
            </div>
          )}
          {/*Code to display css related ends here*/}

          {/*Code to display database starts here*/}
          <div className='flex flex-wrap mt-5 text-xl md:text-2xl lg:text-2xl mx-auto  font-Montserrat, sans-serif;  text-[#e4e4e7]'>
            Databases
          </div>
          {stackArray === null ? (
            <div className='flex flex-wrap mt-5 text-xl md:text-xl lg:text-xl mx-auto  font-Montserrat, sans-serif;  text-[#e4e4e7]'>
              Loading...
            </div> // Display a loading message
          ) : (
            <div className='flex flex-wrap w-full justify-center gap-5    mx-auto mt-5 '>
              {stackArray
                .filter((item) => item.category === 'database')
                .map((item) => {
                  return (
                    <TechStackComponent
                      filePath={item.imageUrl}
                      altText={item.altText}
                      logoWidth={item.widthOfImage}
                      key={item._id}
                    />
                  );
                })}
            </div>
          )}
          {/*Code to display database ends here*/}

          {/*Code to display version_control starts here*/}
          <div className='flex flex-wrap mt-5 text-xl md:text-2xl lg:text-2xl mx-auto  font-Montserrat, sans-serif;  text-[#e4e4e7]'>
            Version Control
          </div>
          {stackArray === null ? (
            <div className='flex flex-wrap mt-5 text-xl md:text-xl lg:text-xl mx-auto  font-Montserrat, sans-serif;  text-[#e4e4e7]'>
              Loading...
            </div> // Display a loading message
          ) : (
            <div className='flex flex-wrap w-full justify-center gap-5    mx-auto mt-5 '>
              {stackArray
                .filter((item) => item.category === 'version_control')
                .map((item) => {
                  return (
                    <TechStackComponent
                      filePath={item.imageUrl}
                      altText={item.altText}
                      logoWidth={item.widthOfImage}
                      key={item._id}
                    />
                  );
                })}
            </div>
          )}
          {/*Code to display version_control ends here*/}
        </div>

        <div className='  flex-row w-11/12 h-full  hidden md:flex items-center justify-center lg:-mt-10'>
          <img
            src={FourthSectionImage}
            alt='techStack '
            className='w-full  h-full mx-auto -translate-y-5 transform -scale-x-110'
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
