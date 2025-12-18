import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Hackathon from "../pages/Hackathon/Hackathon.jsx";
import IndustryShowcase from "../pages/IndustryShowcase";
import Mrt from "../pages/Mrt";
import Speakers from "../pages/Speakers";
import Login from "../pages/Login";
import AdminDashboard from "../pages/AdminDashboard";
import ProtectedRoute from "../components/sub-components/ProtectedRoute";
import IdeaShowcase from "../pages/IdeaShowcase";
import PanelDiscussion from "../pages/PanelDiscussion";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

export default function RouterApp() {
  const location = useLocation(); // Get the current route
  
  // Check if the current route is "/hackathon"
  const showNavbarFooter = location.pathname !== "/hackathon";

  return (
    <>
      {showNavbarFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hackathon" element={<Hackathon />} />
        <Route path="/industry-showcase" element={<IndustryShowcase />} />
        <Route path="/5mrt" element={<Mrt />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/idea-showcase" element={<IdeaShowcase />} />
        <Route path="/panel-discussion" element={<PanelDiscussion />} />
        
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/adminDashboard" element={<AdminDashboard />} />
        </Route>
      </Routes>
      {showNavbarFooter && <Footer />}
    </>
  );
}
