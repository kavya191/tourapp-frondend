import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


import "./Footer.css"
const Footer = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div style={{ backgroundColor: '#2e466e' }}>
    <Container  className='text-center '>
      <Row >
        <Col lg={4} >
          <img
            alt=""
            src="https://i.postimg.cc/y81kMxG8/Mitarbeiter.gif"
            width="40"
            height="40"
            className="pb-1"
          />{' '}
          <b className='fs-1 text-white mt-3'>TRAVL</b>
          <p  className='text-white p-4' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem temporibus ad at eos illum magnam optio, est nisi! Odit laboriosam eos facere cum laborum nihil maiores necessitatibus. Quas, unde. Tempore.</p>
        </Col>
        <Col lg={4}  >
         
         
          
          <button className='btn btn-secondary w-25 pe-3 m-3  text-align-center' onClick={handleShow}>Contact Us</button>
        </Col>
        <Col lg={4}  className='mb-5' >
          <h3 className='text-white mt-4'>Connect With Us</h3>
          <div className=''>
            <i class="fa-brands fa-instagram mt-3 ms-2 text-white fa-2x"></i>

            <i class="fa-brands fa-facebook mt-3 ms-2 text-white fa-2x"></i>
            <i class="fa-brands fa-github mt-3 ms-2 text-white fa-2x"></i>
            <i class="fa-brands fa-linkedin mt-3 ms-2 text-white fa-2x"></i>
            <i class="fa-brands fa-twitter mt-3 ms-3 text-white fa-2x "></i>
          </div>
          <div className='text-white'>
            <li class=" fa-solid fa-envelope mt-3 ms-3 text-white me-1 "></li>employeedesk@gmail.com
          </div>
        </Col>
      </Row>
    </Container>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton  className=' d-flex justify-content-center'>
          <Modal.Title style={{color:"#02656A",fontSize:"2rem",fontFamily:"monospace"}}>Contact Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label style={{color:"#02656A"}}>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Your Name"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label style={{color:"#02656A"}}>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label style={{color:"#02656A"}}>Subject</Form.Label>
              <Form.Control
                type="email"
                placeholder="Subject"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label style={{color:"#02656A"}}>Message</Form.Label>
              <Form.Control as="textarea" rows={5} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> */}
          <Button variant="primary" onClick={handleClose} className='form-control' style={{backgroundColor: '#02656A'}}>
            Send
          </Button>
        </Modal.Footer>
      </Modal>
  </div>
 
  )
}

export default Footer
