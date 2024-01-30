import React from "react";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../../Components/Common/Header";
import Footer from "../../Components/Common/Footer";
import ageSection from "../../assets/about/Group 18.jpg";
import chart from "../../assets/about/Group 19.jpg";
import womensection from "../../assets/about/Group 11.jpg";
import womenChart from "../../assets/about/Group 20.jpg";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import LoaderComponents from "../loader";
import { getApi } from "../../service/axiosInterceptors";
import { API } from "../../config";
const AssemblyMemberEng = () => {
  const [lang, setLang] = useState("mr");
  const [server, setServer] = useState([]);
  const [loading, setLoading] = useState(true);

  const data = {
    title: {
      marathi: "१४वी विधानसभा सदस्यांची यादी",
      english: "List of 14th Legislative Assembly Members",
    },
    Link1: {
      marathi: "मुख्यपृष्ठ",
      english: "Home",
    },

    Link2: {
      marathi: "विधानमंडळ सदस्य",
      english: "Member of Legislature",
    },
    Link3: {
      marathi: "विधानसभा सदस्य",
      english: "List of Legislative Assembly Members",
    },
    search: {
      marathi: "शोधा ",
      english: "Search ",
    },
    marathi: {
      section1: {
        title: {
          one: "द्वारे शोधा",
          two: "प्रथमच निवडून आलेले सदस्य",
          three: "महिला सदस्य",
        },
        subTitleOne: {
          one: "पक्ष",
          two: "मतदारसंघ",
          three: "आडनाव",
        },
        subTitleTwo: {
          one: "वर्णक्रमानुसार",
          two: "जिल्हानिहाय",
          three: "पक्षनिहाय",
          Four: "प्रथमच निवडून आले",
        },
        subTitleThree: {
          one: "वर्णक्रमानुसार",
          two: "जिल्हानिहाय",
          three: "पक्षनिहाय",
        },
      },
      tableSec: {
        col1: "क्र.",
        col2: "नाव",
        col3: "मतदारसंघ",
        col4: "पक्ष",
        col5: "लिंग",
        nextLink: "पुढे",
      },
      section2: {
        title: {
          top: "सांख्यिकीय विश्लेषण",
          one: "सदस्यांचे वय विभाग",
          two: "महिला सदस्यांची यादी",
        },
      },
    },
    english: {
      section1: {
        title: {
          one: "Search by",
          two: "First Time Elected Members",
          three: "Women Members",
        },
        subTitleOne: {
          one: "Party",
          two: "Constituency",
          three: "Surname",
        },
        subTitleTwo: {
          one: "Alphabetical",
          two: "District wise",
          three: "Party wise",
          Four: "First Time Elected",
        },
        subTitleThree: {
          one: "Alphabetical",
          two: "District wise",
          three: "Party wise",
        },
      },
      tableSec: {
        col1: "Sr.No.",
        col2: "Name",
        col3: "Constituency",
        col4: "Party",
        col5: "Gender",
        nextLink: "Next",
      },
      section2: {
        title: {
          top: "Statistical Analysis",
          one: "Age Section of Members",
          two: "List of Women Members",
        },
      },
    },
  };

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const updateLocalStorage = (newLang) => {
    localStorage.setItem("lang", newLang);
  };

  const fetchData = async () => {
    try {
      await getApi("member").then((res) => setServer(res.data.data));
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const storedLang = localStorage.getItem("lang");
    const newLang = queryParams.get("lang") || storedLang || "mr";
    setLang(newLang);
    updateLocalStorage(newLang);
  }, [location.search]);

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <LoaderComponents />;
  }

  return (
    <>
      <Header />
      <section>
        <Container fluid>
          <div className="container-fluid justify-content-center section-top-space">
            <ul className="breadcrumb">
              <li>
                <Link to="/">
                  {lang === "mr" ? data.Link1.marathi : data.Link1.english}
                </Link>
              </li>
              <li>{lang === "mr" ? data.Link2.marathi : data.Link2.english}</li>
              <li>{lang === "mr" ? data.Link3.marathi : data.Link3.english}</li>
            </ul>
            <div
              className="about-head text-center"
              style={{
                color: "#000000",
              }}
            >
              <div
                id="about-text"
                style={{
                  display: "inline-block",
                  position: "relative",
                }}
              >
                {lang === "mr" ? data.title.marathi : data.title.english}
                <div
                  className="underline"
                  style={{
                    position: "absolute",
                    bottom: "-5px",
                    left: "0",
                    width: "100%",
                    height: "5px",
                    background: "linear-gradient(to right, green, yellow)",
                    opacity: "1",
                  }}
                />
              </div>
            </div>
            <div className="mt-4 mb-3">
              <Row className="justify-content-center">
                <Col lg={7} md={6} sm={12} xs={12}>
                  <div
                    className="search-box"
                    style={{
                      background: "none",
                      paddingLeft: "45px",
                      width: "100%",
                      maxWidth: "100%",
                    }}
                  >
                    <div
                      className="search-input"
                      style={{ backgroundColor: "none" }}
                    >
                      <input
                        type="search"
                        placeholder={
                          lang === "mr"
                            ? data.search.marathi
                            : data.search.english
                        }
                        style={{
                          border: "none",
                          boxShadow: "0px 0px 4px 0px #00000040",
                          padding: "9px 0px 10px 4px",
                        }}
                      />
                    </div>
                    <span
                      className="search-btn"
                      style={{ backgroundColor: "none" }}
                    >
                      <button
                        style={{
                          backgroundColor: "transparent",
                          color: "grey",
                          padding: "7px 0px",
                        }}
                      >
                        <i className="fa fa-search" name="search-sharp"></i>
                      </button>
                    </span>
                  </div>
                </Col>
              </Row>
            </div>
            <div>
              <Row className="justify-content-center">
                <Col
                  lg={2}
                  md={2}
                  sm={12}
                  xs={12}
                  className="col1-member m-3"
                  style={{ borderRadius: "0" }}
                >
                  <Col
                    className="col1-head p-3"
                    style={{ backgroundColor: "#EE7700", color: "white" }}
                  >
                    {lang === "mr"
                      ? data.marathi.section1.title.one
                      : data.english.section1.title.one}
                  </Col>
                  <Col className="col1-filter member-space p-2">
                    <div
                      className=" "
                      style={{
                        position: "relative",
                        borderBottom: "1px solid #EFEFEF",
                      }}
                    >
                      {lang === "mr"
                        ? data.marathi.section1.subTitleOne.one
                        : data.english.section1.subTitleOne.one}
                      <span style={{ marginLeft: "auto" }}>
                        <i
                          className="fa fa-chevron-right icon-calender"
                          style={{ color: "#EE7700", marginTop: "-8px" }}
                        ></i>
                      </span>
                    </div>
                  </Col>
                  <Col className="col1-filter member-space p-2">
                    <div
                      className=" "
                      style={{
                        position: "relative",
                        borderBottom: "1px solid #EFEFEF",
                      }}
                    >
                      {lang === "mr"
                        ? data.marathi.section1.subTitleOne.two
                        : data.english.section1.subTitleOne.two}
                      <span style={{ marginLeft: "auto" }}>
                        <i
                          className="fa fa-chevron-right icon-calender"
                          style={{ color: "#EE7700", marginTop: "-8px" }}
                        ></i>
                      </span>
                    </div>
                  </Col>
                  <Col className="col1-filter member-space p-2">
                    <div
                      className=" "
                      style={{
                        position: "relative",
                        borderBottom: "1px solid #EFEFEF",
                      }}
                    >
                      {lang === "mr"
                        ? data.marathi.section1.subTitleOne.three
                        : data.english.section1.subTitleOne.three}
                      <span style={{ marginLeft: "auto" }}>
                        <i
                          className="fa fa-chevron-right icon-calender"
                          style={{ color: "#EE7700", marginTop: "-8px" }}
                        ></i>
                      </span>
                    </div>
                  </Col>
                  <Col className="col1-filter member-space p-2">
                    <div className=" " style={{ position: "relative" }}>
                      {lang === "mr"
                        ? data.marathi.section1.subTitleTwo.two
                        : data.english.section1.subTitleTwo.two}
                      <span style={{ marginLeft: "auto" }}>
                        <i
                          className="fa fa-chevron-right icon-calender"
                          style={{ color: "#EE7700", marginTop: "-8px" }}
                        ></i>
                      </span>
                    </div>
                  </Col>
                  <Col
                    className="col1-head2 p-3"
                    style={{ backgroundColor: "#EE7700", color: "white" }}
                  >
                    {lang === "mr"
                      ? data.marathi.section1.title.two
                      : data.english.section1.title.two}
                  </Col>
                  <Col className="col1-filter member-space p-2">
                    <div
                      className=" "
                      style={{
                        position: "relative",
                        borderBottom: "1px solid #EFEFEF",
                      }}
                    >
                      {lang === "mr"
                        ? data.marathi.section1.subTitleOne.one
                        : data.english.section1.subTitleOne.one}
                      <span style={{ marginLeft: "auto" }}>
                        <i
                          className="fa fa-chevron-right icon-calender"
                          style={{ color: "#EE7700", marginTop: "-8px" }}
                        ></i>
                      </span>
                    </div>
                  </Col>
                  <Col className="col1-filter member-space p-2">
                    <div
                      className=" "
                      style={{
                        position: "relative",
                        borderBottom: "1px solid #EFEFEF",
                      }}
                    >
                      {lang === "mr"
                        ? data.marathi.section1.subTitleOne.two
                        : data.english.section1.subTitleOne.two}
                      <span style={{ marginLeft: "auto" }}>
                        <i
                          className="fa fa-chevron-right icon-calender"
                          style={{ color: "#EE7700", marginTop: "-8px" }}
                        ></i>
                      </span>
                    </div>
                  </Col>
                  <Col className="col1-filter member-space p-2">
                    <div
                      className=" "
                      style={{
                        position: "relative",
                        borderBottom: "1px solid #EFEFEF",
                      }}
                    >
                      {lang === "mr"
                        ? data.marathi.section1.subTitleOne.three
                        : data.english.section1.subTitleOne.three}
                      <span style={{ marginLeft: "auto" }}>
                        <i
                          className="fa fa-chevron-right icon-calender"
                          style={{ color: "#EE7700", marginTop: "-8px" }}
                        ></i>
                      </span>
                    </div>
                  </Col>
                  <Col className="col1-filter member-space p-2">
                    <div className=" " style={{ position: "relative" }}>
                      {lang === "mr"
                        ? data.marathi.section1.subTitleTwo.two
                        : data.english.section1.subTitleTwo.two}
                      <span style={{ marginLeft: "auto" }}>
                        <i
                          className="fa fa-chevron-right icon-calender"
                          style={{ color: "#EE7700", marginTop: "-8px" }}
                        ></i>
                      </span>
                    </div>
                  </Col>
                  <Col
                    className="col1-head2 p-3"
                    style={{ backgroundColor: "#EE00AB", color: "white" }}
                  >
                    {lang === "mr"
                      ? data.marathi.section1.title.three
                      : data.english.section1.title.three}
                  </Col>
                  <Col className="col1-filter member-space p-2">
                    <div
                      className=" "
                      style={{
                        position: "relative",
                        borderBottom: "1px solid #EFEFEF",
                      }}
                    >
                      {lang === "mr"
                        ? data.marathi.section1.subTitleOne.one
                        : data.english.section1.subTitleOne.one}
                      <span style={{ marginLeft: "auto" }}>
                        <i
                          className="fa fa-chevron-right icon-calender"
                          style={{ color: "#EE7700", marginTop: "-8px" }}
                        ></i>
                      </span>
                    </div>
                  </Col>
                  <Col className="col1-filter member-space p-2">
                    <div
                      className=" "
                      style={{
                        position: "relative",
                        borderBottom: "1px solid #EFEFEF",
                      }}
                    >
                      {lang === "mr"
                        ? data.marathi.section1.subTitleOne.two
                        : data.english.section1.subTitleOne.two}
                      <span style={{ marginLeft: "auto" }}>
                        <i
                          className="fa fa-chevron-right icon-calender"
                          style={{ color: "#EE7700", marginTop: "-8px" }}
                        ></i>
                      </span>
                    </div>
                  </Col>
                  <Col className="col1-filter member-space p-2">
                    <div
                      className=" "
                      style={{
                        position: "relative",
                        borderBottom: "1px solid #EFEFEF",
                      }}
                    >
                      {lang === "mr"
                        ? data.marathi.section1.subTitleOne.three
                        : data.english.section1.subTitleOne.three}
                      <span style={{ marginLeft: "auto" }}>
                        <i
                          className="fa fa-chevron-right icon-calender"
                          style={{ color: "#EE7700", marginTop: "-8px" }}
                        ></i>
                      </span>
                    </div>
                  </Col>
                  <Col className="col1-filter member-space p-2">
                    <div className=" " style={{ position: "relative" }}>
                      {lang === "mr"
                        ? data.marathi.section1.subTitleTwo.two
                        : data.english.section1.subTitleTwo.two}
                      <span style={{ marginLeft: "auto" }}>
                        <i
                          className="fa fa-chevron-right icon-calender"
                          style={{ color: "#EE7700", marginTop: "-8px" }}
                        ></i>
                      </span>
                    </div>
                  </Col>
                </Col>
                <Col lg={6} md={6} sm={12} xs={12} className="col2-member m-3">
                  <table className="table-box-col2">
                    <thead className="table-col2 text-center">
                      <tr className="table-head ">
                        <th className="table-head" style={{ width: "1%" }}>
                          {lang === "mr"
                            ? data.marathi.tableSec.col1
                            : data.english.tableSec.col1}
                        </th>
                        <th className="table-head" style={{ width: "35%" }}>
                          {lang === "mr"
                            ? data.marathi.tableSec.col2
                            : data.english.tableSec.col2}
                        </th>
                        <th className="table-head">
                          {lang === "mr"
                            ? data.marathi.tableSec.col3
                            : data.english.tableSec.col3}
                        </th>
                        <th className="table-head" style={{ width: "30%" }}>
                          {lang === "mr"
                            ? data.marathi.tableSec.col4
                            : data.english.tableSec.col4}
                        </th>
                        <th className="table-head" style={{ width: "15%" }}>
                          {lang === "mr"
                            ? data.marathi.tableSec.col5
                            : data.english.tableSec.col5}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {server && server.length > 0 ? (
                        <>
                          {server
                            .filter((item) =>
                              item.basic_info.house === "Assembly"
                                ? true
                                : false
                            )
                            .map((item, index) => (
                              <tr key={index}>
                                <td className="text-center p-2">{index + 1}</td>
                                <td className=" p-2">
                                  <Row>
                                    <Col lg={3} md={12} sm={12} xs={12}>
                                      <Link
                                        to={`/MemberDetailsEng?id=${item._id}`}
                                      >
                                        <img
                                          src={
                                            API.baseUrl +
                                            item.basic_info.profile
                                              .destination +
                                            "/" +
                                            item.basic_info.profile.filename
                                          }
                                          className="image"
                                          alt="Member"
                                        />
                                      </Link>
                                    </Col>
                                    <Col
                                      lg={8}
                                      md={12}
                                      sm={12}
                                      xs={12}
                                      className=" mt-2 name-row "
                                    >
                                      <Link
                                        to={`/MemberDetailsEng?id=${item._id}`}
                                        style={{
                                          textDecoration: "none",
                                          color: "black",
                                        }}
                                      >
                                        {item.basic_info.name +
                                          " " +
                                          item.basic_info.surname}
                                      </Link>
                                    </Col>
                                  </Row>
                                </td>
                                <td className=" text-center p-2">
                                  {item.basic_info.constituency}
                                </td>
                                <td className="text-center p-3">
                                  {item.basic_info.party}
                                </td>
                                <td className="text-center p-3">
                                  {item.basic_info.gender}
                                </td>
                              </tr>
                            ))}
                        </>
                      ) : (
                        <></>
                      )}
                    </tbody>
                  </table>
                </Col>
                <Col lg={2} md={2} sm={12} xs={12} className="col3-member m-3 ">
                  <Col
                    className="col1-head p-3 text-center"
                    style={{ backgroundColor: "#EE7700", color: "white" }}
                  >
                    {lang === "mr"
                      ? data.marathi.section2.title.top
                      : data.english.section2.title.top}
                  </Col>
                  <Col className="mt-4 text-center justify-content-center">
                    <Col>
                      <div style={{ fontWeight: "bold" }}>
                        {lang === "mr"
                          ? data.marathi.section2.title.one
                          : data.english.section2.title.one}
                      </div>
                      <img
                        src={ageSection}
                        alt="img"
                        className="mt-3 pb-4"
                        style={{ width: "65%" }}
                      />
                      <img
                        src={chart}
                        alt="img"
                        className="mt-3 pb-4"
                        style={{ width: "65%" }}
                      />
                    </Col>
                  </Col>
                  <Col className="mt-4  text-center">
                    <Col>
                      <div style={{ fontWeight: "bold" }}>
                        {lang === "mr"
                          ? data.marathi.section2.title.two
                          : data.english.section2.title.two}
                      </div>
                      <img
                        src={womensection}
                        alt="img"
                        className="mt-3 pb-4"
                        style={{ width: "65%" }}
                      />
                      <img
                        src={womenChart}
                        alt="img"
                        className="mt-3 pb-4"
                        style={{ width: "65%" }}
                      />
                    </Col>
                  </Col>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </>
  );
};
export default AssemblyMemberEng;
