import React, { useEffect, useState } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import LoaderComponents from "../../pages/loader";
import useLang from "../../utils/useLang";
import Debate from "../../Components/Debate/Debate";

import { getApi } from "../../service/axiosInterceptors";
import { combinedDebate } from "../../constant";

const CombinedDebates = () => {
  const [isClicked, setIsClicked] = useState(true);
  const [loader, setLoader] = useState(null);
  const [debate, setDebate] = useState([]);
  const [search, setSearch] = useState(null);

  const { lang, checkLang } = useLang();

  const years = Array.from(
    { length: 30 },
    (_, index) => new Date().getFullYear() - index
  );

  const buttonClick = () => {
    setIsClicked(!isClicked);
  };

  const searchFetchData = async () => {
    if (!(search.length > 0)) {
      return alert("Type something first");
    }
    setLoader(true);
    await getApi(`debate/search?id=${search}`)
      .then((res) => {
        setLoader(false);
        setDebate(res.data.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const fetchData = async () => {
      await getApi("debate?perPage=0&perLimit=10")
        .then((res) => setDebate(res.data.data))
        .catch((err) => console.log(err));
    };
    fetchData();
  }, []);

  if (loader) {
    return <LoaderComponents />;
  }

  return (
    <>
      <Debate
        Container={Container}
        Link={Link}
        Row={Row}
        Col={Col}
        Form={Form}
        Button={Button}
        constantData={combinedDebate}
        checkLang={checkLang}
        setSearch={setSearch}
        searchFetchData={searchFetchData}
        years={years}
        isClicked={isClicked}
        buttonClick={buttonClick}
        debate={debate}
      />
    </>
  );
};

export default CombinedDebates;
