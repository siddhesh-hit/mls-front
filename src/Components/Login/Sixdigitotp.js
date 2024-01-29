import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../../assets/logo.png";
import { Button, Form, InputGroup } from "react-bootstrap";
import Register from "./Register";
import { Link } from "react-router-dom";
const Sixdigitotp = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
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
              <h3 className="otp6-head mb-4 mt-3">
                6 अंकी ओटीपी टाका
                <br />
                abcd@gmail.com : वर प्राप्त
              </h3>

              <div className="otp6-box ">
                <input
                  type="text"
                  className="otp-input"
                  maxlength="1"
                  //   oninput={moveToNext(this, 2)}
                />
                <input
                  type="text"
                  className="otp-input"
                  maxlength="1"
                  //   oninput={moveToNext(this, 2)}
                />
                <input
                  type="text"
                  className="otp-input"
                  maxlength="1"
                  //   oninput={moveToNext(this, 2)}
                />
                <input type="text" className="otp-input" maxlength="1" />
                <input
                  type="text"
                  className="otp-input"
                  maxlength="1"
                  //   oninput={moveToNext(this, 2)}
                />
                <input
                  type="text"
                  className="otp-input"
                  maxlength="1"
                  //   oninput={moveToNext(this, 2)}
                />
              </div>

              <div className="code-text mt-4">
                <h6 style={{ color: "red", marginRight: "40%" }}>अवैध OTP</h6>
              </div>
              <div className="submit-otp ml-2">
                <Button
                  variant="primary"
                  onClick={handleSubmit}
                  className="mt-5"
                >
                  OTP सबमिट करा
                </Button>
                <Button
                  variant="primary"
                  onClick={handleSubmit}
                  className="decline-button mt-2"
                  style={{ backgroundColor: "#F2EDFD", color: "black" }}
                >
                  रद्द करा
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Sixdigitotp;
