import React from 'react'
import './Blog.css'
import { Col, Image, Row } from 'react-bootstrap'


const Blog = () => {
  return (
    <div>
         <div className='blog_page'>
       <h1 className='text-white fw-bold heading '>GALLERY</h1>
    </div>
    <Row>
        <Col lg='4' className='p-4'>
            <Image className='zoom' data-aos="zoom-in-up" data-aos-easing="linear"
     data-aos-duration="1500"  src='https://i.postimg.cc/XvQY0NGB/shutterstock-195507533-700x500.jpg'/>
        </Col>
        <Col lg='4' className='p-4'>
            <Image className='zoom' data-aos="zoom-in-up" data-aos-easing="linear"
     data-aos-duration="1500"  src='https://i.postimg.cc/tCmDSFCL/shutterstock-151616084-700x500.jpg'/>
        </Col>
        <Col lg='4' className='p-4'>
            <Image className='zoom' data-aos="zoom-in-up" data-aos-easing="linear"
     data-aos-duration="1500"  src='https://i.postimg.cc/4Ns4nh6H/photo-1459255418679-d6424da9ee33-700x500.jpg'/>
        </Col>
    </Row>
    <Row>
        <Col lg='4' className='p-4'>
            <Image className='zoom' data-aos="zoom-in-up" data-aos-easing="linear"
     data-aos-duration="1500"  src='https://i.postimg.cc/0QnWf34s/shutterstock-166193831-700x500.jpg'/>
        </Col>
        <Col lg='4' className='p-4'>
            <Image className='zoom' data-aos="zoom-in-up" data-aos-easing="linear"
     data-aos-duration="1500"  src='https://i.postimg.cc/c1KkYDcV/shutterstock-210601591-700x500.jpg'/>
        </Col>
        <Col lg='4' className='p-4'>
            <Image className='zoom' data-aos="zoom-in-up" data-aos-easing="linear"
     data-aos-duration="1500"  src='https://i.postimg.cc/QN5khvmx/shutterstock-117062077-700x500.jpg'/>
        </Col>
    </Row>
    <Row>
        <Col lg='4' className='p-4'>
            <Image className='zoom' data-aos="zoom-in-up" data-aos-easing="linear"
     data-aos-duration="1500"  src='https://i.postimg.cc/Ghm2qy4w/pexels-photo-67386-700x500.jpg'/>
        </Col>
        <Col lg='4' className='p-4'>
            <Image className='zoom' data-aos="zoom-in-up" data-aos-easing="linear"
     data-aos-duration="1500"  src='https://i.postimg.cc/d0BpHL7p/pexels-photo-700x500.jpg'/>
        </Col>
        <Col lg='4' className='p-4'>
            <Image className='zoom' data-aos="zoom-in-up" data-aos-easing="linear"
     data-aos-duration="1500"  src='https://i.postimg.cc/VNZQsJYM/photo-1442589031151-61d5645469d7-700x500.jpg'/>
        </Col>
    </Row>
    </div>
   
  )
}

export default Blog