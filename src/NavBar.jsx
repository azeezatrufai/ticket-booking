import React from 'react'
import { Button } from '@headlessui/react'
import { useNavigate } from 'react-router-dom'


export default function NavBar() {
 const navigate = useNavigate();

  return (
    <div className='flex justify-center'>
    <div className=' flex  items-center justify-between w-full  max-w-[320px]   h-[68px] md:h-[76px]  mx-auto md:max-w-[1200px] fixed bg-[rgba(5, 37, 44, 0.4)] py-3 px-4  border border-[#197686] backdrop-blur-[4px]  rounded-[12px] md:rounded-[24px]  m-4  z-50'>
    <img src="Frame 1618871078.png" alt="Logo" />
    
   { /** Hidden on Small Screens  */ }
    <ul className='hidden md:flex items-center' >
        <li onClick={() => navigate('*')} className='font-JejuMyeong text-lg text-[#FFFFFF] cursor-pointer transition transform hover:scale-110  active:bg-green-900 py-3 px-4 '>Events</li>
        <li onClick={() => navigate('*')} className='font-JejuMyeong text-lg text-[#B3B3B3] cursor-pointer transition transform hover:scale-110  active:bg-green-900 py-3 px-4 '>My Tickets</li>
        <li onClick={() => navigate('*')} className='font-JejuMyeong text-lg text-[#B3B3B3] cursor-pointer transition transform hover:scale-110 active:bg-green-900 py-3 px-4 '>About Project</li>
    </ul>  
     <Button onClick={() => navigate('*')}
       className=" flex items-center gap-2 border-[rgba(213, 234, 0, 0.1)] border rounded-[12px] font-JejuMyeong bg-[#FFFFFF] text-sm text-[#0A0C11] data-hover:bg-green-900  cursor-pointer data-hover:data-active:bg-green-700 w-[140px] h-[40px] md:w-[169px] md:h-[45px] md:text-lg py-2 px-3 " >
      MY TICKETS <span className='mt-0.5'> <svg width="18" height="8" viewBox="0 0 18 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 3.5C0.723858 3.5 0.5 3.72386 0.5 4C0.5 4.27614 0.723858 4.5 1 4.5V3.5ZM17.3536 4.35355C17.5488 4.15829 17.5488 3.84171 17.3536 3.64645L14.1716 0.464466C13.9763 0.269204 13.6597 0.269204 13.4645 0.464466C13.2692 0.659728 13.2692 0.976311 13.4645 1.17157L16.2929 4L13.4645 6.82843C13.2692 7.02369 13.2692 7.34027 13.4645 7.53553C13.6597 7.7308 13.9763 7.7308 14.1716 7.53553L17.3536 4.35355ZM1 4.5L17 4.5V3.5L1 3.5V4.5Z" fill="#0A0C11"/>
</svg></span>
    </Button>
    </div>
    </div>
  )
}






