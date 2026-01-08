import React from 'react';
import { Button, Flex, Text, IconButton, useColorModeValue, Box } from '@chakra-ui/react';
import { DownloadIcon } from '@chakra-ui/icons';

const MiniDownload = ({onClose}) => {
  const bgColor = useColorModeValue("#EDBB3C", "#EDBB3C");
  const color = useColorModeValue("#EDF2F7", "#2D3748");
  const hoverBgColor = useColorModeValue("#C9A225", "#C9A225");
  const hoverColor = useColorModeValue("#1A202C", "#E2E8F0");

  const handleDownload = () => {
    const viewLink = document.createElement('a');
    viewLink.href = 'https://drive.google.com/file/d/1Bzr-nvW-OYErlkwCN4P5eeki2NP1tL_j/view?usp=sharing'; // View link
    viewLink.target = '_blank';
    viewLink.click();

    const downloadLink = document.createElement('a');
    downloadLink.href = 'https://drive.google.com/uc?export=download&id=1Bzr-nvW-OYErlkwCN4P5eeki2NP1tL_j'; // Direct download link
    downloadLink.download = 'Shrihari_Jadhav_resume.pdf';
    downloadLink.click();
    onClose();
  };

  return (
    <Button
    onClick={handleDownload}
    bg={bgColor}
    color={color}
    _hover={{
      bg: hoverBgColor,
      color: hoverColor,
    }}
    padding={'0px 10px'}
    pl={'20px'}
    rounded={'lg'}
    fontSize={['md', 'lg', 'xl', 'xl']}
  >
    <Flex justifyContent={'space-between'} alignItems={'center'} className='nav-link resume'>
      <Text>Resume</Text>
      <Box as="span" ml={2}>
        <DownloadIcon />
      </Box>
    </Flex>
  </Button>
  );
};

export default MiniDownload;
