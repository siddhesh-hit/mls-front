// import React, { useState, useEffect } from "react";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import { Link, useLocation } from "react-router-dom";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { Form, Container, InputGroup, Button } from "react-bootstrap";
// import "react-modern-calendar-datepicker/lib/DatePicker.css";
// import { Calendar } from "react-modern-calendar-datepicker";
// // import { useState } from "react";
// const SessionHistory = () => {
//   const lang = useLang()
//   const [startDate, setStartDate] = useState(new Date());
//   const [endDate, setEndDate] = useState(new Date());

//   const [selectedDayRange, setSelectedDayRange] = useState({
//     from: null,
//     to: null,
//   });

//   const data = {
//     Link1: {
//       marathi: "मुख्यपृष्ठ",
//       english: "Home",
//     },
//     Link2: {
//       marathi: "सत्र इतिहास",
//       english: "Session History",
//     },
//     marathi: {
//       field1: " सभागृह",
//       field2: "सत्र",
//       field3: " वर्ष",
//       field4: "कडून:",
//       field5: "ते:",
//       button: " अर्ज करा",
//       placeholder: "शोध कीवर्ड प्रविष्ट करा",
//       field6: "तारीख श्रेणी",
//       calender: "दिवसाचा क्रम",
//     },
//     english: {
//       field1: "House",
//       field2: "Session",
//       field3: "Year",
//       field4: "From:",
//       field5: "To:",
//       field6: "Date Range",
//       button: "Apply",
//       placeholder: "Enter the Search Keyword",
//       calender: "Order of the Day",
//     },
//   };
//   return (
//     <>
//       <section>
//         <Container className="justify-content-center">
//           {/* Search-field */}
//           <div
//             className="mb-3"
//             style={{ backgroundColor: "white", paddingTop: "20%" }}
//           >
//             <ul className="breadcrumb">
//               <li>
//                 <Link to="/">
//                   {lang === "mr" ? data.Link1.marathi : data.Link1.english}
//                 </Link>
//               </li>
//               <li>
//
//                 {lang === "mr" ? data.Link2.marathi : data.Link2.english}
//               </li>
//             </ul>
//           </div>
//           {/* Filter */}
//         </Container>
//       </section>

//       <Container>
//         <Row>
//           <Col>
//             <div className="about-head text-center">
//               Search History
//               <hr
//                 className="button_less"
//                 style={{
//                   width: "20%",
//                   border: "none",
//                   height: "5px",
//                   opacity: "1",
//                   marginTop: "0",
//                   marginBottom: "15px",
//                   background: "linear-gradient(to right, green, yellow)",
//                 }}
//               />
//             </div>
//             <div className="scroll_effect-history">
//
//               <div className="filter-box p-2" style={{ position: "relative" }}>
//                 <b>Model Code of Conduct-Photo Message</b>
//                 <span style={{ marginLeft: "auto" }}>
//                   <i className="fa fa-download icon-calender"></i>
//                 </span>
//                 <br />
//                 Date: 23-Apr-2022 | 1.02 MB
//               </div>
//               <div className=" p-2" style={{ position: "relative" }}>
//                 <b>Model Code of Conduct-Photo Message</b>
//                 <span style={{ marginLeft: "auto" }}>
//                   <i className="fa fa-download icon-calender"></i>
//                 </span>
//                 <br />
//                 Date: 23-Apr-2022 | 1.02 MB
//               </div>
//               <div className="filter-box p-2" style={{ position: "relative" }}>
//                 <b>Model Code of Conduct-Photo Message</b>
//                 <span style={{ marginLeft: "auto" }}>
//                   <i className="fa fa-download icon-calender"></i>
//                 </span>
//                 <br />
//                 Date: 23-Apr-2022 | 1.02 MB
//               </div>
//               <div className=" p-2" style={{ position: "relative" }}>
//                 <b>Model Code of Conduct-Photo Message</b>
//                 <span style={{ marginLeft: "auto" }}>
//                   <i className="fa fa-download icon-calender"></i>
//                 </span>
//                 <br />
//                 Date: 23-Apr-2022 | 1.02 MB
//               </div>
//               <div className="filter-box p-2" style={{ position: "relative" }}>
//                 <b>Model Code of Conduct-Photo Message</b>
//                 <span style={{ marginLeft: "auto" }}>
//                   <i className="fa fa-download icon-calender"></i>
//                 </span>
//                 <br />
//                 Date: 23-Apr-2022 | 1.02 MB
//               </div>
//               <div className=" p-2" style={{ position: "relative" }}>
//                 <b>Model Code of Conduct-Photo Message</b>
//                 <span style={{ marginLeft: "auto" }}>
//                   <i className="fa fa-download icon-calender"></i>
//                 </span>
//                 <br />
//                 Date: 23-Apr-2022 | 1.02 MB
//               </div>
//               <div className="filter-box p-2" style={{ position: "relative" }}>
//                 <b>Model Code of Conduct-Photo Message</b>
//                 <span style={{ marginLeft: "auto" }}>
//                   <i className="fa fa-download icon-calender"></i>
//                 </span>
//                 <br />
//                 Date: 23-Apr-2022 | 1.02 MB
//               </div>
//               <div className=" p-2" style={{ position: "relative" }}>
//                 <b>Model Code of Conduct-Photo Message</b>
//                 <span style={{ marginLeft: "auto" }}>
//                   <i className="fa fa-download icon-calender"></i>
//                 </span>
//                 <br />
//                 Date: 23-Apr-2022 | 1.02 MB
//               </div>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </>
//   );
// };
// export default SessionHistory;
