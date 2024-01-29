import React from "react";
import Register from "./Components/Login/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Verifyotp from "./Components/Login/Verifyotp";
import Sixdigitotp from "./Components/Login/Sixdigitotp";
// import Header from "./Components/Common/Header";
import RegisterEng from "./Components/Login/RegisterEng";
import Verifyotpeng from "./Components/Login/Verifyotpeng";
import SixdigitotpEng from "./Components/Login/SixdigitotpEng";
import HomePage from "./pages/HomePage/HomePage";
import Aboutus from "./pages/Aboutus";
import LegislativeCouncil from "./pages/LegislativeCouncil";
import LegislativeAssembly from "./pages/LegislativeAssembly";
import PortalRegisterEng from "./Components/Login/PotalRegisterEng";
import PortalRegister from "./Components/Login/PortalRegister";
import Phonelogin from "./Components/Login/Phone-login";
import SessionCalender from "./pages/Session-Calender/SessionCalender";
import PhoneloginEng from "./Components/Login/Phone-LoginEng";
import LinkSection from "./pages/Link-section";
import HelpDesk from "./pages/HelpDesk";
import CouncilMemberEng from "./pages/MemberOfLegislature/CouncilMemberEng";
import AssemblyMemberEng from "./pages/MemberOfLegislature/AssemblyMemberEng";
import MemberDetailEng from "./pages/MemberOfLegislature/MemberDetailsEng";
import SignupPortalEng from "./Components/Login/SignupPortalEng";
import SignupPortal from "./Components/Login/SignupPortal";
import Contactus from "./pages/ContactUs";
import Library from "./pages/Library";
import CouncilDebates from "./pages/Debates/CouncilDebates";
import Gallery from "./pages/Gallery";
import Governor from "./pages/Legislature/Governor";
import ForgotPass from "./Components/Login/ForgotPass";
import ResetPass from "./Components/Login/ResetPass";
import ResetPassEng from "./Components/Login/ResetPassEng";
import FeedBack from "./pages/FeedBack";
import Formergovernor from "./pages/Legislature/FormerGovernor";
import AssemblyDebates from "./pages/Debates/AssemblyDebates";
import CombinedDebates from "./pages/Debates/CombinedDebates";
import Profile from "./pages/Profile";
import ForgotPassEng from "./Components/Login/ForgotPassEng";
import OtherGovernor from "./pages/Legislature/OtherGovernor";
import NewHome from "./pages/HomePage/NewHome";
import Search from "./pages/Search";
import DebateDetails from "./pages/Debates/DebateDetails";

const Routesfile = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/Verifyotp" element={<Verifyotp />} />
          <Route path="/SignupPortalEng" element={<SignupPortalEng />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Sixdigitotp" element={<Sixdigitotp />} />
          <Route path="/RegisterEng" element={<RegisterEng />} />
          <Route path="/PortalRegister" element={<PortalRegister />} />
          <Route path="/PortalRegisterEng" element={<PortalRegisterEng />} />
          <Route path="/Verifyotpeng" element={<Verifyotpeng />} />
          <Route path="/SixdigitotpEng" element={<SixdigitotpEng />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/DebateDetails" element={<DebateDetails />} />

          {/* <Route path="/" element={<NewHome />} /> */}
          <Route path="/Search" element={<Search />} />

          <Route path="/ForgotPass" element={<ForgotPass />} />
          <Route path="/ResetPass" element={<ResetPass />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/Phone-login" element={<Phonelogin />} />
          <Route path="/Phone-loginEng" element={<PhoneloginEng />} />
          <Route path="/Link-section" element={<LinkSection />} />
          <Route path="/LegislativeCouncil" element={<LegislativeCouncil />} />
          <Route path="/FeedBack" element={<FeedBack />} />
          <Route
            path="/LegislativeAssembly"
            element={<LegislativeAssembly />}
          />
          <Route path="/ResetPassEng" element={<ResetPassEng />} />
          <Route path="/ForgotPassEng" element={<ForgotPassEng />} />
          <Route path="/OtherGovernor" element={<OtherGovernor />} />
          <Route path="/CombinedDebates" element={<CombinedDebates />} />
          <Route path="/FormerGovernor" element={<Formergovernor />} />
          <Route path="/SessionCalender" element={<SessionCalender />} />
          <Route path="/HelpDesk" element={<HelpDesk />} />
          <Route path="/AssemblyDebates" element={<AssemblyDebates />} />
          <Route path="/CouncilMemberEng" element={<CouncilMemberEng />} />
          <Route path="/AssemblyMemberEng" element={<AssemblyMemberEng />} />
          <Route path="/MemberDetailsEng" element={<MemberDetailEng />} />
          <Route path="/SignupPortal" element={<SignupPortal />} />
          <Route path="/ContactUs" element={<Contactus />} />
          <Route path="/Library" element={<Library />} />
          <Route path="/CouncilDebates" element={<CouncilDebates />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Governor" element={<Governor />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Routesfile;
