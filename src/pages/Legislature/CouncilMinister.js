// import React from "react";
// import { useEffect, useState } from "react";
// import { Col, Container, Row, Carousel } from "react-bootstrap";
// import { Link, useLocation } from "react-router-dom";
// import { Button } from "react-bootstrap";
// import Header from "../../Components/Common/Header";
// import Footer from "../../Components/Common/Footer";

// const CouncilMinister = () => {
//   const [lang, setLang] = useState("mr");
//   const [data, setData] = useState({
//     marathi: {},
//     english: {},
//     banner: {},
//   });

//   const location = useLocation();
//   const queryParams = new URLSearchParams(location.search);

//   const updateLocalStorage = (newLang) => {
//     localStorage.setItem("lang", newLang);
//   };
//   useEffect(() => {
//     const storedLang = localStorage.getItem("lang");
//     const newLang = queryParams.get("lang") || storedLang || "mr";
//     setLang(newLang);
//     updateLocalStorage(newLang);
//   }, [location.search]);

//   console.log(data);

//   return (
//     <>
//       <div>
//         <Header />
//         <div style={{ paddingTop: "15%" }}>
//           <ul className="breadcrumb">
//             <li>
//               <Link to="/">HomePage</Link>
//             </li>
//             <li> Council Minister</li>
//           </ul>
//           <section>
//             <Container>
//               <div className="about-head text-center">
//                 HEAD
//                 <hr
//                   className="button_less"
//                   style={{
//                     width: "15%",
//                     border: "none",
//                     height: "5px",
//                     background: "linear-gradient(to right, green, yellow)",
//                     opacity: "1",
//                     marginTop: "0",
//                   }}
//                 />
//               </div>
//               <div>
//                 <Row>
//                   <Col
//                     lg={4}
//                     md={4}
//                     sm={12}
//                     xs={12}
//                     className="mb-3"
//                     style={{ margin: 0, padding: "25px" }}
//                   >
//                     <div className="img-boxing ">
//                       <img
//                         alt="img"
//                         // src={}
//                         style={{ width: "100%" }}
//                       />
//                       <hr style={{ borderTop: "0" }} />
//                       <div className="box-bottom text-center">
//                         <div className="nameHead">HEad</div>
//                         <div className="name-info">subhead</div>
//                       </div>
//                     </div>
//                   </Col>
//                   <Col
//                     lg={4}
//                     md={4}
//                     sm={12}
//                     xs={12}
//                     className="mb-3"
//                     style={{ margin: 0, padding: "25px" }}
//                   >
//                     <div className="img-boxing ">
//                       <img
//                         alt="img"
//                         // src={}
//                         style={{ width: "100%" }}
//                       />
//                       <hr style={{ borderTop: "0" }} />
//                       <div className="box-bottom text-center">
//                         <div className="nameHead">HEad</div>
//                         <div className="name-info">subhead</div>
//                       </div>
//                     </div>
//                   </Col>
//                   <Col
//                     lg={4}
//                     md={4}
//                     sm={12}
//                     xs={12}
//                     className="mb-3"
//                     style={{ margin: 0, padding: "25px" }}
//                   >
//                     <div className="img-boxing ">
//                       <img
//                         alt="img"
//                         // src={}
//                         style={{ width: "100%" }}
//                       />
//                       <hr style={{ borderTop: "0" }} />
//                       <div className="box-bottom text-center">
//                         <div className="nameHead">HEad</div>
//                         <div className="name-info">subhead</div>
//                       </div>
//                     </div>
//                   </Col>
//                 </Row>
//               </div>
//               <div>
//                 <div className="about-head text-center">
//                   HEADLan
//                   <hr
//                     className="button_less"
//                     style={{
//                       width: "15%",
//                       border: "none",
//                       height: "px",
//                       background: "grey",
//                       opacity: "1",
//                       marginTop: "0",
//                     }}
//                   />
//                 </div>
//                 <table className="table-box-col3 w-100">
//
//                   <thead
//                     className="table-box-col2  text-center"
//                     style={{ background: "#CE5D3D" }}
//                   >
//                     <tr className="text-center ">
//                       <td
//                         className="table-head1  text-center"
//                         style={{ width: "10%", background: "#CE5D3D" }}
//                       >
//
//                         one
//                       </td>
//                       <td
//                         className="table-head1 w-40 text-center "
//                         style={{ width: "30%", background: "#CE5D3D" }}
//                       >
//                         two
//                       </td>
//                       <td
//                         className="table-head1 w-20 text-center"
//                         style={{ width: "30%", background: "#CE5D3D" }}
//                       >
//                         three
//                       </td>
//                       <td
//                         className="table-head1 w-30 text-center"
//                         style={{ width: "15%", background: "#CE5D3D" }}
//                       >
//                         four
//                       </td>
//                       <td
//                         className="table-head1 w-30 text-center"
//                         style={{ width: "15%", background: "#CE5D3D" }}
//                       >
//                         four
//                       </td>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     <tr>
//                       <td>1</td>
//                       <td>1</td>
//                       <td>1</td>
//                       <td>1</td>
//                       <td>1</td>
//                     </tr>
//                   </tbody>
//                 </table>
//               </div>
//             </Container>
//           </section>
//         </div>
//         <Footer />
//       </div>
//     </>
//   );
// };

// export default CouncilMinister;
