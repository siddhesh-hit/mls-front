import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { Button, Form, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const PhoneloginEng = () => {
  const [formdata, setformdata] = useState({
    phone_number: "",
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformdata((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (formdata.phone_number === "") {
      newErrors.phone_number = "Please Enter Phone number";
    } else if (!/^\d+$/.test(formdata.phone_number)) {
      newErrors.phone_number = "Invalid Phone Number";
    } else if (formdata.phone_number.length !== 10) {
      newErrors.phone_number = "Please enter 10 digit Phone Number";
    } else {
      newErrors.phone_number = "";
    }
    setErrors(newErrors);
  };
  const handleSubmit = (e) => {
    validateForm();
    if (Object.keys(errors).every((key) => errors[key] === "")) {
      navigate("/Verifyotpeng");
    }
  };

  return (
    <div className="container-fluid loginboxpage">
      <Link to="/">
        <img src={logo} alt="logo" className="loginbg" />
      </Link>
      <div className="container">
        <Row className="justify-content-center">
          <Col lg={6} md={6} sm={12} xs={12}>
            <div className="login-box">
              <h3 className="mb-4">
                To sign in, please
                <br />
                enter your Phone Numebr
              </h3>
              <InputGroup className="mb-4">
                <InputGroup.Text id="basic-addon1">
                  <i className="fas fa-phone" aria-hidden="true"></i>
                </InputGroup.Text>
                <Form.Control
                  type="tel"
                  placeholder="Phone Number"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
              {errors.phone_number && (
                <p className="error">{errors.phone_number}</p>
              )}
              <Button variant="primary" onClick={() => handleSubmit()}>
                Get OTP
              </Button>
              <div className="horizontal-lines mt-5 mb-3">
                <div className="horizontal-line"></div>
                <div className="text">OR</div>
                <div className="horizontal-line"></div>
              </div>
              <div className="text-center mt-5 mb-5">
                <Link to="/PortalRegisterEng">
                  <button variant="primary" className="phone-login ">
                    <i className="fa fa-envelope" aria-hidden="true"></i>Sign in
                    With Email id
                  </button>
                </Link>
              </div>

              <a className="new_account">
                Don’t have an Account ?
                <span>
                  <Link to="/SignupPortalEng">Sign Up</Link>
                </span>
              </a>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default PhoneloginEng;
