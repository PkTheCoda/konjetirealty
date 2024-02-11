import React from 'react'
import richmond from '../Images/richmond.jpg'
import modern1 from '../Images/modern1.jpg'
import modern2 from '../Images/modern2.jpg'
import modern3 from '../Images/modern3.jpg'

const Places = () => {
  return (
    <div className="w-full flex flex-col items-between gap-y-10 py-20 relative" id='locations'>
        <h1 className='text-4xl md:text-5xl lg:text-7xl font-light text-center font-outfit'>Where Our <span className="text-teal-600 underline font-medium">Magic Works</span></h1>
        <div className='flex flex-col gap-y-4 items-center'>
            <article class="w-11/12 lg:w-3/4 relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-80">
                <img src={richmond} alt="University of Southern California" class="absolute inset-0 h-full w-full object-cover" />
                <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                <h3 class="z-10 mt-3 text-3xl font-bold text-white">Greater Richmond Area</h3>
                <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">City of Lovers</div>
            </article>
            <div className='flex lg:flex-row flex-col gap-x-2 w-full lg:w-3/4 lg:px-0 px-10 gap-y-4'>
                <article class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-60 w-full lg:w-1/3 mx-auto">
                    <img src={modern1} alt="University of Southern California" class="absolute inset-0 h-full w-full object-cover"/>
                    <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                    <h3 class="z-10 mt-3 text-3xl font-bold text-white">Henrico County</h3>
                    <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">Virginia</div>
                </article>
                <article class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-60 w-full lg:w-1/3 mx-auto">
                    <img src={modern2} alt="University of Southern California" class="absolute inset-0 h-full w-full object-cover"/>
                    <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                    <h3 class="z-10 mt-3 text-3xl font-bold text-white">Chesterfield County</h3>
                    <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">Virginia</div>
                </article>
                <article class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-60 w-full lg:w-1/3 mx-auto">
                    <img src={modern3} alt="University of Southern California" class="absolute inset-0 h-full w-full object-cover"/>
                    <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                    <h3 class="z-10 mt-3 text-3xl font-bold text-white">Hanover County</h3>
                    <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">Virginia</div>
                </article>
            </div>
            {/* <a href="#_" class="px-5 py-2.5 font-outfit text-xl relative rounded group overflow-hidden bg-slate-200/80 text-slate-600 inline-block">
                <span class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-blue-600 group-hover:h-full opacity-90"></span>
                <span class="relative group-hover:text-white">Find All Listings</span>
            </a> */}
        </div>
    </div>
  )
}

export default Places