import React, { useState, useEffect } from "react";
import { Container, Form, InputGroup } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import member1 from "../assets/member/dfadanvis.png";
import { useLocation } from "react-router-dom";
import { getApiById, postApi } from "../service/axiosInterceptors";
import { useDispatch, useSelector } from "react-redux";
import { Logout, setUserDetails } from "../redux/reducers/UserReducer";
import { API } from "../config";
import useLang from "../utils/useLang";
const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector((state) => state.UserReducer);
  const [activeTab, setActiveTab] = useState("BasicInfo");
  const [errors, setErrors] = useState({});
  const [email, setEmail] = useState("");
  const [data, setData] = useState({
    Link1: {
      marathi: "मुख्यपृष्ठ",
      english: "Home",
    },
    Link2: {
      marathi: "प्रोफाइल",
      english: "Profile ",
    },
    marathi: {
      headingtab1: "मुलभूत माहिती",
      headingtab2: "स्वारस्य क्षेत्र",
      headingtab3: "प्रवेशासाठी विनंती",
      headingtab4: "गोपनीय दस्तऐवज तपशील",
      headingtab5: "पासवर्ड बदला",
      headingtab6: "लॉग आउट",
      BasicInfo: {
        head: "मुलभूत माहिती",
        subtitle: "कृपया येथे मॅन्युअल तपशीलांसाठी स्वरूप निवडा",
        field1: "नाव",
        field2: "जन्मतारीख",
        field3: "ईमेल",
        field4: "फोन नंबर",
      },
      InterestArea: {
        head: "स्वारस्य क्षेत्र निवडा",
        field1: "स्वारस्य क्षेत्र निवडा",
        option1: "वादविवाद",
        option2: "सदस्य यादी",
        option3: "विधानसभा",
        option4: "सत्र कॅलेंडर",
        option5: "इतर",
        field2: "वर्णन",
        placeholder: "तुमची चिंता प्रविष्ट करा",
        button: "प्रस्तुत करणे",
      },
      RequestA: {
        head: "प्रवेश अद्यतनांसाठी विनंती",
        field1: "प्रवेश अद्यतनांसाठी विनंती",
        description: "वर्णन",
      },
      Reset: {
        head1: "पासवर्ड रीसेट",
        field1: "तुमचा पासवर्ड रीसेट करा",
        description: "ई-मेल आयडी",
        button: " सुरू ठेवा",
      },
      Confidential: "गोपनीय दस्तऐवज तपशील",
    },
    english: {
      headingtab1: "Basic Information",
      headingtab2: "Interest Area",
      headingtab3: "Request for access",
      headingtab4: "Confidential Documents Details",
      headingtab5: "Change Password",
      headingtab6: "Log Out",
      BasicInfo: {
        head: "Basic Information",
        subtitle: "Please select the format for manual details here",
        field1: "Name ",
        field2: "Date of Birth ",
        field3: "Email ",
        field4: "Contact No ",
      },
      InterestArea: {
        head: "Select Interest Area",
        field1: "Select Interest Area ",
        option1: "Debates",
        option2: "Member List",
        option3: "Vidhan Sabha",
        option4: "Session Calender",
        option5: "Other",
        field2: "Description",
        placeholder: "Enter your concern",
        button: "Submit",
      },
      RequestA: {
        head: "Request For Access Updates",
        field1: "Request Query",
        description: "Description",
      },
      Reset: {
        head1: "Password Reset",
        field1: "Reset Your Password",
        description: "E-mail ID",
        button: "Continue",
      },
      Confidential: "Confidential documents Details",
    },
  });

  const validateForm = () => {
    const newErrors = {};

    if (!email) {
      newErrors.email = "Email is mandatory";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter valid email address";
    }

    setErrors(newErrors);
  };

  const switchToBasicInfo = () => {
    setActiveTab("BasicInfo");
  };
  const switchToInterestArea = () => {
    setActiveTab("InterestArea");
  };
  const switchToRequestA = () => {
    setActiveTab("RequestA");
  };

  const switchToconfidential = () => {
    setActiveTab("confidential");
  };
  const switchTochange = () => {
    setActiveTab("Change");
  };
  const LogOut = () => {
    setActiveTab("Logout");
    postApi("user/logout", {})
      .then((res) => {
        if (res) {
          dispatch(Logout());
          navigate("/");
        }
      })
      .catch((err) => {
        dispatch(Logout());
        navigate("/");
      });
  };

  const { lang, checkLang } = useLang();

  return (
    <>
      <div>
        <section className="background mb-0">
          <Container fluid>
            <div
              className="justify-content-center "
              style={{ paddingTop: "15%" }}
            >
              <ul className="breadcrumb mt-2">
                <li>
                  <Link to="/">
                    {lang === "mr" ? data.Link1.marathi : data.Link1.english}
                  </Link>
                </li>
                <li>
                  {lang === "mr" ? data.Link2.marathi : data.Link2.english}
                </li>
              </ul>
              <div className="mb-3">
                <Container className="profile-block">
                  <Row style={{ justifyContent: "space-between" }}>
                    <Col lg={4} md={4} sm={12} xs={12} className="mt-5">
                      <div className="profile-box1 p-0">
                        <div className="">
                          <Row className="mb-2 pt-2">
                            <Col
                              lg={3}
                              md={3}
                              sm={12}
                              xs={12}
                              className="text-center"
                            >
                              <Link to={`/MemberDetailsEng?id=${state?._id}`}>
                                <img
                                  src={
                                    API.baseUrl +
                                    state?.user_image?.destination +
                                    "/" +
                                    state?.user_image?.filename
                                  }
                                  className="image"
                                  alt="Member"
                                />
                              </Link>
                            </Col>
                            <Col
                              lg={7}
                              md={8}
                              sm={12}
                              xs={12}
                              className="p-0 mt-3"
                            >
                              <b>
                                <Link
                                  to={`/MemberDetailsEng?id=${state?._id}`}
                                  style={{
                                    textDecoration: "none",
                                    color: "black",
                                  }}
                                >
                                  {state.full_name}
                                </Link>
                              </b>
                            </Col>
                          </Row>
                        </div>
                        <div className="profile-box1 p-0">
                          <div
                            style={{
                              color:
                                activeTab === "BasicInfo" ? "white" : "black",
                              backgroundColor:
                                activeTab === "BasicInfo" ? "#293E6F" : "white",
                              padding: "15px",
                              borderBottomColor: "grey",
                            }}
                            className={`profile-detail ${
                              activeTab === "BasicInfo" ? "active" : ""
                            }`}
                            onClick={switchToBasicInfo}
                          >
                            <div
                              className=" p-2"
                              style={{ position: "relative" }}
                            >
                              {lang === "mr"
                                ? data.marathi.headingtab1
                                : data.english.headingtab1}
                              <span style={{ marginLeft: "auto" }}>
                                <i
                                  className="fa fa-chevron-right icon-calender"
                                  style={{ color: "white" }}
                                ></i>
                              </span>
                            </div>
                          </div>
                          <hr className="m-0 horizontal-line" />
                          <div
                            className={`profile-detail ${
                              activeTab === "InterestArea" ? "active" : ""
                            }`}
                            onClick={switchToInterestArea}
                            style={{
                              color:
                                activeTab === "InterestArea"
                                  ? "white"
                                  : "black",
                              backgroundColor:
                                activeTab === "InterestArea"
                                  ? "#293E6F"
                                  : "white",
                              padding: "15px",
                            }}
                          >
                            <div
                              className=" p-2"
                              style={{ position: "relative" }}
                            >
                              {lang === "mr"
                                ? data.marathi.headingtab2
                                : data.english.headingtab2}
                              <span style={{ marginLeft: "auto" }}>
                                <i
                                  className="fa fa-chevron-right icon-calender"
                                  style={{ color: "white" }}
                                ></i>
                              </span>
                            </div>
                          </div>
                          <hr className="m-0 horizontal-line" />
                          <div
                            className={`profile-detail ${
                              activeTab === "RequestA" ? "active" : ""
                            }`}
                            onClick={switchToRequestA}
                            style={{
                              color:
                                activeTab === "RequestA" ? "white" : "black",
                              backgroundColor:
                                activeTab === "RequestA" ? "#293E6F" : "white",
                              padding: "15px",
                            }}
                          >
                            <div
                              className=" p-2"
                              style={{ position: "relative" }}
                            >
                              {lang === "mr"
                                ? data.marathi.headingtab3
                                : data.english.headingtab3}
                              <span style={{ marginLeft: "auto" }}>
                                <i
                                  className="fa fa-chevron-right icon-calender"
                                  style={{ color: "white" }}
                                ></i>
                              </span>
                            </div>
                          </div>
                          <hr className="m-0 horizontal-line" />
                          <div
                            className={`profile-detail ${
                              activeTab === "confidential" ? "active" : ""
                            }`}
                            onClick={switchToconfidential}
                            style={{
                              color:
                                activeTab === "confidential"
                                  ? "white"
                                  : "black",
                              backgroundColor:
                                activeTab === "confidential"
                                  ? "#293E6F"
                                  : "white",
                              padding: "15px",
                              position: "relative",
                            }}
                          >
                            <div
                              className=" p-2"
                              style={{ position: "relative" }}
                            >
                              {lang === "mr"
                                ? data.marathi.headingtab4
                                : data.english.headingtab4}
                              <span style={{ marginLeft: "auto" }}>
                                <i
                                  className="fa fa-chevron-right icon-calender"
                                  style={{ color: "white" }}
                                ></i>
                              </span>
                            </div>
                          </div>
                          <hr className="m-0 horizontal-line" />
                          <div
                            className={`profile-detail ${
                              activeTab === "Change" ? "active" : ""
                            }`}
                            onClick={switchTochange}
                            style={{
                              color: activeTab === "Change" ? "white" : "black",
                              backgroundColor:
                                activeTab === "Change" ? "#293E6F" : "white",
                              padding: "15px",
                            }}
                          >
                            <div
                              className=" p-2"
                              style={{ position: "relative" }}
                            >
                              {lang === "mr"
                                ? data.marathi.headingtab5
                                : data.english.headingtab5}
                              <span style={{ marginLeft: "auto" }}>
                                <i
                                  className="fa fa-chevron-right icon-calender"
                                  style={{ color: "white" }}
                                ></i>
                              </span>
                            </div>
                          </div>
                          <hr className="m-0 horizontal-line" />
                          <div
                            className={`profile-detail ${
                              activeTab === "Logout" ? "active" : ""
                            }`}
                            style={{
                              padding: "15px",
                            }}
                            onClick={LogOut}
                          >
                            <div
                              className=" p-2"
                              style={{ position: "relative" }}
                            >
                              {lang === "mr"
                                ? data.marathi.headingtab6
                                : data.english.headingtab6}
                              <span style={{ marginLeft: "auto" }}>
                                <i
                                  className="fa fa-chevron-right icon-calender"
                                  style={{ color: "white" }}
                                ></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col lg={7} md={8} sm={12} xs={12} className="margin-top">
                      <div
                        id="BasicInfo"
                        className={
                          activeTab === "BasicInfo"
                            ? "tab-content-active"
                            : "d-none"
                        }
                      >
                        <div>
                          <div className="profile-box1">
                            <div className="mt-0">
                              <p>
                                <div
                                  className="heading mb-2"
                                  style={{ color: "#293E6F" }}
                                >
                                  {lang === "mr"
                                    ? data.marathi.BasicInfo.head
                                    : data.english.BasicInfo.head}
                                </div>
                                <div className="subtitle">
                                  {lang === "mr"
                                    ? data.marathi.BasicInfo.subtitle
                                    : data.english.BasicInfo.subtitle}
                                </div>
                              </p>
                              <hr className="horizontal-line m-0" />
                              <div>
                                <Row className=" justify-content-center">
                                  <Col lg={11} md={9} sm={12} xs={12}>
                                    <Row>
                                      <Col lg={4} md={4} sm={6} xs={6}>
                                        <Col
                                          className="filter-subtitle  p-3"
                                          style={{
                                            fontSize: "17px",
                                            fontWeight: "600",
                                          }}
                                        >
                                          {lang === "mr"
                                            ? data.marathi.BasicInfo.field1
                                            : data.english.BasicInfo.field1}
                                        </Col>
                                        <Col
                                          className="filter-subtitle  p-3"
                                          style={{
                                            fontSize: "17px",
                                            fontWeight: "600",
                                          }}
                                        >
                                          {lang === "mr"
                                            ? data.marathi.BasicInfo.field2
                                            : data.english.BasicInfo.field2}
                                        </Col>
                                        <Col
                                          className="filter-subtitle  p-3"
                                          style={{
                                            fontSize: "17px",
                                            fontWeight: "600",
                                          }}
                                        >
                                          {lang === "mr"
                                            ? data.marathi.BasicInfo.field3
                                            : data.english.BasicInfo.field3}
                                        </Col>
                                        <Col
                                          className="filter-subtitle  p-3"
                                          style={{
                                            fontSize: "17px",
                                            fontWeight: "600",
                                          }}
                                        >
                                          {lang === "mr"
                                            ? data.marathi.BasicInfo.field4
                                            : data.english.BasicInfo.field4}
                                        </Col>
                                      </Col>
                                      <Col lg={7} md={7} sm={6} xs={6}>
                                        <Col className="p-3">
                                          {state.full_name}
                                        </Col>
                                        <Col className="p-3">
                                          {state.date_of_birth
                                            ? new Date(
                                                state.date_of_birth
                                              ).getDay() +
                                              "/" +
                                              new Date(
                                                state.date_of_birth
                                              ).getDate() +
                                              "/" +
                                              new Date(
                                                state.date_of_birth
                                              ).getFullYear()
                                            : ""}
                                        </Col>
                                        <Col className="p-3">{state.email}</Col>
                                        <Col className="p-3">
                                          {state?.phone_number}
                                        </Col>
                                      </Col>
                                    </Row>
                                  </Col>
                                </Row>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        id="InterestArea"
                        className={
                          activeTab === "InterestArea"
                            ? "tab-content-active"
                            : "d-none"
                        }
                      >
                        <div className="profile-box1">
                          <p>
                            <div
                              className="heading mb-2"
                              style={{ color: "#293E6F" }}
                            >
                              {lang === "mr"
                                ? data.marathi.InterestArea.head
                                : data.english.InterestArea.head}
                            </div>
                          </p>
                          <hr className="horizontal-line m-0" />
                          <Row className="m-2 mb-0">
                            <Col>
                              <Form.Label htmlFor="full_name">
                                {lang === "mr"
                                  ? data.marathi.InterestArea.field1
                                  : data.english.InterestArea.field1}
                              </Form.Label>
                              <InputGroup className="subject_textarea mb-4">
                                <Form.Select
                                  style={{
                                    backgroundColor: "#E5E5E5",
                                    borderRadius: "0",
                                    fontSize: "14px",
                                  }}
                                  aria-label="User Type Selection"
                                  // value={formdata.designation}
                                  name="designation"
                                  // onChange={handleChange}
                                  // onBlur={validateForm} // Validate on blur
                                >
                                  <option>
                                    {lang === "mr"
                                      ? data.marathi.InterestArea.option1
                                      : data.english.InterestArea.option1}
                                  </option>
                                  <option>
                                    {lang === "mr"
                                      ? data.marathi.InterestArea.option2
                                      : data.english.InterestArea.option2}
                                  </option>
                                  <option>
                                    {lang === "mr"
                                      ? data.marathi.InterestArea.option3
                                      : data.english.InterestArea.option3}
                                  </option>
                                  <option>
                                    {lang === "mr"
                                      ? data.marathi.InterestArea.option4
                                      : data.english.InterestArea.option4}
                                  </option>
                                  <option>
                                    {lang === "mr"
                                      ? data.marathi.InterestArea.option5
                                      : data.english.InterestArea.option5}
                                  </option>
                                </Form.Select>
                              </InputGroup>
                            </Col>
                          </Row>
                          <Row className="m-2 mt-0">
                            <Col>
                              <Form.Label htmlFor="full_name">
                                {lang === "mr"
                                  ? data.marathi.InterestArea.field2
                                  : data.english.InterestArea.field2}
                              </Form.Label>
                              <InputGroup className="subject_textarea mb-4">
                                <textarea
                                  style={{
                                    backgroundColor: "#E5E5E5",
                                    borderRadius: "0",
                                    fontSize: "14px",
                                  }}
                                  placeholder={
                                    lang === "mr"
                                      ? data.marathi.InterestArea.placeholder
                                      : data.english.InterestArea.placeholder
                                  }
                                  className="form-control"
                                  id="exampleFormControlTextarea1"
                                  rows="3"
                                ></textarea>
                              </InputGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col className="m-0 button_less">
                              <button
                                className="submit-feed ml-2 mt-0 "
                                style={{ color: "white" }}
                              >
                                {lang === "mr"
                                  ? data.marathi.InterestArea.button
                                  : data.english.InterestArea.button}
                              </button>
                            </Col>
                          </Row>
                        </div>
                      </div>
                      <div
                        id="RequestA"
                        className={
                          activeTab === "RequestA"
                            ? "tab-content-active"
                            : "d-none"
                        }
                      >
                        <div className="profile-box1">
                          <div>
                            <p>
                              <div
                                className="heading mb-2"
                                style={{ color: "#293E6F" }}
                              >
                                {lang === "mr"
                                  ? data.marathi.RequestA.head
                                  : data.english.RequestA.head}
                              </div>
                            </p>
                            <hr className="horizontal-line m-0" />
                            <Row className="m-2 mb-0">
                              <Col>
                                <Form.Label htmlFor="full_name">
                                  {lang === "mr"
                                    ? data.marathi.RequestA.field1
                                    : data.english.RequestA.field1}
                                </Form.Label>
                                <InputGroup className="subject_textarea mb-4">
                                  <Form.Select
                                    style={{
                                      backgroundColor: "#E5E5E5",
                                      borderRadius: "0",
                                      fontSize: "14px",
                                    }}
                                    aria-label="User Type Selection"
                                    // value={formdata.designation}
                                    name="designation"
                                    // onChange={handleChange}
                                    // onBlur={validateForm} // Validate on blur
                                  >
                                    <option>
                                      {lang === "mr"
                                        ? data.marathi.InterestArea.option1
                                        : data.english.InterestArea.option1}
                                    </option>
                                    <option>
                                      {lang === "mr"
                                        ? data.marathi.InterestArea.option2
                                        : data.english.InterestArea.option2}
                                    </option>
                                    <option>
                                      {lang === "mr"
                                        ? data.marathi.InterestArea.option3
                                        : data.english.InterestArea.option3}
                                    </option>
                                    <option>
                                      {lang === "mr"
                                        ? data.marathi.InterestArea.option4
                                        : data.english.InterestArea.option4}
                                    </option>
                                    <option>
                                      {lang === "mr"
                                        ? data.marathi.InterestArea.option5
                                        : data.english.InterestArea.option5}
                                    </option>
                                  </Form.Select>
                                </InputGroup>
                              </Col>
                            </Row>
                            <Row className="m-2 mt-0">
                              <Col>
                                <Form.Label htmlFor="full_name">
                                  {lang === "mr"
                                    ? data.marathi.RequestA.description
                                    : data.english.RequestA.description}
                                </Form.Label>
                                <InputGroup className="subject_textarea mb-4">
                                  <textarea
                                    style={{
                                      backgroundColor: "#E5E5E5",
                                      borderRadius: "0",
                                      fontSize: "14px",
                                    }}
                                    placeholder={
                                      lang === "mr"
                                        ? data.marathi.InterestArea.placeholder
                                        : data.english.InterestArea.placeholder
                                    }
                                    className="form-control"
                                    id="exampleFormControlTextarea1"
                                    rows="3"
                                  ></textarea>
                                </InputGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col className="m-0 button_less">
                                <button
                                  className="submit-feed ml-2 mt-0 "
                                  style={{ color: "white" }}
                                >
                                  {lang === "mr"
                                    ? data.marathi.InterestArea.button
                                    : data.english.InterestArea.button}
                                </button>
                              </Col>
                            </Row>
                          </div>
                        </div>
                      </div>
                      <div
                        id="confidential"
                        className={
                          activeTab === "confidential"
                            ? "tab-content-active"
                            : "d-none"
                        }
                      >
                        <div className="profile-box1">
                          <p>
                            <div
                              className="heading mb-2"
                              style={{ color: "#293E6F" }}
                            >
                              {lang === "mr"
                                ? data.marathi.Confidential
                                : data.english.Confidential}
                            </div>
                          </p>
                          <hr className="horizontal-line m-0" />
                          <div
                            className="p-3 pb-0"
                            style={{ position: "relative" }}
                          >
                            <p>
                              1.
                              <span className="text-center p-3 doc-head">
                                Tender (General)
                              </span>
                              <span className="text-center p-2 contact-info">
                                1692313416268.19_TENDER DOCUMENT.pdf
                              </span>
                              <span style={{ marginLeft: "auto" }}>
                                <i className="fa fa-download icon-calender"></i>
                              </span>
                            </p>
                          </div>
                          <hr className="horizontal-line m-0" />
                          <div
                            className="p-3 pb-0"
                            style={{ position: "relative" }}
                          >
                            <p>
                              1.
                              <span className="text-center p-3 doc-head">
                                Tender (General)
                              </span>
                              <span className="text-center p-2 contact-info">
                                1692313416268.19_TENDER DOCUMENT.pdf
                              </span>
                              <span style={{ marginLeft: "auto" }}>
                                <i className="fa fa-download icon-calender"></i>
                              </span>
                            </p>
                          </div>
                          <hr className="horizontal-line m-0" />
                          <div
                            className="p-3 pb-0"
                            style={{ position: "relative" }}
                          >
                            <p>
                              1.
                              <span className="text-center p-3 doc-head">
                                Tender (General)
                              </span>
                              <span className="text-center p-2 contact-info">
                                1692313416268.19_TENDER DOCUMENT.pdf
                              </span>
                              <span style={{ marginLeft: "auto" }}>
                                <i className="fa fa-download icon-calender"></i>
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        id="Change"
                        className={
                          activeTab === "Change"
                            ? "tab-content-active"
                            : "d-none"
                        }
                      >
                        <div className="profile-box1">
                          <p>
                            <div
                              className="heading mb-2"
                              style={{ color: "#293E6F" }}
                            >
                              {lang === "mr"
                                ? data.marathi.Reset.head1
                                : data.english.Reset.head1}
                            </div>
                          </p>
                          <hr className="horizontal-line m-0" />
                          <div className="container mt-4">
                            <Row className="justify-content-center">
                              <Col lg={9} md={9} sm={12} xs={12}>
                                <div className="login-box">
                                  <h3 className="mb-3">
                                    {lang === "mr"
                                      ? data.marathi.Reset.field1
                                      : data.english.Reset.field1}
                                  </h3>
                                  <InputGroup className="mb-4">
                                    <InputGroup.Text id="basic-addon1">
                                      <i
                                        className="fa fa-envelope"
                                        aria-hidden="true"
                                      ></i>
                                    </InputGroup.Text>
                                    <Form.Control
                                      type="email"
                                      placeholder={
                                        lang === "mr"
                                          ? data.marathi.Reset.description
                                          : data.english.Reset.description
                                      }
                                      aria-label="ई-मेल आयडी"
                                      aria-describedby="basic-addon1"
                                      value={email}
                                      onChange={(e) => setEmail(e.target.value)}
                                      onBlur={validateForm} // Validate on blur
                                    />
                                  </InputGroup>
                                  {errors.email && (
                                    <p className="error">{errors.email}</p>
                                  )}
                                  <Link to="">
                                    <button
                                      variant="primary"
                                      className="submit-feed mt-4 button_less "
                                      style={{
                                        color: "white",
                                        textDecoration: "none",
                                      }}
                                    >
                                      {lang === "mr"
                                        ? data.marathi.Reset.button
                                        : data.english.Reset.button}
                                    </button>
                                  </Link>
                                </div>
                              </Col>
                            </Row>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
          </Container>
        </section>
      </div>
    </>
  );
};

export default Profile;
