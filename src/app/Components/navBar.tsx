import React from 'react'
import { BsBell } from "react-icons/bs";
import { IoCalendarClearOutline } from "react-icons/io5";
import { PiSquaresFourLight } from "react-icons/pi";
import Image from 'next/image';
import { IoSearch } from "react-icons/io5";

function NavBar() {
  return (
    <div className="bg-white h-[66px] w-full flex items-center justify-between">
       <Image src={'/clonify.png'} width={90} height={30} alt='clonify' className='mx-2 lg:hidden cursor-pointer'/>
        <div className="w-3/4 hidden md:flex bg-slate-50 border-slate-150 border-2 p-2  mx-7 items-center   rounded-md">
          <IoSearch className='mx-2'/>
        <input className="bg-slate-50 focus:outline-none font-light text-sm w-full " placeholder='Search...'/>
        </div>
        <div className=' flex text-[#5F6980] font-normal text-xl items-center'>
          <div className="relative hidden md:flex">
          <BsBell className='mt-2'/>
          <div className="top-0 right-0 border-2 border-white bg-red-500 w-3 h-3 rounded-full"></div>
          </div>
        <IoCalendarClearOutline className='mx-7 mt-2 hidden md:flex'/>
        <PiSquaresFourLight className='mt-2 text-2xl hidden md:flex'/>
        <div className="relative mx-7">
  <Image 
    src={'/logo.png'} 
    width={30} 
    height={30} 
    alt="logo" 
    className='rounded-full  h-10 w-10 mr-1'
  />
  <div className="absolute bottom-0 right-0 border-2 border-white bg-green-500 w-4 h-4 rounded-full"></div>
</div>
        </div>
    </div>
  )
}

export default NavBar