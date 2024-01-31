const Debate = ({
  Container,
  Link,
  Row,
  Col,
  Form,
  Button,
  constantData,
  checkLang,
  setSearch,
  searchFetchData,
  years,
  isClicked,
  buttonClick,
  debate,
}) => {
  return (
    <section className=" justify-content-center section-top-space ">
      <Container fluid>
        <ul className="breadcrumb">
          <li>
            <Link to="/">{constantData[checkLang].link1}</Link>
          </li>
          <li> {constantData[checkLang].link2}</li>
          <li> {constantData[checkLang].link3}</li>
        </ul>

        <div className="about-head text-center">
          <div
            id="about-text"
            style={{
              display: "inline-block",
              position: "relative",
            }}
          >
            {constantData[checkLang].title}
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

        <div
          className="container mb-4 mt-4 text-center "
          style={{ backgroundColor: "white" }}
        >
          <Row style={{ justifyContent: "center" }}>
            <div className="col-lg-6">
              <div className="search-boss">
                <div className="search-input">
                  <input
                    type="search"
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder={constantData[checkLang].search}
                    style={{ fontSize: "15px" }}
                  />
                </div>
                <span className="search-btn">
                  <button
                    style={{ right: "0", padding: "4px 0px" }}
                    onClick={searchFetchData}
                  >
                    <i className="fa fa-search" name="search-sharp"></i>
                  </button>
                </span>
              </div>
            </div>
          </Row>
        </div>

        <Container>
          <div className="council-field p-2  text-center ">
            <Row className="p-3">
              <Row className="p-3 pb-2">
                <Col lg={4} md={4} sm={12} xs={12}>
                  <Form.Group
                    as={Row}
                    className="mb-1"
                    controlId="formPlaintextEmail"
                  >
                    <Form.Label column sm="4" className="labels_debate">
                      {constantData[checkLang].fields.field10}
                    </Form.Label>
                    <Col sm="7">
                      <Form.Select aria-label="Default select example">
                        <option>
                          {constantData[checkLang].placeholder.field10}
                        </option>
                        <option value="1" selected>
                          {constantData[checkLang].titleselect}
                        </option>
                      </Form.Select>
                    </Col>
                  </Form.Group>
                </Col>
                <Col lg={4} md={4} sm={12} xs={12}>
                  <Form.Group
                    as={Row}
                    className="mb-1"
                    controlId="formPlaintextYear"
                  >
                    <Form.Label column sm="4" className="labels_debate">
                      {constantData[checkLang].fields.field2}
                    </Form.Label>
                    <Col sm="7">
                      <Form.Select
                        as="select"
                        name="selectedYear"
                        aria-label="Select a year"
                        aria-describedby="basic-addon1"
                        defaultValue=""
                      >
                        <option value="" disabled>
                          {constantData[checkLang].placeholder.field2}
                        </option>
                        {years.map((year) => (
                          <option key={year} value={year}>
                            {year}
                          </option>
                        ))}
                      </Form.Select>
                    </Col>
                  </Form.Group>
                </Col>
                <Col lg={4} md={4} sm={12} xs={12}>
                  <Form.Group
                    as={Row}
                    className="mb-1"
                    controlId="formPlaintextEmail"
                  >
                    <Form.Label column sm="4" className="labels_debate">
                      {constantData[checkLang].fields.field1}
                    </Form.Label>
                    <Col sm="7">
                      <Form.Select aria-label="Default select example">
                        <option>
                          {constantData[checkLang].placeholder.field2}
                        </option>
                        <option value="1" selected>
                          {constantData[checkLang].titleselect1}
                        </option>
                      </Form.Select>
                    </Col>
                  </Form.Group>
                </Col>
              </Row>
              <Row className={`p-3 pb-2 ${isClicked ? "d-none" : ""}`}>
                <Col lg={4} md={4} sm={12} xs={12}>
                  <Form.Group
                    as={Row}
                    className="mb-1"
                    controlId="formPlaintextEmail"
                  >
                    <Form.Label column sm="4" className="labels_debate">
                      {constantData[checkLang].fields.field1}
                    </Form.Label>
                    <Col sm="7">
                      <Form.Select aria-label="Default select example">
                        <option>
                          {constantData[checkLang].placeholder.field1}
                        </option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </Form.Select>
                    </Col>
                  </Form.Group>
                </Col>
                <Col lg={4} md={4} sm={12} xs={12}>
                  <Form.Group
                    as={Row}
                    className="mb-1"
                    controlId="formPlaintextEmail"
                  >
                    <Form.Label column sm="4" className="labels_debate">
                      {constantData[checkLang].fields.field5}
                    </Form.Label>
                    <Col sm="7">
                      <Form.Control
                        type="text"
                        name="full_name"
                        placeholder={constantData[checkLang].placeholder.field5}
                        aria-label="Enter your full name"
                        aria-describedby="basic-addon1"
                      />
                    </Col>
                  </Form.Group>
                </Col>
                <Col lg={4} md={4} sm={12} xs={12}>
                  <Form.Group
                    as={Row}
                    className="mb-1"
                    controlId="formPlaintextEmail"
                  >
                    <Form.Label column sm="4" className="labels_debate">
                      {constantData[checkLang].fields.field6}
                    </Form.Label>
                    <Col sm="7">
                      <Form.Control
                        type="text"
                        name="full_name"
                        placeholder={constantData[checkLang].placeholder.field6}
                        aria-label="Enter your full name"
                        aria-describedby="basic-addon1"
                      />
                    </Col>
                  </Form.Group>
                </Col>
              </Row>
              <Row className={`p-3 ${isClicked ? "d-none" : ""}`}>
                <Col lg={4} md={4} sm={12} xs={12}>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formPlaintextEmail"
                  >
                    <Form.Label column sm="4" className="labels_debate">
                      {constantData[checkLang].fields.field7}
                    </Form.Label>
                    <Col sm="7">
                      <Form.Select aria-label="Default select example">
                        <option>
                          {constantData[checkLang].placeholder.field7}
                        </option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </Form.Select>
                    </Col>
                  </Form.Group>
                </Col>
                <Col lg={4} md={4} sm={12} xs={12}>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formPlaintextEmail"
                  >
                    <Form.Label column sm="4" className="labels_debate">
                      {constantData[checkLang].fields.field8}
                    </Form.Label>
                    <Col sm="7">
                      <Form.Select aria-label="Default select example">
                        <option>
                          {constantData[checkLang].placeholder.field2}
                        </option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </Form.Select>
                    </Col>
                  </Form.Group>
                </Col>
                <Col lg={4} md={4} sm={12} xs={12}>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formPlaintextEmail"
                  >
                    <Form.Label column sm="4" className="labels_debate">
                      {constantData[checkLang].fields.field9}
                    </Form.Label>
                    <Col sm="7">
                      <Form.Select aria-label="Default select example">
                        <option>
                          {constantData[checkLang].placeholder.field9}
                        </option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </Form.Select>
                    </Col>
                  </Form.Group>
                </Col>
              </Row>
            </Row>
            <div
              className={`button_less justify-content-center p-3 ${
                isClicked ? "d-none" : ""
              }`}
            >
              <Button
                style={{
                  width: "100px",
                  backgroundColor: "#000088",
                  color: "white",
                }}
                className="mt-2 mb-4 text-center"
                id="applybutton"
              >
                {constantData[checkLang].button1}
              </Button>
            </div>
          </div>
          <div className="button_less justify-content-center mt-0">
            <button
              className="optionButton text-center mb-4"
              id="optionButton"
              onClick={buttonClick}
            >
              <span>
                {isClicked ? (
                  <i className="fa fa-arrow-down"></i>
                ) : (
                  <i className="fa fa-arrow-up"></i>
                )}
              </span>
            </button>
          </div>
        </Container>

        <section className="container ">
          <table className="table-box-col3 ">
            <thead
              className="table-col2 text-center"
              style={{ backgroundColor: " #000088", color: "white" }}
            >
              <tr className="table-head " style={{ border: "1px solid white" }}>
                {Object.keys(constantData[checkLang].tableHead).map(
                  (item, index) => (
                    <th className="table-head size w-10" key={index}>
                      {constantData[checkLang].tableHead[item]}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {debate && debate.length > 0 ? (
                <>
                  {debate.map((item, index) => (
                    <tr key={index}>
                      {/* <td className=" p-2">{index + 1}</td> */}
                      {Object.keys(constantData[checkLang].tableBody).map(
                        (key, dex) => (
                          <td key={dex} className=" p-1">
                            {item[key] || "-"}
                          </td>
                        )
                      )}
                      <td className="p-2">
                        <div className=" " style={{ textAlign: "center" }}>
                          <Link
                            to={`/DebateDetails?id=${item._id}`}
                            style={{ marginLeft: "auto" }}
                          >
                            <i
                              className="fa fa-eye"
                              style={{ color: "black" }}
                            ></i>
                          </Link>
                        </div>
                      </td>
                      <td className="p-2">
                        <div className=" " style={{ textAlign: "center" }}>
                          <a
                            href={"http://103.112.121.109:8000/" + item.fileurl}
                            target="_blank"
                            download
                            rel="noreferrer"
                            style={{ marginLeft: "auto" }}
                          >
                            <i
                              className="fa fa-download"
                              style={{ color: "black" }}
                            ></i>
                          </a>
                        </div>
                      </td>
                    </tr>
                  ))}
                </>
              ) : (
                <></>
              )}
            </tbody>
          </table>
        </section>
      </Container>
    </section>
  );
};

export default Debate;
