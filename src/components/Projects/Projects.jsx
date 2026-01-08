import React from 'react';
import { Box, Image, Text, Button, SimpleGrid, Link, Icon } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons'; // Make sure to import icons
import { FaGithub } from "react-icons/fa";

import realEstateApp from '../../images/realEstateApp.png'
import digitalInvitaions from '../../images/digitalinvitations.png'
import ytMusicPlayer from '../../images/ytmusicplayer.png'
import groupon from '../../images/groupon.png'
import pharmeasy from '../../images/pharmeasy.png'
  import saasImageApp from '../../images/saasImage.png'
  import algoViewImageApp from '../../images/algoImage.png'


const projects = [
  {
    id: 31,
    title: 'SaaS Analytics Dashboard',
    image: saasImageApp,
    description: 'A full-stack SaaS dashboard with React/TypeScript frontend and Node.js/Express backend featuring real-time KPIs, interactive charts, Redux Toolkit state management, JWT authentication, and MongoDB.',
    demoLink: 'https://saas-analytics-dash.netlify.app/',
    repoLink: 'https://github.com/kishan189/saas-analytics-dashboard'
  },

  {
    id: 1,
    title: 'AlgoView',
    image: algoViewImageApp,
    description: 'Interactive visualizations for Bubble Sort, Selection Sort, Stack, and Queue to improve algorithm understanding.',
    demoLink: 'https://algoviewcw.netlify.app/',
    repoLink: 'https://github.com/NajimuddinS/NeuralNetNavigators'
  },
 
   
  // Add more projects as needed
];

const Projects = () => {
  return (
    <Box w={'80%'} mx="auto" p={'30px 0px'}>
      <Text fontSize="3xl" fontWeight="bold" mb="6" textAlign="center" data-aos="flip-right">
        My Projects
      </Text>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
        {projects.map((project,index) => (
          <Box
            key={project.id}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="md"
            cursor={'pointer'}
            className='project-card'
             _hover={{ boxShadow: 'xl' }}
             data-aos={index % 2 ==0 ?`flip-right`:`flip-left`}
          >
            <Image w={'100%'} h={'200px'} src={project.image} alt={project.title} />
            <Box p="6">
              <Text fontWeight="bold" fontSize="xl" mb="2" className='project-title'>
                {project.title}
              </Text>
              <Text mb="4" className='project-description'>
              {project.description.length > 100 
                ? `${project.description.substring(0, 100)}...` 
                : project.description}
            </Text>
                          <Box display="flex" gap={'10px'} justifyContent="space-between">
                <Link href={project.demoLink} isExternal className='project-deployed-link'>
                  <Button colorScheme="blue" rightIcon={<ExternalLinkIcon />}>
                    Live Demo
                  </Button>
                </Link>
                <Link href={project.repoLink} isExternal className='project-github-link'>
                  <Button colorScheme="gray" rightIcon={<FaGithub />}>
                    View Code
                  </Button>
                </Link>
              </Box>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Projects;
