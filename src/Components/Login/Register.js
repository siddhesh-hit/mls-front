import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { Button, Form, InputGroup } from "react-bootstrap";

const Register = () => {
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("1");

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const togglePassword = () => {
    setPasswordType(passwordType === "password" ? "text" : "password");
  };
  const handlePasswordChange = (event) => {
    setPasswordInput(event.target.value);
  };
  const validateForm = () => {
    const newErrors = {};

    if (!email) {
      newErrors.email = "ई-मेल आवश्यक आहे.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "कृपया वैध ईमेल पत्ता प्रविष्ट करा.";
    } else {
      newErrors.email = "";
    }

    if (!password) {
      newErrors.password = "पासवर्ड आवश्यक आहे.";
    } else if (password.length < 6) {
      newErrors.password = "पासवर्ड सहा किंवा अधिक वर्णांचा असावा.";
    } else {
      newErrors.password = "";
    }

    if (userType === "1") {
      newErrors.userType = "वापरकर्ता प्रकार निवडा.";
    } else {
      newErrors.userType = "";
    }

    setErrors(newErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm(); // Validate the form before submitting
    if (Object.keys(errors).every((key) => errors[key] === "")) {
      // Perform form submission here
      navigate("/verifyotp");
    }
  };

  return (
    <div className="container-fluid loginboxpage">
      <img src={logo} alt="logo" className="loginbg" />
      <div className="container">
        <Row className="justify-content-center">
          <Col lg={6} md={6} sm={12} xs={12}>
            <div className="login-box">
              <h3 className="mb-4">
                साइन इन करण्यासाठी, कृपया
                <br />
                तुमचा इमेल पत्ता लिहा
              </h3>
              <InputGroup className="mb-4">
                <InputGroup.Text id="basic-addon1">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                </InputGroup.Text>
                <Form.Control
                  type="email"
                  placeholder="ई-मेल आयडी"
                  aria-label="ई-मेल आयडी"
                  aria-describedby="basic-addon1"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={validateForm} // Validate on blur
                />
              </InputGroup>
              {errors.email && <p className="error">{errors.email}</p>}
              <InputGroup className="mb-4">
                <InputGroup.Text id="basic-addon1">
                  <i className="fa fa-lock" aria-hidden="true"></i>
                </InputGroup.Text>
                <Form.Control
                  type={passwordType === "password" ? "password" : "text"}
                  placeholder="पासवर्ड"
                  aria-label="पासवर्ड"
                  aria-describedby="basic-addon1"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onBlur={validateForm} // Validate on blur
                />
                <div className="input-group-btn">
                  <span onClick={togglePassword}>
                    {passwordType === "password" ? (
                      <i className="fa fa-eye-slash"></i>
                    ) : (
                      <i className="fa fa-eye"></i>
                    )}
                  </span>
                </div>
              </InputGroup>
              {errors.password && <p className="error">{errors.password}</p>}
              <InputGroup className="mb-4">
                <InputGroup.Text id="basic-addon1">
                  <i className="fa fa-user" aria-hidden="true"></i>
                </InputGroup.Text>
                <Form.Select
                  aria-label="वापरकर्ता प्रकार निवड"
                  value={userType}
                  onChange={(e) => setUserType(e.target.value)}
                  onBlur={validateForm} // Validate on blur
                >
                  <option value="1">वापरकर्ता प्रकार निवड</option>
                  <option value="2">One</option>
                  <option value="3">Two</option>
                  <option value="4">Three</option>
                </Form.Select>
              </InputGroup>
              {errors.userType && <p className="error">{errors.userType}</p>}
              <Button variant="primary" onClick={handleSubmit}>
                साइन इन करा
              </Button>
              <a className="new_account">
                खाते नाही?
                <span>
                  <a href="#">साइन अप करा</a>
                </span>
              </a>

              <div className="submit-otp">
                {/* <button  className="login-type" >
                    <img src={googlelogo} />
                  </button>
                  <button
                     className="login-type" style={ {marginTop :"-27px "}
                  }>
                    <img src={facebooklogo} />
                  </button> */}
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Register;
