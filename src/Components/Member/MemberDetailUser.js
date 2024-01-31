const MemberDetailUser = ({
  Row,
  Col,
  API,
  current,
  activeTab,
  member,
  checkLang,
  debates,
}) => {
  return (
    <Row>
      <Col lg={4} md={4} sm={12} xs={12} className="image-member-col">
        <div className="sample-heading mt-2">
          <img
            src={API.baseUrl + current?.basic_info?.profile?.path}
            width="100%"
            alt="profile"
            className="profile-image heading"
          ></img>
        </div>
        <div className="align-name">
          <Col className="mt-4 ">
            <b style={{ fontSize: "16px" }}>
              {current &&
                current?.basic_info?.surname + " " + current?.basic_info?.name}
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
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </div>
              <div
                className="icon-container"
                style={{ backgroundColor: "red" }}
              >
                <i className="fa fa-youtube-play" aria-hidden="true"></i>
              </div>
              <div
                className="icon-container"
                style={{ backgroundColor: "rgb(6, 111, 160)" }}
              >
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </div>
            </Row>
          </Col>
        </div>
      </Col>
      <Col lg={8} md={8} sm={12} xs={12} className="align-block">
        <section
          id="profile-section"
          className={activeTab === "profile" ? "tab-content-active" : "d-none"}
        >
          <Row>
            <Col lg={11} md={11} sm={9} xs={9} className="mb-3 profile-block">
              {current?.basic_info &&
                Object.keys(member[checkLang].basic_info).map((item, index) => (
                  <Col key={index}>
                    <b>{member[checkLang]?.basic_info[item]}</b>
                    {` : `}
                    {current && current?.basic_info[item]}
                  </Col>
                ))}
            </Col>
          </Row>
        </section>
        <section
          id="political-section"
          className={
            activeTab === "politicalJ" ? "tab-content-active" : "d-none"
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
                      current.political_journey.map((item, index) => (
                        <li className="timeline-item" key={index}>
                          <div className="timeline-info"></div>
                          <div className="timeline-marker" />
                          <div className="timeline-content">
                            <h6 className="timeline-title">
                              {item.date
                                ? new Date(item.date).getFullYear()
                                : ""}
                            </h6>
                            <p>{item?.title}</p>
                          </div>
                        </li>
                      ))
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
          className={activeTab === "election" ? "tab-content-active" : "d-none"}
        >
          <div className="text-center mt-3" style={{ fontSize: "18px" }}>
            <div className="mb-0">
              <b>{member[checkLang].election.result}</b>
            </div>
            <div className="m-0 p-0" style={{ fontSize: "15px" }}>
              {current && current?.election_data?.total_electorate}
              {" -"}
              {current && current?.election_data?.constituency}
            </div>
          </div>
          <div>
            <Row>
              <Col className="text-center">
                <b>{member[checkLang].election.total1}</b>
                {` : `}
                {current && current?.election_data?.total_electorate}
              </Col>
              <Col className="text-center">
                <b>{member[checkLang].election.total2}</b>
                {` : `}
                {current && current?.election_data?.total_valid_voting}
              </Col>
            </Row>
          </div>

          <Row style={{ width: "100%" }} className="table-election p-3">
            <p className="mb-0 text-center">
              {member[checkLang].election.title}
            </p>
            <table className="table-elect">
              <thead className="table-col2 text-center">
                <tr className="table_elct_head text-center ">
                  <td
                    className="table-head1  text-center"
                    style={{ width: "10%" }}
                  >
                    {member[checkLang].election.sr}
                  </td>
                  <td
                    className="table-head1 w-40 text-center "
                    style={{ width: "40%" }}
                  >
                    {member[checkLang].election.name}
                  </td>
                  <td
                    className="table-head1 w-20 text-center"
                    style={{ width: "30%" }}
                  >
                    {member[checkLang].election.vote}
                  </td>
                  <td
                    className="table-head1 w-30 text-center"
                    style={{ width: "20%" }}
                  >
                    {member[checkLang].election.party}
                  </td>
                </tr>
              </thead>
              <tbody>
                {current?.election_data?.member_election_result.length > 0 ? (
                  current.election_data.member_election_result.map(
                    (item, index) => (
                      <tr style={{ backgroundColor: "#E1E1EE" }} key={index}>
                        <td className="text-center ">{index + 1}</td>
                        <td className=" ">{item?.candidate_name}</td>
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
          className={activeTab === "debate" ? "tab-content-active" : "d-none"}
        >
          <Row style={{ margin: "0" }}>
            <Col lg={12} md={11} sm={12} xs={12} className="mt-4 ">
              <div className="table-responsive">
                <table className=" table-box-col3 ">
                  <thead className="table-col2 text-center">
                    <tr className="table-head ">
                      {Object.keys(member[checkLang].debate).map(
                        (item, index) => (
                          <td className="table-head  text-center" key={index}>
                            {member[checkLang].debate[item]}
                          </td>
                        )
                      )}
                    </tr>
                  </thead>
                  <tbody style={{ fontSize: "12px" }}>
                    {debates && debates?.data && debates?.data.length > 0 ? (
                      <>
                        {debates.data.map((item, index) => (
                          <tr className="text-center " key={index}>
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
                                  "http://103.112.121.109:8000/" + item.fileurl
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
            </Col>
          </Row>
        </section>
      </Col>
    </Row>
  );
};

export default MemberDetailUser;
