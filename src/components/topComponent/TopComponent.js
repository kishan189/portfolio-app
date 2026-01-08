import React from 'react'
import './infiniteGradient.css'

const TopComponent = ({handleScrollToSection,contactMeRef}) => {
  return (
    <div className='flex flex-row justify-center items-center Montserrat, sans-serif; font-normal text-white text-sm lg:text-lg  w-full h-8 hover:cursor-pointer   py-1  infiniteGradient' 
    onClick={()=>{handleScrollToSection(contactMeRef)}}>
         
    Like my work ? Click here to Hire me as a Software Developer
     </div>
  )
}

export default TopComponent;
