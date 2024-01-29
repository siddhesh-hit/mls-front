import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../../assets/logo.png";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { postApi } from "../../service/axiosInterceptors";
import { toast } from "react-toastify";

const Verifyotpeng = () => {
  const navigate = useNavigate();
  const [Error, setError] = useState(false);
  const [Message, setMessage] = useState("");
  const [OTPS, setOTPS] = useState({
    otp1: "",
    otp2: "",
    otp3: "",
    otp4: "",
  });

  const inputRefs = {
    otp1: React.createRef(),
    otp2: React.createRef(),
    otp3: React.createRef(),
    otp4: React.createRef(),
  };

  function moveToNext(currentInput, nextInputRef) {
    if (
      currentInput &&
      currentInput.value &&
      nextInputRef &&
      nextInputRef.current
    ) {
      currentInput.value = currentInput.value.replace(/\D/g, "");

      if (currentInput.value.length === 1) {
        nextInputRef.current.focus();
      }
    }
  }

  // function validateOTP() {
  //   // const otp1 = document.getElementById("otp1").value;
  //   // const otp2 = document.getElementById("otp2").value;
  //   // const otp3 = document.getElementById("otp3").value;
  //   // const otp4 = document.getElementById("otp4").value;
  //   // const otpValue = otp1 + otp2 + otp3 + otp4;

  //   // Replace '1234' with your expected OTP
  //   if (otpValue === "1234") {
  //     alert("OTP is valid. You can continue.");
  //   } else {
  //     alert("Invalid OTP. Please try again.");
  //   }
  // }

  const handleChange = (e) => {
    setOTPS((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.keys(OTPS).every((key) => OTPS[key] !== "")) {
      let otpValue = Object.values(OTPS).toString();
      console.log(otpValue);

      const data = {
        email_otp: otpValue.replace(/,/g, ""),
        email: localStorage.getItem("temp_email"),
      };
      const res = await postApi("user/verifyEmail", data)
        .then((res) => res)
        .catch((err) => err.response);
      if (res.status >= 400) {
        setError(true);
        let msg = res.data.message && res.data.message.replace("Error:", "");
        setMessage(msg);
        console.log("error", res);
      } else {
        setError(false);
        console.log("response ", res);
        localStorage.setItem("token", res);
        toast.success("Email Verified Successfully");
        setTimeout(() => {
          navigate("/PortalRegister");
        }, 2000);
      }
    } else {
      setError(true);
      toast.error("Please Enter Valid Otp");
      setMessage("Please Enter Valid Otp");
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
              <h3 className="mb-3">
                साइन इन करण्यासाठी, कृपया
                <br />
                कोड टाइप करा
              </h3>
              {/* <h6 className="mb-4">Please type the code we sent to</h6> */}

              <div className="otp-box">
                <input
                  type="text"
                  className="otp-input"
                  maxLength="1"
                  name="otp1"
                  value={OTPS.otp1}
                  onChange={(e) => {
                    handleChange(e);
                    moveToNext(e.target, inputRefs.otp2);
                  }}
                  ref={inputRefs.otp1}
                />
                <input
                  type="text"
                  className="otp-input"
                  maxLength="1"
                  name="otp2"
                  value={OTPS.otp2}
                  onChange={(e) => {
                    handleChange(e);
                    moveToNext(e.target, inputRefs.otp3);
                  }}
                  ref={inputRefs.otp2}
                />
                <input
                  type="text"
                  className="otp-input"
                  maxLength="1"
                  name="otp3"
                  value={OTPS.otp3}
                  onChange={(e) => {
                    handleChange(e);
                    moveToNext(e.target, inputRefs.otp4);
                  }}
                  ref={inputRefs.otp3}
                />
                <input
                  type="text"
                  className="otp-input"
                  maxLength="1"
                  name="otp4"
                  value={OTPS.otp4}
                  onChange={handleChange}
                  ref={inputRefs.otp4}
                />
              </div>

              <div className="code-text mt-4">
                <h6>
                  {Error && <p className="error">{Message}</p>}
                  <div className="code-again" id="resendCountdownText">
                    कोड पुन्हा पाठवा (<span id="resendCountdown">60</span>)
                  </div>
                  <br />
                  <a
                    href="#"
                    id="resendLink"
                    className="code-link"
                    style={{ marginTop: "-5px" }}
                  >
                    लिंक पुन्हा पाठवा
                  </a>
                </h6>
              </div>

              <Button variant="primary" onClick={handleSubmit} className="mt-4">
                सुरू
              </Button>
              <a className="new_account" style={{ textDecoration: "None" }}>
                खाते नाही?
                <span>
                  <a href="/SignupPortal" style={{ textDecoration: "None" }}>
                    साइन अप करा
                  </a>
                </span>
              </a>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Verifyotpeng;
