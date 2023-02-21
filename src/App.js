import "./App.css";
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from "./pages/Home";
import Tours from "./pages/Tours";
import TourDetails from "./pages/TourDetails";
import Register from "./pages/Register";
import Login from "./pages/Login";
import About from "./pages/About";
import SearchResultList from "./pages/SearchResultList";
import ContactUs from "./pages/ContactUs";
import DashboardLanding from "./pages/dashboard/dashboardLanding";
import Vehicle from "./pages/dashboard/vehicle";
import BookingVehicle from "./pages/dashboard/bookingVehicle";
import { BrowserRouter } from "react-router-dom";
import Protected from "./components/Protected";
import CarDetail from "./pages/CarDetail";
import Cars from "./pages/Cars";
import Booking from "./pages/Booking";
// import AddVehicle from "./pages/dashboard/AddVehicle";

function App() {
  return (
    <div className="App">
      <div className="main">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/tours" element={<Tours />} />
            <Route path="/cars" element={<Cars />} />
            <Route path="/tour/:id" element={<TourDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/tour/search" element={<SearchResultList />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/booking" element={<Protected><Booking /></Protected>} />
            <Route path="/car/detail" element={<CarDetail />} />
            <Route
              path="/dashboard"
              element={
                <Protected>
                  <DashboardLanding />
                </Protected>
              }
            />
            <Route
              path="/vehicle"
              element={
                <Protected>
                  <Vehicle />
                </Protected>
              }
            />
            
            <Route
              path="/bookings"
              element={
                <Protected>
                  <BookingVehicle />
                </Protected>
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
      <ToastContainer />

    </div>
  );
}

export default App;
