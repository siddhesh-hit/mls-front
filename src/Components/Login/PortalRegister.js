import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { Button, Form, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { postApi } from "../../service/axiosInterceptors";
import { setUserDetails } from "../../redux/reducers/UserReducer";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { hasFormSubmit } from "@testing-library/user-event/dist/utils";

const PortalRegisterEng = () => {
  const dispatch = useDispatch();
  var lowerCaseLetters = /[a-z]/g;
  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      newErrors.email = "Email is mandatory";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter valid email address";
    } else if (!password) {
      newErrors.password = "Password is mandatory";
    }

    setErrors(newErrors);
  };

  const handleSubmit = async (e) => {
    // e.preventDefault();
    validateForm(); // Validate the form before submitting
    if (Object.keys(errors).every((key) => errors[key] === "")) {
      const data = { email, password };
      await postApi("user/loginEmail", data)
        .then((res) => {
          setErrors((pre) => ({ ...pre, error: "" }));
          console.log(res, "res");
          if (res.data && res.data.data.user_verfied) {
            dispatch(
              setUserDetails({
                _id: res.data.data._id,
                user_verfied: res.data.data.user_verfied,
              })
            );
            localStorage.setItem(
              "user",
              JSON.stringify({
                _id: res.data.data._id,
                user_verfied: res.data.data.user_verfied,
              })
            );
          }
          toast.success("Login Successfully");
          setTimeout(() => {
            navigate("/");
          }, 1110);
        })
        .catch((err) => {
          err.response.data.message &&
            setErrors((pre) => ({ ...pre, error: err.response.data.message }));
        });
    }
  };

  const fonts = ["cursive"];
  const [captchaValue, setCaptchaValue] = useState("");

  const generateCaptcha = () => {
    let value = btoa(Math.random() * 1000000000);
    value = value.substr(0, 4 + Math.random() * 5);
    setCaptchaValue(value);
  };

  const setCaptcha = () => {
    const captchaElements = captchaValue.split("").map((char, index) => {
      const rotate = -20 + Math.trunc(Math.random() * 30);
      const font = Math.trunc(Math.random() * fonts.length);
      return (
        <span
          key={index}
          style={{
            transform: `rotate(${rotate}deg)`,
            fontFamily: fonts[font],
          }}
        >
          {char}
        </span>
      );
    });

    return captchaElements;
  };

  useEffect(() => {
    generateCaptcha();
    setCaptcha();
  }, []);

  const handleRefreshClick = () => {
    generateCaptcha();
    setCaptcha();
  };

  // const handleFormSubmits = (e) => {
  //   e.preventDefault();
  //   const inputCaptchaValue = e.target.querySelector("#captcha_form").value;

  //   if (inputCaptchaValue === captchaValue) {
  //     alert("Log in success");
  //   } else {
  //     alert("Invalid Captcha");
  //   }

  //   // Generate a new captcha after login attempt, if needed.
  //   generateCaptcha();
  //   setCaptcha();
  // };

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
              {errors.error && <p className="error">{errors.error}</p>}

              <div id="captcha" className="form_div justify-content-center">
                <div
                  className="preview captcha-preview"
                  style={{ fontSize: "17px", letterSpacing: "4px" }}
                >
                  {setCaptcha()}
                </div>
                <div className="captcha_form">
                  <InputGroup className="mb-4">
                    <InputGroup.Text>
                      <i
                        className="fa fa-refresh captcha_refersh"
                        aria-hidden="true"
                        type="button"
                        onClick={handleRefreshClick}
                      ></i>
                    </InputGroup.Text>
                    <Form.Control
                      type="text"
                      id="captcha_form"
                      className="form_input_captcha"
                      placeholder="Enter Captcha "
                    />
                  </InputGroup>
                </div>
              </div>

              <Link to="/ForgotPass" className="Forgot-Pass">
                पासवर्ड विसरलात?
              </Link>
              <Button
                variant="primary"
                onClick={() => {
                  handleSubmit();
                  // handleFormSubmits();/
                }}
                className="mt-3"
              >
                साइन इन करा
              </Button>
              <div className="horizontal-lines mt-5 mb-3">
                <div className="horizontal-line"></div>
                <div className="text">किंवा</div>
                <div className="horizontal-line"></div>
              </div>
              <div className="text-center mt-5 mb-5">
                <Link to="/phone-login">
                  <button variant="primary" className="phone-login ">
                    <i
                      className="fa fa-phone"
                      style={{ marginRight: "5px" }}
                    ></i>
                    फोन नंबरसह साइन इन करा
                  </button>
                </Link>
              </div>

              <a className="new_account">
                खाते नाही?
                <span>
                  <Link to="/SignupPortal">साइन अप करा</Link>
                </span>
              </a>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default PortalRegisterEng;
