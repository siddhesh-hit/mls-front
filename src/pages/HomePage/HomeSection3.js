// import React from "react";
// import homevidhan from "../../assets/_MG_5418 1.jpg";
// import { useEffect, useState } from "react";
// import { Col, Container, Row, Carousel } from "react-bootstrap";
// import { Link, useLocation } from "react-router-dom";
// import { Button } from "react-bootstrap";
// import news1 from "../../assets/Link → 1-1-560x379.jpg.jpg";
// import news2 from "../../assets/Link → 2-1-560x379.jpg.jpg";
// import news3 from "../../assets/Link → 3-1-560x379.jpg.png";
// const HomeSection1 = () => {
//   const [lang, setLang] = useState("mr");
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

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextSlide = () => {
//     setCurrentIndex((currentIndex + 1) % 6); // Adjust the number based on the number of cards
//   };

//   const prevSlide = () => {
//     setCurrentIndex((currentIndex - 1 + 6) % 6); // Adjust the number based on the number of cards
//   };

//   const updateSlider = () => {
//     const sliderContent = document.querySelector(".slider-content");
//     const cardWidth = document.querySelector(".review-card").offsetWidth + 20; // Adjusted width including margin
//     sliderContent.style.transform = `translateX(${
//       -currentIndex * cardWidth
//     }px)`;
//   };

//   // Call updateSlider when the component mounts or currentIndex changes
//   React.useEffect(() => {
//     updateSlider();
//   }, [currentIndex]);

//   const data = {
//     title: {
//       marathi: "ताज्या बातम्या",
//       english: "Latest Update",
//     },
//     describelink: {
//       marathi: "अधिक वाचा ",
//       english: "Read More",
//     },
//     descriptlink: {
//       marathi: "More News",
//       english: "More News",
//     },

//     marathi: {
//       date: "July 24, 2020",
//       head: "सिटी न्यूज, समुदायामध्ये",
//       description:
//         "नव्या संसद भवनाप्रमाणे नवीन विधीमंडळ उभं राहणार; विधानसभाअध्यक्ष प्रस्ताव देणार",
//       buttontitle: "अधिक वाचा",
//       sectiondesc: "आवश्यक लोकांसाठी अलीकडील क्रियाकलापांबद्दल अद्यतन.",
//     },
//     english: {
//       date: "July 24, 2020",
//       head: "In City News‚ Community",
//       description:
//         "The new legislature will stand like a new parliament building; Assembly Speaker will propose",
//       buttontitle: "More News",
//       sectiondesc: "The Update about recent activities for needed peoples.",
//     },
//   };
//   return (
//     <>
//       <div>
//         <section style={{ marginTop: "6%", marginBottom: "3%" }}>
//           <Container className="mb-4">
//             <Row>
//               <Col lg={3} md={3} sm={12} xs={12}>
//                 <div className="head-news">
//
//                   {lang === "mr" ? data.title.marathi : data.title.english}
//                 </div>
//                 <hr
//                   className="mt-0"
//                   style={{
//                     width: "50%",
//                     border: "1px",
//                     height: "3px",
//                     opacity: "1",
//                     background: "linear-gradient(to right,#008000, #FAD02C)",
//                   }}
//                 />
//                 <div
//                   style={{ color: "#62718D", fontFamily: "Popins ,sans-serif" }}
//                 >
//                   {lang === "mr"
//                     ? data.marathi.sectiondesc
//                     : data.english.sectiondesc}
//                 </div>
//                 <div>
//                   <Button
//                     className="Button-Morenews"
//                     style={{
//                       width: "max-content",
//                       backgroundColor: "#000088",
//                       border: "1px solid #0067DA",
//                       color: "white",
//                       fontSize: "14px",
//                     }}
//                   >
//                     <Link style={{ textDecoration: "none", color: "white" }}>
//                       {lang === "mr"
//                         ? data.marathi.buttontitle
//                         : data.english.buttontitle}
//                       <i
//                         className="fa fa-chevron-right "
//                         style={{ width: "14px" }}
//                       ></i>
//                       <i
//                         className="fa fa-chevron-right "
//                         style={{ width: "14px" }}
//                       ></i>
//                     </Link>
//                   </Button>
//                 </div>
//               </Col>
//               <Col lg={9} md={9} sm={12} xs={12}>
//                 <div className="slider-section mt-0">
//                   <div className="slider-container">
//                     <div className="slider-content">
//                       {/* Your review cards go here */}
//                       <div className="review-card">
//                         <div className="flex-profile">
//                           <img
//                             src={news1}
//                             alt="img"
//                             style={{ width: "100%" }}
//                           />
//                         </div>
//                         <div className="date-box">
//
//                           {lang === "mr"
//                             ? data.marathi.date
//                             : data.english.date}
//                         </div>
//                         <div className="news_comment p-2">
//                           <div style={{ color: "#62718D", fontSize: "18px" }}>
//                             <div>
//                               Comment off
//                               <span>
//                                 <i
//                                   className="fa fa-comment"
//                                   style={{ paddingLeft: "10%" }}
//                                 ></i>
//                               </span>
//                             </div>
//                           </div>

//                           <div style={{ padding: "2%" }}>
//                             {lang === "mr"
//                               ? data.marathi.description
//                               : data.english.description}
//                           </div>

//                           <div className="news_comment p-2">
//                             <Link to="#" style={{ textDecoration: "none" }}>
//                               <b style={{ fontSize: "15px", color: "blue" }}>
//                                 {lang === "mr"
//                                   ? data.describelink.marathi
//                                   : data.describelink.english}
//                                 <i className="fa fa-chevron-right "></i>
//                                 <i className="fa fa-chevron-right "></i>
//                               </b>
//                             </Link>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="review-card">
//                         <div className="flex-profile">
//                           <img
//                             src={news1}
//                             alt="img"
//                             style={{ width: "100%" }}
//                           />
//                         </div>
//                         <div className="date-box">
//
//                           {lang === "mr"
//                             ? data.marathi.date
//                             : data.english.date}
//                         </div>
//                         <div className="news_comment p-2">
//                           <div style={{ color: "#62718D", fontSize: "18px" }}>
//                             <div>
//                               Comment off
//                               <span>
//                                 <i
//                                   className="fa fa-comment"
//                                   style={{ paddingLeft: "10%" }}
//                                 ></i>
//                               </span>
//                             </div>
//                           </div>

//                           <div style={{ padding: "2%" }}>
//                             {lang === "mr"
//                               ? data.marathi.description
//                               : data.english.description}
//                           </div>

//                           <div className="news_comment p-2">
//                             <Link to="#" style={{ textDecoration: "none" }}>
//                               <b style={{ fontSize: "15px", color: "blue" }}>
//                                 {lang === "mr"
//                                   ? data.describelink.marathi
//                                   : data.describelink.english}
//                                 <i className="fa fa-chevron-right "></i>
//                                 <i className="fa fa-chevron-right "></i>
//                               </b>
//                             </Link>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="review-card">
//                         <div className="flex-profile">
//                           <img
//                             src={news1}
//                             alt="img"
//                             style={{ width: "100%" }}
//                           />
//                         </div>
//                         <div className="date-box">
//
//                           {lang === "mr"
//                             ? data.marathi.date
//                             : data.english.date}
//                         </div>
//                         <div className="news_comment p-2">
//                           <div style={{ color: "#62718D", fontSize: "18px" }}>
//                             <div>
//                               Comment off
//                               <span>
//                                 <i
//                                   className="fa fa-comment"
//                                   style={{ paddingLeft: "10%" }}
//                                 ></i>
//                               </span>
//                             </div>
//                           </div>

//                           <div style={{ padding: "2%" }}>
//                             {lang === "mr"
//                               ? data.marathi.description
//                               : data.english.description}
//                           </div>

//                           <div className="news_comment p-2">
//                             <Link to="#" style={{ textDecoration: "none" }}>
//                               <b style={{ fontSize: "15px", color: "blue" }}>
//                                 {lang === "mr"
//                                   ? data.describelink.marathi
//                                   : data.describelink.english}
//                                 <i className="fa fa-chevron-right "></i>
//                                 <i className="fa fa-chevron-right "></i>
//                               </b>
//                             </Link>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="review-card">
//                         <div className="flex-profile">
//                           <img
//                             src={news1}
//                             alt="img"
//                             style={{ width: "100%" }}
//                           />
//                         </div>
//                         <div className="date-box">
//
//                           {lang === "mr"
//                             ? data.marathi.date
//                             : data.english.date}
//                         </div>
//                         <div className="news_comment p-2">
//                           <div style={{ color: "#62718D", fontSize: "18px" }}>
//                             <div>
//                               Comment off
//                               <span>
//                                 <i
//                                   className="fa fa-comment"
//                                   style={{ paddingLeft: "10%" }}
//                                 ></i>
//                               </span>
//                             </div>
//                           </div>

//                           <div style={{ padding: "2%" }}>
//                             {lang === "mr"
//                               ? data.marathi.description
//                               : data.english.description}
//                           </div>

//                           <div className="news_comment p-2">
//                             <Link to="#" style={{ textDecoration: "none" }}>
//                               <b style={{ fontSize: "15px", color: "blue" }}>
//                                 {lang === "mr"
//                                   ? data.describelink.marathi
//                                   : data.describelink.english}
//                                 <i className="fa fa-chevron-right "></i>
//                                 <i className="fa fa-chevron-right "></i>
//                               </b>
//                             </Link>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="review-card">
//                         <div className="flex-profile">
//                           <img
//                             src={news1}
//                             alt="img"
//                             style={{ width: "100%" }}
//                           />
//                         </div>
//                         <div className="date-box">
//
//                           {lang === "mr"
//                             ? data.marathi.date
//                             : data.english.date}
//                         </div>
//                         <div className="news_comment p-2">
//                           <div style={{ color: "#62718D", fontSize: "18px" }}>
//                             <div>
//                               Comment off
//                               <span>
//                                 <i
//                                   className="fa fa-comment"
//                                   style={{ paddingLeft: "10%" }}
//                                 ></i>
//                               </span>
//                             </div>
//                           </div>

//                           <div style={{ padding: "2%" }}>
//                             {lang === "mr"
//                               ? data.marathi.description
//                               : data.english.description}
//                           </div>

//                           <div className="news_comment p-2">
//                             <Link to="#" style={{ textDecoration: "none" }}>
//                               <b style={{ fontSize: "15px", color: "blue" }}>
//                                 {lang === "mr"
//                                   ? data.describelink.marathi
//                                   : data.describelink.english}
//                                 <i className="fa fa-chevron-right "></i>
//                                 <i className="fa fa-chevron-right "></i>
//                               </b>
//                             </Link>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="review-card">
//                         <div className="flex-profile">
//                           <img
//                             src={news1}
//                             alt="img"
//                             style={{ width: "100%" }}
//                           />
//                         </div>
//                         <div className="date-box">
//
//                           {lang === "mr"
//                             ? data.marathi.date
//                             : data.english.date}
//                         </div>
//                         <div className="news_comment p-2">
//                           <div style={{ color: "#62718D", fontSize: "18px" }}>
//                             <div>
//                               Comment off
//                               <span>
//                                 <i
//                                   className="fa fa-comment"
//                                   style={{ paddingLeft: "10%" }}
//                                 ></i>
//                               </span>
//                             </div>
//                           </div>

//                           <div style={{ padding: "2%" }}>
//                             {lang === "mr"
//                               ? data.marathi.description
//                               : data.english.description}
//                           </div>

//                           <div className="news_comment p-2">
//                             <Link to="#" style={{ textDecoration: "none" }}>
//                               <b style={{ fontSize: "15px", color: "blue" }}>
//                                 {lang === "mr"
//                                   ? data.describelink.marathi
//                                   : data.describelink.english}
//                                 <i className="fa fa-chevron-right "></i>
//                                 <i className="fa fa-chevron-right "></i>
//                               </b>
//                             </Link>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   {/* <button className="prev" onClick={prevSlide}>
//                     <i className="fa fa-chevron-left"></i>
//                   </button> */}
//                   <button className="next" onClick={nextSlide}>
//                     <i className="fa fa-chevron-right"></i>
//                   </button>
//                 </div>
//               </Col>
//             </Row>
//           </Container>
//         </section>
//       </div>
//     </>
//   );
// };

// export default HomeSection1;
