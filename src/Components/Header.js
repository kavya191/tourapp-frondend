import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { MdTravelExplore } from "react-icons/md";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import emailjs from "@emailjs/browser";
import { useContext } from "react";
import { adminlogined } from "./LoginContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate()
  const {loginData,setLoginData}=useContext(adminlogined)
  const isloggedinData=localStorage.getItem("isloggedin")
  console.log(isloggedinData);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //create state for input data
  const [inputs, setInputs] = useState({
    username: "",
    phone: "",
    email: "",
    message: "",
  });
  const getInputs = (e) => {
    //destructure data
    const { name, value } = e.target;
    // console.log(name,value);
    setInputs({ ...inputs, [name]: value });
  };

  console.log(inputs);
  const handleSubmit = (e) => {
    e.preventDefault();
    const service_id = "service_744nrta";
    const templete_id = "template_gicyo4u";
    const public_key = "7D0_3e_aXgpO79Upw";

    const templateParams = {
      from_name: inputs.username,
      to_name: "Travl tour services",
      from_mobile: inputs.phone,
      from_email: inputs.email,
      message: inputs.message,
    };
    emailjs
      .send(service_id, templete_id, templateParams, public_key)
      .then((result) => {
        console.log("success", result);
        setInputs({
          ...inputs,
          username: "",
          phone: "",
          email: "",
          message: "",
        });
        toast.success('Thank you... Someone from our team will contact you soon', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      })
      .catch((error) => {
        console.log("error", error);
        alert("unable to send message");
      });
    handleClose();
  };
  const logoutAdmin=()=>{
    // setLoginData(false)
    localStorage.clear()
    navigate('/')
  }
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary p-4 nav_bar header">
        <Container>
          <Navbar.Brand style={{ color: "#02656A", fontSize: "2rem" }}>
            <MdTravelExplore></MdTravelExplore>TRAVl
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" style={{ color: "#02656A" }}>
              <Link
                to={"/"}
                style={{ color: "#02656A", textDecoration: "none" }}
                className="pe-4"
               
              >
                Home
              </Link>
              <Link
                to={"/services"}
                style={{ color: "#02656A", textDecoration: "none" }}
                className="pe-4"
              >
                Packages
              </Link>

              <Link
                to="/about"
                style={{ color: "#02656A", textDecoration: "none" }}
                className="pe-4"
              >
                About
              </Link>
              <Link
                to="/blog"
                style={{ color: "#02656A", textDecoration: "none" }}
                className="pe-4"
              >
                Pages
              </Link>
              <Link
                style={{ color: "#02656A", textDecoration: "none" }}
                className="pe-4"
                onClick={handleShow}
              >
                Enquiry
              </Link>
            </Nav>
            {!isloggedinData ? (
              <Link to={"/adminlogin"}>
                <Button style={{ backgroundColor: "#02656A" }}>Login</Button>
              </Link>
            ) : (
            
                <Button type="button" onClick={logoutAdmin} style={{ backgroundColor: "#02656A" }}>Logout</Button>
              
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className=" d-flex justify-content-center">
          <Modal.Title
            style={{
              color: "#02656A",
              fontSize: "2rem",
              fontFamily: "monospace",
            }}
          >
            Contact Form
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label style={{ color: "#02656A" }}>Name</Form.Label>
              <Form.Control
                name="username"
                onChange={(e) => getInputs(e)}
                type="text"
                placeholder="Enter Your Name"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label style={{ color: "#02656A" }}>Contact No</Form.Label>
              <Form.Control
                name="phone"
                onChange={(e) => getInputs(e)}
                type="text"
                placeholder="Contact No"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label style={{ color: "#02656A" }}>
                Email address
              </Form.Label>
              <Form.Control
                name="email"
                onChange={(e) => getInputs(e)}
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label style={{color:"#02656A"}}>Subject</Form.Label>
            <Form.Control
              type="email"
              placeholder="Subject"
              autoFocus
            />
          </Form.Group> */}
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label style={{ color: "#02656A" }}>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                name="message"
                onChange={(e) => getInputs(e)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
          Close
        </Button> */}
          <Button
            variant="primary"
            onClick={handleSubmit}
            type="submit"
            className="form-control"
            style={{ backgroundColor: "#02656A" }}
          >
            Send
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer
position="bottom-center"
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
    </div>
  );
};

export default Header;
