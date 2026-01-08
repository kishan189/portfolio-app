import React from 'react';
import { Box, Flex, Text, useBreakpointValue, useColorMode } from '@chakra-ui/react';
import ReadOnlyContent from '../ReadOnlyMarkdown';

const experiences = [
  {
    role: "Frontend Developer",
    company: `**Pepsales AI** *(Bangalore)*`,
    duration: "Jan 2025 - Present",
    description: `
- Implemented **Role-based access controls** for enhanced security.  
- Created a **Notification system**  with Pusher (socket).  
- Built an **Analytics dashboard** for an overview of the entire application.  
`
  },
,
  {
    role: "Bachelor of Technology (AKTU)",
    company: "Mechanical Engineering",
    duration: "Jun 2016 - May 2020",
    description: ``
  },
  {
    role: "Higher Secondary",
    company: "UP Board",
    duration: "Jun 2015 - May 2016",
    description: `- Secured **81% marks**.`
  },
  {
    role: "Secondary",
    company: "UP Board",
    duration: "Jun 2013 - May 2014",
    description: `- Secured **83% marks**.`
  }
];



const ExperienceCard = ({ experience, isLeft,index }) => {

    const {colorMode} = useColorMode()
    return (<Flex
        direction="column"
        alignItems={isLeft ? 'flex-end' : 'flex-start'}
        w="full"
        mb={10}
        position="relative"
    
       >
        <Box
          bg={colorMode=='dark'?'#B9C9EB':'#B9C9EB'}
          p={4}
          borderRadius="md"
          w={{ base: '89%', md: '35%' }}
          boxShadow="md"
          position="relative"
          zIndex={1}
          ml={isLeft ? 'initial' : ['7%','5%','51.5%','51.1%']}
          mr={isLeft ? '50.8%' : 'initial'}
        color={'black'}
        data-aos={index %2 ===0 ?"fade-up-right":"fade-up-left"}
        data-aos-delay="0"
        data-aos-duration="700"
        >
          <Text fontSize="xl" fontWeight="bold">
            {experience.role}
          </Text>
          <ReadOnlyContent markdownContent={experience.company}/>

          <Text fontSize="sm" mt={"-14px"} mb={"8px"} color="gray.700">
            {experience.duration}
          </Text>
          <ReadOnlyContent markdownContent={experience.description}/>

        </Box>
        <Box
          border="1px solid gray"
          borderRadius="full"
          w="10px"
          h="10px"
          bg="#EDBB3C"
          position="absolute"
          left={{ base: '10px', md: isLeft ? 'calc(50% - 5px)' : 'calc(50% - 5px)' }}
          right={{ md: isLeft ? 'initial' : 'calc(50% - 5px)' }}
          top="50%"
          transform="translateY(-50%)"
          zIndex={1}
          ml={isLeft?'2px':'3px'}
          data-aos="fade-up"
        />
      </Flex>)
    // comment
  
};

const Timeline = () => {
  const isMobile = useBreakpointValue({ sm: true,base:true,md:false, lg: false });

  return (
    <Flex direction="column" alignItems="center" position="relative"  w="100%" >
   

      <Box
        borderLeft={{ base: '4px solid gray', md: 'none' }}
        position="absolute"
        left={{ base: '15px', md: '50%' }}
        height="95%"
        zIndex={0}
       data-aos="fade-up"

      />
      <Box
        borderRight={{ base: 'none', md: '4px solid gray' }}
        position="absolute"
        left={{ base: '15px', md: '50%' }}
        height="95%"
        zIndex={0}
        data-aos="fade-up"

      />
      {experiences.map((exp, index) => (
        <ExperienceCard key={index} index={index} experience={exp} isLeft={!isMobile && index % 2 === 0} />
      ))}
    </Flex>
  );
};

export default Timeline;
