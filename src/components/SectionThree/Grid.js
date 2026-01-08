import React, { useEffect, useState } from 'react';
import GridItem from './GridItem';
import LastGridItem from './LastGridItem';
import axios from 'axios';

const Grid = () => {
  const [projectDetails, setProjectDetails] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:4000/api/v1/getAllProjectCards')
      .then((response) => {
        setProjectDetails(response.data.message);
        // console.log(response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  // console.log(projectDetails);
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4   w-11/12 mx-auto ml-7 mt-10 pt-10 customCursor'>
      {projectDetails === null ? (
        <div className='flex flex-wrap mt-5 text-xl md:text-xl lg:text-xl mx-auto  font-Montserrat, sans-serif;  text-[#e4e4e7]'>
          Loading...
        </div> // Display a loading message
      ) : (
        projectDetails.map((project) => {
          return (
            <GridItem
              projectName={project.projectName}
              projectLogoUrl={project.projectLogoUrl}
              projectLogoAltText={project.projectLogoAltText}
              projectDescription={project.projectDescription}
              bgColorClass={project.bgColorClass}
              ringColorClass={project.ringColorClass}
              textColorClass={project.textColorClass}
              projectHostedLink={project.projectHostedLink}
               key={project._id}
            />
          );
        })
      )}

      <LastGridItem
        bgColor={'bg-zinc-200'}
        ringColor={'ring-zinc-300/50'}
        textColor={'text-zinc-900'}
      />
    </div>
  );
};

export default Grid;
