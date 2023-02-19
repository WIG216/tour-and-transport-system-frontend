import React from 'react'

import {Header} from './../Header/Header'
import {Footer} from './../Footer/Footer';
import DashboardLayout from '../dashboard/Layout/Layout';

export const Layout = ({children}) => {
  return (
    <div className=''>
      <Header />
      {children}
      <Footer />

    </div>
  )
}
