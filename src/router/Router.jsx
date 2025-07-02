import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Hackathon from "../pages/Hackathon";
import IndustryShowcase from "../pages/IndustryShowcase";
import Mrt from "../pages/Mrt";

export default function RouterApp() {

  return (
    <Routes>
      <Route path="/"  element={<Home />}/>
      <Route path="/hackathon" element={<Hackathon/>} />
      <Route path="/industry-showcase" element={<IndustryShowcase/>} />
      <Route path="/5mrt" element={<Mrt/>} />
    </Routes>
  )
}