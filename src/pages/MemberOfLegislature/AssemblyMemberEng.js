import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import ageSection from "../../assets/about/Group 18.jpg";
import chart from "../../assets/about/Group 19.jpg";
import womensection from "../../assets/about/Group 11.jpg";
import womenChart from "../../assets/about/Group 20.jpg";
import LoaderComponents from "../loader";

import { getApi } from "../../service/axiosInterceptors";
import { API } from "../../config";
import { assemblyMember } from "../../constant";

import useLang from "../../utils/useLang";

const AssemblyMemberEng = () => {
  const [server, setServer] = useState([]);
  const [loading, setLoading] = useState(true);

  const { lang, checkLang } = useLang();

  useEffect(() => {
    const fetchData = async () => {
      await getApi("member/house?id=Assembly")
        .then((res) => setServer(res.data.data))
        .catch((err) => console.log(err));
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <LoaderComponents />;
  }

  return (
    <>
      <section>
        <Container fluid>
          <div className="container-fluid justify-content-center section-top-space">
            <ul className="breadcrumb">
              <li>
                <Link to="/">{assemblyMember[checkLang].link1}</Link>
              </li>
              <li>{assemblyMember[checkLang].link2}</li>
              <li> {assemblyMember[checkLang].link2}</li>
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
                {assemblyMember[checkLang].title}
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
                        placeholder={assemblyMember[checkLang].search}
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
            <Container fluid>
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
                    {assemblyMember[checkLang].heading.one}
                  </Col>
                  {assemblyMember[checkLang].subHeading.map((item, index) => (
                    <Col className="col1-filter member-space p-2" key={index}>
                      <div
                        className=" "
                        style={{
                          position: "relative",
                          borderBottom: "1px solid #EFEFEF",
                        }}
                      >
                        {item}
                        <span style={{ marginLeft: "auto" }}>
                          <i
                            className="fa fa-chevron-right icon-calender"
                            style={{ color: "#EE7700", marginTop: "-8px" }}
                          ></i>
                        </span>
                      </div>
                    </Col>
                  ))}
                  <Col
                    className="col1-head2 p-3"
                    style={{ backgroundColor: "#EE7700", color: "white" }}
                  >
                    {assemblyMember[checkLang].heading.two}
                  </Col>
                  {assemblyMember[checkLang].subHeading.map((item, index) => (
                    <Col className="col1-filter member-space p-2" key={index}>
                      <div
                        className=" "
                        style={{
                          position: "relative",
                          borderBottom: "1px solid #EFEFEF",
                        }}
                      >
                        {item}
                        <span style={{ marginLeft: "auto" }}>
                          <i
                            className="fa fa-chevron-right icon-calender"
                            style={{ color: "#EE7700", marginTop: "-8px" }}
                          ></i>
                        </span>
                      </div>
                    </Col>
                  ))}
                  <Col
                    className="col1-head2 p-3"
                    style={{ backgroundColor: "#EE00AB", color: "white" }}
                  >
                    {assemblyMember[checkLang].heading.three}
                  </Col>
                  {assemblyMember[checkLang].subHeading.map((item, index) => (
                    <Col className="col1-filter member-space p-2" key={index}>
                      <div
                        className=" "
                        style={{
                          position: "relative",
                          borderBottom: "1px solid #EFEFEF",
                        }}
                      >
                        {item}
                        <span style={{ marginLeft: "auto" }}>
                          <i
                            className="fa fa-chevron-right icon-calender"
                            style={{ color: "#EE7700", marginTop: "-8px" }}
                          ></i>
                        </span>
                      </div>
                    </Col>
                  ))}
                </Col>
                <Col lg={6} md={6} sm={12} xs={12} className="col2-member m-3">
                  <table className="table-box-col2">
                    <thead className="table-col2 text-center">
                      <tr className="table-head">
                        {assemblyMember[checkLang].table.map((item, index) => (
                          <th className="table-head text-center" key={index}>
                            {item}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {server?.length > 0 ? (
                        <>
                          {server.map((item, index) => (
                            <tr key={index}>
                              <td className="text-center p-2">{index + 1}</td>
                              <td className=" p-2">
                                <Link
                                  to={`/MemberDetailsEng?id=${item._id}`}
                                  className="d-flex justify-content-start align-items-center gap-3"
                                >
                                  <img
                                    src={
                                      API.baseUrl +
                                      item.basic_info.profile.destination +
                                      "/" +
                                      item.basic_info.profile.filename
                                    }
                                    className="imageMem"
                                    alt="Member"
                                  />
                                  {item.basic_info.name +
                                    " " +
                                    item.basic_info.surname}
                                </Link>
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
                    {assemblyMember[checkLang].structure.one}
                  </Col>
                  <Col className="mt-4 text-center justify-content-center">
                    <Col>
                      <div style={{ fontWeight: "bold" }}>
                        {assemblyMember[checkLang].structure.two}
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
                        {assemblyMember[checkLang].structure.three}
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
            </Container>
          </div>
        </Container>
      </section>
    </>
  );
};
export default AssemblyMemberEng;
