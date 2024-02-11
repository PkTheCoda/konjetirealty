import React from 'react'
import dadpic from '../Images/dadpic.jpg'
import {PhoneIcon, AtSymbolIcon} from "@heroicons/react/24/solid";

const About = () => {
  return (
    <div className='flex flex-col gap-y-20 py-20 bg-stone-50'>
        <div className="text-8xl font-caveat font-medium text-center">
            Meet Raghu
        </div>
        <div className='flex gap-x-40 justify-center items-center'>
            <div className="w-1/2 flex flex-col items-end">
                <div className='w-1/2 flex flex-col gap-y-4'>
                    <img src={dadpic} alt="Picture of Raghu!" className='w-full rounded-full shadow-lg'/>
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
            <div className="w-1/2 flex flex-col gap-y-4">
                <p className="w-1/2 text-lg font-outfit leading-loose text-slate-800">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore officiis quos voluptate, amet suscipit cum eum! Nulla repellat dicta eum incidunt ullam doloribus aliquid autem. Nihil eos in iste corporis?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus fugit animi numquam nemo quod blanditiis dolorum magni quos, illum tenetur accusamus a recusandae, aut, error possimus. Ex aliquam impedit est.
                </p>
                <a href="raghukonjeti@gmail.com" class="px-5 font-outfit py-2.5 w-max relative rounded group overflow-hidden font-medium bg-blue-100 text-blue-600 inline-block">
                    <span class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-blue-600 group-hover:h-full opacity-90"></span>
                    <span class="relative group-hover:text-white">Contact Raghu</span>
                </a>
            </div>
        </div>
        <div className="bg-blue-600 w-full text-center text-white flex justify-center my-10 -skew-y-2">
            <div className="w-3/4 text-7xl font-outfit font-light py-20">
                "We are all unique in our own way. 
                <span className="block">Buying or selling a home should be, too."</span>
            </div>
        </div>
    </div>
  )
}

export default About