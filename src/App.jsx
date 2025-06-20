import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import { BrowserRouter } from "react-router-dom";
import RouterApp from "./router/Router.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <RouterApp/>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
