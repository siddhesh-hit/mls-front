const SearchMember = ({
  Col,
  Row,
  member,
  checkLang,
  filtered,
  API,
  handleSearch,
  handleClick,
}) => {
  return (
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
                placeholder={member[checkLang]?.placeholder}
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
                        src={API.baseUrl + item?.basic_info?.profile?.path}
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
                        {item.basic_info?.surname + " " + item.basic_info?.name}
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
        </div>
      </Col>
    </Col>
  );
};

export default SearchMember;
