import React, { useEffect, useState } from "react";
import "./Singlepage.css";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { FaVoicemail } from "react-icons/fa6";
import Badge from "react-bootstrap/Badge";
import { FaPhoneAlt } from "react-icons/fa";
import Footer from "../Components/Footer";
import { getSinglepackage, userBooking } from "../Services/AllApis";
import { useNavigate, useParams } from "react-router-dom";
import BASE_URL from "../Services/BaseUrl";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Singlepage() {
  //to find id
  const { id } = useParams();
  console.log(id);
  //state to store single package
  const [packages, setPackages] = useState("");
  //function to get single package details
  const getSingle = async () => {
    const result = await getSinglepackage(id);
    if (result.status >= 200 && result.status < 300) {
      setPackages(result.data)
      // console.log(result.data);
    }
  };
  useEffect(() => {
    getSingle();
  }, []);
  // console.log(packages);
  const navigate = useNavigate();
  //state for package booking
  const [booking, setBooking] = useState({
    username: "",
    email: "",
    phonenum: "",
    location: "",
    days: "",
    fromdate: "",
    todate: "",
  });
  //state for validation
  const [nameValid, setNamevalid] = useState(true);
  const getInputs = (e) => {
    //destructure inputs
    const { name, value } = e.target;
    if (name == "username") {
      if (value.match()) {
        setNamevalid(true);
      } else setNamevalid(false);
    }
    // console.log(name,value);
    setBooking({ ...booking, [name]: value });
  };
  // console.log(booking);
  const handleSubmit = async (e) => {
    e.preventDefault();
    //destructure
    const { username, email, phonenum, location, days, fromdate, todate } =
      booking;
    if (
      username == "" ||
      email == "" ||
      phonenum == "" ||
      location == "" ||
      days == "" ||
      fromdate == "" ||
      todate == ""
    ) {
      alert("all fields are required");
    } else {
      const result = await userBooking(booking);
      console.log(result);
      if (result.status >= 200 && result.status < 300) {
        toast.success('Booking Success.Our Team will Contact  you for further procedure!', {
          position: "top-center",
          theme: "light",
          });
        navigate("/");
      } else {
        toast.warn('Error Occured', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      }
    }
  };
  return (
    <div>
      <div  >
        <img className="main_div" src={`${BASE_URL}/tourimage/${packages.profile}`} alt="" />
      </div>
      <div
        className=" single_head d-flex justify-content-center"
        style={{ display: "flex", flexGrow: "wrap", backgroundColor: "grey" }}
      >
        <div className=" main_head">
          <div className="left_div">
            <h1 className="text-center p-4 fw-bold">
              {" "}
             {packages.place}
            </h1>
            <div className="d-flex justify-content-center">
              <div style={{ color: "yellow" }}>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
              <div>(150 review)</div>
            </div>
            <div className="d-flex flex-column justify-content-evenly">
              <div className=" child_div  mt-5 ">
                <p>
                  {" "}
                  <i className="fa-regular fa-clock p-1"></i> 5 Hours
                </p>
                <p>
                  {" "}
                  <i className="fa-solid fa-person p-1"></i> Max people : {packages.num}
                </p>
                <p>
                  {" "}
                  <i className="fa-solid fa-wifi p-1"></i> Wifi Available
                </p>
              </div>
              <div className="child_div mt-1 ">
                <p>
                  {" "}
                  <i className="fa-solid fa-calendar-days p-1"></i>Jan 18’ - Dec
                  21'
                </p>
                <p>
                  {" "}
                  <i className="fa-solid fa-user p-1"></i>Min Age : 12+
                </p>
                <p>
                  {" "}
                  <i className="fa-solid fa-location-dot p-1"></i>Pickup: Airpot
                </p>
              </div>
            </div>
            <div>
              <p className="p-5">
          {packages.description}
              </p>
              <p className="pb-3 ps-5 pe-5">
                Lorem Ipsum decided to leave for the far World of Grammar. The
                Big Oxmox advised her not to do so, because there were thousands
                of bad Comma wild Question Marks and devious Semikoli, but the
                Little Blind Text didn’t listen. She packed her seven versalia,
                put her initial into the belt and made herself on the way. When
                she reached the first hills of t
              </p>
            </div>
            <Container
              className=" d-flex justify-content-center flex-column"
              style={{ width: "78%" }}
            >
              <hr />
              <Row>
                <Col>Departure & Return Location</Col>
                <Col>John F.K. International Airport</Col>
              </Row>
              <hr />
              <Row>
                <Col>Departure Time</Col>
                <Col>3 Hours Before Flight Time</Col>
              </Row>
              <hr />
              <Row>
                <Col>Bedroom</Col>
                <Col>4 Bedrooms</Col>
              </Row>
              <hr />
              <Row>
                <Col>Bathrooms</Col>
                <Col>6 Bathrooms</Col>
              </Row>

              <hr />
              <Row>
                <Col>Price Includes</Col>
                <Col>
                  <p>
                    <i class="fa-solid fa-check"></i> Air fares
                  </p>
                  <p>
                    <i class="fa-solid fa-check"></i> 3 Nights Hotel
                    Accomodation
                  </p>
                  <p>
                    <i class="fa-solid fa-check"></i> Tour Guide
                  </p>
                  <p>
                    <i class="fa-solid fa-check"></i> Entrance Fees
                  </p>
                  <p>
                    <i class="fa-solid fa-check"></i> All transportation in
                    destination location
                  </p>
                </Col>
              </Row>

              <hr />
              <Row>
                <Col>Price Excludes</Col>
                <Col>
                  <p>
                    {" "}
                    <i class="fa-solid fa-xmark"></i>Price Excludes
                  </p>
                  <p>
                    {" "}
                    <i class="fa-solid fa-xmark"></i>Driver Service Fee
                  </p>
                  <p>
                    {" "}
                    <i class="fa-solid fa-xmark"></i>Any Private Expenses
                  </p>
                  <p>
                    {" "}
                    <i class="fa-solid fa-xmark"></i>Room Service Fees
                  </p>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="right_div d-flex  ">
            <div className="booking_div" data-aos="zoom-in-up" data-aos-easing="linear"
     data-aos-duration="1500">
              <h2 className="ps-3">
                <Badge className="text-white mt-4  ">Best Seller</Badge>
              </h2>
              <p
                className="text-black fs-2 ps-1 "
                style={{ fontFamily: "monospace" }}
              >
                From <span className="fw-bold fs-1 text-warning">$100</span>{" "}
              </p>
              <p className="ms-4"> Booking Form</p>
              <Form className="input_form">
                <Form.Label htmlFor="inputPassword5" className="input_form">
                  Name
                </Form.Label>
                <Form.Control
                  name="username"
                  onChange={(e) => getInputs(e)}
                  style={{ width: "92%" }}
                  type="text"
                  id="uname"
                  aria-describedby="passwordHelpBlock"
                />
                {!nameValid && (
                  <p className="text-danger">* invalid username !</p>
                )}
                <Form.Label htmlFor="inputPassword5">Email</Form.Label>
                <Form.Control
                  name="email"
                  onChange={(e) => getInputs(e)}
                  style={{ width: "92%" }}
                  type="email"
                  id="uemail"
                  aria-describedby="passwordHelpBlock"
                />
                <Form.Label htmlFor="inputPassword5">Contact No</Form.Label>
                <Form.Control
                  name="phonenum"
                  onChange={(e) => getInputs(e)}
                  style={{ width: "92%" }}
                  type="text"
                  id="phn"
                />
                <Form.Label htmlFor="inputPassword5">Location</Form.Label>
                <Form.Control
                  name="location"
                  onChange={(e) => getInputs(e)}
                  style={{ width: "92%" }}
                  type="text"
                  id="place"
                />
                <Form.Label htmlFor="inputPassword5">No of days</Form.Label>
                <Form.Control
                  name="days"
                  onChange={(e) => getInputs(e)}
                  style={{ width: "92%" }}
                  type="text"
                  id="ndays"
                />
                <Form.Label htmlFor="inputPassword5">From Date</Form.Label>
                <Form.Control
                  name="fromdate"
                  onChange={(e) => getInputs(e)}
                  style={{ width: "92%" }}
                  type="date"
                  id="from"
                />
                <Form.Label htmlFor="inputPassword5">To Date</Form.Label>
                <Form.Control
                  name="todate"
                  onChange={(e) => getInputs(e)}
                  style={{ width: "92%" }}
                  type="date"
                  id="to"
                />

                <Button
                  style={{
                    marginTop: "23px",
                    width: "95%",
                    backgroundColor: "#02656A",
                  }}
                  className="mb-4"
                  onClick={handleSubmit}
                >
                  Proceed Booking
                </Button>
              </Form>
            </div>
            <div className="contact_div">
              <h2 className="text-white fw-bold fs-1 d-flex justify-content-center mt-5">
                Get a Question ?
              </h2>
              <p className="d-flex justify-content-center align-items-center text-white fw-bold p-1">
                Do not hesitage to give us a call. <br />
                We are an expert team and we are <br /> happy to talk to you.
              </p>
              <h3 className="d-flex justify-content-center align-items-center text-white fw-bold p-1">
                <FaPhoneAlt />
                +91 9478768907
              </h3>
              <h3 className="d-flex justify-content-center align-items-center text-white fw-bold p-1">
                <FaVoicemail />
                help@travl.com
              </h3>
            </div>
          </div>
        </div>
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
  );
}

export default Singlepage;
