import "./App.css";
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

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
import BookingDriver from "./pages/dashboard/bookingDriver";
import { BrowserRouter } from "react-router-dom";
import Protected from "./components/Protected";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/tour/:id" element={<TourDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/tour/search" element={<SearchResultList />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/dashboard" element={ <Protected><DashboardLanding /></Protected>} />
        <Route path="/vehicle" element={<Protected><Vehicle /></Protected>} />
        <Route path="/booking" element={<Protected><BookingDriver /></Protected>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
