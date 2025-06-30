import React, { useEffect, useState, useCallback, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { db } from './firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import ProgressBar from './Progressbar';
import ticketBg from  './assets/ticket-bg.svg'
import TicketButtons from './TicketButtons';
import { toPng } from 'html-to-image';


export default function TicketConfirmation() {
  const ticketRef = useRef(null);
  const { state } = useLocation();
  const [dataUrl, setDataUrl] = useState('');
  const navigate = useNavigate();
  const handleback = () => { navigate('/')};

  const handledownload = useCallback(() => {
    if (ticketRef.current === null) {
      return;
    }

    toPng(ticketRef.current, { cacheBust: true, })
      .then((dataUrl) => {
        const link = document.createElement('a')
        link.download = 'techemeber_ticket.png'
        link.href = dataUrl
        link.click()
      })
      .catch((err) => {
        console.log(err)
      })
  }, [ticketRef])
 

   const {
    name = '',
    email = '',
    specialRequest = '',
    selectedTicket = { access: '', price: '' },
    quantity = 1,
    image = ''
   } = state || {};

  

  const [previewURL, setPreviewURL] = useState('');   // local blob URL

//  Make / revoke the object-URL whenever the File changes
useEffect(() => {
  if (image && image instanceof File) {
    const localUrl = URL.createObjectURL(image);
    setPreviewURL(localUrl);

    const reader = new FileReader();
    reader.onloadend = () => setDataUrl(reader.result);
    reader.readAsDataURL(image);


    // cleanup to avoid memory leaks
    return () => URL.revokeObjectURL(localUrl);
  }
  }, [image]);
 
  const uploadAndSaveData = useCallback(async () => {
    try {
      const { name, email, specialRequest, selectedTicket, quantity } = state;




      const bookingData = {
        name,
        email,
        specialRequest: specialRequest,
        ticketType: selectedTicket.access || 'REGULAR ACCESS',
        ticketPrice: selectedTicket.price || 'Free',
        quantity,
        dataUrl,
        createdAt: Timestamp.now(),
      };

      await addDoc(collection(db, 'ticketBookings'), bookingData);
    } catch (error) {
      console.error("Error:", error);
    } 
    }, [state, dataUrl]);
     useEffect(() => {

    if (state) uploadAndSaveData();
    }, [state,uploadAndSaveData ]);

  return (
    <div className='  bg-[#041E23] w-full max-w-[335px] md:max-h-[1100px]  h-full md:max-w-[700px] border border-[#0E464F] rounded-3xl pt-2 pb-15 md:pb-0 px-6 mt-5 md:mt-3 md:p-8'>
      <ul className='flex items-center gap-3 justify-between h-[60px] md:h-[32px] w-[287px] md:w-[604px]  '>
      <li className='font-JejuMyeong text-2xl text-[#FFFFFF] md:text-[32px] h-[24px] w-[287px] '>Ready</li>
      <li className= 'font-Roboto text-[16px] w-[61px] whitespace-nowrap h-6 py-2 text-[#FAFAFA]'>Step 3/3</li>
     </ul>
     <ProgressBar className= 'hidden md:block' progtWidth={604} contWidth={604}/>
     <ProgressBar className= 'md:hidden' progtWidth={287} contWidth={287}/>
     
    <div className="bg-[#041E23] min-h-screen pb-4 px-4 flex flex-col items-center mt-7">
      <h1 className="text-2xl md:text-[32px] font-Robotobolder text-[#FAFAFA] md:font-Roboto mb-2">Your Ticket is Booked!</h1>
      <p className="text-[#FAFAFA] text-center text-[16px] font-Roboto mb-10">Check your email for a copy or you can <span><a href={dataUrl} download="techemeber_ticket.png" className='font-bold'>download</a></span></p>

      {/* Ticket Preview */}
      <div ref={ticketRef}
      className="flex justify-center h-[600px] w-[300px]"
      style={{
      backgroundImage: `url(${ticketBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      }}
>
      
      <div  className= "bg-[rgba(3, 30, 33, 0.1)] rounded-2xl border border-[#24A0B5] p-3.5  w-[260px] mt-5 h-[446px] backdrop-blur-[4px]">
        <div className="">
          <h2 className="text-[34px] text-[#FFFFFF] -mt-2 mb-1 font-RoadRage font-normal text-center ">Techember Fest "25</h2>
          <p className='font-Roboto text-[10px] text-center -mt-2 mb-1 text-[#FFFFFF]'>📍 04 Rumens road, Ikoyi, Lagos</p>
          <p className='font-Roboto text-[10px] text-center  text-white '>📅 March 15, 2025 | 7:00 PM</p>

          <div className="flex items-center justify-center mt-4">
            {(dataUrl || previewURL) ? (
        <img
        src={dataUrl || previewURL}   // show preview first, cloud URL later
        alt="profile"
        className="w-[140px] h-[140px] border-4 rounded-xl  object-cover"
        style={{ borderColor: 'rgba(0, 255, 255, 0.7)' }}
        />
        ) : (
        <div className="w-24 h-24  border-2 border-white bg-gray-500" />
        )}
          </div>

         <table className="w-full mt-4 border-[#133D44] text-left bg-[#08343C] rounded-[8px] overflow-hidden table-fixed">
         <tbody>
         {/* Row 1 */}
         <tr className="border-b" style={{ borderBottomColor: '#12464E' }}>
         <td
        className=" border-r p-2 align-top"
        style={{ borderRightColor: '#12464E', width: '50%' }}
        >
        <p className="text-[10px] text-white opacity-[33%] font-Roboto">Enter your Name</p>
        <h3 className="text-xs text-white font-Robotobolder break-words">{name}</h3>
        </td>
        <td className="  p-2 align-top" style={{ width: '50%' }}>
        <p className="text-[10px] text-white opacity-[33%] font-Roboto">Enter your email *</p>
        <h3 className="text-xs text-white font-Robotobolder break-words">{email}</h3>
        </td>
        </tr>

    {/* Row 2 */}
    <tr className="border-b" style={{ borderBottomColor: '#12464E' }}>
      <td
        className=" border-r p-2 align-top"
        style={{ borderRightColor: '#12464E', width: '50%' }}
      >
        <p className="text-[10px] text-white opacity-[33%] font-Roboto">Ticket Type:</p>
        <h3 className="text-[10px] text-white font-Roboto break-words">{selectedTicket.access}</h3>
      </td>
      <td className="p-2 align-top" style={{ width: '50%' }}>
        <p className="text-[10px] text-white opacity-[33%] font-Roboto">Ticket for:</p>
        <h3 className="text-[10px] text-white font-Roboto">{quantity}</h3>
      </td>
    </tr>

    {/* Full-width Row */}
     <tr>
      <td colSpan={2} className="p-2">
       <p className="text-[10px] text-white opacity-[33%] font-Roboto">Special request?</p>
        <h3 className="text-[10px] text-white font-Roboto break-words">{specialRequest}</h3>
       </td>
       </tr>
       </tbody>
       </table> 
          {/* Barcode */}
          <div className="mt-9 pt-8">
          <img src="/Bar Code.svg" alt="Bar Code" />   
          </div>
        </div>
      </div>
      </div>
      

      {/* Buttons */}
      <div className='mt-7 w-full max-w-[287px] md:max-w-[556px] h-full max-h-[48px]'>
        <TicketButtons firstLabel = 'Book Another Ticket' secondLabel='Download Ticket' onFirstClick={handleback} onSecondClick={handledownload} />
      </div>
      </div>
    </div>
  );
}
