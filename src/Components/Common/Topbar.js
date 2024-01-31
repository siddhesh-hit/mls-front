import React, { useEffect, useState } from "react";
import { NavDropdown, Nav } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { API } from "../../config";
import { getApi, getApiById } from "../../service/axiosInterceptors";
import { useDispatch, useSelector } from "react-redux";
import { Logout, setUserDetails } from "../../redux/reducers/UserReducer";
import useLang from "../../utils/useLang";

const Topbar = () => {
  const [notification, setNotification] = useState([]);

  const state = useSelector((state) => state.UserReducer);
  const dispatch = useDispatch();
  const { lang, checkLang } = useLang();

  const data = {
    fontI: {
      marathi: "अ",
      english: "A",
    },
    link1: {
      marathi: "साइट मॅप",
      english: "Site map",
    },
    link2: {
      marathi: "आमच्याशी संपर्क साधा",
      english: "Contact Us",
    },
    link3: {
      marathi: "साइन इन करा",
      english: "Sign In",
    },
    link4: {
      marathi: "भाषा",
      english: "Language",
      drop1: {
        marathi: "मराठी",
        english: "Marathi",
      },
      drop2: {
        marathi: "इंग्रजी",
        english: "English",
      },
    },
    notify: {
      marathi: "सूचना",
      english: "Notification",
    },
    message: {
      marathi: "नवीन संदेश प्राप्त झाला",
      english: "New Message Received",
    },
    font: {
      one: {
        marathi: "",
        english: "",
      },
    },
  };

  let increaseFontFlag = true;
  let keepFontFlag = true;
  let decreaseFontFlag = true;
  let fontSize = 16;

  function increaseFont() {
    if (increaseFontFlag) {
      fontSize = fontSize + 1;
      updateFontSize();
      increaseFontFlag = false;
    }
  }

  function keepFont() {
    if (keepFontFlag) {
      fontSize = 16;
      updateFontSize();
      keepFontFlag = false;
    }
  }

  function decreaseFont() {
    if (decreaseFontFlag) {
      fontSize = fontSize - 1;
      updateFontSize();
      decreaseFontFlag = false;
    }
  }

  function updateFontSize() {
    document.body.style.fontSize = fontSize + "px";
    console.log("Updating font size:", fontSize);

    const allTextElements = document.querySelectorAll(
      "p, span, div, h1, h2, h3, h4, h5, h6, a, li, td, th, label, button, input, textarea, b"
    );

    allTextElements.forEach((element) => {
      element.style.fontSize = fontSize + "px";
    });
  }

  // const fetchData = async () => {
  //   await getApi("/visit/notification")
  //     .then((res) => setNotification(res.data.data))
  //     .catch((err) => console.log(err));
  // };

  const handleLanguage = (newLang) => {
    window.localStorage.setItem("lang", newLang);
    window.dispatchEvent(new CustomEvent("langChange"));
  };

  useEffect(() => {
    // fetchData();
    state._id &&
      getApiById("/user", state._id)
        .then((res) => res.data.data && dispatch(setUserDetails(res.data.data)))
        .catch((err) => {
          if (err.response.status === 401) {
            dispatch(Logout());
          }
        });
  }, []);

  return (
    <>
      <div className="top_menu">
        <div className="row">
          <div className="col-lg-4"></div>
          <div className="col-lg-8">
            <div className="container-fluid d-flex justify-content-end">
              <Nav className="space">
                <div className="notification nav-link-top">
                  {/* Icon */}
                  {/* <div className="icon">
                    <i className="fa fa-bell"></i>
                    <span className="icon-button__badge">
                      {notification.length}
                    </span>
                  </div> */}
                  {/* Dropdown content (notification text) */}
                  <div className="dropdown-content  content text-start p-4">
                    <div
                      className="mt-0 pt-0 mb-2"
                      style={{ fontSize: "15px", color: "grey" }}
                    >
                      {lang === "mr"
                        ? data.notify.marathi
                        : data.notify.english}
                    </div>
                    <div href="#" className="profile-block  notification-text ">
                      {lang === "mr"
                        ? data.message.marathi
                        : data.message.english}
                    </div>

                    {notification &&
                      notification.length > 0 &&
                      notification.map((item, index, array) => (
                        <React.Fragment key={index}>
                          <div className="profile-block notification-text-main">
                            {item.message}
                          </div>
                          {array.length !== index && (
                            <hr style={{ opacity: 0 }} className=" m-0" />
                          )}
                        </React.Fragment>
                      ))}
                  </div>
                </div>
                <Link className="nav-link-top" to="#">
                  {lang === "mr" ? data.link1.marathi : data.link1.english}
                </Link>

                <Link
                  className="nav-link-top"
                  to="/ContactUS"
                  style={{ marginRight: "0" }}
                >
                  {lang === "mr" ? data.link2.marathi : data.link2.english}
                </Link>
                <NavDropdown
                  id="basic-nav-dropdown"
                  title={
                    lang === "mr" ? data.link4.marathi : data.link4.english
                  }
                  className="nav-link-top mt-0 mb-0"
                  style={{ marginRight: "0", fontWeight: "400" }}
                >
                  <NavDropdown.Item
                    onClick={() => handleLanguage("mr")}
                    style={{ fontWeight: "400" }}
                  >
                    {lang === "mr"
                      ? data.link4.drop1.marathi
                      : data.link4.drop1.english}
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => handleLanguage("en")}
                    style={{ fontWeight: "400" }}
                  >
                    {lang === "mr"
                      ? data.link4.drop2.marathi
                      : data.link4.drop2.english}
                  </NavDropdown.Item>
                </NavDropdown>
                <div className="font-size">
                  <button onClick={increaseFont} className="font-size-button">
                    {lang === "mr" ? data.fontI.marathi : data.fontI.english}+
                  </button>
                  <button
                    onClick={keepFont}
                    className="m-1"
                    style={{ borderRadius: "0px solid black" }}
                  >
                    {lang === "mr" ? data.fontI.marathi : data.fontI.english}
                  </button>
                  <button onClick={decreaseFont} className="font-size-button">
                    {lang === "mr" ? data.fontI.marathi : data.fontI.english}-
                  </button>
                </div>
                <Nav style={{ justifyContent: "space-between" }}>
                  {state.user_verfied ? (
                    <Link
                      className="nav-link-top"
                      to="/Profile"
                      // onClick={handleSignIn}
                    >
                      <div className="profile-circle-top">
                        <img
                          src={
                            API.baseUrl +
                            state?.user_image?.destination +
                            "/" +
                            state?.user_image?.filename
                          }
                          alt="user profile"
                          className="profile-image"
                        />
                        {/* <NavDropdown>
                        <NavDropdown.Item>logout</NavDropdown.Item>
                      </NavDropdown> */}
                      </div>
                    </Link>
                  ) : (
                    <Link
                      className="nav-link-top"
                      to={
                        lang === "mr" ? "/PortalRegister" : "/PortalRegisterEng"
                      }
                      // onClick={handleSignIn}
                    >
                      {lang === "mr" ? data.link3.marathi : data.link3.english}
                    </Link>
                  )}
                </Nav>
              </Nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
