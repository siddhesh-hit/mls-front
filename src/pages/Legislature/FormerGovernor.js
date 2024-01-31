import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import { API } from "../../config";
import { getApi } from "../../service/axiosInterceptors";
import useLang from "../../utils/useLang";

const FormerGovernor = () => {
  const [serverActive, setServerActive] = useState([]);
  const [serverCurrent, setServerCurrent] = useState([]);

  const data = {
    title: {
      marathi: " राज्यपालांची यादी  ",
      english: "List Of Governors",
    },
    Link1: {
      marathi: "मुख्यपृष्ठ",
      english: "Home",
    },
    Link2: {
      marathi: " विधिमंडळ",
      english: "Legislature",
    },
    Link3: {
      marathi: "राज्यपाल",
      english: "Governor",
    },
    Link4: {
      marathi: "माजी राज्यपाल",
      english: "Former  Governor",
    },
    marathi: {
      table1head: "मा. राज्यपालांचे अभिभाषण",
      head: {
        head1: "अनुक्रमांक",
        head2: "राज्यपालांचे नाव",
        head3: "वर्ष",
      },
    },
    english: {
      table1head: "Hons. Governor Address",
      head: {
        head1: "Serial No.",
        head2: "Name of the Governor",
        head3: "Year",
      },
    },
  };

  const fetchData = async () => {
    try {
      const activeRes = await getApi("/rajyapal/active");
      setServerActive(activeRes.data.data);

      const currentRes = await getApi("/rajyapal/current");
      setServerCurrent(currentRes.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  const { lang } = useLang();

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{ overflow: "hidden" }}>
      <section>
        <div className="container-fluid justify-content-center section-top-space">
          <ul className="breadcrumb">
            <li>
              <Link to="/">
                {lang === "mr" ? data.Link1.marathi : data.Link1.english}
              </Link>
            </li>
            <li> {lang === "mr" ? data.Link2.marathi : data.Link2.english}</li>
            <li>{lang === "mr" ? data.Link3.marathi : data.Link3.english}</li>
            <li> {lang === "mr" ? data.Link4.marathi : data.Link4.english}</li>
          </ul>
          <div
            className="about-head text-center"
            style={{
              color: "black",
            }}
          >
            {lang === "mr" ? data.title.marathi : data.title.english}
            <hr
              className="button_less"
              style={{
                width: "15%",
                border: "none",
                height: "5px",
                background: "linear-gradient(to right, green, yellow)",
                opacity: "1",
                marginTop: "0",
              }}
            />
          </div>
          <Container className="p-3">
            <Row style={{ justifyContent: "space-between" }}>
              {/* <Col lg={8} md={8} sm={12} xs={12}> */}

              <Col lg={8} md={8} sm={12} xs={12}>
                <div>
                  <table className="table-box-Gover ">
                    <thead className="table-colGover ">
                      <tr className="table-head-Gover ">
                        <th
                          className="table-head-Gover p-2"
                          style={{ width: "12%" }}
                        >
                          {lang === "mr"
                            ? data.marathi.head.head1
                            : data.english.head.head1}
                        </th>
                        <th className="table-head-Gover p-2">
                          {lang === "mr"
                            ? data.marathi.head.head2
                            : data.english.head.head2}
                        </th>
                        <th
                          className="table-head-Gover p-2"
                          style={{ width: "15%" }}
                        >
                          {lang === "mr"
                            ? data.marathi.head.head3
                            : data.english.head.head3}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {serverActive.length > 0 &&
                        serverActive.map((item, index) => (
                          <tr key={index}>
                            <td className=" p-2">{index + 1}</td>
                            <td className=" p-2">
                              <Row>
                                <Col lg={3} md={3} sm={3} xs={3}>
                                  <Link to={`/OtherGovernor?id=${item._id}`}>
                                    <img
                                      style={{ width: "50%" }}
                                      src={`/OtherGovernor?id=${item.profile}`}
                                      className="image"
                                      alt="img"
                                    />
                                  </Link>
                                </Col>
                                <Col
                                  lg={8}
                                  md={8}
                                  sm={8}
                                  xs={8}
                                  className="p-0 mt-2"
                                >
                                  <Link
                                    to={`/OtherGovernor?id=${item._id}`}
                                    style={{
                                      textDecoration: "none",
                                      color: "black",
                                    }}
                                  >
                                    {
                                      item[
                                        lang === "mr" ? "marathi" : "english"
                                      ].name
                                    }
                                  </Link>
                                </Col>
                              </Row>
                            </td>
                            <td className=" p-2">row</td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </Col>

              {serverCurrent &&
                serverCurrent.marathi &&
                serverCurrent.english &&
                serverCurrent.speeches && (
                  <Col
                    lg={3}
                    md={12}
                    sm={12}
                    xs={12}
                    className="year-box1 mt-3"
                    style={{ height: "max-content" }}
                  >
                    <Col
                      className="col1-head p-2 text-center"
                      style={{ backgroundColor: "#CE5D3D", color: "white" }}
                    >
                      {lang === "mr"
                        ? data.marathi.table1head
                        : data.english.table1head}
                    </Col>

                    <Accordion
                      defaultActiveKey="0"
                      flush
                      style={{ border: "none" }}
                    >
                      {serverCurrent.speeches.map((item, index) => (
                        <Accordion.Item
                          eventKey={index}
                          key={index}
                          className="year-accordian-item"
                          style={{ borderBottom: "0" }}
                        >
                          <Accordion.Header className="year-accordian">
                            {item.year.split("-")[0]}
                          </Accordion.Header>
                          <Accordion.Body className="year-accordian-body">
                            <ul>
                              {item.values.map((i, n) => (
                                <li key={n} className="mb-1">
                                  <a
                                    href={
                                      API.baseUrl +
                                      i.content.destination +
                                      "/" +
                                      i.content.filename
                                    }
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-capitalize"
                                  >
                                    {i.language}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </Accordion.Body>
                        </Accordion.Item>
                      ))}
                    </Accordion>
                  </Col>
                )}
            </Row>
          </Container>
        </div>
      </section>
    </div>
  );
};

export default FormerGovernor;
