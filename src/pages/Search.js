import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { getApi } from "../service/axiosInterceptors";
import { Link, useLocation } from "react-router-dom";
import LoaderComponents from "../pages/loader";

const Search = () => {
  const [search, setSearch] = useState(null);
  const [memberData, setMemberData] = useState([]);
  const [debateData, setDebateData] = useState([]);
  const [loader, setLoader] = useState(null);

  const location = useLocation();

  const fetchData = async (id) => {
    setLoader(true);

    await getApi(`member/search?id=${id}`)
      .then((res) => setMemberData(res.data.data))
      .catch((err) => console.log(err));

    await getApi(`debate/search?id=${id}`)
      .then((res) => setDebateData(res.data))
      .catch((err) => console.log(err));

    setLoader(false);
  };

  useEffect(() => {
    const decodedSearch = decodeURIComponent(location.search);
    const params = new URLSearchParams(decodedSearch);
    const id = params.get("id");

    setSearch(id);
  }, [location]);

  useEffect(() => {
    if (search) {
      fetchData(search);
    }
  }, [search]);

  if (loader) {
    return <LoaderComponents />;
  }

  return (
    <div>
      <section className="searchdetails">
        <h3>
          <span>Search Details</span> : {search}
        </h3>
        <Container>
          <div className="row sub_cat">
            <div className="col-lg-12 table-responsive">
              <table className="table table-bordered mytable">
                <thead>
                  <tr>
                    <th
                      style={{
                        paddingBottom: "15px",
                        color: "#CC7722",
                        fontSize: "20px",
                        fontWeight: "600",
                        letterSpacing: "0em",
                        textAlign: "center",
                        paddingTop: "15px",
                      }}
                    >
                      ALL SEARCH DATA - {debateData.count}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {memberData && memberData.length > 0 ? (
                    <>
                      {memberData.map((item, index) => (
                        <tr key={index}>
                          <td>
                            <div className="post_demo_list">
                              <div className="demo_list_main">
                                <div className="demo_list">
                                  <h4>
                                    <Link
                                      to={`/MemberDetailsEng?id=${item._id}`}
                                      target="_blank"
                                    >
                                      {item.basic_info.name +
                                        item.basic_info.surname}
                                    </Link>
                                  </h4>
                                </div>
                                <span className="demo_list_inner">
                                  <Link
                                    to={`/MemberDetailsEng?id=${item._id}`}
                                    target="_blank"
                                  >
                                    Member Details
                                  </Link>
                                </span>
                              </div>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </>
                  ) : (
                    <></>
                  )}
                  {debateData.data && debateData.data.length > 0 ? (
                    <>
                      {debateData.data.map((item, index) => (
                        <tr key={index}>
                          <td>
                            <div className="post_demo_list">
                              <div className="demo_list_main">
                                <div className="demo_list">
                                  <h4>
                                    <Link
                                      to={`/DebateDetails?id=${item._id}`}
                                      target="_blank"
                                    >
                                      {item.topic}
                                    </Link>
                                  </h4>
                                </div>
                                <span className="demo_list_inner">
                                  <Link
                                    to={`/DebateDetails?id=${item._id}`}
                                    target="_blank"
                                  >
                                    Debate Details
                                  </Link>
                                </span>
                              </div>
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
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Search;
