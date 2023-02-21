import {Layout} from '../components/Layout/Layout'
import React, { useState, useEffect } from 'react'
import { getAllTour } from '../db/tour';
import moment from 'moment';
import { Link } from 'react-router-dom';


const Tours = () => {

  const [tour, setTours] = useState([]);


  const handleGetTours = () => {

    getAllTour().then((res) => {
      console.log('RESPONSE GET: ', res.data);

      if (res.ok) {
        setTours(res.data.data);
      }
    }).catch(err => {
      console.log('error: ', err);
    })

  }


  useEffect(() => {
    handleGetTours();
  }, []);

  return (
    <Layout>

<section id="services" class="services">
      <div class="container mt-10" data-aos="fade-up">

        <div class="section-header mb-32">
          <h2>Our Tours</h2>
          <p>Ea vitae aspernatur deserunt voluptatem impedit deserunt magnam occaecati dssumenda quas ut ad dolores adipisci aliquam.</p>
        </div>

        <div class="row gy-5 mt-20">

          {
            tour.map(tours => (
              <div class="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="400">
            <div class="service-item">
              <div class="img">
                <img src={tours.photo} class="img-fluid" alt="" />
              </div>
              <div class="details position-relative">
                <div class="icon">
                  <i class="bi bi-easel"></i>
                </div>
                <a href="#" class="stretched-link">
                  <h3>{tours.title}</h3>
                </a>
                <p>{tours.desc}</p>
              </div>
            </div>
          </div>
            ))
          }

        </div>

      </div>
    </section>
    </Layout>
  )
}

export default Tours