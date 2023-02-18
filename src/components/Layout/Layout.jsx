import React from 'react'

import {Header} from './../Header/Header'
import {Footer} from './../Footer/Footer';
import Routers from '../../router/Routers';

export const Layout = () => {
  return (
    <div className=''>
      <Header />
        <Routers />
      <Footer />
    </div>
  )
}
