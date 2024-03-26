import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';

function SideBarItem({ name, icon: Icon }: { name: string; icon: React.ElementType }) {
  return (
    <div>
      <div className='flex justify-between items-center my-8'>
        <p className='text-[14px] font-semibold text-[#5F6980] flex items-center'>
          <Icon className='text-xl mr-2' />
          {name}
        </p>
        <IoIosArrowDown />
      </div>
    </div>
  );
}

export default SideBarItem;