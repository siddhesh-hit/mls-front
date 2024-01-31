import React, { useEffect, useState } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import LoaderComponents from "../../pages/loader";
import useLang from "../../utils/useLang";
import Debate from "../../Components/Debate/Debate";

import { getApi } from "../../service/axiosInterceptors";
import { councilDebate } from "../../constant";

const CouncilDebates = () => {
  const [isClicked, setIsClicked] = useState(true);
  const [debate, setDebate] = useState([]);
  const [search, setSearch] = useState(null);
  const [loader, setLoader] = useState(null);

  const { lang, checkLang } = useLang();

  const years = Array.from(
    { length: 30 },
    (_, index) => new Date().getFullYear() - index
  );

  const buttonClick = () => {
    setIsClicked(!isClicked);
  };

  const searchFetchData = async () => {
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
      await getApi(`debate/houses?perPage=0&perLimit=10&id=विधानपरिषद`)
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
        constantData={councilDebate}
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

export default CouncilDebates;
