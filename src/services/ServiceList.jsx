import React from 'react'
import ServiceCard from './ServiceCard'

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'
import { Col } from 'reactstrap'

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
  return (
    serviceData.map((item,index) => 
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