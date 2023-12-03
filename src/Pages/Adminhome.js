import React from 'react'
import './Adminhome.css'
import { Container, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Adminhome() {
  return (
    <div className='admin_head'>
      <div className='admin_page'>
        <h3>A Team of Professional Travel Experts</h3>
        <h1>Trust Our Experience</h1>
      </div>
     
      <div className='admin_head_task'>
      <Link to={'/add'} style={{textDecoration:"none"}}>
          <div className='admin_head_left' data-aos="fade-right"  data-aos-easing="linear"
     data-aos-duration="3000">
          <Image src='https://i.postimg.cc/dVsDC69Z/pexels-nubia-navarro-nubikini-386009.jpg' className='image__style' ></Image>
          <h1 className='admin_add'>Add Destinations</h1>
          </div>
          </Link>
          <Link to={'/booking'} style={{textDecoration:"none"}}>
          <div className='admin_head_right' data-aos="fade-right"  data-aos-easing="linear"
     data-aos-duration="3000">
          <Image src='https://i.postimg.cc/D0nxhRqw/pexels-vincent-rivaud-2265876.jpg' className='image__style' ></Image>
          <h1 className='admin_add'>View Bookings</h1>
          </div>
          </Link>
      </div>
     
      
    </div>
  )
}

export default Adminhome