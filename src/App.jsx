import "./App.css";
import { BrowserRouter } from "react-router-dom";
import RouterApp from "./router/Router.jsx";
import { useEffect, useState } from "react";
import loaderIcon from "./assets/logo.png"; 
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [loading, setLoading] = useState(true);

  const handleLoad = () => {
    setLoading(false);
  };

  useEffect(() => {
    handleLoad();

    // Listen for window load event
    // window.addEventListener("load", handleLoad);

    // Clean up
    // return () => window.removeEventListener("load", handleLoad);
  }, []);

  if (loading) {
    return (
      <div className="fixed h-screen w-screen inset-0 flex items-center justify-center bg-white z-50">
        <img
          src={loaderIcon}
          alt="Loading..."
          className="h-24 w-36 animate-pulse"
        />
      </div>
    );
  }

  return (
    <BrowserRouter>
      <RouterApp />
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
