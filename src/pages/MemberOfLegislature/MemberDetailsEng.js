import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useLocation, useNavigate, Link } from "react-router-dom";

import Slider from "../../Components/Common/Slider";
import useLang from "../../utils/useLang";

import { getApi, getApiById } from "../../service/axiosInterceptors";
import { API } from "../../config";
import { slider, member } from "../../constant";
import SearchMember from "../../Components/Member/SearchMember";
import MemberDetailUser from "../../Components/Member/MemberDetailUser";

const MemberDetailEng = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const [current, setCurrent] = useState({});
  const [memberDebate, setMemberDebate] = useState([]);
  const [debates, setDebates] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const { lang, checkLang } = useLang();

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

    const data = memberDebate.filter((ele) => {
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
          setMemberDebate(res.data.data);
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
                <Link to="/">{member[checkLang].link1}</Link>
              </li>
              <li>{member[checkLang].link2}</li>
              <li>{member[checkLang].link3}</li>
            </ul>
            <Row>
              <SearchMember
                Col={Col}
                Row={Row}
                member={member}
                checkLang={checkLang}
                filtered={filtered}
                API={API}
                handleSearch={handleSearch}
                handleClick={handleClick}
              />

              <Col lg={9} md={9} sm={12} xs={12} className="order1">
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
                    {member[checkLang].title}
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
                          {member[checkLang].button1}
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
                          {member[checkLang].button2}
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
                          {member[checkLang].button3}
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
                          {member[checkLang].button4}
                        </div>
                      </Button>
                    </span>
                  </Col>

                  <MemberDetailUser
                    Row={Row}
                    Col={Col}
                    API={API}
                    current={current}
                    activeTab={activeTab}
                    member={member}
                    checkLang={checkLang}
                    debates={debates}
                  />
                </div>
              </Col>
            </Row>
            <Slider data={slider} field={"News"} keyId={1} />
            <Slider data={slider} field={"Media"} keyId={2} />
          </div>
        </Container>
      </section>
    </>
  );
};
export default MemberDetailEng;
