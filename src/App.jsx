import Sidebar from './components/Sidebar';
import Header from './components/Header';
// import AddTour from './Board/AddTour';
// import UserDashboardTable from './Board/UserDashboardTable';
// import AddHotel from './Board/AddHotel';

export default function App() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar: fixed on the left */}
      <Sidebar />

      {/* Main content area */}
      <div className="flex flex-col w-full">
        {/* Header: fixed at the top */}
        <Header />

        {/* Content area: takes up remaining space and scrolls */}
        <div className="flex-1 p-6 pt-20  bg-gray-50 overflow-y-auto ">
          {/* Table or dynamic content */}
          {/* <AddHotel />
          <UserDashboardTable />
          <AddTour /> */}
          
        </div>
      </div>
    </div>
  );
}






