// import sponsor1Logo from "../../assets/logo.png";
// import sponsor2Logo from "../../assets/intuitive-logo.png";
// import sponsor3Logo from "../../assets/dau-logo.png";
import hackathonBackground from "../../assets/hackathonBackground.jpg";
import hackathonPoster from "../../assets/poster.png"; 
import hackathonBanner from "../../assets/banner_desktop.png"; 
import "./hackathon.css";

// const sponsors = [
//   { name: "Intuitive", logo: sponsor2Logo, id: 1 },
//   { name: "DAU", logo: sponsor3Logo, id: 2 },
//   { name: "AISE", logo: sponsor1Logo, id: 3 },
// ];

export default function Hackathon() {
  return (
    <section className="min-h-screen bg-black py-16 md:px-12 lg:px-24 text-white relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${hackathonBackground})` }}
      ></div>

      {/* Header with Sponsor Logos */}
      <header className="relative z-10 mb-12 text-center">
        {/* <div className="flex flex-wrap justify-center gap-12">
          {sponsors.map((sponsor) => (
            <img
              key={sponsor.id}
              src={sponsor.logo}
              alt={sponsor.name}
              className="w-24 h-24 sm:w-32 sm:h-32 object-contain mx-4"
            />
          ))}
        </div> */}
        <div className="relative z-10 max-w-5xl mx-auto mb-12">
        <img
          src={hackathonBanner}
          alt="Hackathon Banner"
          className="w-full rounded-xl shadow-lg"
        />
      </div>
      </header>

      {/* Page Title */}
      <div className="text-center mb-10 relative z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white">
          InnovAItion – Shaping Future Innovators
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mt-3 tracking-wide">
          ft. Intuitive × Dhirubhai Ambani University (DAU)
        </p>
      </div>

      {/* Banner */}
      

      {/* Description */}
      <div className="max-w-4xl mx-auto text-justify text-gray-200 leading-relaxed mb-14 relative z-10">
        <p className="mb-6">
          Welcome to <strong>InnovAItion – Shaping Future Innovators</strong>,
          a high-energy hackathon hosted at the DAU campus in Gandhinagar. The
          event is collaboratively organised by{" "}
          <strong>Dhirubhai Ambani University (DAU)</strong> and{" "}
          <strong>Intuitive.ai</strong>, enabling young innovators to develop
          creative and practical solutions for real-world challenges.
        </p>

        <p>
          The hackathon is part of the{" "}
          <a href="/" className="text-teal-400 font-semibold hover:underline">
            Winter School on AI-Infused Software Engineering (AISE 2026)
          </a>
          , empowering participants to explore modern AI-driven software
          engineering practices.
        </p>
      </div>

      {/* Registration & Prizes */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 relative z-10">
        <div className="p-6 border-2 border-teal-600 rounded-xl bg-gradient-to-r from-teal-500 to-teal-600">
          <h2 className="text-xl font-semibold mb-3">Registration & Eligibility</h2>
          <ul className="space-y-2 text-gray-100">
            <li><strong>Registration Fee:</strong> Free</li>
            <li><strong>Eligibility:</strong> UG, PG & Engineering students</li>
          </ul>
          <a
            href="https://unstop.com/p/innovaition-shaping-future-innovators-ft-intuitive-x-da-iict-dhirubhai-ambani-institute-of-information-and-communicati-1604506"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full mt-6 bg-teal-700 text-white py-3 rounded-lg font-semibold hover:bg-teal-800 transition-all text-center"
          >
            Register Now
          </a>
        </div>

        <div className="p-6 border-2 border-orange-600 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600">
          <h2 className="text-xl font-semibold mb-3">Prizes & Deadlines</h2>
          <ul className="space-y-2 text-gray-100">
            <li><strong>Prize Pool:</strong> INR 90,000</li>
            <li><strong>Idea Submission:</strong> Dec 4 – Dec 25, 2025</li>
            <li><strong>Last Registration Date:</strong> Dec 25, 2025 (11:59 PM IST)</li>
            <li><strong>Final Round:</strong> Jan 9 , 10 , 11 2026 </li>
            <li><strong>Venue:</strong> DAU Campus, Gandhinagar</li>
          </ul>
        </div>
      </div>

      {/* Rules */}
      <div className="max-w-5xl mx-auto mt-12 bg-gray-800 p-8 rounded-xl border-2 border-teal-600 relative z-10">
        <h2 className="text-2xl font-bold text-teal-400 mb-6">Rules</h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-200">
          <li>No pre-developed code is permitted for the offline round.</li>
          <li>All development must take place during the event.</li>
          <li>GenAI tools may only be used for brainstorming and research, not for code generation.</li>
          <li>Participants must remain on campus unless permitted to leave.</li>
          <li>Participants must use the official PPT template during Round-1.</li>
        </ol>
      </div>

      {/* Rewards */}
      <div className="max-w-5xl mx-auto mt-12 bg-gray-900 p-8 rounded-xl border-l-4 border-orange-500 relative z-10">
        <h2 className="text-2xl font-bold text-teal-400 mb-6">Rewards & Opportunities</h2>
        <ul className="space-y-2 text-gray-300">
          <li>Winner – ₹50,000</li>
          <li>First Runner-up – ₹25,000</li>
          <li>Second Runner-up – ₹15,000</li>
          <li>
            Top 5 teams receive <strong>internship / job interview opportunities</strong> with the Intuitive.ai recruitment team.
          </li>
        </ul>
        <p className="text-sm text-gray-500 mt-4">
          *Winning does not guarantee an internship or a full-time position.
        </p>
      </div>

      {/* Problem Statements */}
      <div className="max-w-5xl mx-auto mt-12 bg-gray-800 p-8 rounded-xl border-2 border-teal-600 relative z-10">
        <h2 className="text-2xl font-bold text-teal-400 mb-6">Problem Statements</h2>
        <p className="text-gray-300">
          Detailed problem statements will be available on the registration portal.
        </p>
        <p className="mt-4 text-teal-400 font-semibold underline">
          <a
            href="https://unstop.com/p/innovaition-shaping-future-innovators-ft-intuitive-x-da-iict-dhirubhai-ambani-institute-of-information-and-communicati-1604506"
            target="_blank"
          >
            View Complete Problem Statements
          </a>
        </p>
      </div>

      {/* Accommodation */}
      <div className="max-w-5xl mx-auto mt-12 text-gray-300 relative z-10">
        <h2 className="text-2xl font-bold text-teal-400 mb-4">Accommodation</h2>
        <p>
          Accommodation will be provided on a first-come, first-served basis. Only shortlisted teams after the initial screening will receive the accommodation registration link.
        </p>
      </div>

      {/* Poster */}
      <div className="relative z-10 max-w-3xl mx-auto mt-14">
        <img
          src={hackathonPoster}
          alt="Hackathon Poster"
          className="w-full rounded-xl shadow-xl"
        />
      </div>

      {/* CTA */}
      <div className="text-center mt-14 relative z-10 mb-10">
        <a
          href="https://unstop.com/p/innovaition-shaping-future-innovators-ft-intuitive-x-da-iict-dhirubhai-ambani-institute-of-information-and-communicati-1604506"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-teal-600 text-white py-4 px-12 rounded-lg text-lg font-semibold shadow-lg hover:bg-teal-700 transition-all"
        >
          Register Now
        </a>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-8 mt-16 w-full relative z-10">
        <p className="text-center mb-1">
          © 2026 Winter School on AI-Infused Software Engineering | Dhirubhai Ambani University
        </p>
        <p className="text-center">
          Developed and Managed by{" "}
          <a
            href="https://portfolio-rahul-tiwari.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 font-semibold hover:underline"
          >
            Rahul Tiwari
          </a>
        </p>
      </footer>
    </section>
  );
}
