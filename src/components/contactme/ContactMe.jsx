import React, { useState } from 'react';
import { Box, Button, Flex, FormControl, FormLabel, Input, Textarea, useToast, VStack, Heading, Text, Spinner, Image } from '@chakra-ui/react';
import emailjs from 'emailjs-com';
import ContactCard from './ContactCard';


import call from '../../images/icons/call2.svg'
import email from '../../images/icons/email.svg'
import linkedin from '../../images/icons/linkedin.svg'
import githubIcon from '../../images/icons/github3.svg'
import location from '../../images/icons/location.svg'
import SingleButton from './SingleButton';



const ContactMe = () => {

    const allSkills =[
        {
            id:1,
            title:'+917068813260',
            href:'tel:+917068813260',
            src:call,
            width:'20px',
            colorScheme: 'gray',
            idOfLink:'contact-phone'
        }
        , {
            id:2,
            title:'aktkishansingh@gmail.com',
            href:'aktkishansingh@gmail.com',
            src:email,
            width:'20px',
            colorScheme: 'gray',
            idOfLink:'contact-email'

        }
        , {
            id:3,
            title:'LinkedIn',
            href:'https://www.linkedin.com/in/kishan-singh-50a963201/',
            src:linkedin,
            width:'20px',
            colorScheme: 'gray',
            idOfLink:'contact-linkedin'

        }
        , {
            id:4,
            title:'GitHub',
            href:'https://github.com/kishan189',
            src:githubIcon,
            width:'20px',
            colorScheme: 'gray',
            idOfLink:'contact-github'

        }
    ]


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs.send('service_ukpkro9', 'template_c63at3r', formData, 'KeM66rbZCD_kb2YQ7')
      .then((response) => {
        // console.log('SUCCESS!', response.status, response.text);
        setIsLoading(false);
        setIsSubmitted(true);
        toast({
          title: "Message Sent.",
          description: "Your message has been sent successfully.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      }, (err) => {
        // console.log('FAILED...', err);
        setIsLoading(false);
        toast({
          title: "Message Failed.",
          description: "There was an issue sending your message. Please check internet connection",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      });

    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Flex direction="column" align="center" justify="center" p={'30px 0px'} >


    <Flex justifyContent={'center'} alignItems={'center'} direction={'column'} w={'100%'} gap={'20px'} p={'20px 0px'} data-aos="slide-right" pb={'50px'}>
    <Text fontSize={['x-large','x-large','x-large','x-large']} fontWeight={500}>Social Profiles </Text> 
    <Text  pt={'0px'}  fontSize={'sm'} pb={'20px'}>( Click to open/dial )</Text>
    <Flex w={'90%'} gap={'20px'} justifyContent={'center'} alignItems={'center'}  flexWrap={'wrap'}  >
        {
            allSkills.map(item=>(                
                        <SingleButton key={item.id} item={item}/>
            )
            
            )
        }
    </Flex>
    </Flex>

    <Flex justifyContent={'center'} alignItems={'center'} direction={'column'} w={'100%'} gap={'20px'} p={'20px 0px'} data-aos="slide-right" pb={'30px'}>
    <Text fontSize={['x-large','x-large','x-large','x-large']} fontWeight={500}>Address</Text> 
    <Flex w={'100%'} gap={'10px'} justifyContent={'center'} alignItems={'center'}  flexWrap={'wrap'}  >
        <Image w={'30px'} src={location} alt={'Address'} />
        <Text fontSize={'xl'}>Gorakhpur, Uttar Pradesh</Text>
    </Flex>
    </Flex>

      <Box w={{ base: '100%', md: '80%', lg: '50%' }} p={6}>
        <Heading as="h3" size="lg" mb={6} textAlign="center" data-aos="zoom-in-up" data-aos-delay="500" pb={'20px'}>Contact Me</Heading>

       

        {isLoading ? (
          <Flex justifyContent="center" alignItems="center" height="200px">
            <Spinner size="xl" />
          </Flex>
        ) : !isSubmitted ? (
          <form   onSubmit={handleSubmit} data-aos="flip-down"  data-aos-delay="600" >
            <VStack spacing={4} p={'20px'} borderRadius={'lg'} border={'1px solid #3F444E'}>
              <FormControl id="name" isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  borderRadius="md"
                />
              </FormControl>
              <FormControl id="email" isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  borderRadius="md"
                />
              </FormControl>
              <FormControl id="message" isRequired>
                <FormLabel>Message</FormLabel>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message"
                  borderRadius="md"
                />
              </FormControl>
              <Button
                type="submit"
                bg={'#B9C9EB'}
                size="lg"
                w="full"
                borderRadius="md"
                color={'black'}
              >
                Send Message
              </Button>
            </VStack>
          </form>
        ) : (
          <Box  data-aos="flip-down"  textAlign="center" p={4}>
            <Heading as="h4" size="md">Thank you for your message!</Heading>
            <Text mb={'50px'}>I'll get back to you shortly.</Text>
            <ContactCard/>
          </Box>
        )}
      </Box>
    </Flex>
  );
};

export default ContactMe;
