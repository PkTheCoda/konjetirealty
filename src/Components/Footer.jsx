import React from 'react'
import klogo from '../Images/klogo.png'

const Footer = () => {
  return (
        <footer class="mt-20 xl:mt-32 mx-auto w-full relative text-center bg-slate-200 text-white" id='contact'>
            <div class="px-6 py-8 md:py-14 xl:pt-20 xl:pb-12 font-outfit">
                <h2 class="font-bold text-3xl xl:text-7xl leading-snug text-[#1e3a8a]">
                Your Dream Home Awaits – <span className="block">Reach Out Today!</span>
                </h2>
                <a class="mt-8 xl:mt-12 px-12 py-5 text-lg font-medium leading-tight inline-block bg-blue-800 rounded-full shadow-xl border border-transparent hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-sky-999 focus:ring-sky-500"
                    href="#">Contact
                    Us</a>
                <div class="mt-14 xl:mt-20">
                    <nav class="flex flex-wrap justify-center text-lg font-medium text-blue-600">
                        <div class="px-5 py-2"><a href="mailto:raghukonjeti.realtor@gmail.com">Contact</a></div>
                        <div class="px-5 py-2"><a href="tel:+18043499434">Phone</a></div>
                        <div class="px-5 py-2"><a href="mailto:raghukonjeti.realtor@gmail.com">Email</a></div>
                        {/* <div class="px-5 py-2"><a href="#">Twitter</a></div> */}
                    </nav>
                    <p class="mt-7 text-base text-blue-600">© 2023 KonjetiRealty, LLC</p>
                </div>
            </div>
        </footer>
  )
}

export default Footer