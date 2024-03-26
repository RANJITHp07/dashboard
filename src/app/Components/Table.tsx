import { installedApps } from '@/util/dummyData';
import Image from 'next/image';
import React from 'react';
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import Item from './UI/Item';

function Table() {
  return (
    <div className='bg-white rounded-xl mt-9'>
      <div className='flex justify-between p-4 items-center'>
        <p className='font-semibold'>Installed apps</p>
        <BsThreeDotsVertical className='text-[#9D9FA1]'/>
      </div>
      <hr />
      <div className="overflow-x-auto">
        <table className="w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <>
              <th scope="col" className="pl-9 py-3 text-left text-sm font-normal text-gray-500 min-w-[100px]">
                Source
              </th>
              <th scope="col" className="py-3 text-left text-sm font-normal text-gray-500 min-w-[100px]">
                Amount
              </th>
              <th scope="col" className="py-3 text-left text-sm font-normal text-gray-500 min-w-[100px]">
                Status
              </th>
              <th scope="col" className="py-3 text-left text-sm font-normal text-gray-500 min-w-[100px]">
                User ID
              </th>
              <th scope="col" className="py-3 text-left text-sm font-normal text-gray-500 min-w-[100px]">
                Joined
              </th>
              <th scope="col" className="py-3 text-left text-sm font-normal text-gray-500 min-w-[100px]">
                Group
              </th>
            </>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 text-[#5F6980]">
            {installedApps.map((item, index) => (
              <Item key={index} item={item} />
            ))}
          </tbody>
        </table>
      </div>
      <hr />
      <div className="flex justify-center items-center p-5">
        <FaArrowLeft className='mr-2 cursor-pointer'/> 1/15 <FaArrowRight className='ml-2 cursor-pointer'/>
      </div>
    </div>
  );
}

export default Table;
