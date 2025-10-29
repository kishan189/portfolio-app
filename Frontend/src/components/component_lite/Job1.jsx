import React from 'react'
import { Button } from '../ui/button'
import { Bookmark } from 'lucide-react'
import { Avatar, AvatarImage } from '../ui/avatar'
import { Badge } from '../ui/badge'
const Job1 = () => {
    return (
        <div className='p-5 rounded-md shadow-xl bg-white border border-gray-200 mt-4 
            hover:shadow-blue-200 transition-all duration-300 ease-in-out'>
            <div className='flex items-center justify-between'>
                <p>3 days ago</p>
                <Button variant="outline" className="rounded-full cursor-pointer" size="icon">

                    <Bookmark />
                </Button>
            </div>
            <div className='flex items-center gap-2 my-2'>

                <div className='flex flex-col'>
                    <div className='flex gap-3 items-center'>
                        <Button variant="outline" size="icon">
                            <Avatar>
                                <AvatarImage src="https://1000logos.net/wp-content/uploads/2018/08/Huawei-Logo.png">

                                </AvatarImage>
                            </Avatar>
                        </Button>
                        <h1 className='font-bold'>Huawei</h1>
                    </div>
                    <p className='text-gray-500'>India</p>
                    <div>
                        <h2 className='font-bold'>Job Title</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, laborum!
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, provident.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, nemo.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid!
                        </p>
                    </div>
                    <div className='flex gap-2 items-center mt-4'>
                        <Badge className={"font-bold text-blue-600"} variant="ghost">
                            8 Position
                        </Badge>
                        <Badge className={"font-bold text-[#FA4F09]"} variant="ghost">
                            10LPA
                        </Badge>
                        <Badge className={"font-bold text-[#6B3AC2]"} variant="ghost">
                            Remote
                        </Badge>
                        <Badge className={"font-bold "} variant="ghost">
                            Full Time
                        </Badge>

                    </div>
                    <div className='flex items-center justify-between pt-3'>
                        <Button variant="outline" className="cursor-pointer">
                           <span>Details</span>
                        </Button>
                        <Button variant="outline" className="cursor-pointer text-white bg-blue-600 hover:bg-blue-700 hover:text-white">
                            <span>Save For Latter</span>

                        </Button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Job1