import React, { useState } from "react";
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

const PortalRegisterEng = () => {
  const dispatch = useDispatch();
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

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
    e.preventDefault();
    validateForm(); // Validate the form before submitting
    if (Object.keys(errors).every((key) => errors[key] === "")) {
      // Perform form submission here
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
          console.log(err.response.data.message);
          let message = err.response.data.message.replace(/Error:/g, "");
          err.response.data.message && toast.error(message);
        });
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
                enter your Email Address
              </h3>
              <InputGroup className="mb-4">
                <InputGroup.Text id="basic-addon1">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                </InputGroup.Text>
                <Form.Control
                  type="email"
                  placeholder="Email-Id"
                  aria-label="Email-Id"
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
                  placeholder="Password"
                  aria-label="Password"
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
              <Link to="/ForgotPassEng" className="Forgot-Pass">
                Forgot Password?
              </Link>

              <Button variant="primary" onClick={handleSubmit} className="mt-3">
                Sign In
              </Button>
              <div className="horizontal-lines mt-5 mb-3">
                <div className="horizontal-line"></div>
                <div className="text">OR</div>
                <div className="horizontal-line"></div>
              </div>
              <div className="text-center mt-5 mb-5">
                <Link to="/phone-loginEng">
                  <button variant="primary" className="phone-login ">
                    <i className="fa fa-phone"></i>Sign in With Phone Number
                  </button>
                </Link>
              </div>

              <a className="new_account">
                Don’t have an Account ?
                <span>
                  <Link to="/SignupPortalEng">Sign up</Link>
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
