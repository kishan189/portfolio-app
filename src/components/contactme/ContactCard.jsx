import React from 'react';
import { Box, Flex, Text, Stack, Icon, useColorModeValue, Link } from '@chakra-ui/react';
import { MdCall } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";


const ContactCard = () => {
  const cardBg = useColorModeValue('white', 'gray.800');
  const cardShadow = useColorModeValue('md', 'dark-lg');

  return (
    <Box 
      maxW="sm" 
      mx="auto" 
       rounded="lg" 
      overflow="hidden" 
      p={'10px 20px'}
      borderRadius="lg"
     >
      <Box mt={4} textAlign="center">
        <Text fontSize="xl" fontWeight="bold" fontStyle={'italic'}>
        Reach me quickly by calling
        </Text>
      </Box>

      <Box mt={2} textAlign="center">
        <Stack spacing={4} align="center">
          <Flex align="center">
            <Icon as={RiWhatsappFill} w={5} h={5} mr={2} />
            <Link href="tel:+919970758021" fontSize="lg" color="blue.500">
              +919970758021
            </Link>
          </Flex>
        </Stack>
      </Box>
    </Box>
  );
};

export default ContactCard;
