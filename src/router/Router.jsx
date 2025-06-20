import { Route, Routes } from "react-router-dom";
import Home from "../assets/pages/Home";
import Hackathon from "../assets/pages/Hackathon";
export default function RouterApp() {

  return (
    <Routes>
      <Route path="/"  element={<Home />}/>
      <Route path="/hackathon" element={<Hackathon/>} />
    </Routes>
  )
}