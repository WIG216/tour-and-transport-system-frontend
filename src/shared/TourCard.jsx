import React from 'react'
import { Card, CardBody } from 'reactstrap'
import { Link } from "react-router-dom";

const TourCard = ({ tour }) => {

    const { _id, title, city, photo, price, featured, avgRating } = tour;
    return (

        <div class="row gy-5">
        <div class="" data-aos="zoom-in" data-aos-delay="200">
            <div class="service-item">
              <div class="img">
                <img src={photo} class="img-fluid" alt="" />
              </div>
              <div class="details position-relative">
                <div class="icon">
                    <i class="ri-building-fill"></i>
                </div>
                <Link to={`/tours/${_id}`} class="stretched-link no-underline">
                  <h3>{title}</h3>
                </Link>
                <p>{city}</p>
                <div className="flex justify-between items-center">
                    <p>{avgRating} <i class="ri-star-s-fill text-yellow-500"></i></p>
                    <span>{featured===true? 'Featured': "Not avialable"}</span>
                </div>
                <h3>{price}</h3>
                <Link to={`/tours/${_id}`} className="btn-get-started scrollto no-underline text-primaryColor">Book Now</Link>

              </div>
            </div>
          </div>
          </div>


    )
}

export default TourCard

{/* <div className="tour-car">
                <div class="img">
                    <img src={photo} alt="" />
                </div>
                <div class="details position-relative">
                    <div class="icon">
                        <i className="ri-map-pin-line"></i>{city}
                    </div>
                    <a href="#" class="stretched-link">
                        <Link to={`/tours/${id}`}>{title}</Link>
                    </a>
                    <div className="card-bottom flex items-center justify-between mt-3">
                        <h5>{price}CFA <span>/per person</span></h5>
                        <button className="btn booking-btn">
                            <Link to={`/tours/${id}`}>Book Now</Link>
                        </button>
                    </div>
                </div>
            </div> */}
