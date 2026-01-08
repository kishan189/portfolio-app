import { Badge, Button, Icon, Image, Text, useColorMode } from '@chakra-ui/react';
import React from 'react';

const SingleButton = ({ item }) => {
  const { colorMode } = useColorMode();

  const handleClick = () => {
    window.open(item.href, '_blank');
  };

  return (
    <Button 
      data-aos="fade-up" 
      data-aos-delay="300" 
      _hover={{ transform: 'scale(1.1)', outline: '1px solid gray', bg: 'gray.500' }}
      title={'Click Here'} 
      display={'flex'} 
      justifyContent={'center'} 
      alignItems={'center'} 
      gap={'10px'} 
      fontSize={'large'} 
      p={'5px 15px'} 
      rounded={'md'} 
      colorScheme={'gray'}
      onClick={handleClick}
    >
      <Image w={item.width} src={item.src} alt={'icon'} />
      <Text id={item.idOfLink}>{item.title}</Text>
    </Button>
  );
}

export default SingleButton;
