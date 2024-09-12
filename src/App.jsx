import Sidebar from './components/Sidebar';
import Header from './components/Header';
import AddTour from './Board/AddTour';
import UserDashboardTable from './Board/UserDashboardTable';
import AddHotel from './Board/AddHotel';
import HotelDashboard from './Board/HotelDashboard';
import AddUser from './Board/AddUser';
import { Routes, Route } from 'react-router-dom';
import TourDashboard from './Board/TourDashboard';
import EditHotel from './Board/EditHotel';
import { useState } from 'react';
import PlacesDashboard from './Board/PlacesDashboard';
import AddPlace from './Board/AddPlace';
export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (

    <div className="flex min-h-screen bg-gray-100">
      <Sidebar isOpen={isSidebarOpen} />

      {/* Main content area */}
      <div className="flex flex-col w-full">
        <Header toggleSidebar={toggleSidebar} />
        <div className="flex-1 p-6 pt-10  bg-gray-50 overflow-auto ">
        {/* listing icon */}
          <div className='flex flex-row pl-6 '>
            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.54688 0.359375L5.57812 1.39062L2.82812 4.14062L2.3125 4.57031L1.79688 4.14062L0.421875 2.76562L1.45312 1.73438L2.3125 2.63672L4.54688 0.359375ZM7.8125 1.5625H16.75V2.9375H7.8125V1.5625ZM4.54688 5.85938L5.57812 6.89062L2.82812 9.64062L2.3125 10.0703L1.79688 9.64062L0.421875 8.26562L1.45312 7.23438L2.3125 8.13672L4.54688 5.85938ZM7.8125 7.0625H16.75V8.4375H7.8125V7.0625ZM4.54688 11.3594L5.57812 12.3906L2.82812 15.1406L2.3125 15.5703L1.79688 15.1406L0.421875 13.7656L1.45312 12.7344L2.3125 13.6367L4.54688 11.3594ZM7.8125 12.5625H16.75V13.9375H7.8125V12.5625Z" fill="#202224" />
            </svg>
            <h6 className='pl-2 pb-10'>
              Listing
            </h6>
          </div>
          {/* listing icon */}

          {/* Table or dynamic content */}
          <Routes>
            <Route path="/" element={<UserDashboardTable />} />
            <Route path="/add-user" element={<AddUser />} />
            <Route path="/add-hotel" element={<AddHotel />} />
            <Route path="/add-tour" element={<AddTour />} />
            <Route path="/add-place" element={<AddPlace />} />
            <Route path="/hotel-dashboard" element={<HotelDashboard />} />
            <Route path="/tour-dashboard" element={<TourDashboard />} />
            <Route path="/user-dashboard" element={<UserDashboardTable />} />
            <Route path="/edit-hotel" element={<EditHotel />} />
            <Route path="/places-dashboard" element={<PlacesDashboard />} />
          </Routes>

        </div>
      </div>
    </div>


  );
}


// font-family: Nunito;


