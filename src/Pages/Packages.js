import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import "./Packages.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Badge from 'react-bootstrap/Badge';
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useState } from "react";
import { tourPackages } from "../Services/AllApis";
import BASE_URL from "../Services/BaseUrl";



function Packages() {
  //state to hold all package details
const[tour,setTour]=useState({})
const getPackages=async()=>{
  const {data}=await tourPackages()
  console.log(data);
  setTour(data)

}
console.log(tour);
useEffect(()=>{
  getPackages()
},[])

  return (
    <div>
    <div className="service_page">
      <h1 className=" heading text-center fw-bold text-white " >PACKAGES</h1>
    </div>
    <Container className=" mt-5 align-items-center">
      {/* <Form className="m-5">
  <div className="d-flex justify-content-center"  >
     <input type="text" placeholder="search your destination"  className="form-control p-3 "/> 
        <Button className="bg-secondary text-center pe-3">Search</Button></div>
         
          
   
      </Form> */}
    </Container>
    <div className="card__style">{
      tour.length >0 && tour.map(i=>(
        <Link to={`/single/${i._id}`} style={{textDecoration:"none"}}>
       <Card
         className="imgcard1"
         data-aos="zoom-in-up"
         data-aos-duration="3000"
       >
         <Card.Img
           variant="top"
           src={`${BASE_URL}/tourimage/${i.profile}`}
           height="300px"
         />
         <Card.Body>
           <Card.Title className="text-center align-content-center">
             {i.place}
           </Card.Title>
           <Card.Title className="text-center align-content-center">
              $ {i.rate}
           </Card.Title>
           <Card.Title className="text-center align-content-center">
             Availability:Jan 16-Feb 16
           </Card.Title>
           <Card.Text className="text-center align-content-center">
             {i.description}
           </Card.Text>
           <Card.Title style={{ color: "yellow" }}>
             <i class="fa-solid fa-star"></i>
             <i class="fa-solid fa-star"></i>
             <i class="fa-solid fa-star"></i>
             <i class="fa-solid fa-star"></i>
           </Card.Title>
           <Card.Title className="d-flex justify-content-end">From</Card.Title>
           <Card.Title
             className="d-flex justify-content-end"
             style={{ color: "red" }}
           >
             $100
           </Card.Title>
         </Card.Body>
       </Card>
 
       </Link>

      ))
       
    }
     
     
      {/* <Card
        className="imgcard1"
        
        data-aos="zoom-in-up"
        data-aos-duration="3000"
      >
        <Card.Img
          variant="top"
          src="https://i.postimg.cc/SRYsLRdz/package2.jpg"
          height="300px"
        />
        <Card.Body>
          <Card.Title className="text-center align-content-center">
          Dubai – All Stunning Places
          </Card.Title>
          <Card.Title className="text-center align-content-center">
            5 Hours
          </Card.Title>
          <Card.Title className="text-center align-content-center">
            Availability:Jan 16-Feb 16
          </Card.Title>
          <Card.Text className="text-center align-content-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
            minus exercitationem. Expedita in excepturi porro quibusdam. Aut,
            rerum eos ipsam nihil excepturi nulla, inventore, odit facilis
            molestias iste nisi dolor.
          </Card.Text>
          <Card.Title style={{ color: "yellow" }}>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </Card.Title>
          <Card.Title className="d-flex justify-content-end">From</Card.Title>
          <Card.Title
            className="d-flex justify-content-end"
            style={{ color: "red" }}
          >
            $1000
          </Card.Title>
        </Card.Body>
      </Card> */}

      {/* <Card
        className="imgcard1"
        
        data-aos="zoom-in-up"
        data-aos-duration="3000"
      >
        <Card.Img
          variant="top"
          src="https://i.postimg.cc/8zvZXgt8/package3.jpg"
          height="300px"
        />
        <Card.Body>
          <Card.Title className="text-center align-content-center">
            Africa – Amazing African Safari
          </Card.Title>
          <Card.Title className="text-center align-content-center">
            5 Hours
          </Card.Title>
          <Card.Title className="text-center align-content-center">
            Availability:Jan 16-Feb 16
          </Card.Title>
          <Card.Text className="text-center align-content-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
            minus exercitationem. Expedita in excepturi porro quibusdam. Aut,
            rerum eos ipsam nihil excepturi nulla, inventore, odit facilis
            molestias iste nisi dolor.
          </Card.Text>
          <Card.Title style={{ color: "yellow" }}>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </Card.Title>
          <Card.Title className="d-flex justify-content-end">From</Card.Title>
          <Card.Title
            className="d-flex justify-content-end"
            style={{ color: "red" }}
          >
            $1000
          </Card.Title>
        </Card.Body>
      </Card> */}
    </div>
  
  </div>

    
  )
}

export default Packages
