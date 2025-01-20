import React from 'react'
import dadpic from '../Images/dadpic.jpg'
import {PhoneIcon, AtSymbolIcon} from "@heroicons/react/24/solid";

const About = () => {
  return (
    <div className='flex flex-col gap-y-20 py-20 bg-stone-50' id='about'>
        <div className="text-8xl font-outfit font-medium text-blue-900 text-center">
            Meet <span className="font-caveat">Raghu</span>
        </div>
        <div className='flex lg:flex-row flex-col gap-x-40 justify-center items-center'>
            <div className="w-full lg:w-1/2 flex flex-col items-center pb-10 lg:pb-0 lg:items-end">
                <div className='w-2/3 lg:w-1/2 flex flex-col gap-y-4'>
                    {/* <img src={dadpic} alt="Picture of Raghu!" className='w-full rounded-full shadow-lg'/> */}
                    <h2 className='text-center font-poppins text-4xl'>
                        Raghu Konjeti
                    </h2>
                    <div className='flex items-around justify-center flex-col items-center'>
                        <div className='flex gap-x-2 items-center font-outfit'>
                            <PhoneIcon className='h-4 w-4'/>
                            <p>804-349-9434</p>
                        </div>
                        <div className='flex gap-x-2 items-center font-outfit'>
                            <AtSymbolIcon className='h-4 w-4'/>
                            <p>raghukonjeti.realtor@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-1/2 flex flex-col gap-y-4 lg:items-start items-center">
                <p className="w-full lg:w-2/3 lg:px-0 px-10 text-base text-center lg:text-start lg:text-lg font-outfit tracking-wide text-slate-800">
                    A proud Richmond resident for over a decade, Raghu Konjeti brings unparalleled local expertise to the real estate scene. With an in-depth understanding of Richmond and its surrounding areas, Raghu is your trusted guide to navigate the dynamic housing market. Whether you're on the hunt for your dream home or looking to maximize your property's value, Raghu's decade-long immersion in the Richmond community positions him as your dedicated ally in achieving your real estate goals. Let's make your real estate a worthful one.
                </p>
                <a href="mailto:raghukonjeti.realtor@gmail.com" class="px-5 font-outfit py-2.5 w-max relative rounded group overflow-hidden font-medium bg-blue-100 text-blue-600 inline-block">
                    <span class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-blue-600 group-hover:h-full opacity-90"></span>
                    <span class="relative group-hover:text-white">Contact Raghu</span>
                </a>
            </div>
        </div>
        <div className="bg-teal-600 w-full text-center text-white flex justify-center my-10 -skew-y-2">
            <div className="w-3/4 text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-outfit font-light py-20">
                "We are all unique in our own way. 
                <span className="block">Buying or selling a home should be, too."</span>
            </div>
        </div>
    </div>
  )
}

export default About