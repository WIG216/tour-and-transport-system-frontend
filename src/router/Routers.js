import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'

import Home from './../pages/Home';
import Tours from './../pages/Tours';
import TourDetails from './../pages/TourDetails';
import Register from './../pages/Register';
import Login from './../pages/Login';
import About from './../pages/About';
import SearchResultList from './../pages/SearchResultList';
import ContactUs from '../pages/ContactUs';

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/home' />} />
      <Route path='/home' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/tours' element={<Tours />} />
      <Route path='/tour/:id' element={< TourDetails/>} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/tour/search' element={<SearchResultList />} />
      <Route path='/contact' element={<ContactUs />} />
    </Routes>
  )
}

export default Routers