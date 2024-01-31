import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useLocation, useNavigate, Link } from "react-router-dom";

import Slider from "../../Components/Common/Slider";
import useLang from "../../utils/useLang";

import { getApi, getApiById } from "../../service/axiosInterceptors";
import { API } from "../../config";
import { slider } from "../../constant";

const MemberDetailEng = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const [current, setCurrent] = useState({});
  const [member, setMember] = useState([]);
  const [debates, setDebates] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const { lang, checkLang } = useLang();

  const data = {
    title: {
      marathi: "सदस्य तपशील",
      english: "Member Details",
    },
    placeholder: {
      marathi: "शोधा",
      english: "Search",
    },
    Link1: {
      marathi: "मुख्यपृष्ठ",
      english: "Home",
    },
    Link2: {
      marathi: " विधानमंडळ सदस्य",
      english: "Member of Legislature",
    },
    Link3: {
      marathi: "सदस्य",
      english: "Member",
    },
    name: {
      marathi: "गडकरी, नितीन जयराम",
      english: "Gadkari, Shri Nitin Jairam",
    },
    marathi: {
      button1: "मुलभूत माहिती",
      button2: "राजकीय प्रवास",
      button3: "निवडणूक डेटा",
      button4: "वादविवाद",
      Profile: {
        DOB: "जन्मतारीख",
        birthplace: "जन्मस्थान",
        education: "शैक्षणिक पात्रता",
        Knownlan: "ज्ञात भाषा",
        marital: "वैवाहिक स्थिती",
        child: "मुले",
        Buisness: "व्यवसाय",
        party: "राजकीय पक्ष",
        constituency: "मतदारसंघ",
        hobby: "छंद",
        foreignM: "परदेशी स्थलांतर",
        email: "ईमेल",
        gender: "लिंग",
        number: "संपर्क",
        address: "कायमचा पत्ता",
      },
      Debate: {
        House: "सभागृह",
        Volume: "खंड",
        session: "सत्र",
        Kramank: "क्रमांक",
        Date: "दिनांक",
        Device: "युक्ती",
        SubDevice: "उप युक्ती",
        Topic: "विषय",
        Details: "सर्व्हिस केलेले",
      },
      Election: {
        result: "निवडणूक निकाल",
        godia: "६५ - गोंदिया",
        total1: "एकूण मतदार ",
        total2: "एकूण वैध मतदान ",
        sr: "अ.क्र.",
        name: "उमेदवाराचे नाव",
        vote: "मत",
        party: "पक्ष",
        title: "पहिल्या पाच उमेदवारांच्या मतांची संख्या",
      },
    },
    english: {
      button1: "Basic Information",
      button2: "Political Journey",
      button3: "Election Data",
      button4: "Debate",
      Profile: {
        DOB: "Date of Birth",
        birthplace: "Place of birth",
        education: "Educational Qualification",
        Knownlan: "Known Languages",
        marital: "Marital Status",
        child: "Children",
        Buisness: "Business",
        party: "Party",
        constituency: "Constoituency",
        hobby: "Hobby",
        foreignM: "Foreign Migration",
        gender: "Gender",
        address: "Permanent Address",
        number: "Mobile Number",
        email: "Email Address",
      },
      Debate: {
        House: "House",
        Volume: "Volume",
        session: "session",
        Kramank: "Kramank",
        Date: "Date",
        Device: "Device",
        SubDevice: "Sub Device",
        Topic: "Topic",
        Details: "Details",
      },
      Election: {
        result: "Election Result",
        godia: "65 - Gondia",
        total1: "Total Electorate ",
        total2: "Total valid voting ",
        sr: "No.",
        name: "Candidate Name",
        vote: "Vote",
        party: "Party",
        title: "Number of votes of the first five candidates",
      },
    },
  };

  const navigate = useNavigate();
  const location = useLocation();
  const id = location.search.split("=")[1];

  const handleSwitch = (info) => {
    setActiveTab(info);
  };

  const handleClick = (id) => {
    navigate(`/MemberDetailsEng?id=${id}`, { replace: true });
    window.location.reload();
  };

  const handleSearch = (e) => {
    const search = e.target.value;

    const data = member.filter((ele) => {
      let name = ele?.basic_info?.surname + ele?.basic_info?.name;

      if (name.toLowerCase().includes(search.toLowerCase())) {
        return ele;
      }
    });

    setFiltered(data);
  };

  useEffect(() => {
    const fetchData = async () => {
      await getApiById("member", id)
        .then((res) => setCurrent(res.data.data))
        .catch((err) => console.log(err));

      // /house?id=""

      await getApi(`member`)
        .then((res) => {
          setMember(res.data.data);
          setFiltered(res.data.data);
        })
        .catch((err) => console.log(err));
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchDebate = async (house, name, perPage, perLimit) => {
      await getApi(
        `debate/member?houses=${house}&name=${name}&perPage=${perPage}&perLimit=${perLimit}`
      )
        .then((res) => setDebates(res.data))
        .catch((err) => console.log(err));
    };

    if (current && current?.basic_info) {
      let name = current?.basic_info?.surname + current?.basic_info?.name;

      fetchDebate("विधानसभा", name, 0, 10);
    }
  }, [current]);

  return (
    <>
      <section>
        <Container fluid className="Page-back">
          <div className="justify-content-center section-top-space">
            <ul className="breadcrumb">
              <li>
                <Link to="/">
                  {lang === "mr" ? data.Link1.marathi : data.Link1.english}
                </Link>
              </li>
              <li>{lang === "mr" ? data.Link2.marathi : data.Link2.english}</li>
              <li>{lang === "mr" ? data.Link3.marathi : data.Link3.english}</li>
            </ul>
            <Row>
              <Col lg={3} md={3} sm={12} xs={12} className="order2">
                <Col className="m-0">
                  <div
                    className=""
                    style={{
                      border: "1px solid blue ",
                      paddingTop: "5px",
                      paddingLeft: "7px",
                      paddingRight: "5px",
                      paddingBottom: "15px",
                    }}
                  >
                    <div
                      className="pt-0"
                      style={{
                        paddingBottom: "25px",
                      }}
                    >
                      सदस्य शोधा
                    </div>
                    <div className="search-box member-search">
                      <div className="search-input">
                        <input
                          type="search"
                          placeholder={
                            lang === "mr"
                              ? data.placeholder.marathi
                              : data.placeholder.english
                          }
                          onChange={handleSearch}
                        />
                      </div>
                      <span className="search-btn">
                        <button>
                          <i className="fa fa-search" name="search-sharp"></i>
                        </button>
                      </span>
                    </div>
                  </div>
                </Col>
                <Col className="col1-member-search mt-2 p-2">
                  <div className="content-container">
                    <Row>
                      {filtered && filtered.length > 0 ? (
                        filtered.map((item, index) => (
                          <Col
                            lg={12}
                            md={12}
                            sm={12}
                            xs={12}
                            className="mt-2"
                            key={index}
                          >
                            <Row
                              role="button"
                              onClick={() => handleClick(item._id)}
                              style={{ alignItems: "center" }}
                            >
                              <Col lg={3} md={3} sm={4} xs={4}>
                                <img
                                  src={
                                    API.baseUrl + item.basic_info?.profile?.path
                                  }
                                  className="image member-image"
                                  alt="Member"
                                />
                              </Col>
                              <Col
                                lg={7}
                                md={7}
                                sm={6}
                                xs={6}
                                className="col-member-name mt-1 p-0"
                              >
                                <span>
                                  {item.basic_info?.surname +
                                    " " +
                                    item.basic_info?.name}
                                </span>
                              </Col>
                              <Col lg={2} md={2} sm={2} xs={2} className="mt-1">
                                <i
                                  className="fa fa-chevron-right"
                                  style={{ color: "#CE5D3D" }}
                                ></i>
                              </Col>
                            </Row>
                          </Col>
                        ))
                      ) : (
                        <></>
                      )}
                    </Row>

                    {/* <Col lg={4} md={4} sm={12} xs={12}>
                        <img src={current && API.baseUrl + current.basic_info?.profile?.path} className="image" alt="Member" />
                      </Col>
                      <Col
                        lg={6}
                        md={6}
                        sm={12}
                        xs={12}
                        className="col-member-name mt-4 p-0"
                      >
                        <span>{current && current?.basic_info?.surname + " " + current?.basic_info?.name}</span>
                      </Col>
                      <Col lg={2} md={2} sm={12} xs={12} className="mt-3">
                        <i
                          className="fa fa-chevron-right"
                          style={{ color: "#CE5D3D" }}
                        ></i>
                      </Col>
                    </Row> */}
                  </div>
                </Col>
              </Col>

              <Col lg={9} md={9} sm={12} xs={12} className="order1  ">
                <div className="col1-member">
                  <Col
                    className="text-center"
                    style={{
                      backgroundColor: "#E66442",
                      color: "white",
                      fontFamily: "Poppins",
                      fontSize: "18px",
                    }}
                  >
                    {lang === "mr" ? data.title.marathi : data.title.english}
                  </Col>
                  <Col className="text-center justify-content-center button-click ">
                    <span className="">
                      <Button
                        className={`button-detail ${
                          activeTab === "profile" ? "active" : ""
                        }`}
                        style={{
                          backgroundColor:
                            activeTab === "profile" ? "#000088" : "whitesmoke",
                          color: activeTab === "profile" ? "white" : "black",
                          width: "max-content",
                          border: "1px solid #000088",
                          marginTop: "0",
                          margin: "1%",
                          borderRadius: "5px",
                          padding: "0px 7px",
                        }}
                        onClick={() => handleSwitch("profile")}
                      >
                        <div style={{ fontSize: "15px" }}>
                          {lang === "mr"
                            ? data.marathi.button1
                            : data.english.button1}
                        </div>
                      </Button>
                      <Button
                        className={`button-detail ${
                          activeTab === "politicalJ" ? "active" : ""
                        }`}
                        style={{
                          backgroundColor:
                            activeTab === "politicalJ"
                              ? "#000088"
                              : "whitesmoke",
                          color: activeTab === "politicalJ" ? "white" : "black",
                          border: "1px solid #000088",
                          width: "max-content",
                          margin: "1%",
                          padding: "0px 7px",
                          borderRadius: "5px",
                        }}
                        onClick={() => handleSwitch("politicalJ")}
                      >
                        <div style={{ fontSize: "15px" }}>
                          {lang === "mr"
                            ? data.marathi.button2
                            : data.english.button2}
                        </div>
                      </Button>
                      <Button
                        className={`button-detail ${
                          activeTab === "election" ? "active" : ""
                        }`}
                        style={{
                          backgroundColor:
                            activeTab === "election" ? "#000088" : "whitesmoke",
                          color: activeTab === "election" ? "white" : "black",
                          border: "1px solid #000088",
                          width: "max-content",
                          margin: "1%",
                          padding: "0px 7px",
                          borderRadius: "5px",
                        }}
                        onClick={() => handleSwitch("election")}
                      >
                        <div style={{ fontSize: "15px" }}>
                          {lang === "mr"
                            ? data.marathi.button3
                            : data.english.button3}
                        </div>
                      </Button>
                      <Button
                        className={`button-detail ${
                          activeTab === "debate" ? "active" : ""
                        }`}
                        style={{
                          color: activeTab === "debate" ? "white" : "black",
                          backgroundColor:
                            activeTab === "debate" ? "#000088" : "whitesmoke",
                          width: "max-content",
                          border: "1px solid #000088",
                          margin: "1%",
                          padding: "0px 7px",
                          borderRadius: "5px",
                        }}
                        onClick={() => handleSwitch("debate")}
                      >
                        <div style={{ fontSize: "15px" }}>
                          {lang === "mr"
                            ? data.marathi.button4
                            : data.english.button4}
                        </div>
                      </Button>
                    </span>
                  </Col>
                  <Row>
                    <Col
                      lg={4}
                      md={4}
                      sm={12}
                      xs={12}
                      className="image-member-col"
                    >
                      <div className="sample-heading mt-2">
                        <img
                          src={
                            current &&
                            API.baseUrl + current.basic_info?.profile?.path
                          }
                          width="100%"
                          className="profile-image heading"
                        ></img>
                      </div>
                      <div className="align-name">
                        <Col className="mt-4 ">
                          <b style={{ fontSize: "16px" }}>
                            {current &&
                              current?.basic_info?.surname +
                                " " +
                                current?.basic_info?.name}
                          </b>
                        </Col>
                        <Col className="mt-3 ml-3">
                          <Row className="media-icon">
                            <div
                              className="icon-container"
                              style={{ backgroundColor: "rgb(28, 52, 130)" }}
                            >
                              <i className="fa fa-facebook"></i>
                            </div>
                            <div
                              className="icon-container"
                              style={{ backgroundColor: "skyblue" }}
                            >
                              <i
                                className="fa fa-twitter"
                                aria-hidden="true"
                              ></i>
                            </div>
                            <div
                              className="icon-container"
                              style={{ backgroundColor: "red" }}
                            >
                              <i
                                className="fa fa-youtube-play"
                                aria-hidden="true"
                              ></i>
                            </div>
                            <div
                              className="icon-container"
                              style={{ backgroundColor: "rgb(6, 111, 160)" }}
                            >
                              <i
                                className="fa fa-linkedin"
                                aria-hidden="true"
                              ></i>
                            </div>
                          </Row>
                        </Col>
                      </div>
                    </Col>
                    <Col lg={8} md={8} sm={12} xs={12} className="align-block">
                      <section
                        id="profile-section"
                        className={
                          activeTab === "profile"
                            ? "tab-content-active"
                            : "d-none"
                        }
                      >
                        <Row>
                          <Col
                            lg={11}
                            md={11}
                            sm={9}
                            xs={9}
                            className="mb-3 profile-block"
                          >
                            <Col>
                              <b>
                                {lang === "mr"
                                  ? data.marathi.Profile.DOB
                                  : data.english.Profile.DOB}
                              </b>
                              {` : `}
                              {current && current?.basic_info?.date_of_birth}
                            </Col>
                            <Col>
                              <b>
                                {lang === "mr"
                                  ? data.marathi.Profile.birthplace
                                  : data.english.Profile.birthplace}
                              </b>
                              {` : `}
                              {current && current?.basic_info?.place_of_birth}
                            </Col>
                            <Col>
                              <b>
                                {lang === "mr"
                                  ? data.marathi.Profile.education
                                  : data.english.Profile.education}
                              </b>
                              {` : `}
                              {current && current?.basic_info?.education}
                            </Col>
                            <Col>
                              <b>
                                {lang === "mr"
                                  ? data.marathi.Profile.Knownlan
                                  : data.english.Profile.Knownlan}
                              </b>
                              {` : `}
                              {current && current?.basic_info?.language}
                            </Col>
                            <Col>
                              <b>
                                {lang === "mr"
                                  ? data.marathi.Profile.marital
                                  : data.english.Profile.marital}
                              </b>
                              {` : `}
                              {current && current?.basic_info?.marital_status}
                            </Col>

                            <Col>
                              <b>
                                {lang === "mr"
                                  ? data.marathi.Profile.child
                                  : data.english.Profile.child}
                              </b>
                              {` : `}
                              {current && current?.basic_info?.children}
                            </Col>
                            <Col>
                              <b>
                                {lang === "mr"
                                  ? data.marathi.Profile.Buisness
                                  : data.english.Profile.Buisness}
                              </b>
                              {` : `}
                              {current && current?.basic_info?.business}
                            </Col>
                            <Col>
                              <b>
                                {lang === "mr"
                                  ? data.marathi.Profile.party
                                  : data.english.Profile.party}
                              </b>
                              {` : `}
                              {current && current?.basic_info?.party}
                            </Col>
                            <Col>
                              <b>
                                {lang === "mr"
                                  ? data.marathi.Profile.constituency
                                  : data.english.Profile.constituency}
                              </b>
                              {` : `}
                              {current && current?.basic_info?.constituency}
                            </Col>
                            <Col>
                              <b>
                                {lang === "mr"
                                  ? data.marathi.Profile.hobby
                                  : data.english.Profile.hobby}
                              </b>
                              {` : `}
                              {current && current?.basic_info?.hobby}
                            </Col>
                            <Col>
                              <b>
                                {lang === "mr"
                                  ? data.marathi.Profile.foreignM
                                  : data.english.Profile.foreignM}
                              </b>
                              {` : `}
                              {current &&
                                current?.basic_info?.foreign_migration}
                            </Col>
                            <Col>
                              <b>
                                {lang === "mr"
                                  ? data.marathi.Profile.gender
                                  : data.english.Profile.gender}
                              </b>
                              {` : `}
                              {current && current?.basic_info?.gender}
                            </Col>
                            <Col>
                              <b>
                                {lang === "mr"
                                  ? data.marathi.Profile.address
                                  : data.english.Profile.address}
                              </b>
                              {` : `}
                              {current && current?.basic_info?.address}
                            </Col>
                            <Col>
                              <b>
                                {lang === "mr"
                                  ? data.marathi.Profile.number
                                  : data.english.Profile.number}
                              </b>
                              {` : `}
                              {current && current?.basic_info?.mobile_number}
                            </Col>
                            <Col>
                              <b>
                                {lang === "mr"
                                  ? data.marathi.Profile.email
                                  : data.english.Profile.email}
                              </b>
                              {` : `}
                              {current && current?.basic_info?.email}
                            </Col>
                          </Col>
                        </Row>
                      </section>
                      <section
                        id="political-section"
                        className={
                          activeTab === "politicalJ"
                            ? "tab-content-active"
                            : "d-none"
                        }
                      >
                        <>
                          <div className="container-fluid mt-4">
                            <div className="row example-split">
                              <div className="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2">
                                <ul className="timeline timeline-split">
                                  {current &&
                                  current.political_journey &&
                                  current.political_journey.length > 0 ? (
                                    current.political_journey.map(
                                      (item, index) => (
                                        <li
                                          className="timeline-item"
                                          key={index}
                                        >
                                          <div className="timeline-info"></div>
                                          <div className="timeline-marker" />
                                          <div className="timeline-content">
                                            <h6 className="timeline-title">
                                              {item.date
                                                ? new Date(
                                                    item.date
                                                  ).getFullYear()
                                                : ""}
                                            </h6>
                                            <p>{item?.title}</p>
                                          </div>
                                        </li>
                                      )
                                    )
                                  ) : (
                                    <></>
                                  )}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </>
                      </section>
                      <section
                        id="election-section"
                        className={
                          activeTab === "election"
                            ? "tab-content-active"
                            : "d-none"
                        }
                      >
                        <div
                          className="text-center mt-3"
                          style={{ fontSize: "18px" }}
                        >
                          <div className="mb-0">
                            <b>
                              {lang === "mr"
                                ? data.marathi.Election.result
                                : data.english.Election.result}
                            </b>
                          </div>
                          <div className="m-0 p-0" style={{ fontSize: "15px" }}>
                            {current &&
                              current?.election_data?.total_electorate}
                            {" -"}
                            {current && current?.election_data?.constituency}
                          </div>
                        </div>
                        <div>
                          <Row>
                            <Col className="text-center">
                              <b>
                                {lang === "mr"
                                  ? data.marathi.Election.total1
                                  : data.english.Election.total1}
                              </b>
                              {` : `}
                              {current &&
                                current?.election_data?.total_electorate}
                            </Col>
                            <Col className="text-center">
                              <b>
                                {lang === "mr"
                                  ? data.marathi.Election.total2
                                  : data.english.Election.total2}
                              </b>
                              {` : `}
                              {current &&
                                current?.election_data?.total_valid_voting}
                            </Col>
                          </Row>
                        </div>

                        <Row
                          style={{ width: "100%" }}
                          className="table-election p-3"
                        >
                          <p className="mb-0 text-center">
                            {lang === "mr"
                              ? data.marathi.Election.title
                              : data.english.Election.title}
                          </p>
                          <table className="table-elect">
                            <thead className="table-col2 text-center">
                              <tr className="table_elct_head text-center ">
                                <td
                                  className="table-head1  text-center"
                                  style={{ width: "10%" }}
                                >
                                  {lang === "mr"
                                    ? data.marathi.Election.sr
                                    : data.english.Election.sr}
                                </td>
                                <td
                                  className="table-head1 w-40 text-center "
                                  style={{ width: "40%" }}
                                >
                                  {lang === "mr"
                                    ? data.marathi.Election.name
                                    : data.english.Election.name}
                                </td>
                                <td
                                  className="table-head1 w-20 text-center"
                                  style={{ width: "30%" }}
                                >
                                  {lang === "mr"
                                    ? data.marathi.Election.vote
                                    : data.english.Election.vote}
                                </td>
                                <td
                                  className="table-head1 w-30 text-center"
                                  style={{ width: "20%" }}
                                >
                                  {lang === "mr"
                                    ? data.marathi.Election.party
                                    : data.english.Election.party}
                                </td>
                              </tr>
                            </thead>
                            <tbody>
                              {current &&
                              current.election_data &&
                              current.election_data.member_election_result &&
                              current.election_data.member_election_result
                                .length > 0 ? (
                                current.election_data.member_election_result.map(
                                  (item, index) => (
                                    <tr
                                      style={{ backgroundColor: "#E1E1EE" }}
                                      key={index}
                                    >
                                      <td className="text-center ">
                                        {index + 1}
                                      </td>
                                      <td className=" ">
                                        {item?.candidate_name}
                                      </td>
                                      <td className=" ">{item?.votes}</td>
                                      <td className=" ">{item?.party}</td>
                                    </tr>
                                  )
                                )
                              ) : (
                                <></>
                              )}
                            </tbody>
                          </table>
                        </Row>
                      </section>
                      <section
                        id="debate-section"
                        className={
                          activeTab === "debate"
                            ? "tab-content-active"
                            : "d-none"
                        }
                      >
                        <Row style={{ margin: "0" }}>
                          <Col
                            lg={12}
                            md={11}
                            sm={12}
                            xs={12}
                            className="mt-4 "
                          >
                            <div className="table-responsive">
                              <table className=" table-box-col3 ">
                                <thead className="table-col2 text-center">
                                  <tr className="table-head ">
                                    <td className="table-head  text-center">
                                      {lang === "mr"
                                        ? data.marathi.Debate.House
                                        : data.english.Debate.House}
                                    </td>
                                    <td className="table-head text-center ">
                                      {lang === "mr"
                                        ? data.marathi.Debate.Volume
                                        : data.english.Debate.Volume}
                                    </td>
                                    <td className="table-head text-center">
                                      {lang === "mr"
                                        ? data.marathi.Debate.session
                                        : data.english.Debate.session}
                                    </td>
                                    <td className="table-head  text-center">
                                      {lang === "mr"
                                        ? data.marathi.Debate.Kramank
                                        : data.english.Debate.Kramank}
                                    </td>
                                    <td className="table-head  text-center">
                                      {lang === "mr"
                                        ? data.marathi.Debate.Date
                                        : data.english.Debate.Date}
                                    </td>
                                    <td className="table-head  text-center">
                                      {lang === "mr"
                                        ? data.marathi.Debate.Device
                                        : data.english.Debate.Device}
                                    </td>
                                    <td className="table-head  text-center">
                                      {lang === "mr"
                                        ? data.marathi.Debate.SubDevice
                                        : data.english.Debate.SubDevice}
                                    </td>
                                    <td className="table-head  text-center">
                                      {lang === "mr"
                                        ? data.marathi.Debate.Topic
                                        : data.english.Debate.Topic}
                                    </td>
                                    <td className="table-head  text-center">
                                      {lang === "mr"
                                        ? data.marathi.Debate.Details
                                        : data.english.Debate.Details}
                                    </td>
                                  </tr>
                                </thead>
                                <tbody style={{ fontSize: "12px" }}>
                                  {debates &&
                                  debates?.data &&
                                  debates?.data.length > 0 ? (
                                    <>
                                      {debates.data.map((item, index) => (
                                        <tr
                                          className="text-center "
                                          key={index}
                                        >
                                          <td>{item.house}</td>
                                          <td>{item.volume}</td>
                                          <td>{item.session}</td>
                                          <td>{item.kramank}</td>
                                          <td>{item.date}</td>
                                          <td>{item.method}</td>
                                          <td>{item.method_type}</td>
                                          <td>{item.topic}</td>
                                          <td>
                                            <a
                                              href={
                                                "http://103.112.121.109:8000/" +
                                                item.fileurl
                                              }
                                              target="_blank"
                                              rel="noreferrer"
                                            >
                                              <i className="fa fa-eye"></i>
                                            </a>
                                          </td>
                                        </tr>
                                      ))}
                                    </>
                                  ) : (
                                    <></>
                                  )}
                                </tbody>
                              </table>
                            </div>

                            {/* <div
                              className="d-flex justify-content-end"
                              style={{ marginTop: "10px" }}
                            >
                              <Button
                                style={{
                                  backgroundColor: "#000088",
                                  width: "20%",
                                  justifyContent: "center",
                                  display: "flex",
                                  marginTop: "0",
                                }}
                              >
                                <b style={{ fontSize: "15px", color: "white" }}>
                                  Next <i className="fa fa-chevron-right "></i>
                                  <i className="fa fa-chevron-right "></i>
                                </b>
                              </Button>
                            </div> */}
                          </Col>
                        </Row>
                      </section>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
            <Slider data={slider} field={"News"} key={1} />
            <Slider data={slider} field={"Media"} key={2} />
          </div>
        </Container>
      </section>
    </>
  );
};
export default MemberDetailEng;
