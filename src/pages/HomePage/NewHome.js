import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import legmem from "../../../src/assets/homeicons/legismember.svg";
import debate from "../../../src/assets/homeicons/debate.svg";
import sessioncalender from "../../../src/assets/homeicons/session.svg";
import legis from "../../../src/assets/homeicons/legislation.svg";
import budget from "../../../src/assets/homeicons/budget.svg";
import election from "../../../src/assets/homeicons/election.svg";
import gazette from "../../../src/assets/homeicons/gazette.svg";
import gazettee from "../../../src/assets/homeicons/gazettee.svg";
import publication from "../../../src/assets/homeicons/publication.svg";
import media from "../../../src/assets/homeicons/media.svg";
import judgments from "../../../src/assets/homeicons/judgement.svg";

import imag1 from "../../../src/assets/homeicons/lib.svg";
import imag2 from "../../../src/assets/homeicons/lib1.svg";
import imag3 from "../../../src/assets/homeicons/lib2.svg";
import imag4 from "../../../src/assets/homeicons/lib3.svg";
import imag5 from "../../../src/assets/homeicons/lib4.svg";
import imag6 from "../../../src/assets/homeicons/lib5.svg";
import profilee from "../../../src/assets/homeicons/profilee.png";
import logo from "../../../src/assets/homeicons/logo.svg";
import { getApi } from "../../service/axiosInterceptors";
import { Link } from "react-router-dom";

const NewHome = () => {
  const [search, setSearch] = useState(null);
  const [memberData, setMemberData] = useState([]);
  const [debateData, setDebateData] = useState([]);

  console.log(search, "search");
  console.log(memberData, "search member");
  console.log(debateData, "search debate");

  useEffect(() => {
    const fetchData = async () => {
      await getApi(`member/search?id=${search}`)
        .then((res) => setMemberData(res.data.data))
        .catch((err) => console.log(err));

      await getApi(`debate/search?id=${search}`)
        .then((res) => setDebateData(res.data.data))
        .catch((err) => console.log(err));
    };

    fetchData();
  }, [search]);

  return (
    <div>
      <section className="homepageback">
        <h1>
          A Comprehensive Knowledge Repository - Your Portal to Explore
          Legislative Discourse, <br />
          Election Narratives, and Civic Empowerment. Search and Discover Now!"
        </h1>
        <Row className="form-controlss">
          <Col lg={6}>
            <input
              type="search"
              className="form-control"
              placeholder="Enter the search keywords"
              onChange={(e) => setSearch(e.target.value)}
            />
            <Link to={`/Search?id=${search}`} className="searchh">
              <i className="fa fa-search"></i>
            </Link>
          </Col>
        </Row>
        <Row className="maincontent">
          <Col lg={2}>
            <Col lg={12}>
              <a className="anchorlinks" href="#">
                <Row className="membersss11">
                  <Col lg={8}>
                    <h6>About Maharashtra Legislature</h6>
                  </Col>
                  <Col lg={4}>
                    <img src={logo} />
                  </Col>
                </Row>
              </a>
            </Col>
            <Col lg={12}>
              <a className="anchorlinks" href="#">
                <Row className="membersss11">
                  <Col lg={8}>
                    <h6>About Maharashtra Legislative Library</h6>
                  </Col>
                  <Col lg={4}>
                    <img src={logo} />
                  </Col>
                </Row>
              </a>
            </Col>
            <Col lg={12}>
              <a className="anchorlinks" href="#">
                <Row className="membersss11">
                  <Col lg={8}>
                    <h6>Photos and media Gallery</h6>
                  </Col>
                  <Col lg={4}>
                    <img src={logo} />
                  </Col>
                </Row>
              </a>
            </Col>
          </Col>
          <Col lg={7}>
            <Row>
              <Col lg={4}>
                <a href="#">
                  <Row className="boxes">
                    <Col lg={3}>
                      <img src={legmem} />
                    </Col>
                    <Col lg={9}>
                      <h6>Legislative Members</h6>
                      <p>Council | Assembly</p>
                    </Col>
                  </Row>
                </a>
              </Col>
              <Col lg={4}>
                <a href="#">
                  <Row className="boxes">
                    <Col lg={3}>
                      <img src={debate} />
                    </Col>
                    <Col lg={9}>
                      <h6>Debates</h6>
                      <p>House | Session | Year</p>
                    </Col>
                  </Row>
                </a>
              </Col>
              <Col lg={4}>
                <a href="#">
                  <Row className="boxes">
                    <Col lg={3}>
                      <img src={sessioncalender} />
                    </Col>
                    <Col lg={9}>
                      <h6>Session Calendar</h6>
                      <p>Council | Assembly</p>
                    </Col>
                  </Row>
                </a>
              </Col>
              <Col lg={4}>
                <a href="#">
                  <Row className="boxes">
                    <Col lg={3}>
                      <img src={legis} />
                    </Col>
                    <Col lg={9}>
                      <h6>Legislation</h6>
                      <p>Acts | Bills | Rules</p>
                    </Col>
                  </Row>
                </a>
              </Col>
              <Col lg={4}>
                <a href="#">
                  <Row className="boxes">
                    <Col lg={3}>
                      <img src={budget} />
                    </Col>
                    <Col lg={9}>
                      <h6>Budget</h6>
                      <p>Year | Department </p>
                    </Col>
                  </Row>
                </a>
              </Col>
              <Col lg={4}>
                <a href="#">
                  <Row className="boxes">
                    <Col lg={3}>
                      <img src={election} />
                    </Col>
                    <Col lg={9}>
                      <h6>Election results</h6>
                      <p>Council | Assembly</p>
                    </Col>
                  </Row>
                </a>
              </Col>
              <Col lg={4}>
                <a href="#">
                  <Row className="boxes">
                    <Col lg={3}>
                      <img src={gazette} />
                    </Col>
                    <Col lg={9}>
                      <h6>Gazette</h6>
                      <p>Part | Subject | Department</p>
                    </Col>
                  </Row>
                </a>
              </Col>
              <Col lg={4}>
                <a href="#">
                  <Row className="boxes">
                    <Col lg={3}>
                      <img src={publication} />
                    </Col>
                    <Col lg={9}>
                      <h6>Publication</h6>
                      <p>Scheme | Policy | Department</p>
                    </Col>
                  </Row>
                </a>
              </Col>
              <Col lg={4}>
                <a href="#">
                  <Row className="boxes">
                    <Col lg={3}>
                      <img src={media} />
                    </Col>
                    <Col lg={9}>
                      <h6>Media</h6>
                      <p>Video | Audio | Newspaper</p>
                    </Col>
                  </Row>
                </a>
              </Col>
              <Col lg={4}>
                <a href="#">
                  <Row className="boxes">
                    <Col lg={3}>
                      <img src={legmem} />
                    </Col>
                    <Col lg={9}>
                      <h6>Committees</h6>
                      <p>Type | Department | Name </p>
                    </Col>
                  </Row>
                </a>
              </Col>
              <Col lg={4}>
                <a href="#">
                  <Row className="boxes">
                    <Col lg={3}>
                      <img src={gazettee} />
                    </Col>
                    <Col lg={9}>
                      <h6>Gazetteers </h6>
                      <p>Place | Topic </p>
                    </Col>
                  </Row>
                </a>
              </Col>
              <Col lg={4}>
                <a href="#">
                  <Row className="boxes">
                    <Col lg={3}>
                      <img src={judgments} />
                    </Col>
                    <Col lg={9}>
                      <h6>Judgments</h6>
                      <p>Court | Subject</p>
                    </Col>
                  </Row>
                </a>
              </Col>
            </Row>
          </Col>
          <Col lg={2}>
            <Col lg={12}>
              <a className="anchorlinks" href="#">
                <Row className="membersss">
                  <Col lg={4}>
                    <img src={profilee} />
                  </Col>
                  <Col lg={8}>
                    <h6>Shri. Ramesh Bais</h6>
                    <p>Hon. Governor </p>
                  </Col>
                </Row>
              </a>
            </Col>
            <Col lg={12}>
              <a className="anchorlinks" href="#">
                <Row className="membersss">
                  <Col lg={4}>
                    <img src={profilee} />
                  </Col>
                  <Col lg={8}>
                    <h6>Shri. Ramesh Bais</h6>
                    <p>Hon. Governor </p>
                  </Col>
                </Row>
              </a>
            </Col>
            <Col lg={12}>
              <a className="anchorlinks" href="#">
                <Row className="membersss">
                  <Col lg={4}>
                    <img src={profilee} />
                  </Col>
                  <Col lg={8}>
                    <h6>Shri. Ramesh Bais</h6>
                    <p>Hon. Governor </p>
                  </Col>
                </Row>
              </a>
            </Col>
          </Col>
        </Row>
      </section>
      <section className="resourcesss">
        <Container>
          <h2>Explore digitalized resources in MLS libraries </h2>
          <Row>
            <Col lg={3}>
              <Row className="boxes1">
                <Col lg={4}>
                  <img src={imag1} />
                </Col>
                <Col lg={8}>
                  <h6>Debates</h6>
                  <p>405 million</p>
                </Col>
              </Row>
            </Col>
            <Col lg={3}>
              <Row className="boxes1">
                <Col lg={4}>
                  <img src={imag2} />
                </Col>
                <Col lg={8}>
                  <h6>Articles</h6>
                  <p>440 million</p>
                </Col>
              </Row>
            </Col>
            <Col lg={3}>
              <Row className="boxes1">
                <Col lg={4}>
                  <img src={imag3} />
                </Col>
                <Col lg={8}>
                  <h6>Bills & Acts</h6>
                  <p>25 million</p>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col lg={3}>
              <Row className="boxes1">
                <Col lg={4}>
                  <img src={imag4} />
                </Col>
                <Col lg={8}>
                  <h6>Media files</h6>
                  <p>10 million</p>
                </Col>
              </Row>
            </Col>
            <Col lg={3}>
              <Row className="boxes1">
                <Col lg={4}>
                  <img src={imag5} />
                </Col>
                <Col lg={8}>
                  <h6>Gazettes</h6>
                  <p>6 million</p>
                </Col>
              </Row>
            </Col>
            <Col lg={3}>
              <Row className="boxes1">
                <Col lg={4}>
                  <img src={imag6} />
                </Col>
                <Col lg={8}>
                  <h6>Other Reports</h6>
                  <p>30 million</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default NewHome;
