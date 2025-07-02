import HeroSection from "../components/HeroSection";
import About from "../components/About";
import SpeakerSection from "../components/SpeakerSection";
import TargetAudience from "../components/TargetAudience";
import VenueDates from "../components/VenueAndDates";
import AboutCity from "../components/AboutCity";
import Accommodation from "../components/Accomodation";
import RegistrationForm from "../components/Registration";
import TravelGrants from "../components/TravelGrants";
import Sponsors from "../components/Sponsors";





export default function Home() {
  return (
    <div>
      <main className="pt-20 scroll-smooth">
        <section id="Home">
          <HeroSection />
        </section>

        <section
          id="about"
          className="scroll-mt-20 md:mx-5 lg:mx-44 md:px-5 md:my-10 bg-white shadow-2xl"
        >
          <About />
        </section>

        {/* <section
          id="agenda"
          className="scroll-mt-20 md:mx-5 lg:mx-44 md:px-5 md:my-10 py-5 bg-gray-100 shadow-2xl"
        >
          <Agenda />

        </section> */}

        <section
          id="Speakers"
          className="scroll-mt-20 md:mx-5 lg:mx-44 md:px-5 md:my-10 bg-white shadow-2xl"
        >
          <SpeakerSection />
        </section>

        <section
          id="TargetAudience"
          className="scroll-mt-20 md:mx-5 lg:mx-44 md:px-5 md:my-10 bg-gray-100 shadow-2xl"
        >
          <TargetAudience />
        </section>

        <section
          id="Venue"
          className="scroll-mt-20 md:mx-5 lg:mx-44 md:px-5 md:my-10 bg-white shadow-2xl"
        >
          <VenueDates />
        </section>
        <section
          id="Venue"
          className="scroll-mt-20 md:mx-5 lg:mx-44 md:px-5 md:my-10 bg-white shadow-2xl"
        >
          <AboutCity />
        </section>

        {/* <section
          id="SocialEvents"
          className="scroll-mt-20 md:mx-5 lg:mx-44 md:px-5 md:my-10 bg-gray-100 shadow-2xl"
        >
          <SocialEvents />
        </section> */}

        <section
          id="Accommodation"
          className="scroll-mt-20 md:mx-5 lg:mx-44 md:px-5 md:my-10 bg-white shadow-2xl"
        >
          <Accommodation />
        </section>

        <section
          id="Registration"
          className="scroll-mt-20 md:mx-5 lg:mx-44 md:px-5 md:my-10 bg-gray-100 shadow-2xl"
        >
          <RegistrationForm />
        </section>

        <section
          id="Grant"
          className="scroll-mt-20 md:mx-5 lg:mx-44 md:px-5 md:my-10 bg-white shadow-2xl"
        >
            <TravelGrants/>
        </section>



        <section
          id="Sponsors"
          className="scroll-mt-20 md:mx-5 lg:mx-44 md:px-5 md:my-10 bg-white shadow-2xl"
        >
          <Sponsors />
        </section>

        {/* <section id="Contact" className="scroll-mt-20 h-[50vh] bg-gray-100 flex justify-center items-center">
          <p className="text-xl">Contact Section (Placeholder)</p>
        </section> */}
      </main>
    </div>
  );
}
