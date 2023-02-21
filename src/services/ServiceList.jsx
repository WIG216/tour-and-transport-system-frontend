import ServiceCard from './ServiceCard'

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'
import { Col } from 'reactstrap'
import React, { useState, useEffect } from 'react'
import { getAllTour } from '../db/tour';
import moment from 'moment';
import { Link } from 'react-router-dom';

const serviceData = [
    {
        imgUrl: weatherImg,
        title: "Calculate Weather",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, veniam!" 
    },
    {
        imgUrl: guideImg,
        title: "Best tour guide",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, veniam!" 
    },
    {
        imgUrl: customizationImg,
        title: "Customization",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, veniam!" 
    }
]
const ServiceList = () => {
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
    tour.map((item,index) => 
    <Col lg='3'>
    <div id="featured-services" className="featured-services">
      <div className="container">
        <div className="row gy-4">
          <div data-aos="zoom-out">
            <div className="service-item position-relative">
            <ServiceCard item={item} />
            </div>
          </div>
        </div>
      </div>
      </div>
    </Col>
        
    )
  )
}

export default ServiceList