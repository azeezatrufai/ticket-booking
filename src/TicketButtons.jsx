import React from 'react'

export default function TicketButtons({onFirstClick, onSecondClick, firstLabel = 'Cancel', secondLabel = 'Next',selectedButton = 'button2', } ) {
  return (
    <div>
<div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-1 gap-4 w-full ">
      <button
        onClick={onFirstClick}
      className={`rounded-[8px] font-JejuMyeong text-[#24A0B5] text-[16px] px-6 py-3 cursor-pointer hover:bg-[#1d4147] hover:text-white 
         ${selectedButton === 'button1' ? 'bg-[#24A0B5] text-white' : 'bg-[#08252B]  border border-[#24A0B5]'}`}
      >
        {firstLabel}
      </button>

      <button
        onClick={onSecondClick}
        className={`rounded-[8px] font-JejuMyeong text-[16px] px-6 py-3 border cursor-pointer hover:bg-[#1d4147] hover:text-white 
          ${selectedButton === 'button2'
            ? 'bg-[#24A0B5] text-white border-transparent'
            : 'text-[#24A0B5] border-[#24A0B5]'}
        `}
      >
        {secondLabel}
      </button>
    </div>
    </div>
  )
}
