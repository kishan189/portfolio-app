import React from 'react';
import CircularImage from './CircularImage';
import Resume from './Resume';
import linkedInImg from '../../images/linkedIn.svg'
import githubImg from '../../images/github.svg'
import twitterImg from '../../images/twitter.svg'
import resumeDownload from '../../images/resumeDownload.svg'
import harryLogo from '../../images/shrihariLogo.png'
// import myLogo from '../../images/myLogo.png'

const Navbar = () => {
 
  return (
    <nav className='absolute w-full mx-auto z-10 py-4 bg-transparent pl-10'>
      <div className='container mx-auto flex px-2 justify-between  items-center w-11/12'>
        <div className=' font-bold text-2xl text-yellow-200 hidden  lg:flex'>Kishan Singh</div>
        <div className=' font-bold text-2xl text-yellow-200 flex  lg:hidden'>
        <img src={harryLogo} alt='sj' className='w-10 h-10'/>

        </div>

        {/* Nav links */}
        <div
         
        >
        <div className='flex flex-row justify-center gap-3 items-end'>
        <CircularImage socialProfileUrl={'https://www.linkedin.com/in/kishan-singh-50a963201/'} title={'LinkedIn'} imgPath={linkedInImg} altText={'LinkedIn'} bgColorClass={'bg-blue-200'}  ringColorClass={'ring-blue-500/50'}/>
         <CircularImage socialProfileUrl={'https://github.com/kishan189'} title={'Github'} imgPath={githubImg} altText={'GitHub'} bgColorClass={'bg-fuchsia-200'} ringColorClass={'ring-fuchsia-500/50'}/>
          <Resume title={'Click to download'}  imgPath={resumeDownload} altText={'Twitter'} bgColorClass={'bg-green-200'} ringColorClass={'ring-green-500/50'}/>
       </div>
           
     
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
