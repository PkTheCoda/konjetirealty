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
    <div className="h-max flex">
      <div className="w-5/12 flex flex-col justify-center pl-10 pr-[4rem] gap-y-5">
        <h4 className='font-caveat text-4xl'>
          View the Extraordinary
        </h4>
        <h1 className='font-poppins text-6xl'>
          Homes in Richmond, Virginia
        </h1>
        <p className='text-lg tracking-wide font-serif text-slate-800 leading-loose'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique cupiditate, dolorem suscipit repellat dolorum maiores aut quae distinctio provident. Ut, illo id? Saepe totam veniam nisi laboriosam, sit cupiditate molestias?
        </p>
        <button className='bg-slate-200 text-start w-max px-4 py-2 rounded-md font-poppins font-light'>
          About Raghu
        </button>
      </div>
      <div className="w-7/12 relative">
        <img src={suburb1} alt="Image of a nice suburb" className='w-full opacity-80'/>
        <img src={suburb2} alt="Image of a nice suburb" className='opacity-100 top-40 -skew-y-2 absolute h-2/4 rounded-xl shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] -left-10'/>
      </div>
    </div>
    <About />
    <Places />
    <Footer />

    </>
  )
}

export default App
