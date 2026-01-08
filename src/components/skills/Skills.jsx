import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

import js from '../../images/icons/javascript.svg'
import java from '../../images/icons/java.svg'
import html from '../../images/icons/html5.svg'
import css from '../../images/icons/css3.svg'
import c from '../../images/icons/c_p.svg'
import markdown from '../../images/icons/markdown2.svg'

// framework specific
import reactLogo from '../../images/icons/react.svg'
import node from '../../images/icons/node2.svg'
import next from '../../images/icons/nextjs3.svg'

// CSS Framework/Library/Pre-processors:

import tailwind from '../../images/icons/tailwind.svg'
import scss from '../../images/icons/scss2.svg'
import bootstrap from '../../images/icons/bootstrap.svg'
import chakra from '../../images/icons/chakraui.svg'
import material from '../../images/icons/material.svg'


// databases 
import mongodb from '../../images/icons/mongodb.svg'
import mysql from '../../images/icons/mysql.svg'
import appwrite from '../../images/icons/appwrite.svg'
import firebase from '../../images/icons/firebase.svg'


import expressLogo from '../../images/icons/expressjs.png'

import github from '../../images/icons/github3.svg'
import git from '../../images/icons/git.svg'

import SingleSkill from './SingleSkill'

 


const Skills = () => {
    const allSkills =[
        {
            id:1,
            title:'JavaScript',
            category:'language',
            src:js,
            width:'20px',

            colorScheme: 'gray'
        }
        ,{
            id:3,
            title:'Html5',
            category:'language',
            src:html,
            width:'25px',

            colorScheme: 'teal'

        }
        ,{
            id:4,
            title:'CSS3',
            category:'language',
            src:css,
            width:'25px',
            colorScheme: 'teal'

        },
       
        {
            id:7,
            title:'React',
            category:'js-framework-or-library',
            src:reactLogo,
            width:'20px',
            colorScheme: 'yellow'
        },
        {
            id:8,
            title:'Node.js',
            category:'js-framework-or-library',
            src:node,
            width:'20px',
            colorScheme: 'yellow'
        },
         {
            id:10,
            title:'Tailwind CSS',
            category:'css-related',
            src:tailwind,
            width:'20px',
            colorScheme: 'yellow'
        },
        {
            id:12,
            title:'Chakra UI',
            category:'css-related',
            src:chakra,
            width:'20px',
            colorScheme: 'yellow'
        },
        
        {
            id:14,
            title:'Material UI',
            category:'css-related',
            src:material,
            width:'20px',
            colorScheme: 'yellow'
        },

        {
            id:15,
            title:'MongoDB',
            category:'database',
            src:mongodb,
            width:'20px',
            colorScheme: 'yellow'
        },
        {
            id:16,
            title:'MySQL',
            category:'database',
            src:mysql,
            width:'25px',
            colorScheme: 'yellow'
        },
        

        {
            id:19,
            title:'Node.js',
            category:'backend',
            src:node,
            width:'20px',
            colorScheme: 'yellow'
        },
        {
            id:20,
            title:'Express.js',
            category:'backend',
            src:expressLogo,
            width:'20px',
            colorScheme: 'yellow'
        },
        
        {
            id:22,
            title:'Git',
            category:'version',
            src:git,
            width:'25px',
            colorScheme: 'yellow'
        },
        {
            id:23,
            title:'GitHub',
            category:'version',
            src:github,
            width:'25px',
            colorScheme: 'yellow'
        },
        
        

         
        
        
        
    ]
  return (
    <Flex w={'100%'} justifyContent={'center'} alignItems={'center'} p={'20px 0px'}>
        <Flex w={'80%'} direction={'column'} justifyContent={'center'} alignItems={'center'}>
        <Text fontSize={["3xl","3xl","4xl","4xl"]} fontWeight="bold" mb="4" data-aos="zoom-in">Skills</Text>
        

            <Flex justifyContent={'center'} alignItems={'center'} direction={'column'} w={'100%'} gap={'20px'} p={'20px 0px'} data-aos="slide-right">
            <Text fontSize={['x-large','x-large','x-large','x-large']} >JS Framework / Library</Text> 
            <Flex w={'100%'} gap={'20px'} justifyContent={'center'} alignItems={'center'}  flexWrap={'wrap'}  >
                {
                    allSkills.map(item=>{
                        if(item.category === 'js-framework-or-library'){
                            return (
                                <SingleSkill key={item.id} item={item}/>
                            )
                        }
                    }
                    )
                }
            </Flex>
            </Flex>

            <Flex justifyContent={'center'} alignItems={'center'} direction={'column'} w={'100%'} gap={'20px'}   p={'20px 0px'} data-aos="slide-left">
                    <Text fontSize={['x-large','x-large','x-large','x-large']}>Languages</Text> 
                    <Flex w={'100%'} gap={'20px'} justifyContent={'center'} alignItems={'center'} flexWrap={'wrap'} >
                        {
                            allSkills.map(item=>{
                                if(item.category === 'language'){
                                    return (
                                        <SingleSkill key={item.id} item={item}/>
                                    )
                                }
                            }
                            )
                        }
                    </Flex>
            </Flex>

            <Flex justifyContent={'center'} alignItems={'center'} direction={'column'} w={'100%'} gap={'30px'} mt={'10px'}   p={'10px 0px'} data-aos="slide-right">
            <Text fontSize={['x-large','x-large','x-large','x-large']}>CSS Framework / Library / Pre-processors</Text> 
            <Flex w={'100%'} gap={'20px'} justifyContent={'center'} alignItems={'center'}  flexWrap={'wrap'} >
                {
                    allSkills.map(item=>{
                        if(item.category === 'css-related'){
                            return (
                                <SingleSkill key={item.id} item={item}/>
                            )
                        }
                    }
                    )
                }
            </Flex>
            </Flex>

            <Flex justifyContent={'center'} alignItems={'center'} direction={'column'} w={'100%'} gap={'20px'} mt={'10px'}   p={'10px 0px'} data-aos="slide-left">
            <Text fontSize={['x-large','x-large','x-large','x-large']}>Backend</Text> 
            <Flex w={'100%'} gap={'20px'} justifyContent={'center'} alignItems={'center'}  flexWrap={'wrap'} >
                {
                    allSkills.map(item=>{
                        if(item.category === 'backend'){
                            return (
                                <SingleSkill key={item.id} item={item}/>
                            )
                        }
                    }
                    )
                }
            </Flex>
            </Flex>

            <Flex justifyContent={'center'} alignItems={'center'} direction={'column'} w={'100%'} gap={'20px'} mt={'10px'}   p={'10px 0px'} data-aos="slide-right">
            <Text fontSize={['x-large','x-large','x-large','x-large']}>Databases</Text> 
            <Flex w={'100%'} gap={'20px'} justifyContent={'center'} alignItems={'center'}  flexWrap={'wrap'} >
                {
                    allSkills.map(item=>{
                        if(item.category === 'database'){
                            return (
                                <SingleSkill key={item.id} item={item}/>
                            )
                        }
                    }
                    )
                }
            </Flex>
            </Flex>

            <Flex  justifyContent={'center'} alignItems={'center'} direction={'column'} w={'100%'} gap={'20px'} mt={'10px'}    p={'10px 0px'} data-aos="slide-left">
            <Text fontSize={['x-large','large','x-large','x-large']}>Version Control</Text> 
            <Flex w={'100%'} gap={'20px'} justifyContent={'center'} alignItems={'center'}  flexWrap={'wrap'} >
                {
                    allSkills.map(item=>{
                        if(item.category === 'version'){
                            return (
                                <SingleSkill key={item.id} item={item}/>
                            )
                        }
                    }
                    )
                }
            </Flex>
            </Flex>

        </Flex>
    </Flex>
  )
}

export default Skills
