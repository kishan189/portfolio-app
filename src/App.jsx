import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DarkModeToggle from './components/DarkModeToggle'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection/HeroSection'
import { Box, Flex, useColorMode } from '@chakra-ui/react'
import WhiteSpace from './components/WhiteSpace'
import About from './components/aboutSection/About'
import Projects from './components/Projects/Projects'
import Timeline from './components/experience/Timeline'
import Experience from './components/experience/Experience'
import Skills from './components/skills/Skills'
import Statistics from './components/githubStats/Statistics'
import ContactMe from './components/contactme/ContactMe'
import ContactCard from './components/contactme/ContactCard'
import Footer from './components/footer/Footer'
 
import AOS from 'aos';
import 'aos/dist/aos.css';
import ScrollToTopButton from './components/ScrollToTopButton'
import FloatingChatbot from './components/FloatingChatbot'

 
function App() {
  const [count, setCount] = useState(0)
  const {toggleColorMode} = useColorMode();

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      delay: 300, // Delay (in ms) before the animation starts
      easing: 'ease-in-out', // Animation easing
      once: false, // Whether animation should happen only once - while scrolling down
      mirror: true, // Whether elements should animate out while scrolling past them
    });

    toggleColorMode();
  },[]);

  return (
    <Flex direction={'column'} justifyContent={'center'} alignContent={'center'} w={'100%'} overflowX={'hidden'} >
     <Navbar/>
     <WhiteSpace/>
     
      <Box  id="home">
        <HeroSection />
      </Box>
      <Box  className='section' id="about">
        <About />
      </Box>
      <Box  className='section' id="projects">
        <Projects />
      </Box>
      <Box  className='section' id="experience">
        <Experience />
      </Box>
      <Box  className='section' id="skills">
        <Skills />
      </Box>
      {/* <Box  className='section' id="statistics">
        <Statistics username="KishanPepSales" />
      </Box> */}
      <Box  className='section' id="contact">
        <ContactMe />
      </Box>
    <Footer/>
     

    <ScrollToTopButton/>
    {/* <FloatingChatbot/> */}
     </Flex>
  )
}

export default App
