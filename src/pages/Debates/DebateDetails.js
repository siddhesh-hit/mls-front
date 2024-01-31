import React, { useEffect, useState } from "react";
import { Container, Row, Table } from "react-bootstrap";
import debatedet from "../../assets/debate_video.png";
import { Link, useLocation } from "react-router-dom";
import { getApiById } from "../../service/axiosInterceptors";
import LoaderComponents from "../../pages/loader";

const DebateDetails = () => {
  const [debate, setDebate] = useState([]);
  const [loader, setLoader] = useState(null);

  const location = useLocation();
  const id = location.search.split("=")[1];

  const fetchData = async () => {
    setLoader(true);
    await getApiById("debate", id)
      .then((res) => setDebate(res.data.data))
      .catch((err) => console.log(err));
    setLoader(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loader) {
    return <LoaderComponents />;
  }

  return (
    <div>
      <section className="homepageback111">
        <Container>
          <Link className="gobackss" to="/">
            <i className="fa fa-angle-left"></i>Back
          </Link>
          <Table bordered className="table-lightt">
            <thead>
              <tr>
                <th>विषय</th>
                <th>सभागृह</th>
                <th>अधिवेशन</th>
                <th>तारीख</th>
                <th>क्रमांक</th>
                <th>खंड</th>
                <th>PDF</th>
              </tr>
            </thead>
            <tbody>
              {debate ? (
                <tr>
                  <td>{debate.topic}</td>
                  <td>{debate.house}</td>
                  <td>{debate.session}</td>
                  <td>{debate.date}</td>
                  <td>{debate.kramank}</td>
                  <td>{debate.volume}</td>

                  <td>
                    <a
                      href={"http://103.112.121.109:8000/" + debate.fileurl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa fa-eye"></i>
                    </a>
                    {/* &nbsp;पहा */}
                  </td>
                </tr>
              ) : (
                <></>
              )}
            </tbody>
          </Table>
          <section className="debatelogo">
            <Row>
              <div className="col-lg-8">
                <Table bordered className="table-ligneww">
                  <thead className="thead-light"></thead>
                  {debate && (
                    <tbody>
                      <tr>
                        <td
                          style={{
                            backgroundColor: "#000088",
                            borderColor: "#000088",
                            color: "white",
                          }}
                        >
                          अध्यक्ष
                        </td>
                        <td style={{ textAlign: "left" }}>
                          <span>{debate.speaker}</span>
                        </td>
                      </tr>
                      {/* <tr>
                        <td
                          style={{
                            backgroundColor: "#000088",
                            borderColor: "#000088",
                            color: "white",
                          }}
                        >
                          विषय
                        </td>
                        <td style={{ textAlign: "left" }}>
                          <span>{debate.topic}</span>
                        </td>
                      </tr> */}
                      <tr>
                        <td
                          style={{
                            backgroundColor: "#000088",
                            borderColor: "#000088",
                            color: "white",
                          }}
                        >
                          सदस्य
                        </td>
                        <td style={{ textAlign: "left" }}>
                          <span>{debate.members_name}</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            backgroundColor: "#000088",
                            borderColor: "#000088",
                            color: "white",
                          }}
                        >
                          मंत्रालय
                        </td>
                        <td style={{ textAlign: "left" }}>
                          <span>-</span>
                        </td>
                      </tr>

                      {/* <tr>
                        <td
                          style={{
                            backgroundColor: "#000088",
                            borderColor: "#000088",
                            color: "white",
                          }}
                        >
                          पीठासीन अधिकारी
                        </td>
                        <td style={{ textAlign: "left" }}>
                          <span>
                            पुरके श्री. वसंत, बापट श्री. गिरीष, पाटील श्री.
                            हर्षवर्धन, खडसे पाटील श्री. एकनाथराव गणपतराव, 
                          </span>
                        </td>
                      </tr> */}
                      <tr>
                        <td
                          style={{
                            backgroundColor: "#000088",
                            borderColor: "#000088",
                            color: "white",
                          }}
                        >
                          पृष्ठ क्रमांक
                        </td>
                        <td style={{ textAlign: "left" }}>
                          <span>{debate.page_no}</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            backgroundColor: "#000088",
                            borderColor: "#000088",
                            color: "white",
                          }}
                        >
                          वादाचा प्रकार
                        </td>
                        <td style={{ textAlign: "left" }}>
                          <span>{debate.method}</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            backgroundColor: "#000088",
                            borderColor: "#000088",
                            color: "white",
                          }}
                        >
                          आयुधाचा प्रकार
                        </td>
                        <td style={{ textAlign: "left" }}>
                          <span>{debate.method_type}</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            backgroundColor: "#000088",
                            borderColor: "#000088",
                            color: "white",
                          }}
                        >
                          आयुधाचा उपप्रकार
                        </td>
                        <td style={{ textAlign: "left" }}>
                          <span>{debate.method_sub_type}</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            backgroundColor: "#000088",
                            borderColor: "#000088",
                            color: "white",
                          }}
                        >
                          प्रश्न क्रमांक
                        </td>
                        <td style={{ textAlign: "left" }}>
                          <span>{debate.question_no}</span>
                        </td>
                      </tr>
                    </tbody>
                  )}
                </Table>
              </div>
              <div className="col-lg-4">
                <img className="w-100" src={debatedet} />
                {/* <h3>वसई-विरार महानगरपालिकेतून ३५ गावे वगळण्याबाबत</h3> */}
              </div>
            </Row>
          </section>
        </Container>
      </section>
    </div>
  );
};

export default DebateDetails;
