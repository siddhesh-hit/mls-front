import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { Button, Form, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { postApi } from "../../service/axiosInterceptors";
import { toast } from "react-toastify";
const SignupPortal = () => {
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
      newErrors.full_name = "नाव अनिवार्य आहे";
    } else if (/\d/.test(formdata.full_name)) {
      newErrors.full_name = "नावात संख्या नसावी";
    } else if (formdata.full_name.trim().length < 5) {
      newErrors.full_name = "नाव अनिवार्य आहे";
    } else {
      newErrors.full_name = "";
    }

    if (formdata.designation === "") {
      newErrors.designation = "अनिवार्य आहे";
    } else {
      newErrors.designation = "";
    }

    try {
      if (formdata.dob === "") {
        newErrors.dob = "जन्मतारीख अनिवार्य आहे";
      } else {
        const birthdate = new Date(formdata.dob);
        const currentDate = new Date();

        if (birthdate > currentDate) {
          newErrors.dob = "जन्मतारीख भविष्यातील  असू शकत नाही";
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
            newErrors.dob = "तुमचे वय  किमान १८ वर्षे असावे ";
          } else {
            newErrors.dob = "";
          }
        }
      }
    } catch (error) {
      console.error(error);
    }

    if (formdata.email === "") {
      newErrors.email = "ईमेल अनिवार्य आहे";
    } else if (!/\S+@\S+\.\S+/.test(formdata.email)) {
      newErrors.email = "कृपया वैध ईमेल पत्ता प्रविष्ट करा";
    } else {
      newErrors.email = "";
    }

    if (formdata.password === "") {
      newErrors.password = "पासवर्ड अनिवार्य आहे";
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
          <li>कृपया अद्वितीय पासवर्ड प्रविष्ट करा</li>
          <li>8 ते 16 वर्ण पासवर्ड प्रविष्ट करा</li>
          <li>अप्परकेस वर्णमाला आणि लोअरकेस वर्णमाला</li>
          <li>किमान एक संख्या आणि किमान एक चिन्ह</li>
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
      newErrors.phone_number = "कृपया फोन नंबर प्रविष्ट करा";
    } else if (!/^\d+$/.test(formdata.phone_number)) {
      newErrors.phone_number = " अवैध फोन नंबर";
    } else if (formdata.phone_number.length !== 10) {
      newErrors.phone_number = "कृपया १० अंकी फोन नंबर टाका";
    } else {
      newErrors.phone_number = "";
    }
    setErrors(newErrors);
  };

  const handleImageChange = (e) => {
    // Handle the image upload logic here
    const selectedImage = e.target.files[0];
    if (selectedImage && selectedImage.size > 2 * 1024 * 1024) {
      setErrors({
        ...errors,
        profilePicture: "प्रतिमेचा आकार 2MB पेक्षा कमी असावा.",
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
    validateForm(); // Validate the form before submitting
    if (Object.keys(errors).every((key) => errors[key] === "")) {
      if (formdata.password === formdata.cpassword) {
        setErrors({ cpassword: "" });

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
            console.log("resp[onzse hai", res.data.data.email);
            setErrors((pre) => ({ ...pre, error: "" }));
            localStorage.setItem("temp_email", res.data.data.email);
            localStorage.setItem("formdata", JSON.stringify(formdata));
            navigate("/Verifyotpeng");
          })
          .catch((err) => {
            console.log("check ewrr", err);
            if (err) {
              err.response.data.message &&
                setErrors((pre) => ({
                  ...pre,
                  error: err.response.data.message,
                }));
              // let message =
              //   err.response.data.message &&
              //   err.response.data.message.replace("Error:", "");
              // err.response.data &&
              //   setErrors((pre) => ({ ...pre, error: message }));
            }
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
      // Parse the stored data and set it in the state
      setformdata(JSON.parse(storedFormData));
    }
  }, []);

  return (
    <div className="container-fluid loginboxpage">
      <Link to="/">
        <img src={logo} alt="logo" className="loginbg" />
      </Link>
      <div className="container">
        <Row className="justify-content-center">
          <Col lg={9} md={8} sm={12} xs={12}>
            <div className="login-box">
              <h3 className="mb-4">
                साइन अप करण्यासाठी, तुमची
                <br />
                मूलभूत माहिती प्रविष्ट करा
              </h3>
              <Row className="p-2">
                <Col>
                  <Form.Label htmlFor="full_name">
                    पूर्ण नाव
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
                      placeholder="तुमचे पूर्ण नाव एंटर करा "
                      aria-label="Enter your full name"
                      aria-describedby="basic-addon1"
                      value={formdata.full_name}
                      onChange={handleChange}
                      onBlur={validateForm} // Validate on blur
                      required
                    />
                  </InputGroup>
                  {errors.full_name && (
                    <p className="error">{errors.full_name}</p>
                  )}
                </Col>
                <Col>
                  <Form.Label htmlFor="full_name">
                    ई-मेल आयडी
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
                      placeholder="ई-मेल आयडी "
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
                    पासवर्ड
                    <span className="required p-2" style={{ color: "red" }}>
                      *
                    </span>
                  </Form.Label>
                  <InputGroup className="mb-4">
                    <InputGroup.Text id="basic-addon1">
                      <i className="fa fa-lock" aria-hidden="true"></i>
                    </InputGroup.Text>
                    <Form.Control
                      type={passwordType === "password" ? "password" : "text"}
                      placeholder="पासवर्ड"
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
                    पासवर्डची पुष्टी
                    <span className="required p-2" style={{ color: "red" }}>
                      *
                    </span>
                  </Form.Label>
                  <InputGroup className="mb-4">
                    <InputGroup.Text id="basic-addon1">
                      <i className="fa fa-lock" aria-hidden="true"></i>
                    </InputGroup.Text>
                    <Form.Control
                      type={passwordType === "password" ? "password" : "text"}
                      placeholder=" पासवर्डची पुष्टी करा"
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
                    फोन नंबर
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
                      placeholder="फोन नंबर"
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
                  <Form.Label htmlFor="full_name">लिंग</Form.Label>
                  <InputGroup className="mb-4">
                    <InputGroup.Text id="basic-addon1">
                      <i className="fa fa-venus-double" aria-hidden="true"></i>
                    </InputGroup.Text>

                    <Form.Select
                      aria-label="User Type Selection"
                      value={formdata.gender}
                      name="gender"
                      placeholder="लिंग"
                      onChange={handleChange}
                      onBlur={validateForm} // Validate on blur
                    >
                      <option value="gender">लिंग</option>
                      <option value="male">पुरुष</option>
                      <option value="female">स्त्री</option>
                    </Form.Select>
                  </InputGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Label htmlFor="full_name">
                    जन्मतारीख
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
                      placeholder="जन्मतारीख"
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
                    वापरकर्ता प्रकार
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
                      <option>वापरकर्ता प्रकार निवडा</option>
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
                  <Form.Label htmlFor="full_name">प्रोफाइल चित्र</Form.Label>
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
                {errors.error && <p className="error">{errors.error}</p>}
                <Button
                  variant="primary"
                  onClick={() => handleSubmit()}
                  className="mt-3 w-50 "
                  style={{ borderRadius: "6px" }}
                >
                  साइन अप
                </Button>
              </div>
              <Link className="new_account">
                आधीपासूनच एक खाते आहे?
                <span>
                  <Link to="/PortalRegister">साइन इन करा</Link>
                </span>
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default SignupPortal;
