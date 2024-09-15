import Sidebar from './components/Sidebar';
import Header from './components/Header';
import AddTour from './Board/AddTour';
import UserDashboardTable from './Board/UserDashboardTable';
import AddHotel from './Board/AddHotel';
import HotelDashboard from './Board/HotelDashboard';
import AddUser from './Board/AddUser';
import { Routes, Route, useLocation } from 'react-router-dom';
import TourDashboard from './Board/TourDashboard';
import EditHotel from './Board/EditHotel';
import { useState } from 'react';
import SectionDashboard from './Board/New/SectionDashboard';
import AddItemPage from './Board/New/AddItemPage';
import SignUp from './components/SignUp';
import UserProfile from './components/UserProfile';
import Login from './components/Login';
import { AuthProvider } from './auth/AuthProvider';
export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation(); // Get current location

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  
  // Routes where the header and sidebar should not appear
  const noHeaderSidebarRoutes = ['/login', '/signup',"/"];

  return (
    <AuthProvider>
    <div className="flex min-h-screen bg-gray-100">
      {/* Render Sidebar and Header only if not on login or signup page */}
      {!noHeaderSidebarRoutes.includes(location.pathname) && (
        <Sidebar isOpen={isSidebarOpen} />
      )}

      <div className="flex flex-col w-full">
        {/* Render Header only if not on login or signup page */}
        {!noHeaderSidebarRoutes.includes(location.pathname) && (
          <Header toggleSidebar={toggleSidebar} />
        )}
        <div className="flex-1 p-6 pt-10 bg-gray-50 overflow-auto">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/add-user" element={<AddUser />} />
            <Route path="/add-hotel" element={<AddHotel />} />
            <Route path="/add-tour" element={<AddTour />} />
            <Route path="/hotel-dashboard" element={<HotelDashboard />} />
            <Route path="/tour-dashboard" element={<TourDashboard />} />
            <Route path="/user-dashboard" element={<UserDashboardTable />} />
            <Route path="/edit-hotel" element={<EditHotel />} />
            <Route path="/dashboard/:sectionName" element={<SectionDashboard />} />
            <Route path="/dashboard/:sectionName/add-item" element={<AddItemPage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/add-item/:sectionName" element={<AddItemPage />} />
          </Routes>
        </div>
      </div>
    </div>
    </AuthProvider>
  );
}
