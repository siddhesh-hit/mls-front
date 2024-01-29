import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../../assets/logo.png";
import { Button, Form, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
const ResetPass = () => {
  return (
    <div className="container-fluid loginboxpage">
      <Link to="/">
        <img src={logo} alt="logo" className="loginbg" />
      </Link>
      <div className="container">
        <Row className="justify-content-center">
          <Col lg={6} md={6} sm={12} xs={12}>
            <div className="login-box">
              <h3 className="mb-3">पासवर्ड रीसेट करा</h3>
              <InputGroup className="mb-4">
                <InputGroup.Text id="basic-addon1">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                </InputGroup.Text>
                <Form.Control
                  type="email"
                  placeholder="नवीन पासवर्ड"
                  aria-label="नवीन पासवर्ड"
                  aria-describedby="basic-addon1"
                  //   value={email}
                  //   onChange={(e) => setEmail(e.target.value)}
                  //   onBlur={validateForm} // Validate on blur
                />
              </InputGroup>
              <InputGroup className="mb-4">
                <InputGroup.Text id="basic-addon1">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                </InputGroup.Text>
                <Form.Control
                  type="email"
                  placeholder="नवीन पासवर्डची पुष्टी करा"
                  aria-label="नवीन पासवर्डची पुष्टी करा"
                  aria-describedby="basic-addon1"
                  //   value={email}
                  //   onChange={(e) => setEmail(e.target.value)}
                  //   onBlur={validateForm} // Validate on blur
                />
              </InputGroup>
              <Link to="/">
                <Button variant="primary" className="mt-4">
                  पुष्टी करा
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
