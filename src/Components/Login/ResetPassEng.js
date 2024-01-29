import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../../assets/logo.png";
import { Button, Form, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
const ResetPass = () => {
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (password === "") {
      newErrors.password = "पासवर्ड अनिवार्य आहे";
    } else if (
      password.length < 8 ||
      password.length > 16 ||
      !/(?=.*[a-z])/.test(password) || // At least one lowercase letter
      !/(?=.*[A-Z])/.test(password) || // At least one uppercase letter
      !/(?=.*[0-9])/.test(password) || // At least one number
      !/(?=.*[@#$&])/.test(password)
    ) {
      newErrors.password = (
        <ul>
          <li>कृपया अद्वितीय पासवर्ड प्रविष्ट करा</li>
          <li>8 ते 16 वर्ण पासवर्ड प्रविष्ट करा</li>
          <li>अप्परकेस वर्णमाला आणि लोअरकेस वर्णमाला</li>
          <li>किमान एक संख्या आणि किमान एक चिन्ह</li>
        </ul>
      );
    } else {
      newErrors.password = "";
    }

    setErrors(newErrors);
  };

  const handleSubmit = async (e) => {
    validateForm();
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
              <h3 className="mb-3">Reset password</h3>
              <InputGroup className="mb-4">
                <InputGroup.Text id="basic-addon1">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                </InputGroup.Text>
                <Form.Control
                  type={passwordType === "password" ? "password" : "text"}
                  placeholder="पासवर्ड"
                  name="password"
                  aria-label="Password"
                  aria-describedby="basic-addon1"
                  value={password}
                  onBlur={validateForm} // Validate on blur
                  required
                />
              </InputGroup>
              {errors.password && <p className="error">{errors.password}</p>}
              <InputGroup className="mb-4">
                <InputGroup.Text id="basic-addon1">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                </InputGroup.Text>
                <Form.Control
                  type="email"
                  placeholder="Confirm the new password"
                  aria-label="Confirm new password"
                  aria-describedby="basic-addon1"
                  //   value={email}
                  //   onChange={(e) => setEmail(e.target.value)}
                  //   onBlur={validateForm} // Validate on blur
                />
              </InputGroup>
              <Link to="/" onClick={handleSubmit}>
                <Button variant="primary" className="mt-4">
                  Confirm
                </Button>
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ResetPass;
