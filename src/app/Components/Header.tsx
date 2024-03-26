import React from 'react'
import { AiOutlineThunderbolt } from "react-icons/ai";
import { IoSearch } from 'react-icons/io5';

function Header() {
  return (
    <div>
      <div className="w-full  flex md:hidden mb-4 bg-slate-50 border-slate-150 border-2 p-2  items-center   rounded-md">
          <IoSearch className='mx-2'/>
        <input className="bg-slate-50 focus:outline-none font-light text-sm w-full " placeholder='Search...'/>
        </div>
        <div className="bg-[#282828] w-12/12 xl:w-full md:flex justify-between py-6 md:py-0 px-9 md:h-[128px] items-center rounded-xl">
            <div className="text-white text-center">
              <p className='text-2xl font-semibold '>Unlock premium stats</p>
              <p className='text-[13px] mt-2'>Get up to 10TB of storage for a limited time</p>
            </div>
            <div className='flex justify-center mt-3'>
              <button className='bg-white px-5 py-2 rounded-full font-medium flex justify-center items-center'><AiOutlineThunderbolt className='mr-1'/> Upgrade</button>
            </div>
        </div>
        <div className='md:flex justify-between my-9 items-center w-full'>
         <div className='md:w-1/2 md:mr-7 xm:mr-0 xm:w-[235px] xl:w-[262px] h-[162px] bg-white box_shadow rounded-xl p-5 relative flex flex-col justify-between'>
          <div>
          <p className='text text-[#5F6980]'>Revenue</p>
           <p className='text-[26px] font-semibold'>$56,945</p>
          </div>
           <p className='text-[12px] text-[#9D9FA1]'><span className='text-[#20C997] mr-3 bg-[#DCFFF5] p-1 rounded-full px-2'>+45%</span>from 4.6%</p>
         </div>
         <div className='md:w-1/2 my-5 md:my-0  xm:w-[235px] xl:w-[262px] h-[162px] bg-white box_shadow rounded-xl p-5 relative flex flex-col justify-between'>
          <div>
          <p className='text text-[#5F6980]'>Users</p>
           <p className='text-[26px] font-semibold'>76.8%</p>
          </div>
           <p className='text-[12px] text-[#9D9FA1]'><span className='text-[#DC3545] mr-3 bg-[#FFE0E3] p-1 rounded-full px-2'>-1.7%</span>from 4.6%</p>
         </div>
         <div className='flex md:hidden my-5 md:my-0 md:w-[235px] xl:w-[262px] h-[162px] bg-white box_shadow rounded-xl p-5   relative xm:flex flex-col justify-between'>
          <div>
          <p className='text text-[#5F6980]'>New Signups</p>
           <p className='text-[26px] font-semibold'>116</p>
          </div>
           <p className='text-[12px] text-[#9D9FA1]'><span className='text-[#5F6980] mr-3 bg-[#F2F4F7] p-1 rounded-full px-2'>0.00</span></p>
         </div>
         <div className='flex md:hidden md:w-[235px] xl:w-[262px] h-[162px] bg-white box_shadow rounded-xl p-5   relative xm:flex flex-col justify-between'>
          <div>
          <p className='text text-[#5F6980]'>Retention</p>
           <p className='text-[26px] font-semibold'>12.67%</p>
          </div>
           <p className='text-[12px] text-[#9D9FA1]'><span className='text-[#20C997] mr-3 bg-[#DCFFF5] p-1 rounded-full px-2'>+0.6%</span>from 4.6%</p>
         </div>
        </div>
        <div className='md:flex mb-6 hidden  xm:hidden'>
        <div className='w-1/2 mr-7 h-[162px] bg-white box_shadow rounded-xl p-5   relative xflex flex-col justify-between'>
          <div>
          <p className='text text-[#5F6980]'>New Signups</p>
           <p className='text-[26px] font-semibold'>116</p>
          </div>
           <p className='text-[12px] text-[#9D9FA1]'><span className='text-[#5F6980] mr-3 bg-[#F2F4F7] p-1 rounded-full px-2'>0.00</span></p>
         </div>
         <div className='w-1/2 h-[162px] bg-white box_shadow rounded-xl p-5   relative xm:flex flex-col justify-between'>
          <div>
          <p className='text text-[#5F6980]'>Retention</p>
           <p className='text-[26px] font-semibold'>12.67%</p>
          </div>
           <p className='text-[12px] text-[#9D9FA1]'><span className='text-[#20C997] mr-3 bg-[#DCFFF5] p-1 rounded-full px-2'>+0.6%</span>from 4.6%</p>
         </div>
        </div>
    </div>
  )
}

export default Header