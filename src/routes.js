import Register from "./Components/Login/Register";
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
import ContactUs from "./pages/ContactUs";
import Library from "./pages/Library";
import CouncilDebates from "./pages/Debates/CouncilDebates";
import Governor from "./pages/Legislature/Governor";
import ForgotPass from "./Components/Login/ForgotPass";
import ResetPass from "./Components/Login/ResetPass";
import ResetPassEng from "./Components/Login/ResetPassEng";
import FeedBack from "./pages/FeedBack";
import FormerGovernor from "./pages/Legislature/FormerGovernor";
import AssemblyDebates from "./pages/Debates/AssemblyDebates";
import CombinedDebates from "./pages/Debates/CombinedDebates";
import Profile from "./pages/Profile";
import ForgotPassEng from "./Components/Login/ForgotPassEng";
import OtherGovernor from "./pages/Legislature/OtherGovernor";
import NewHome from "./pages/HomePage/NewHome";
import Search from "./pages/Search";
import DebateDetails from "./pages/Debates/DebateDetails";
import Gallery from "./Components/Common/Gallery";
import Minister from "./pages/Legislature/CouncilMinister";

export const routes = [
  {
    name: "HomePage",
    component: <HomePage />,
    path: "/",
  },
  {
    name: "SignupPortalEng",
    component: <SignupPortalEng />,
    path: "/SignupPortalEng",
  },
  {
    name: "Verifyotp",
    component: <Verifyotp />,
    path: "/Verifyotp",
  },
  {
    name: "Sixdigitotp",
    component: <Sixdigitotp />,
    path: "/Sixdigitotp",
  },
  {
    name: "RegisterEng",
    component: <RegisterEng />,
    path: "/RegisterEng",
  },
  {
    name: "PortalRegister",
    component: <PortalRegister />,
    path: "/PortalRegister",
  },
  {
    name: "PortalRegisterEng",
    component: <PortalRegisterEng />,
    path: "/PortalRegisterEng",
  },
  {
    name: "Verifyotpeng",
    component: <Verifyotpeng />,
    path: "/Verifyotpeng",
  },
  {
    name: "SixdigitotpEng",
    component: <SixdigitotpEng />,
    path: "/SixdigitotpEng",
  },
  {
    name: "Register",
    component: <Register />,
    path: "/Register",
  },
  {
    name: "DebateDetails",
    component: <DebateDetails />,
    path: "/DebateDetails",
  },
  {
    name: "Search",
    component: <Search />,
    path: "/Search",
  },
  {
    name: "ForgotPass",
    component: <ForgotPass />,
    path: "/ForgotPass",
  },
  {
    name: "ResetPass",
    component: <ResetPass />,
    path: "/ResetPass",
  },
  {
    name: "Aboutus",
    component: <Aboutus />,
    path: "/Aboutus",
  },
  {
    name: "Phone-login",
    component: <Phonelogin />,
    path: "/Phone-login",
  },
  {
    name: "Phone-loginEng",
    component: <PhoneloginEng />,
    path: "/Phone-loginEng",
  },
  {
    name: "Link-section",
    component: <LinkSection />,
    path: "/Link-section",
  },
  {
    name: "LegislativeCouncil",
    component: <LegislativeCouncil />,
    path: "/LegislativeCouncil",
  },
  {
    name: "FeedBack",
    component: <FeedBack />,
    path: "/FeedBack",
  },
  {
    name: "LegislativeAssembly",
    component: <LegislativeAssembly />,
    path: "/LegislativeAssembly",
  },
  {
    name: "ResetPassEng",
    component: <ResetPassEng />,
    path: "/ResetPassEng",
  },
  {
    name: "ForgotPassEng",
    component: <ForgotPassEng />,
    path: "/ForgotPassEng",
  },
  {
    name: "OtherGovernor",
    component: <OtherGovernor />,
    path: "/OtherGovernor",
  },
  {
    name: "CombinedDebates",
    component: <CombinedDebates />,
    path: "/CombinedDebates",
  },
  {
    name: "FormerGovernor",
    component: <FormerGovernor />,
    path: "/FormerGovernor",
  },
  {
    name: "SessionCalender",
    component: <SessionCalender />,
    path: "/SessionCalender",
  },
  {
    name: "HelpDesk",
    component: <HelpDesk />,
    path: "/HelpDesk",
  },
  {
    name: "AssemblyDebates",
    component: <AssemblyDebates />,
    path: "/AssemblyDebates",
  },
  {
    name: "CouncilMemberEng",
    component: <CouncilMemberEng />,
    path: "/CouncilMemberEng",
  },
  {
    name: "AssemblyMemberEng",
    component: <AssemblyMemberEng />,
    path: "/AssemblyMemberEng",
  },
  {
    name: "MemberDetailsEng",
    component: <MemberDetailEng />,
    path: "/MemberDetailsEng",
  },
  {
    name: "SignupPortal",
    component: <SignupPortal />,
    path: "/SignupPortal",
  },
  {
    name: "ContactUs",
    component: <ContactUs />,
    path: "/ContactUs",
  },
  {
    name: "Library",
    component: <Library />,
    path: "/Library",
  },
  {
    name: "CouncilDebates",
    component: <CouncilDebates />,
    path: "/CouncilDebates",
  },
  {
    name: "Gallery",
    component: <Gallery />,
    path: "/Gallery",
  },
  {
    name: "Governor",
    component: <Governor />,
    path: "/Governor",
  },
  {
    name: "Profile",
    component: <Profile />,
    path: "/Profile",
  },

  {
    name:"Minister",
    component:<Minister/>,
    path:"/CouncilMinister",
  },
];
