import React from 'react';
import Image from 'next/image';
import { statusStyle } from '@/util/status';

interface ItemProps {
    name: string;
    amount: number;
    status: string;
    user_id: number;
    joined: string;
    group: string;
    image: string;
}

function Item({ item }: { item: ItemProps }) {
    return (
        <tr>
            <td className="pl-4 py-5 pr-16 md:pr-0 flex items-center">
                <div className="flex-shrink-0">
                    <Image src={item.image} width={40} height={40} alt={'logo'} className='logo_shadow rounded-md bg-white h-[44px] w-[44px]' />
                </div>
                <div className="ml-4">
                    <p className='text-[#282828] font-bold'>{item.name}</p>
                </div>
            </td>
            <td className="py-5">{item.amount}</td>
            <td className="py-5 whitespace-nowrap"><span className={statusStyle[item.status as keyof typeof statusStyle]}>{item.status}</span></td>
            <td className="py-5 whitespace-nowrap">{item.user_id}</td>
            <td className="py-5 whitespace-nowrap">{item.joined}</td>
            <td className="py-5 whitespace-nowrap">{item.group}</td>
        </tr>
    );
}

export default Item;
