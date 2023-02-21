import React, { useState, useEffect } from 'react'
import { getVehicles } from '../db/vehicle';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout/Layout'
import CarsCard from './CarsCard';



const Cars = () => {

  return (
    <Layout>
      <section id="blog" class="blog">
      <div class="breadcrumbs">
      <div class="container">

        <div class="d-flex justify-content-between align-items-center">
          <h2>Cars</h2>
          
        </div>

      </div>
    </div>
        <div class="container mt-20" data-aos="fade-up">

          <div class="row g-5">

            <div class="col-lg-8">

              <CarsCard />
            </div>
          </div>
        </div>
      </section>

    </Layout>
  )
}

export default Cars