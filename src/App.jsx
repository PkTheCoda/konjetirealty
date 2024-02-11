import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Navbar from './Components/Navbar'
import suburb1 from './Images/suburb.jpg'
import suburb2 from './Images/suburb3.jpg'
import About from './Components/About'
import Places from './Components/Places'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <div className="h-max flex flex-col xl:flex-row">
      <div className="xl:py-0 py-10 w-full xl:w-5/12 flex flex-col justify-center pl-10 pr-[4rem] gap-y-5">
        <h4 className='font-caveat text-2xl md:text-3xl lg:text-4xl'>
          View the Extraordinary
        </h4>
        <h1 className='font-poppins text-3xl md:text-4xl lg:text-6xl'>
          Homes in Richmond, Virginia
        </h1>
        <p className='text-lg tracking-wide font-outfit font-light text-slate-800 leading-loose'>
        Embark on Your Dream Home Journey in Richmond, Virginia! Our expertly curated selection showcases the finest residences, ensuring you find the home of your dreams. With our dedicated team, your path to exceptional living begins here. 
        </p>
        <a href='mailto:raghukonjeti.realtor@gmail.com' className='bg-slate-200 hover:bg-slate-300 transition transform duration-300 text-start w-max px-4 py-2 rounded-md font-outfit text-lg'>
          Contact Us
        </a>
      </div>
      <div className="w-full xl:w-7/12 relative">
        <img src={suburb1} alt="Image of a nice suburb" className='w-full opacity-80'/>
        <img src={suburb2} alt="Image of a nice suburb" className='hidden xl:block opacity-100 top-40 absolute h-2/4 rounded-xl shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] -left-10'/>
      </div>
    </div>
    <About />
    <Places />
    <Footer />

    </>
  )
}

export default App
