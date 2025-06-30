import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressBar from './Progressbar'
import TicketType from './TicketType';
import TicketquantitySelector from './TicketquantitySelector';
import TicketButtons from './TicketButtons';
import EventData from './EventData'

export default function TicketBookingForm() {
  const tickets = [
    { price: 'Free', access: 'REGULAR ACCESS', date: '20/52' },
    { price: '$150', access: 'VIP ACCESS', date: '20/52' },
    { price: '$150', access: 'VVIP ACCESS', date: '20/52' },
  ];
  const [selectedTicket, setSelectedTicket] = useState(tickets[0]);
  const [quantity, setQuantity] = useState(1); 
  const [selectedButton, setSelectedButton] = useState('button2');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleCancel = () => {
    setSelectedTicket(tickets[0]);
    setQuantity(1);
    setError('');
    setSelectedButton('button1');
  };

   const handleNext = () => {
    if (!selectedTicket || !selectedTicket.access) {
      setError('Please select a valid ticket type.');
      return;
    }
    setError('');
    setSelectedButton('button2');
    navigate('/AttendeeDetails', {
   state: {
    selectedTicket,
    quantity
   }
  });

  };

  return (
    <div className='bg-[#08252B] md:bg-[#041E23] w-full max-w-[335px] md:max-w-[700px] border border-[#0E464F] rounded-[32px] md:rounded-[40px] mt-5 p-6 md:p-8'>
          <ul className='flex flex-wrap items-center gap-3 justify-between h-[60px] md:h-[32px] w-[287px] md:w-[604px] '>
          <li className='font-JejuMyeong text-2xl text-[#FFFFFF] md:text-[32px] h-[24px] w-[287px] '>Ticket Selection</li>
          <li className= 'font-Roboto text-[16px] w-[61px] h-6 py-3  text-[#FAFAFA]'>Step 1/3</li>
         </ul>
         <ProgressBar className= 'hidden md:block' progtWidth={232} contWidth={604}/>
         <ProgressBar className= ' md:hidden mt-4' progtWidth={232} contWidth={287}/>
         
         {/* Desktop Screen */}
         <div className='hidden md:block  bg-[#08252B] border border-[#0E464F]  rounded-4xl p-6 mt-6 w-[604px]'>
          <EventData/>
          <div className="">
         <div className="flex justify-center items-center  ">  
      <TicketType  selected={selectedTicket} setSelected={setSelectedTicket} /> 
     </div>
      <div className="space-y-2 mt-6 ">
      <p className='font-Roboto text-[16px] text-[#FAFAFA]'>Number of Tickets</p> 
        <TicketquantitySelector quantity={quantity} setQuantity={setQuantity} />
        </div>
      {error && (
        <div className="text-red-500 text-sm font-medium">{error}</div>
      )}
 
      <div className="space-y-2">
      <TicketButtons onFirstClick={handleCancel} onSecondClick={handleNext} selectedButton={selectedButton} />
      </div>
      </div>
      </div>
         {/* Mobile Screen */}
        <div className= 'md:hidden'><EventData/>
         <div className="space-y-5">
         <div className="flex justify-center items-center  ">  
      <TicketType  selected={selectedTicket} setSelected={setSelectedTicket} /> 
     </div>
      <div className="space-y-2">
      <p className='font-Roboto text-[16px] text-[#FAFAFA]'>Number of Tickets</p> 
        <TicketquantitySelector quantity={quantity} setQuantity={setQuantity} />
        </div>
      {error && (
        <div className="text-red-500 text-sm font-medium">{error}</div>
      )}
 
      <div className="space-y-2">
      <TicketButtons onFirstClick={handleCancel} onSecondClick={handleNext} selectedButton={selectedButton} />
      </div>
      </div>
      </div>
      </div>
     
  );
}
