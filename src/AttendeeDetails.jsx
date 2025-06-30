import React from 'react'
import ProgressBar from './Progressbar'
import AttendeeData from './AttendeeData'

export default function AttendeeDetails() {
  return (
    <div className=' w-[335px] md:w-[700px] h-[1000px] md:h-[980px] border border-[#0E464F]  bg-[#041E23] rounded-3xl py-8 px-6 mt-5 md:mt-3 md:p-8'>
      <ul className='flex items-center gap-3 justify-between h-[60px] md:h-[32px] w-[287px] md:w-[604px]  '>
      <li className='font-JejuMyeong text-2xl text-[#FFFFFF] md:text-[32px] h-[24px] w-[287px] '>Attendee Details</li>
      <li className= 'font-Roboto text-[16px] w-[61px] whitespace-nowrap h-6 py-2 text-[#FAFAFA]'>Step 2/3</li>
     </ul>
     <ProgressBar className= 'hidden md:block' progtWidth={326} contWidth={604}/>
     <ProgressBar className= 'md:hidden' progtWidth={232} contWidth={287}/>
     <div className=''>
    <AttendeeData/>
     </div>
    
    </div>
  )
}
