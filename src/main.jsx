import React from 'react'
//import { StrictMode } from 'react'
import App from './App.jsx'
import { createRoot } from 'react-dom/client';
import './index.css'
import UserDashboardTable from './Board/UserDashboardTable'
import {
  createBrowserRouter,
  // createRoutesFromElements,
  // Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: 'users', element: <UserDashboardTable /> }, // Ensure paths match SidebarDropdownItem
      // Add more routes here as needed for other sections
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);






