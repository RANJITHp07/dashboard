import React from 'react'
import TrackChangesOutlinedIcon from '@mui/icons-material/TrackChangesOutlined';
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineMail } from "react-icons/hi"
import { PiSquaresFourLight } from "react-icons/pi";
import { RxPerson } from "react-icons/rx";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { GoFileDirectory } from "react-icons/go";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import { IoLogOutOutline } from "react-icons/io5";
import { AiOutlineGlobal } from "react-icons/ai";
import SideBarItem from './UI/sideBarItem';
import Image from 'next/image'

function SideBar() {
  return (
    <div className='hidden lg:block h-screen w-[200px] xl:w-[232px] bg-white px-5 relative'>
     <Image src={'/clonify.png'} width={120} height={30} alt='clonify' className='pt-6'/>
     <div className='pt-9'>
      <p className='text-[#9D9FA1] text-[12px] font-semibold'>D A S H B O A R D</p>
      <div>
        <div className='my-8'>
        <div className='flex justify-between items-center '>
          <p className='text-[14px] font-semibold'><TrackChangesOutlinedIcon/> Dashboard</p>
          <IoIosArrowDown/>
        </div>
        <div className='mt-5 pl-6'>
        <p className='text-[14px] font-semibold flex items-center'>Analytics</p>
        <p className='text-[14px] font-semibold text-[#5F6980] flex items-center my-4'>Finance</p>
        <p className='text-[14px] font-semibold text-[#5F6980] flex items-center'>Job board</p>
        </div>
        </div>
        <SideBarItem name={'Messages'} icon={HiOutlineMail}/>
        <SideBarItem name={'Friends'} icon={RxPerson}/>
        <SideBarItem name={'Apps'} icon={PiSquaresFourLight}/>
      </div>
     </div>
     <div >
     <p className='text-[#9D9FA1] text-[12px] font-semibold'>P A G E S</p>
     <SideBarItem name={'Help Center'} icon={IoHelpBuoyOutline}/>
     <SideBarItem name={'File Manager'} icon={GoFileDirectory}/>
     </div>
     <div className='absolute bottom-3 flex  justify-between w-3/4 text-[#5F6980] text-xl'>
      <TbAdjustmentsHorizontal/>
      <IoLogOutOutline/>
      <AiOutlineGlobal/>
     </div>
    </div>
  )
}

export default SideBar