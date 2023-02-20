import React, {useState, useEffect} from 'react'
import { getVehicles } from '../db/vehicle';


const Cars = () => {

    const [drivers, setDrivers] = useState([]);


    const handleGetDrivers = () => {
        
        getVehicles().then((res) => {
            console.log('RESPONSE GET: ', res.data);
            
            if (res.ok) {
                setDrivers(res.data.data);
            }
        }).catch(err => {
            console.log('error: ', err);
        })

    }


    useEffect(() => {
        handleGetDrivers();
    }, []);
  return (
    <>
       { 
        drivers.map(car => (
            <div class="col-lg-4" data-aos="fade-up" data-aos-delay="200">
              <div class="post-box">
                <div class="post-img"><img src={car.vehicleImage} class="img-fluid" alt="" /></div>
                <div class="meta">
                  <span class="post-date">{car.createdAt}</span>
                  <span class="post-author"> / Julia Parker</span>
                </div>
                <h3 class="post-title">{car.vehicleName}</h3>
                <p>Illum voluptas ab enim placeat. Adipisci enim velit nulla. Vel omnis laudantium. Asperiores eum ipsa est officiis. Modi cupiditate exercitationem qui magni est...</p>
                <a href="blog-details.html" class="readmore stretched-link"><span>Read More</span><i class="bi bi-arrow-right"></i></a>
              </div>
            </div>
        ))
    }
    </>
  )
}

export default Cars