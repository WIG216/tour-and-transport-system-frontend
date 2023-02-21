import React, { useState, useEffect } from 'react'
import { getVehicles } from '../db/vehicle';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const CarsCard = () => {
  
  const [vehicle, setVehicles] = useState([]);

  const navigate = useNavigate()
  const handleGetVehicles = () => {

    getVehicles().then((res) => {
      console.log('RESPONSE GET: ', res.data);

      if (res.ok) {
        setVehicles(res.data.data);
      }
    }).catch(err => {
      console.log('error: ', err);
    })

  }


  useEffect(() => {
    handleGetVehicles();
  }, []);
  return (
    <div class="row gy-4 posts-list ">
                {vehicle.map(car => (
                  <div class="col-lg-6">
                    <article class="d-flex flex-column">

                      <div class="post-img">
                        <img src={car.vehicleImage} alt="" class="img-fluid" />
                      </div>

                      <h2 class="title">
                        <Link to="">{car.vehicleName}</Link>
                      </h2>

                      <div class="meta-top">
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-person"></i> <a href="">Driver Name</a></li>
                          <li class="d-flex align-items-center"><i class="bi bi-clock"></i> <a href=""><time datetime="2022-01-01">Jan 1, 2022</time></a></li>
                          <li class="d-flex align-items-center"><i class="bi bi-chat-dots"></i> <a href="">12 Comments</a></li>
                        </ul>
                      </div>

                      <div class="content">
                        <p>
                          {car.desc}
                        </p>
                      </div>

                      <div class="read-more mt-auto align-self-end">
                        <a onClick={() => navigate('/car/detail')}>Read More</a>
                      </div>

                    </article>
                  </div>
                ))
                }
              </div>
  )
}

export default CarsCard