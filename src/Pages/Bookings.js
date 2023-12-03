import React, { useEffect, useState } from 'react'
import "./Bookings.css"

import Table from 'react-bootstrap/Table';
import { bookingdetails } from '../Services/AllApis';
import { IoIosHome } from "react-icons/io";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function Bookings() {
  const[bookingData,setBookingData]=useState({})
  const getBooking=async()=>{
    const {data}=await bookingdetails()
    console.log(data);
    setBookingData(data)
  }
  console.log(bookingData);
  useEffect(()=>{
    getBooking()
  },[])
  return (
    <div className='view_detail'>
            <h1 className='mb-4 mt-5 text-center'>Booking details</h1>
            <div className='view_table'>
            {bookingData.length>0?(
            <Table striped bordered responsive hover variant="light" className=''>
             
                   <thead >
                   <tr>
                   <th>#</th>
                   <th>Name</th>
                    <th>Email</th>
                   <th>Contact No</th>
                   <th>Location</th>
                  <th>No of Days</th>
                   <th>From Date</th>
                  <th>To Date</th>
                 
      
                  </tr>
                 </thead>
                 <tbody>
                  {bookingData.map((i,index)=>
                     <tr>
                     <td>{index+1}</td>
                     <td>{i.username}</td>
                     <td>{i.email}</td>
                      <td>{i.phonenum}</td>
                     <td>{i.location}</td>
                     <td>{i.days}</td>
                      <td>{i.fromdate}</td>
                     <td>{i.todate}</td>
                    
                    </tr>)}
                  
      
                 </tbody>
             
        
         </Table> ):<h1>No data found</h1>

}
<div  className='d-flex justify-content-center align-items-center '>
  <Link to={"/adminhome"} style={{textDecoration:"none"}}>
  <Button className='d-flex justify-content-center align-items-center bg-black'>Back To <IoIosHome  /> </Button>
  </Link>

</div>

            </div>
        </div>
  )
}

export default Bookings