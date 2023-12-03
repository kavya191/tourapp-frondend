import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./Loginpage.css";
import { Link, useNavigate } from "react-router-dom";
import { adminLoginApi } from "../Services/AllApis";
import { adminlogined } from "../Components/LoginContext";
import { useContext } from "react";
const Adminlogin = () => {

  //context
  const {setLoginData}=useContext(adminlogined)
  const navigate = useNavigate();
  //state to store inputs
  const [inputs, setInputs] = useState({
    email: "",
    psw: "",
  });
  //create state for validation
  const [emailValid, setEmailValid] = useState(true);
  const [pswValid, setPswValid] = useState(true);
  const getInputs = (e) => {
    //destructure
    const { name, value } = e.target;
    if (name == "email") {
      //match() method used to check
      if (
        value.match(
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        )
      ) {
        setEmailValid(true);
        console.log(name, value);
        setInputs({ ...inputs, [name]: value });
      } else {
        setEmailValid(false);
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
  };
  const handleSubmit = async () => {
    const { email, psw } = inputs;
    if (email == "" && psw == "") {
      alert("all fiels are required");
    } else {
      const result = await adminLoginApi(inputs);
      if (result.status >= 200 && result.status < 300) {
        console.log(result)
        localStorage.setItem("email", inputs.email);
        localStorage.setItem("isloggedin",result.data.isAdmin)
        setLoginData(true)
        navigate("/adminhome");
      } else {
        alert(result.response.data);
      }
      console.log(result);
    }
  }
  return (
    <div className="login__wrapper">
      <div className="login__container">
        <div className="login_right_section" data-aos="zoom-in">
          <h1 className="mb-5 text-white pe-5">Admin Login</h1>
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
            id="inputPassword5"
          />
          {!pswValid && <p className="text-danger">* invalid password !</p>}

          <Button
            onClick={handleSubmit}
            style={{
              marginTop: "23px",
              width: "95%",
              backgroundColor: "#02656A",
            }}
            className="mb-4"
          >
            Login
          </Button>

          <p className="text-white">
            Not a Member ?
            <Link to={"/signup"} style={{ textDecoration: "none" }}>
              Register
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Adminlogin;
