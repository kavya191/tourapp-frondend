import React from "react";
import Carousel from "react-bootstrap/Carousel";

import "./Home.css";
import { Button, Col, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import Card from "react-bootstrap/Card";
import Footer from "../Components/Footer";
const Home = () => {
  return (
    <div className="home_div">
      <div className="home ">
        <Carousel>
          <Carousel.Item>
            <Image
              className="home"
              text="First slide"
              src="https://i.postimg.cc/cJtpnMjv/c1.jpg"
              width="100%"
            />
            <Carousel.Caption>
              <h3 className="heading">
                EXPLORE NEW ADVENTURES
              </h3>
              <p className="head1">
                Adventure awaits. Go find it! Life is not meant to be lived in
                one place.
              </p>
              <Link to={"/about"}>
                <Button
                 data-aos="fade-up-right"
                 data-aos-easing="ease-out-cubic"
                 data-aos-duration="2000"
                  className="bg-white  p-3"
                  style={{ color: "#02656A", borderRadius: "2rem" }}
                  data-aos="zoom-in"   data-aos-duration="3000"
                >
                  KNOW MORE...
                </Button>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="home"
              text="First slide"
              src="https://i.postimg.cc/zXXnVDr7/pexels-andrei-tanase-1271619.jpg"
              width="100%"
            />
            <Carousel.Caption>
              <h3
                className="heading">
                TRAVEL MORE, WORRY LESS
              </h3>
              <p className="head1">
                The world is yours to explore. Collect moments, not things.
              </p>
              <Link to={"/about"}>
                <Button
                  className="bg-white  p-3"
                  data-aos="fade-up-right"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                  style={{ color: "#02656A", borderRadius: "2rem" }}
                  data-aos="zoom-in"   data-aos-duration="3000"
                >
                  KNOW MORE...
                </Button>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="home"
              text="First slide"
              src="https://i.postimg.cc/XYN3Rh9p/pexels-19041999.jpg"
              width="100%"
            />
            <Carousel.Caption>
              <h3 className="heading">
            Favourite Destinations
              </h3>
              <p className="head1" >
                The best things happen outside of our comfort zones. Don't be a
                tourist, be a traveler.
              </p>
              <Link to={"/about"}>
                {" "}
                <Button
                  className="bg-white  p-3"
                  data-aos="fade-up-right"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                  style={{ color: "#1C3651", borderRadius: "2rem" }}
                  
                >
                  KNOW MORE...
                </Button>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

  

      <h1 className="head p-3 mt-4 d-flex justify-content-center align-items-center" >
        Check Out Of This Epic Destination
      </h1>
      <div className="card__style">
        <Card
        data-aos="fade-up"
        data-aos-duration="3000"
          className="imgcard">
          <Card.Img
            variant="top"
            src="https://i.postimg.cc/PfVPs4TG/img-9.jpg"
            height="300px"
          />
          <Card.Body>
            <Card.Title className="text-center align-content-center">
              Explore the hidden waterfall inside the Amazon Jungle
            </Card.Title>
          </Card.Body>
        </Card>

        <Card
        data-aos="fade-up"
        data-aos-duration="3000"
          className="imgcard"
        >
          <Card.Img
          
            variant="top"
            src="https://i.postimg.cc/KY9RGrBg/img-2.jpg"
            height="300px"
          />
          <Card.Body>
            <Card.Title className="text-center">Travel through the Island of Bali </Card.Title>
          </Card.Body>
        </Card>

        {/* <Card style={{ width: '18rem' }} data-aos="zoom-in-up" data-aos-duration="3000">
      <Card.Img variant="top" src="https://i.postimg.cc/NjjKWzrw/pexels-taryn-elliott-3889742.jpg" height="300px"  />
      <Card.Body>
        <Card.Title>Hot Air baloon in Turkey</Card.Title>
       
      </Card.Body>
    </Card>
    */}
      </div>

      <div
        className="d-flex justify-content-center flex-wrap gap-2  mb-5"
       
      >
        <Image data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"
          src="https://i.postimg.cc/GpztsM56/pexels-jose-aragones-2179666.jpg"
          width="300px"
          height="300px"
          rounded
         
        />
        {/* <h2>Explore the hidden waterfall inside the Amazon Jungle</h2> */}
        <Image
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="3000"
          src="https://i.postimg.cc/gJW05C6w/pexels-gantas-vai-iul-nas-1891882.jpg"
          width="300px"
          height="300px"
          rounded
        
        />
        {/* <h2>Explore the hidden waterfall inside the Amazon Jungle</h2> */}
        <Image
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="3000"
          src="https://i.postimg.cc/zGqZsqdY/pexels-kyle-loftus-2734521.jpg"
          width="300px"
          height="300px"
          rounded
          
        />
      </div>
      <div className="d-flex justify-content-center flex-wrap gap-2  mb-5">
        <Image
        data-aos="fade-up-right"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="3000"
          src="https://i.postimg.cc/HszTgBHC/pexels-meum-mare-14239999.jpg"
          width="300px"
          height="300px"
          rounded
        
        />

        <Image
         data-aos="fade-up-right"
         data-aos-easing="ease-out-cubic"
         data-aos-duration="3000"
          src="https://i.postimg.cc/g2b8CcY7/pexels-mohan-reddy-3369214.jpg"
          width="300px"
          height="300px"
          rounded
        
        />
        <Image
         data-aos="fade-up-right"
         data-aos-easing="ease-out-cubic"
         data-aos-duration="3000"
          src="https://i.postimg.cc/sDzsZbKW/pexels-gantas-vai-iul-nas-19037299.jpg"
          width="300px"
          height="300px"
        
          rounded
        />
        <Image
         data-aos="fade-up-right"
         data-aos-easing="ease-out-cubic"
         data-aos-duration="3000"
          src="https://i.postimg.cc/vTffTDMC/pexels-amina-16022234.jpg"
          width="300px"
          height="300px"
          rounded
         
        />
      </div>
    
    </div>
  );
};

export default Home;
