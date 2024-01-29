import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { Button, Form, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { postApi } from "../../service/axiosInterceptors";
import { toast } from "react-toastify";
import LoaderComponents from "../../pages/loader";
const SignupPortalEng = () => {
  const [formdata, setformdata] = useState({
    email: "",
    password: "",
    cpassword: "",
    full_name: "",
    gender: "",
    phone_number: "",
    dob: null,
    profile_picture: "",
    department: "Default",
    designation: "",
    houses: "Default",
    loading: false,
  });
  const [image, setImage] = useState(null);

  // Calculate age
  const birthdate = new Date(formdata.dob);
  const currentDate = new Date();
  const age = currentDate.getFullYear() - birthdate.getFullYear();

  const monthDiff = currentDate.getMonth() - birthdate.getMonth();

  const [passwordType, setPasswordType] = useState("password");
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const togglePassword = () => {
    setPasswordType(passwordType === "password" ? "text" : "password");
  };

  const validateForm = () => {
    const newErrors = {};
    if (formdata.full_name === "") {
      newErrors.full_name = "Name is mandatory";
    } else if (/\d/.test(formdata.full_name)) {
      newErrors.full_name = "The name should not contain numbers";
    } else if (formdata.full_name.trim().length < 5) {
      newErrors.full_name = "Name is mandatory";
    } else {
      newErrors.full_name = "";
    }

    if (formdata.designation === "") {
      newErrors.designation = "Is mandatory";
    } else {
      newErrors.designation = "";
    }

    try {
      if (formdata.dob === "") {
        newErrors.dob = "Date of birth is mandatory";
      } else {
        const birthdate = new Date(formdata.dob);
        const currentDate = new Date();

        if (birthdate > currentDate) {
          newErrors.dob = "Date of birth cannot be future";
        } else {
          const yearDiff = currentDate.getFullYear() - birthdate.getFullYear();

          if (
            yearDiff < 18 ||
            (yearDiff === 18 &&
              currentDate.getMonth() < birthdate.getMonth()) ||
            (yearDiff === 18 &&
              currentDate.getMonth() === birthdate.getMonth() &&
              currentDate.getDate() < birthdate.getDate())
          ) {
            newErrors.dob = "You must be at least 18 years of age ";
          } else {
            newErrors.dob = "";
          }
        }
      }
    } catch (error) {
      console.error(error);
    }
    console.log(newErrors.dob);

    if (formdata.email === "") {
      newErrors.email = "Email is mandatory";
    } else if (!/\S+@\S+\.\S+/.test(formdata.email)) {
      newErrors.email = "Please enter a valid email address";
    } else {
      newErrors.email = "";
    }
    if (formdata.password === "") {
      newErrors.password = "Password is mandatory";
    } else if (
      formdata.password.length < 8 ||
      formdata.password.length > 16 ||
      !/(?=.*[a-z])/.test(formdata.password) || // At least one lowercase letter
      !/(?=.*[A-Z])/.test(formdata.password) || // At least one uppercase letter
      !/(?=.*[0-9])/.test(formdata.password) || // At least one number
      !/(?=.*[@#$&])/.test(formdata.password)
    ) {
      newErrors.password = (
        <ul>
          <li>Please enter a unique password</li>
          <li>Enter an 8 to 16 character password</li>
          <li>uppercase alphabet and lowercase alphabet</li>
          <li>At least one number and at least one symbol</li>
        </ul>
      );
    } else {
      newErrors.password = "";
    }

    //  if (formdata.password === "") {
    //    newErrors.password = "पासवर्ड अनिवार्य आहे";
    //  } else if (formdata.password.length < 8 || formdata.password.length > 16) {
    //    newErrors.password = "पासवर्ड 8-16 वर्णांचा असावा";
    //  } else if (!/^(?=.*[a-zA-Z])(?=.*[0-9])/.test(formdata.password)) {
    //    newErrors.password =
    //      "कृपया वैध पासवर्ड प्रविष्ट करा (अक्षरे आणि संख्या सामाहित)";
    //  } else {
    //    newErrors.password = "";
    //  }

    if (formdata.phone_number === "") {
      newErrors.phone_number = "Please enter a phone number";
    } else if (!/^\d+$/.test(formdata.phone_number)) {
      newErrors.phone_number = " Invalid phone number";
    } else if (formdata.phone_number.length !== 10) {
      newErrors.phone_number = "Please enter a 10 digit phone number";
    } else {
      newErrors.phone_number = "";
    }
    setErrors(newErrors);
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    if (selectedImage && selectedImage.size > 2 * 1024 * 1024) {
      setErrors({
        ...errors,
        profilePicture: "प्The file size should be less than 2MB.",
      });
    } else {
      setErrors({
        ...errors,
        profilePicture: null,
      });

      // Continue with setting the profile picture in your state
      setformdata({
        ...formdata,
        profilePicture: selectedImage,
      });
    }

    // You can perform additional validations or logic as needed
    setImage(selectedImage);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformdata((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    validateForm();
    if (Object.keys(errors).every((key) => errors[key] === "")) {
      if (formdata.password === formdata.cpassword) {
        setErrors({ cpassword: "" });
        setformdata({
          ...formdata,
          loading: true,
        });
        const data = new FormData();

        data.append("email", formdata.email);
        data.append("full_name", formdata.full_name);
        data.append("password", formdata.password);
        data.append("gender", formdata.gender);
        data.append("phone_number", formdata.phone_number);
        data.append("date_of_birth", formdata.dob);
        data.append("user_image", image);
        data.append("houses", formdata.houses);
        data.append("department", formdata.department);
        data.append("designation", formdata.designation);

        await postApi("user/registerEmail", data)
          .then((res) => {
            setformdata({
              ...formdata,
              loading: false,
            });

            setErrors((pre) => ({ ...pre, error: "" }));
            res.data.data &&
              localStorage.setItem("temp_email", res.data.data.email);
            localStorage.setItem("formdata", JSON.stringify(formdata));
            res.data.data.email && navigate("/Verifyotp");
          })
          .catch((err) => {
            setformdata({
              ...formdata,
              loading: false,
            });
            toast.error("Something Went Wrong");
          });
      } else {
        toast.error({ cpassword: "पासवर्ड जुळत नाही" });
        setErrors({ cpassword: "पासवर्ड जुळत नाही" });
      }
    }
  };

  useEffect(() => {
    const storedFormData = localStorage.getItem("formdata");
    if (storedFormData) {
      setformdata(JSON.parse(storedFormData));
    }
  }, []);
  console.log(formdata);

  return (
    <>
      {formdata.loading ? (
        <LoaderComponents />
      ) : (
        <div className="container-fluid loginboxpage">
          <Link to="/">
            <img src={logo} alt="logo" className="loginbg" />
          </Link>
          <div className="container">
            <Row className="justify-content-center">
              <Col lg={8} md={8} sm={12} xs={12}>
                <div className="login-box">
                  <h3 className="mb-4">
                    To sign up, please
                    <br />
                    enter your Email Address
                  </h3>
                  <Row>
                    <Col>
                      <Form.Label htmlFor="full_name">
                        Full Name
                        <span className="required p-2" style={{ color: "red" }}>
                          *
                        </span>
                      </Form.Label>
                      <InputGroup className="mb-4">
                        <InputGroup.Text id="basic-addon1">
                          <i className="fa fa-user" aria-hidden="true"></i>
                        </InputGroup.Text>
                        <Form.Control
                          type="text"
                          name="full_name"
                          placeholder="Enter your full name"
                          aria-label="Enter your full name"
                          aria-describedby="basic-addon1"
                          value={formdata.full_name}
                          onChange={handleChange}
                          onBlur={validateForm}
                          required
                        />
                      </InputGroup>
                      {errors.full_name && (
                        <p className="error">{errors.full_name}</p>
                      )}
                    </Col>
                    <Col>
                      <Form.Label htmlFor="full_name">
                        Email-Id
                        <span className="required p-2" style={{ color: "red" }}>
                          *
                        </span>
                      </Form.Label>
                      <InputGroup className="mb-4">
                        <InputGroup.Text id="basic-addon1">
                          <i className="fa fa-envelope" aria-hidden="true"></i>
                        </InputGroup.Text>
                        <Form.Control
                          type="email"
                          name="email"
                          placeholder="Email-Id "
                          aria-label="Email-Id"
                          aria-describedby="basic-addon1"
                          value={formdata.email}
                          onChange={handleChange}
                          onBlur={validateForm} // Validate on blur
                          required
                        />
                      </InputGroup>
                      {errors.email && <p className="error">{errors.email}</p>}
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Label htmlFor="full_name">
                        Password
                        <span className="required p-2" style={{ color: "red" }}>
                          *
                        </span>
                      </Form.Label>
                      <InputGroup className="mb-4">
                        <InputGroup.Text id="basic-addon1">
                          <i className="fa fa-lock" aria-hidden="true"></i>
                        </InputGroup.Text>
                        <Form.Control
                          type={
                            passwordType === "password" ? "password" : "text"
                          }
                          placeholder="Password"
                          name="password"
                          aria-label="Password"
                          aria-describedby="basic-addon1"
                          value={formdata.password}
                          onChange={handleChange}
                          onBlur={validateForm} // Validate on blur
                          required
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
                      {errors.password && (
                        <p className="error">{errors.password}</p>
                      )}
                    </Col>
                    <Col>
                      <Form.Label htmlFor="full_name">
                        Confirm Password
                        <span className="required p-2" style={{ color: "red" }}>
                          *
                        </span>
                      </Form.Label>
                      <InputGroup className="mb-4">
                        <InputGroup.Text id="basic-addon1">
                          <i className="fa fa-lock" aria-hidden="true"></i>
                        </InputGroup.Text>
                        <Form.Control
                          type={
                            passwordType === "password" ? "password" : "text"
                          }
                          placeholder="Confirm Password"
                          aria-label="Password"
                          name="cpassword"
                          aria-describedby="basic-addon1"
                          value={formdata.cpassword}
                          onChange={handleChange}
                          required
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
                      {errors.cpassword && (
                        <p className="error">{errors.cpassword}</p>
                      )}
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Label htmlFor="full_name">
                        Phone Number
                        <span className="required p-2" style={{ color: "red" }}>
                          *
                        </span>
                      </Form.Label>
                      <InputGroup className="mb-4">
                        <InputGroup.Text id="basic-addon1">
                          <i className="fa fa-phone" aria-hidden="true"></i>
                        </InputGroup.Text>
                        <Form.Control
                          type="tel"
                          placeholder="Phone Number"
                          aria-label="Phone Number"
                          required
                          name="phone_number"
                          aria-describedby="basic-addon1"
                          value={formdata.phone_number}
                          onChange={handleChange}
                          onBlur={validateForm} // Validate on blur
                        />
                      </InputGroup>
                      {errors.phone_number && (
                        <p className="error">{errors.phone_number}</p>
                      )}
                    </Col>
                    <Col>
                      <Form.Label htmlFor="full_name">Gender</Form.Label>
                      <InputGroup className="mb-4">
                        <InputGroup.Text id="basic-addon1">
                          <i
                            className="fa fa-venus-double"
                            aria-hidden="true"
                          ></i>
                        </InputGroup.Text>

                        <Form.Select
                          aria-label="User Type Selection"
                          value={formdata.gender}
                          name="gender"
                          placeholder="Gender"
                          onChange={handleChange}
                          onBlur={validateForm} // Validate on blur
                        >
                          <option value="gender">Gendeer</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                        </Form.Select>
                      </InputGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Label htmlFor="full_name">
                        Date of Birth
                        <span className="required p-2" style={{ color: "red" }}>
                          *
                        </span>
                      </Form.Label>
                      <InputGroup className="mb-4">
                        <InputGroup.Text id="basic-addon1">
                          <i className="fa fa-calendar" aria-hidden="true"></i>
                        </InputGroup.Text>
                        <Form.Control
                          type="date"
                          placeholder="Date of Birth"
                          aria-label="Date of Birth"
                          name="dob"
                          required
                          aria-describedby="basic-addon1"
                          value={formdata.dob}
                          onChange={handleChange} // Ensure handleChange is defined to update formdata
                          onBlur={validateForm} // Ensure validateForm is defined to trigger validation
                        />
                      </InputGroup>
                      {errors.dob && <p className="error">{errors.dob}</p>}
                    </Col>

                    <Col>
                      <Form.Label htmlFor="full_name">
                        User Type Selection
                        <span className="required p-2" style={{ color: "red" }}>
                          *
                        </span>
                      </Form.Label>
                      <InputGroup className="mb-4">
                        <InputGroup.Text id="basic-addon1">
                          <i className="fa fa-user" aria-hidden="true"></i>
                        </InputGroup.Text>
                        <Form.Select
                          aria-label="User Type Selection"
                          value={formdata.designation}
                          name="designation"
                          onChange={handleChange}
                          onBlur={validateForm} // Validate on blur
                        >
                          <option>User Type Selection</option>
                          <option>Researcher(संशोधक)</option>
                          <option>Student(विद्यार्थी)</option>
                          <option>Public()</option>
                        </Form.Select>
                      </InputGroup>
                      {errors.designation && (
                        <p className="error">{errors.designation}</p>
                      )}
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Label htmlFor="full_name">
                        Profile Picture
                      </Form.Label>
                      <InputGroup className="mb-2">
                        <InputGroup.Text id="basic-addon1">
                          <i className="fa fa-user" aria-hidden="true"></i>
                        </InputGroup.Text>
                        <Form.Control
                          type="file"
                          id="profilePicture"
                          label="Upload"
                          placeholder="Profile Picture"
                          onChange={handleImageChange}
                          accept="image/*"
                        />
                      </InputGroup>
                      <p className="photo_disclaimer">
                        Only upload JPEG/JPG/PNG format images
                      </p>
                      {errors.profilePicture && (
                        <p className="error">{errors.profilePicture}</p>
                      )}
                    </Col>
                    <Col></Col>
                  </Row>
                  <div className="d-flex justify-content-center">
                    <Button
                      variant="primary"
                      onClick={handleSubmit}
                      className="mt-3 w-50 "
                      style={{ borderRadius: "6px" }}
                    >
                      Sign Up
                    </Button>
                  </div>

                  <Link className="new_account">
                    Already have an Account ?
                    <span>
                      <Link to="/PortalRegisterEng">Sign In</Link>
                    </span>
                  </Link>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      )}
    </>
  );
};

export default SignupPortalEng;
