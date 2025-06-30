import React, {useState, useEffect} from 'react'
import Dropzone from './Dropzone';
import { useNavigate, useLocation } from 'react-router-dom';
import Userdata from './userdata';
import TicketButtons from './TicketButtons';


export default function AttendeeData() {
   const navigate = useNavigate();
   const location = useLocation();
   const { selectedTicket, quantity } = location.state || {};

   const [selectedFile, setSelectedFile] = useState(null);
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [specialRequest, setSpecialRequest] = useState('');

    //To saved data to local storage
    useEffect(() => {
    const savedName = localStorage.getItem('attendee_name');
    const savedEmail = localStorage.getItem('attendee_email');
    const savedRequest = localStorage.getItem('attendee_request');

    

    if (savedName) setName(savedName);
    if (savedEmail) setEmail(savedEmail);
    if (savedRequest) setSpecialRequest(savedRequest);
    }, []);


    function handleNameChange(value) {
    setName(value);
    localStorage.setItem('attendee_name', value);
    }

    function handleEmailChange(value) {
    setEmail(value);
    localStorage.setItem('attendee_email', value);
    }

    function handleRequestChange(value) {
    setSpecialRequest(value);
    localStorage.setItem('attendee_request', value);
    }
   

    function handleBack() {
    navigate(-1);    
  }

  function handleSubmit() {
    if (!name) {
  alert("Please enter your name");
  return;
}
if (!email) {
  alert("Please enter your email");
  return;
}
  if (!selectedFile) {
  alert("Please upload an image");
  return;
}
    localStorage.removeItem('attendee_name');
    localStorage.removeItem('attendee_email');
    localStorage.removeItem('attendee_request');
 
    navigate('/Ticketconfirmation' , {
      state: {
        selectedTicket,
        quantity,
        name,
        email,
        specialRequest,
        image: selectedFile,
      },
    }); 
  }




  return (
    <div className='w-full md:border h-full md:h-[] md:mt-7 md:rounded-[32px] md:border-[#0E464F] md:bg-[#08252B] md:py-2 md:px-6' >
    <div className='flex flex-col items-center justify-center'>
    <div className='bg-[#052228] w-[287px] h-[328px] md:w-[556px] md:h-[328px] border px-6 pt-6 mt-6 pb-8 rounded-3xl border-[#07373F]'>
    <p className='font-Roboto text-[16px] text-[#FAFAFA]'> Upload Profile Photo</p>
    <div className='relative w-full max-w-[508px] h-[200px] mt-5'>
    <div className=" hidden md:block absolute inset-0 bg-black/20 pointer-events-none"></div>
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
    <Dropzone onFileSelect={setSelectedFile}/>
    </div>
    </div>
    </div>
    <div className= ' w-full max-w-[287px] md:max-w-[556px] bg-[#07373F] h-1 mt-7 '></div>
    <Userdata
         name={name}
          setName={handleNameChange}
          email={email}
          setEmail={handleEmailChange}
          specialRequest={specialRequest}
          setSpecialRequest={handleRequestChange}
    />
    <div className='space-y-2 my-3 w-full max-w-[287px] md:max-w-[556px] h-full max-h-[48px]'>
      <TicketButtons firstLabel = 'Back' secondLabel='Get my free ticket' onFirstClick = {handleBack} onSecondClick={handleSubmit} />
    </div>
    </div>
    </div>
  )
}
