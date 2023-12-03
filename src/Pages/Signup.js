import React, { useState } from "react";
import "./Signup.css";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { adminRegisterApi } from "../Services/AllApis";

function Signup() {
  //state to store  input data
  const [inputs, setInputs] = useState({
    email: "",
    psw: "",
    conpsw: "",
  });
  //create state for validation
  const [emailValid, setEmailValid] = useState(true);
  const [pswValid, setPswValid] = useState(true);
  const [conpswValid, setConpswValid] = useState(true);
  let navigate = useNavigate();
  //get inputs
  const getInputs = (e) => {
    let { name, value } = e.target;
    if (name == "email") {
      if (
        value.match(
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        )
      ) {
        setEmailValid(true);
        //console.log(name,value);
        setInputs({ ...inputs, [name]: value });
      } else {
        setEmailValid(false); //<p className='text-danger'>* invalid email !</p>
      }
    }
    if (name == "psw") {
      if (value.match(/^[a-zA-Z0-9]+$/)) {
        setPswValid(true);
        setInputs({ ...inputs, [name]: value });
      } else {
        setPswValid(false);
      }
    }
    if (name == "conpsw") {
      if (value.match(/^[a-zA-Z0-9]+$/)) {
        setConpswValid(true);
        setInputs({ ...inputs, [name]: value });
      } else {
        setConpswValid(false);
      }
    }
  };
  //data submit function
  const handleSubmit = async () => {
    //destructure input data
    const { email, psw, conpsw } = inputs;
    if (email == "" || psw == "" || conpsw == "") {
      alert("all fields are required");
    } else {
      if (psw == conpsw) {
        const result = await adminRegisterApi(inputs);
        console.log(result);
        if (result.status >= 200 && result.status < 300) {
          navigate("/adminlogin");
        } else {
          alert("error");
        }
      } else {
        alert("passwords are not matching");
      }
    }
  };
  // console.log(inputs);
  return (
    <div className="login__wrapper">
      <div className="login__container">
        <div className="login_right_section" data-aos="zoom-in">
          <h1 className="mb-5 text-white pe-5">Admin SignUp</h1>
          <Form.Label htmlFor="inputPassword5" className="text-white">
            Email
          </Form.Label>
          <Form.Control
            name="email"
            onChange={(e) => getInputs(e)}
            style={{ width: "92%" }}
            type="email"
            id="emailId"
            aria-describedby="passwordHelpBlock"
          />
          {!emailValid && <p className="text-danger">* invalid email !</p>}
          <Form.Label htmlFor="inputPassword5" className="text-white">
            Password
          </Form.Label>
          <Form.Control
            name="psw"
            onChange={(e) => getInputs(e)}
            style={{ width: "92%" }}
            type="password"
            id="pass"
          />
          {!pswValid && <p className="text-danger">* invalid password !</p>}
          <Form.Label htmlFor="inputPassword5" className="text-white">
            Confirm Password
          </Form.Label>
          <Form.Control
            name="conpsw"
            onChange={(e) => getInputs(e)}
            style={{ width: "92%" }}
            type="password"
            id="conpss"
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
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
