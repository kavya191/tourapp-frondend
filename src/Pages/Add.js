import React, { useState } from 'react'
import './Add.css'
import {Form,Container,Row,Col} from 'react-bootstrap'
import { addPackage } from '../Services/AllApis'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Add() {
  const navigate=useNavigate()
    //state to store image
    const[image,setImage]=useState("")
    //state to store package details
    const[inputs,setSetInputs]=useState({
        place:"",
        description:"",
        num:"",
        sdate:"",
        edate:"",
        rate:""
       

    })
    //create function for get inputs
    const getInputs=(e)=>{
        const{name,value}=e.target
        // console.log(name,value)
       setSetInputs({...inputs,[name]:value})
    }
    const choooseImage=(e)=>{
            setImage(e.target.files[0])
    }
    console.log(image);
    const handleData = async (e) => {
        e.preventDefault();
        const { place, description, num,
             sdate,edate,rate } = inputs;
             
        if (
          place == "" ||
          description == "" ||
          num == "" ||
          sdate == "" ||
          edate == "" ||
          rate ==""
         ) {
          alert("all fields are required");
        } else {
          //setting header
          const headerConfig = {
            "Content-Type": "multipart/form-data",
          };
    
          //file type content sent chyumpo nammal form data typil aayirikanm body akath send cheyunnath
          //for that formtype body object create cheyyanm ennit aakanam data send cheyandath
          const data = new FormData();
          console.log("data", data);
    
          data.append("place", place);
          data.append("description", description);
          data.append("num", num);
          data.append("sdate", sdate);
          data.append("edate", edate);
          data.append("rate", rate);
          //nammal backend routes akath(multer use cheytha same name thanne key aayit kodukanam)
          data.append("user_profile", image);
    
          const result = await addPackage(data, headerConfig);
          if (result.status >= 200 && result.status <= 300) {
            toast.success('package added successfully', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              });
            navigate('/adminhome')
            setSetInputs({
              ...inputs,
              place: "",
              description: "",
              num: "",
              sdate: "",
              edate:"",

            });
            setImage("");

          } else {
            console.log("unable to post");
          }
        }
      };
  return (
    <div className='add_form_head'>
    <div>
      <h1 className='d-flex justify-content-center' style={{color:"#02656A"}}>Add Destinations</h1>
                <Container className='container__wrapper'>
                    <form>
                        <Row>
                            <Col>
                                <Form.Label className='label__style' htmlFor="inputPassword5">Name of Destination</Form.Label>
                                <Form.Control
                                name='place'
                                onChange={(e)=>getInputs(e)}
                                    type="text"
                                    id="destinatin"
                                    aria-describedby="passwordHelpBlock"
                                />
                                <Form.Label  className='label__style' htmlFor="inputPassword5">Description </Form.Label>
                                <Form.Control
                                onChange={(e)=>getInputs(e)}
                                name='description'
                                    type="textarea"
                                    
                                    id="desc"
                                    aria-describedby="passwordHelpBlock"
                                />
                                  <Form.Label  className='label__style' htmlFor="inputPassword5">Maximum People</Form.Label>
                                <Form.Control
                                onChange={(e)=>getInputs(e)}
                                    type="text"
                                    name='num'
                                    id="mnum"
                                    aria-describedby="passwordHelpBlock"
                                />
                                 <Form.Label  className='label__style' htmlFor="inputPassword5">Price</Form.Label>
                                <Form.Control
                                onChange={(e)=>getInputs(e)}
                                    type="text"
                                    name='rate'
                                    id="trate"
                                    aria-describedby="passwordHelpBlock"
                                />
                                  <Form.Label  className='label__style' htmlFor="inputPassword5">Start Date</Form.Label>
                                <Form.Control
                                onChange={(e)=>getInputs(e)}
                                name='sdate'
                                    type="date"
                                    id="inputPassword5"
                                    aria-describedby="passwordHelpBlock"
                                />
                                   <Form.Label  className='label__style' htmlFor="inputPassword5">End Date</Form.Label>
                                <Form.Control
                                onChange={(e)=>getInputs(e)}
                                name='edate'
                                    type="date"
                                    id="inputPassword5"
                                    aria-describedby="passwordHelpBlock"
                                />
                                   <Form.Label  className='label__style' htmlFor="inputPassword5">Image</Form.Label>
                                <Form.Control
                                onChange={(e)=>choooseImage(e)}
                                name='profile'
                                    type="file"
                                    id="inputPassword6"
                                    aria-describedby="passwordHelpBlock"
                                />
                            </Col>
                            {/* <Col>
                            <Form.Label  className='label__style' htmlFor="inputPassword5">Gender:</Form.Label>
                            <div>
                                <input type="radio"
                                name="gendername"
                                value={"Male"}
                                id="gender"/>
                                <label htmlFor="gender">Male </label>
                                <input type="radio"
                                name="gendername"
                                value={"Female"}
                                id="genderf"/>
                                <label htmlFor="genderf">Female</label>
                            </div>
                               
                                 <Form.Label  className='label__style mt-2' htmlFor="inputPassword5">Phone</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="inputPassword5"
                                    aria-describedby="passwordHelpBlock"
                                />
                                 <Form.Label htmlFor="inputPassword5">Occupation of Guardian</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="inputPassword5"
                                    aria-describedby="passwordHelpBlock"
                                />
                                  <Form.Label  className='label__style' htmlFor="inputPassword5">Standard when leaving</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="inputPassword5"
                                    aria-describedby="passwordHelpBlock"
                                />
                                   <Form.Label  className='label__style' htmlFor="inputPassword5">Date of Birth</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="inputPassword5"
                                    aria-describedby="passwordHelpBlock"
                                />
                                   <Form.Label  className='label__style' htmlFor="inputPassword5">Nationality</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="inputPassword5"
                                    aria-describedby="passwordHelpBlock"
                                />
                            </Col> */}
                        </Row>

                        <Row>
                            <button className='btn  mb-4 mt-4 text-white' onClick={handleData} style={{backgroundColor:"#02656A"}}>Submit</button>
                        </Row>
                    </form>
                </Container>
            </div>
            <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
{/* Same as */}
<ToastContainer />
    </div>
  )
}

export default Add