import "./App.css";
import About from "./components/About.jsx";
import Navbar from "./components/Navbar.jsx";
import Agenda from "./components/Agenda.jsx";

import SpeakersSection from "./components/Speakers.jsx";
import TargetAudience from "./components/TargetAudience.jsx";
import VenueDates from "./components/VenueAndDates.js";
import Sponsors from "./components/Sponsors.jsx";
function App() {
  return (
    <div className="">
      <Navbar />
      <main className="">
        <div className="md:mx-5 lg:mx-44 md:px-5 md:my-10 bg-white shadow-2xl">
          <About />
        </div>
        <div className="md:mx-5 lg:mx-44 md:px-5 md:my-10 bg-white shadow-2xl">
          <Agenda />
        </div>
        <div className="md:mx-5 lg:mx-44 md:px-5 md:my-10 bg-white shadow-2xl">
          <SpeakersSection />
        </div>
        <div className="md:mx-5 lg:mx-44 md:px-5 md:my-10 bg-white shadow-2xl">
          <TargetAudience />
        </div>
        <div className="md:mx-5 lg:mx-44 md:px-5 md:my-10 bg-white shadow-2xl">
          <VenueDates />
        </div>
        <div className="md:mx-5 lg:mx-44 md:px-5 md:my-10 bg-white shadow-2xl">
          <Sponsors />
        </div>
      </main>
    </div>
  );
}

export default App;
