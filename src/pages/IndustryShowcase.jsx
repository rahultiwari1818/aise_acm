import SectionHeader from "../components/sub-components/SectionHeader";

export default function IndustryShowcase() {
  return (
    <section className="py-16 bg-white rounded-xl shadow-md mx-4 md:mx-10 lg:mx-44 my-10">
      <SectionHeader title="Industry Showcase" />

      <div className="text-gray-700 text-lg max-w-5xl mx-auto px-6 text-justify leading-relaxed">
        <p className="mb-6">
          Welcome to the <span className="font-semibold">AISE 2026 Industry Showcase</span>, 
          a unique opportunity for companies to connect with the next generation of software 
          engineers and AI innovators. This one-day exhibition is a core part of the{" "}
          <span className="font-medium">AISE 2026 Winter School</span>, aimed at bridging the 
          gap between academic research and practical application of AI in Software Engineering.
        </p>

        <h3 className="text-2xl font-bold text-indigo-700 mt-10 mb-3">
          Objective of the Showcase
        </h3>
        <p>
          The primary objective of this showcase is to create a dynamic platform for industry 
          leaders to exhibit their latest products, services, and research in AI-powered 
          software engineering. It’s a chance to engage with a motivated audience of students, 
          researchers, and professionals deeply involved in this evolving domain.
        </p>

        <h3 className="text-2xl font-bold text-indigo-700 mt-10 mb-3">
          Theme of the Showcase
        </h3>
        <p>
          The showcase aligns with the theme{" "}
          <span className="italic">“Integrating AI into Software Engineering.”</span> Companies 
          are invited to demonstrate how AI is solving real-world challenges in areas such as:
        </p>
        <ul className="list-disc list-inside mt-4 space-y-2">
          <li>Introduction to LLMs and GenAI Techniques</li>
          <li>Innovating Software Engineering by embracing AI</li>
          <li>Mining Software Repositories (MSR)</li>
          <li>Software Testing and Verification</li>
        </ul>

        <h3 className="text-2xl font-bold text-indigo-700 mt-10 mb-3">
          Guidelines for Participation
        </h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Open to start-ups, SMEs, and enterprises innovating in AI & Software Engineering.</li>
          <li>Submit a detailed proposal outlining your exhibit.</li>
          <li>Each company will be allocated a dedicated stall.</li>
          <li>Stalls must be set up on <span className="font-medium">January 9, 2026</span> and 
              dismantled only after the closing ceremony on <span className="font-medium">January 10, 2026</span>.
          </li>
          <li>Interactive demos and product showcases are encouraged.</li>
          <li>All technical requirements should be communicated in advance.</li>
          <li>Participation is on a first-come, first-served basis (limited space).</li>
        </ul>

        <h3 className="text-2xl font-bold text-indigo-700 mt-10 mb-3">
          Exhibition Details
        </h3>
        <p>
          <span className="font-semibold">Date:</span> January 10, 2026 <br />
          <span className="font-semibold">Time:</span> 9:00 AM – 5:00 PM <br />
          <span className="font-semibold">Location:</span> AISE 2026 Venue, Gandhinagar, Gujarat, India 
          (details will be shared upon registration)
        </p>

        <h3 className="text-2xl font-bold text-indigo-700 mt-10 mb-3">
          Stalls (Free of Charge)
        </h3>
        <p>
          We are offering <span className="font-medium">free stalls</span> to all participating 
          companies. Each stall will be equipped with a table, chairs, and access to power, ensuring 
          a smooth showcase experience for everyone.
        </p>

        <h3 className="text-2xl font-bold text-indigo-700 mt-10 mb-3">
          Benefits to Participants
        </h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Showcase your products, services, and research to academicians, professionals, and students.</li>
          <li>Gain visibility on a reputed platform dedicated to innovation.</li>
          <li>Enjoy two complimentary registrations for AISE 2026 (full access to all sessions).</li>
          <li>Network with leading researchers and practitioners in AI & Software Engineering.</li>
          <li>Discover potential collaborators for future projects and research.</li>
        </ul>

        <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6 shadow-sm mt-10 text-center">
          <h3 className="text-xl font-semibold text-indigo-800 mb-3">
            Register for Free
          </h3>
          <p className="text-gray-700 mb-4">
            Spaces are limited, so register early! <br />
            <span className="font-semibold">Last Date:</span> December 15, 2025
          </p>
          <a
            href="#"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-lg shadow-md transition"
          >
            👉 Secure Your Free Stall
          </a>
        </div>
      </div>
    </section>
  );
}
