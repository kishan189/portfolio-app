import React, { useState } from 'react';
import { Box, Text, Stack, Badge, Flex, Image, Button } from '@chakra-ui/react';
import VerticalLineWithText from './VerticalLineWithText';
import myImage from '../../images/profile-pic.png'
import { Link as ScrollLink } from 'react-scroll';
const About = () => {
    const [isShow,setIsShow] = useState(false);
  return (
    <Flex
  direction="column"
  mx="auto"
    overflow="hidden"
   w="90%"
  justifyContent="center"
  alignItems="center"
  p="40px 0px"
  className='about section'
>
  <Flex w="90%" direction="column" justifyContent="center" alignItems="center" gap="20px">
    <Text fontSize="4xl" fontWeight="bold" mb="4" data-aos="zoom-in">About Me</Text>
    <Flex w={'100%'} p={'10px 0px'} direction={['column','column','row','row']} pb={'20px'}   alignItems={'center'} data-aos="fade-up-right">
        <Image p={'10px 20px'} borderRadius={"full"}  id='home-img'  w={'280px'} src={myImage} />
        <Flex direction={'column'} w={['100%','100%','100%','35%']} p={'10px 5px'} >
            <Text id='user-detail-name' borderLeft={["5px solid gray","5px solid gray","none","none"]} fontSize={['2xl','3xl','4xl','4xl']} fontWeight={'700'} pl="10px" pb={'10px'}>
            Kishan Singh
            </Text>
            
            <Text fontWeight={'500'} pl="10px">
            Creating digital experiences so fluid, they feel like magic. <Text as={'span'}>🧙‍♂️💻😉</Text>
            </Text>
            <ScrollLink to={"contact"} smooth={true} duration={500}>
            <Button mt={"15px"} ml={"10px"} w={"max-content"} variant="outline" borderColor="yellow.400" color="yellow.400" _hover={{ bg: "yellow.400", color: "black" }}>
  Get in Touch
</Button>
            </ScrollLink>
            
        </Flex>
    </Flex>
  
    <Stack spacing={3} data-aos="fade-up-left" id='user-detail-intro'>
  <Text fontSize="large">
    <Text as={'span'}></Text>
    <Badge fontSize="medium" colorScheme="teal" wordBreak="break-word">FRONTEND DEVELOPER</Badge> at Pepsales AI, with expertise in building real-time, scalable applications.
  </Text>
  <Text fontSize="large">
  At Pepsales AI, I specialize in real-time UI development, optimizing frontend performance,  
  and implementing <Badge fontSize="medium" colorScheme="purple" wordBreak="break-word">role-based access controls</Badge>.  
  Engineered an <Badge fontSize="medium" colorScheme="purple" wordBreak="break-word">AI-powered assistance </Badge>  
  module with low-latency socket communication and developed a  
  <Badge fontSize="medium" colorScheme="purple" wordBreak="break-word">Analytics dashboard</Badge> for overview of user's & team's activities.  
  Experienced in developing dynamic and user-friendly applications using  

  <Badge fontSize="medium" colorScheme="blue" wordBreak="break-word">REACT</Badge>,  
  <Badge fontSize="medium" colorScheme="blue" wordBreak="break-word">NODE.JS</Badge>,  
  <Badge fontSize="medium" colorScheme="blue" wordBreak="break-word">EXPRESS.JS</Badge>, and  
  <Badge fontSize="medium" colorScheme="blue" wordBreak="break-word">MONGODB</Badge>.
</Text>



  {
    isShow && (
      <Flex direction={'column'}>
        <Text fontSize="large">
    Passionate about creating scalable and high-performance applications 
    with a strong backend understanding and hands-on experience in real-time systems.
  </Text>
        <br />

        <Text fontSize="large">
          Strong foundation in  
          <Badge fontSize="medium" colorScheme="red" wordBreak="break-word">JAVASCRIPT</Badge>,  
          <Badge fontSize="medium" colorScheme="red" wordBreak="break-word">HTML5</Badge>, and  
          <Badge fontSize="medium" colorScheme="red" wordBreak="break-word">CSS</Badge>,  
          ensuring seamless and engaging user experiences.  
          Quick to adapt to new technologies and stacks with  
          <Badge fontSize="medium" colorScheme="purple" wordBreak="break-word">minimal training.</Badge>
        </Text>
        <br />

        <Text fontSize="large">
          Currently expanding my skills in  
          <Badge fontSize="medium" colorScheme="teal" wordBreak="break-word">Next.js</Badge>,  
          {/* <Badge fontSize="medium" colorScheme="teal" wordBreak="break-word">MySQL</Badge>, and   */}
          <Badge fontSize="medium" colorScheme="teal" wordBreak="break-word">serverless technologies</Badge>.
        </Text>
      </Flex>
    )
  }




  

<Button   w={"max-content"} bgColor={"yellow.400"} onClick={()=>{setIsShow(!isShow)}} maxW={'max-content'} borderColor="yellow.400" color="black" _hover={{ bg: "yellow.400", color: "black" }}>
    {isShow ? 'Read less' : 'Read more'}
  </Button>
</Stack>

  </Flex>

   
</Flex>

  );
};

export default About;
