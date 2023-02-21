import React, { useState } from 'react'

import heroImg from '../assets/images/hero-img01.jpg';
import heroImg02 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';
import worldImg from '../assets/images/world.png'
import Subtitle from '../shared/Subtitle';
import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import callToAction from '../assets/images/gallery-01.jpg'
import blogImage from '../assets/images/gallery-02.jpg'
import { Layout } from '../components/Layout/Layout'
import Cars from './Cars';
import CarsCard from './CarsCard';

const Home = () => {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <Layout>
      <section id="hero-static" className="hero-static d-flex align-items-center">
        <div className="container flex justify-center flex-col items-center text-center relative" data-aos="zoom-out">
          <h2>Welcome to <span>Trams</span></h2>
          <p>Et voluptate esse accusantium accusamus natus reiciendis quidem voluptates similique aut.</p>
          <div className="d-flex">
            <a href="#about" className="btn-get-started scrollto no-underline">Get Started</a>
            <Link to="/" className="glightbox btn-watch-video d-flex align-items-center no-underline"><i className="bi bi-play-circle"></i><span>See MORE</span></Link>
          </div>
        </div>
      </section>
      <div className='pt-14'>
        <Container data-aos="zoom-out">
          <Row>
            <Col lg="3">
              <h5 className="services-subtitle text-4xl font-medium text-[#ee6e6e]">What we Serve</h5>
              <h2 className="services-title font-medium text-4xl pt-2">We offer our best services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </div>

      <div className="pt-14">
        <Container data-aos='fade-up'>
          <Row>
            <Col lg="12" className='mb-5'>
              <Subtitle subtitle={'Explore'} />
              <h2 className="featured-tour-title font-fontName font-medium pt-2 text-4xl ">Our featured tours</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </div>

      <section id="blog" class="blog">
        <div class="container mt-20" data-aos="fade-up">

          <div class="row g-5">
          <Col lg="12" className='mb-5'>
              <Subtitle subtitle={'Explore'} />
              <h2 className="featured-tour-title font-fontName font-medium pt-2 text-4xl ">Our Vehicles</h2>
            </Col>
            <div class="col-lg-8">

              <CarsCard />
            </div>
          </div>
        </div>
      </section>


      <section id="cta" class="cta">
        <div class="container" data-aos="zoom-out">

          <div class="row g-5">

            <div class="col-lg-8 col-md-6 content d-flex flex-column justify-content-center order-last order-md-first">
              <h3>Why <em>Getting</em> in touch</h3>
              <p> We make it possible for each of our clients to be satisfied with our services and it has been proven by the different customers who have use it</p>
              <Link to="/contact" class="cta-btn align-self-start no-underline" >Call To Action</Link>
            </div>

            <div class="col-lg-4 col-md-6 order-first order-md-last d-flex align-items-center">
              <div class="img">
                <img src={callToAction} alt="" class="img-fluid" />
              </div>
            </div>

          </div>

        </div>
      </section>
    </Layout>
  )
}

export default Home