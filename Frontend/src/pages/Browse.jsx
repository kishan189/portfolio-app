import Job1 from '@/components/component_lite/Job1'
import Navbar from '@/components/component_lite/Navbar'
import React from 'react'
const jobsArray = [1, 2, 3, 4, 5, 6, 7, 8,1,1,1,1,1,1,1,1,1,11,1]

const Browse = () => {
  return (
    <div className=''>
      <Navbar/>
     <div className='max-w-7xl mx-auto '>
       <div>

       </div>
        {
      <div className='flex-1 max-h-[85vh] overflow-y-auto'>
                                        <div className='grid grid-cols-3 gap-4'>
                                            {
                                                jobsArray?.map((job, index) => (
                                                    <Job1 key={index}/>
                                                ))
                                            }
                                        </div>
        </div>
     }
     </div>
 
    </div>
  )
}

export default Browse