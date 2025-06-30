import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import NavBar from './NavBar';
import AttendeeDetails from './AttendeeDetails.jsx';
import TicketBookingForm from './TicketBookingForm.jsx';
import TicketConfirmation from './TicketConfirmation.jsx';
import Notfound from './Notfound.jsx';

function App() {
  return (
    <BrowserRouter>
    <div className="relative min-h-screen bg-[#041E23]">
    <NavBar/>
    <div className="pt-25 md:p-35"> 
    <Routes>
    <Route path= "/" element= {<div className='flex justify-center items-center  '> 
    <TicketBookingForm/>
    </div>} />
    <Route path= "/AttendeeDetails" element= { <div className='flex justify-center items-center  '><AttendeeDetails/></div>}/>
    <Route path= "/TicketConfirmation" element= {<div className='flex justify-center items-center overflow-y-auto '><TicketConfirmation/></div>} />
    <Route path = "*" element = {<Notfound/>} />
    </Routes>
    </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
