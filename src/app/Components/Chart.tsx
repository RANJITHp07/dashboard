'use client'
import React from 'react'
import ReactApexChart from 'react-apexcharts';
import { BsThreeDotsVertical } from "react-icons/bs";
import { chartData } from '@/util/dummyData';

function Chart() {
  return (
    <div className=' w-full bg-white rounded-xl'>
      <div className='flex justify-between p-4 items-center'>
        <p className='font-semibold'>Performance</p>
        <BsThreeDotsVertical className='text-[#9D9FA1]'/>
      </div>
      <hr />
      <div id="chart" className='px-5 mt-8'>
        <ReactApexChart options={chartData.options as  ApexCharts.ApexOptions  } series={chartData.series} type="area" height={350}/>
      </div>
    </div>
  )
}


export default Chart