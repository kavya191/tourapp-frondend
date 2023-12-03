import React from 'react'
import './About.css'
import { Col, Container, Image, Row } from 'react-bootstrap'
import img1 from '../assets/production_id_4782415 (2160p).mp4'
import Card from "react-bootstrap/Card";

function About() {
  return (
    <div>
    <div className='about'>
        <h1 className='heading'>ABOUT  US</h1>
    </div>
    <Container>
    <Row>
      <h1 className='d-flex justify-content-center align-items-center mt-5 fs-1 fw-bold'>Our Vision</h1>
    
      <Col lg='6'>
          <div className='text-center'>
            
            <p className='mt-5 d-flex justify-content-center align-items-center'> Website that provides travel reviews, trip fares, or a combination of both. Over 1.5 billion people book travel per year, 70% of which is done online.
            Individual airlines, hotels, bed and breakfasts, cruise lines, automobile rental companies, and other travel-related service providers often maintain their own web sites providing retail sales. Many with complex offerings include some sort of search engine technology to look for bookings within a certain timeframe, service class, geographic location, or price range.
            </p>
          </div>
        </Col>
        <Col lg='6'>
        <Image  data-aos="fade-up-right"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="3000" className='p-3' style={{borderRadius:'1rem'}} src='https://i.postimg.cc/NjXQzfDx/pexels-lukas-kloeppel-2416653.jpg' width='100%' height="400px"></Image>
        </Col>
  
      
        
    </Row>
    </Container>
    <div className='bg-secondary' >
      <h1 className=' d-flex justify-content-center align-items-center pt-5 fs-1 fw-bold ' >Meet The Team</h1>
      {/* About team */}
      <div className="card__style ">
      <Card style={{ width: '18rem' }} data-aos="zoom-in-up" data-aos-duration="3000" className=' about_card mb-3'>
      <Card.Img variant="top" src="https://i.postimg.cc/9QpyQktN/Whats-App-Image-2023-11-18-at-9-14-02-PM.jpg" height="300px"  />
      <Card.Body>
        <Card.Title>ALAN COOPER</Card.Title>
        <p>Vice President</p>
       
      </Card.Body>
    </Card>

        <Card style={{ width: '18rem' }} data-aos="zoom-in-up" data-aos-duration="3000" className='mb-3'>
      <Card.Img variant="top" src="https://i.postimg.cc/VLJdRwCY/personnel-5-550x500.jpg" height="300px"  />
      <Card.Body>
        <Card.Title>JOHN SMITHY</Card.Title>
        <p>Chief Financial Officer</p>
       
      </Card.Body>
    </Card>

        <Card style={{ width: '18rem' }} data-aos="zoom-in-up" data-aos-duration="3000" className='mb-3'>
      <Card.Img variant="top" src="https://i.postimg.cc/gcLsKTj5/IMG-E3283.jpg" height="300px"  />
      <Card.Body>
        <Card.Title>JEANETTE KINGSTON</Card.Title>
        <p>Chief Executive Officer</p>
       
      </Card.Body>
    </Card>
    
      </div>
      {/*  */}
      <div className="card__style">
      <Card style={{ width: '18rem' }} data-aos="zoom-in-up" data-aos-duration="3000" className='mb-5'>
      <Card.Img variant="top" src="https://i.postimg.cc/KYBT52CK/personnel-3-550x500.jpg" height="300px"  />
      <Card.Body>
        <Card.Title>ALAN COOPER</Card.Title>
        <p>Vice President</p>
       
      </Card.Body>
    </Card>

        <Card style={{ width: '18rem' }} data-aos="zoom-in-up" data-aos-duration="3000" className='mb-3'>
      <Card.Img variant="top" src="https://i.postimg.cc/VLJdRwCY/personnel-5-550x500.jpg" height="300px"  />
      <Card.Body>
        <Card.Title>JOHN SMITHY</Card.Title>
        <p>Chief Financial Officer</p>
       
      </Card.Body>
    </Card>

        <Card style={{ width: '18rem' }} data-aos="zoom-in-up" data-aos-duration="3000" className='mb-3'>
      <Card.Img variant="top" src="https://i.postimg.cc/B6N0WjRd/personnel-1-550x500.jpg" height="300px"  />
      <Card.Body>
        <Card.Title>JEANETTE KINGSTON</Card.Title>
        <p>Chief Executive Officer</p>
       
      </Card.Body>
    </Card>
    
      </div>
    
    </div>
    </div>
    
  )
}

export default About