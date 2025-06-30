import React from 'react'


export default function EventData() {
  return (
    <>
    <div className='flex items-center justify-center'>
     <div className='w-[287px] md:w-[556px] h-[243px] md:h-[200px] border-2 border-t-0 border-[#07373F] custom-gradient backdrop-blur-[14px] py-4 px-6 md:p-6 m-7 rounded-[32px] md:rounded-[24px]'>
       <h2 className='font-RoadRage w-[246px]  md:w-[508px] md:h-[62px] h-[48px] text-[48px] md:text-[62px] text-[#FAFAFA] text-center'>Techember Fest ”25</h2>
       <div className='w-[239px] md:w-[340px] md:h-[48px] h-[63px] py-4 md:ml-16 md:pl-7 '>
       <p className='font-Roboto text-[14px] md:text-[16px]  text-[#FAFAFA] text-center '>Join us for an unforgettable experience at Techember Fest ”25! Secure your spot now.</p>
       </div>
        {/* For the mobile screen  */}
       <div className=' md:hidden w-[181px] h-[52px] pt-9 ml-5 '>
        <p className='font-Roboto text-[16px] text-[#FAFAFA] text-center '>📍  Lagos, Nigeria </p>
        <p className='font-Roboto text-[16px] text-[#FAFAFA] '> March 15, 2025 | 7:00 PM</p>
       </div>
        {/* Full screen */}
        <div className=' md:flex gap-4 justify-center hidden p-6  '>
        <p className='font-Roboto text-[16px] text-[#FAFAFA]  '>📍  Lagos, Nigeria </p>
        <p className='font-Roboto text-[16px] text-[#FAFAFA]'>  | |  </p>
        <p className='font-Roboto text-[16px] text-[#FAFAFA] '> March 15, 2025 | 7:00 PM</p>
       </div>
      </div> 
      </div>
      <div className= ' w-full max-h-[556px]  bg-[#07373F] h-1'></div>
      <p className=' pt-3 md:pt-6 mt-3 mb-2 pb-2  font-Roboto text-[16px] text-[#FAFAFA]'>Select Ticket Type:</p>
      </>
      
      
      
      
    
)
}
