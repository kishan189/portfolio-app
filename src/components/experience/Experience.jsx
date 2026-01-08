import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import Timeline from './Timeline'

const Experience = () => {
  return (
    <Flex w={'100%'} direction={'column'} gap={'20px'} p={'10px 0px'}>
    <Flex w={'100%'} justifyContent={'center'} alignItems={'center'}>
    <Text 
    fontSize={["3xl","3xl","4xl","4xl"]} 
    fontWeight="bold" 
    mb="4" 
    p="10px 0px"
    data-aos="fade-up"
  >
    Experience <Text as="span" fontSize="2xl">(Latest First)</Text>
  </Text>

    </Flex>
    <Timeline/>
    </Flex>
  )
}

export default Experience
