import { Avatar, Box, Flex, Image, Text, Wrap, WrapItem, useColorMode } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { Tilt } from 'react-tilt'

import HeroImage from '../../images/heroimg.svg'
import WordAnimation from './WordAnimation'
 const defaultOptions = {
    reverse:        false,  // reverse the tilt direction
    max:            35,     // max tilt rotation (degrees)
    perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
    speed:          4000,   // Speed of the enter/exit transition
    transition:     true,   // Set a transition on enter/exit.
    axis:           null,   // What axis should be disabled. Can be X or Y.
    reset:          true,    // If the tilt effect has to be reset on exit.
    easing:         "cubic-bezier(1.03,1.98,1.52,1.99)",    // Easing on enter/exit.
}

import AOS from 'aos';
import 'aos/dist/aos.css';

const HeroSection = () => {
    const { colorMode } = useColorMode();

    useEffect(() => {
        AOS.init({
          duration: 1200,
          once: true, // Ensures animations trigger only once
        });
      }, []);
  return (
    <Flex w={'100%'} justifyContent={'center'} padding={['1rem 0rem','1rem 0rem','3rem 0rem','4rem 0rem']} className='bgimg2'  minH={['80vh','80vh','90vh','90vh']} >
        <Flex w={['90%','90%','80%','70%']} alignItems={['center','center','center','center']}    justifyContent={['center','center','space-between','space-between']} padding={'1rem 0rem'} gap={['2rem','2rem','2rem','2rem']} direction={['column','column','row','row']} >
            <Flex    direction={'column'} gap={'2rem'} w={['100%','80%','50%','50%']} alignItems={['center','center','start','start']} justifyContent={'center'}
            data-aos="fade-up"
            data-aos-delay="300"

            >
                <Flex direction={'column'} w={'100%'} textAlign={['center','center','left','left']}  >
                <Text fontWeight={'600'} fontSize={['2xl','2xl','2xl','3xl']} >Hello<Text as={'span'} className='wave'>👋</Text> ,</Text>
                                        <Text fontWeight={'700'} fontSize={['3xl','4xl','4xl','5xl']} >I'm Web & Software Developer.</Text>
                     <Text fontSize={['2xl','2xl','2xl','3xl']} fontWeight={['500','500','500','700']}> </Text>
                </Flex>
                <Flex   direction={'column'} gap={'0px'}  alignItems={['center','center','center','center']}    justifyContent={'center'}>
                    <Text fontSize={['xl', '2xl', '2xl', '3xl']} >Currently making Web Apps with</Text>
                    <Box display={'flex'}  position={'relative'} overflow={'hidden'}   justifyContent={['left','left','left','left']}  w={'100%'}  h={['50px','50px','50px','80px']} fontSize={['3xl', '3xl', '3xl', '4xl']}  fontWeight={['500','500','500','700']}><WordAnimation  /></Box>
                </Flex>
            </Flex>

            <Flex justifyContent={'center'} w={['100%','80%','50%','50%']} padding={'10px'}  alignItems={'center'}>
                <Tilt options={defaultOptions} >
                <Image className='infinite-scale' draggable={'false'} cursor={'grab'} w={'100%'} src={HeroImage} />
                </Tilt>
            </Flex>
            </Flex>
    </Flex>
  )
}

export default HeroSection
