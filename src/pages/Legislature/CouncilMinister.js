
import React from "react";
import { useEffect, useState } from "react";
import { Col, Row, Carousel, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import LoaderComponents from "../loader";
import partiwise1 from "../../assets/member/eknath-shinde.jpeg";
import partiwise2 from "../../assets/member/dfadanvis.png";
import partiwise3 from "../../assets/member/image 258.png";
import { getApi } from "../../service/axiosInterceptors";
import { Ministers } from "../../constant";

import useLang from "../../utils/useLang";


const Minister = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({
        marathi: {
            vidhanMandal: "",
        },
        english: {
            vidhanMandal: "",
        },
        banner: {},
    });

    const { checkLang } = useLang();



    // if (loading) {
    //     return <LoaderComponents />;
    // }

    return (
        <>
            <div className="background ">
                <section >
                    <div className="container-fluid justify-content-center section-top-space">
                        <ul className="breadcrumb">
                            <li>
                                <Link to="/">{Ministers[checkLang].link1}</Link>
                            </li>
                            <li>{Ministers[checkLang].link2}</li>
                            <li>{Ministers[checkLang].link3}</li>
                        </ul>

                        <div className=" container ">
                            <div className="box-shadow" style={{ background: "white" }}>
                                <div className="about-head text-center ">
                                    <div className="mt-3"
                                        id="about-text"
                                        style={{
                                            display: "inline-block",
                                            position: "relative",
                                        }}
                                    >
                                        {Ministers[checkLang].link3}
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
                                <div className="mt-4">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-3 text-center p-5">
                                            <div className="img-boxing ">
                                                <img
                                                    alt="img"
                                                    src={partiwise1}
                                                    style={{ width: "100%" }}
                                                />

                                                <div className="box-bottom text-center">
                                                    <div className="nameHead">
                                                        {Ministers[checkLang].member1H}
                                                    </div>
                                                    <div className="name-info">
                                                        {Ministers[checkLang].member1D}

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 text-center mt-5 p-5">
                                            <div className="img-boxing ">
                                                <img
                                                    alt="img"
                                                    src={partiwise2}
                                                    style={{ width: "100%" }}
                                                />

                                                <div className="box-bottom text-center">
                                                    <div className="nameHead">
                                                        {Ministers[checkLang].member2H}

                                                    </div>
                                                    <div className="name-info">
                                                        {Ministers[checkLang].member2D}

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 text-center p-5">
                                            <div className="img-boxing ">
                                                <img
                                                    alt="img"
                                                    src={partiwise3}
                                                    style={{ width: "100%" }}
                                                />

                                                <div className="box-bottom text-center">
                                                    <div className="nameHead">
                                                        {Ministers[checkLang].member3H}

                                                    </div>
                                                    <div className="name-info">
                                                        {Ministers[checkLang].member3D}

                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                            </div>
                            <div className="container-fluid mt-5">
                                <div className="about-head text-center ">
                                    <div
                                        id="about-text"
                                        style={{
                                            display: "inline-block",
                                            position: "relative",
                                        }}
                                    >
                                        {Ministers[checkLang].list}
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
                                <table
                                    className="table-box-col2 table-min mt-4 mb-5"
                                    style={{ border: "1px solid orange" }}
                                >
                                    <thead className="table-col2-min">
                                        <tr className="table-head">
                                            <th > {Ministers[checkLang].h1}</th>
                                            <th> {Ministers[checkLang].h2}</th>
                                            <th> {Ministers[checkLang].h3}</th>
                                            <th> {Ministers[checkLang].h4}</th>
                                            <th> {Ministers[checkLang].h5}</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr >
                                            <td className="text-center p-2"> 1.</td>
                                            <td className="w-30 p-2">
                                                <Link

                                                    className="d-flex justify-content-start align-items-center gap-3" style={{ textDecoration: "none" }}
                                                >
                                                    <img src={partiwise2}
                                                        className="imageMem"
                                                        alt="Member"
                                                    />
                                                    Mr.Narayan Tatu Rane
                                                </Link>
                                            </td>
                                            <td className="  text-center p-2">
                                                Industries, Sports,Environment and Selft-Employment
                                            </td>
                                            <td className="text-center p-3">
                                                Minister
                                            </td>
                                            <td className="text-center p-3">
                                                MAle
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>

                                <div className="about-head text-center ">
                                    <div
                                        id="about-text"
                                        style={{
                                            display: "inline-block",
                                            position: "relative",
                                        }}
                                    >
                                        {Ministers[checkLang].list2}
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
                                <table
                                    className="table-box-col2 table-min mt-4 mb-5"
                                    style={{ border: "1px solid orange" }}
                                >
                                    <thead className="table-col2-min">
                                        <tr className="table-head">
                                            <th > {Ministers[checkLang].h1}</th>
                                            <th> {Ministers[checkLang].h2}</th>
                                            <th> {Ministers[checkLang].h3}</th>
                                            <th> {Ministers[checkLang].h4}</th>
                                            <th> {Ministers[checkLang].h5}</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr >
                                            <td className="text-center p-2"> 1.</td>
                                            <td className="w-30 p-2">
                                                <Link

                                                    className="d-flex justify-content-start align-items-center gap-3" style={{ textDecoration: "none" }}
                                                >
                                                    <img src={partiwise2}
                                                        className="imageMem"
                                                        alt="Member"
                                                    />
                                                    Mr.Narayan Tatu Rane
                                                </Link>
                                            </td>
                                            <td className="  text-center p-2">
                                                Industries, Sports,Environment and Selft-Employment
                                            </td>
                                            <td className="text-center p-3">
                                                Minister
                                            </td>
                                            <td className="text-center p-3">
                                                MAle
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Minister;
