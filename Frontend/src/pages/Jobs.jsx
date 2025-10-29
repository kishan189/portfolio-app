import FilterDrawer from '@/components/component_lite/FilterDrawer'
import Job1 from '@/components/component_lite/Job1'
import Navbar from '@/components/component_lite/Navbar'
import React from 'react'

const jobsArray = [1, 2, 3, 4, 5, 6, 7, 8,1,1,1,1,1,1,1,1,1,11,1]
export const Jobs = () => {
    return (
        <div className=''>
            <Navbar />
            <div className='max-w-7xl mx-auto '>
                <div className='flex w-full gap-5'>
                    <div className='w-[20%] pt-2 '>
                        <FilterDrawer />
                    </div>
                    <div className=' flex flex-col w-[80%] '>
                        {
                            jobsArray?.length <= 0 ? (
                                <div>
                                    <span className='text-red-300'>Job not found</span>
                                </div>
                            ) :
                                (
                                    <div className='flex-1 max-h-[88vh] overflow-y-auto'>
                                        <div className='grid grid-cols-3 gap-4'>
                                            {
                                                jobsArray?.map((job, index) => (
                                                    <Job1 key={index}/>
                                                ))
                                            }
                                        </div>
                                    </div>
                                )
                        }

                    </div>

                </div>

            </div>
        </div>
    )
}
