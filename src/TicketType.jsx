import React from 'react'
import { RadioGroup, Radio } from '@headlessui/react';

export default function TicketType({ selected, setSelected }) {
const tickets = [
  { price: 'Free', access: 'REGULAR ACCESS', date: '20/52'},
  { price: '$150', access: 'VIP ACCESS', date: '20/52' },
  { price: '$150', access: 'VVIP ACCESS', date: '20/52' },
]

  return (
         <>
        <div className=" w-full max-w-[287px]  md:max-w-[556px]">
           <RadioGroup 
           by="access"
            value={selected}
             onChange={setSelected} 
             aria-label="Server size" className="grid md:grid-rows-1 md:grid-cols-3 gap-3  bg-[#052228] rounded-3xl p-4  border border-[#07373F] h-full">
          {tickets.map((tickets) => (
            <Radio
              key={tickets.price}
              value={tickets}
              className="group border-2 border-[#197686] relative flex flex-col cursor-pointer rounded-xl px-2 py-4 focus:not-data-focus:outline-none data-checked:bg-[#12464E] data-checked:border data-checked:border-[#197686]: data-focus:outline data-focus:outline-white"
            >
                <div className="flex w-full flex-col  px-1 md:px-0">
                  <p className="font-Robotobold font-semibold text-2xl pb-2 text-[#FFFFFF] ">{tickets.price}</p>
                  <div className="grid col-end-2 font-Roboto">
                    <div className='text-[16px] text-[#FAFAFA] whitespace-nowrap' >{tickets.access}</div>
                    <div className='text-sm text-[#D9D9D9]'>{tickets.date}</div>
                  </div>
              </div>
              
            </Radio>
          ))}
        </RadioGroup>
        </div>
      </>
  )
}