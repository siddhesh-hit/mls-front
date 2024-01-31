import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Header from "./Components/Common/Header";
import Footer from "./Components/Common/Footer";

import { routes } from "./routes";

const Layout = ({ children }) => {
  const location = useLocation();
  const noHeaderFooterPaths = ["/SignupPortalEng", "/PortalRegisterEng"];

  const showHeaderFooter = !noHeaderFooterPaths.includes(location.pathname);

  return (
    <>
      {showHeaderFooter && <Header />}
      {children}
      {showHeaderFooter && <Footer />}
    </>
  );
};

const Routesfile = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {routes.map((item, index) => (
            <Route key={index} path={item.path} element={item.component} />
          ))}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Routesfile;
