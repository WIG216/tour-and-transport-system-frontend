import React, {useEffect, useState} from 'react'
import TourCard from '../../shared/TourCard'
import tourData from '../../assets/data/tours'
import { Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import { getFeaturedTours } from '../../db/tour.js'


const FeaturedTourList = () => {
  const [featuredTours, setFeaturedTour] = useState([]);
  
  const handleGetFeaturedTours = () => {

    getFeaturedTours().then((res) => {
      console.log('RESPONSE GET: ', res.data);
      if (res.ok) {
        setFeaturedTour(res.data);
      }
    }).catch(err => {
      console.log('error: ', err);
    })
  }

  useEffect(() => {
    handleGetFeaturedTours();
  }, []);
  return (
    <>
      {
        tourData.map(tour => (
          <Col lg='3'>

            <section id="services" class="services">
              <div class="container" data-aos="fade-up">
                <TourCard tour={tour} />
              </div>
            </section>
          </Col>
        ))
      }
    </>
  )
}
export default FeaturedTourList