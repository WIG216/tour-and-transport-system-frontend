import { Layout } from '../components/Layout/Layout'
import React, {useState, useEffect} from 'react'
import { getVehicles } from '../db/vehicle';
import moment from 'moment';
import { Link } from 'react-router-dom';

const CarDetail = () => {

    const [vehicle, setVehicles] = useState([]);


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

    console.log(vehicle)


    useEffect(() => {
        handleGetVehicles();
    }, []);

  return (
    <Layout>
        <section id="blog" class="blog ">
      <div class="container mt-10" data-aos="fade-up">

        <div class="row g-5">

          <div class="col-lg-8">

            <article class="blog-details">

              <div class="post-img">
                <img src={vehicle.vehicleImage} alt="" class="img-fluid" />
              </div>

              <h2 class="title">{vehicle.vehicleName}</h2>

              <div class="meta-top">
                <ul>
                  <li class="d-flex align-items-center"><i class="bi bi-person"></i> <a href="">deriver name</a></li>
                 </ul>
              </div>

              <div class="content">
                <p>
                    {vehicle.desc}
                </p>

              </div>
            </article>

          </div>
        </div>

      </div>
    </section>
    </Layout>
  )
}

export default CarDetail