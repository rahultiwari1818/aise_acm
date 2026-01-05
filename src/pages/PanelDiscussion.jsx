import React from "react";
import SectionHeader from "../components/sub-components/SectionHeader";

export default function PanelDiscussion() {
  return (
    <section className="py-16 bg-white rounded-xl shadow-md mx-4 md:mx-10 lg:mx-44 my-10">
      <SectionHeader title="Panel Discussion" />

      <div className="max-w-5xl mx-auto px-6 text-gray-700 leading-relaxed text-justify">
        {/* Title Section */}
        <h2 className="text-2xl font-semibold text-blue-700 mb-4 text-center">
          2027 and Beyond: Will AI Partner with, Replace, or Reinvent Software
          Engineering?
        </h2>

        {/* Content */}
        <p className="mb-6">
          AISE 2026 will host a dedicated panel discussion exploring the rapidly
          evolving relationship between Artificial Intelligence and Software
          Engineering. The session will bring together experts from software
          research labs and academia to examine how AI is shaping the future of
          software development, engineering practices, and research
          methodologies.
        </p>

        <p className="mb-6">
          The panel will delve into important questions:{" "}
          <em>
            Will AI become a collaborative partner to software engineers? Could
            it replace traditional roles? Or will it fundamentally reinvent how
            we engineer software?
          </em>{" "}
          This discussion will highlight current trends, emerging challenges,
          and opportunities for innovation as we move toward 2030 and beyond.
        </p>

        {/* Moderator Highlight */}
        <div className="bg-indigo-50 border border-indigo-200 p-5 rounded-lg shadow-sm mb-8">
          <p className="mb-2 text-gray-800">
            The session will be moderated by:
          </p>
          <h3 className="text-lg font-semibold text-indigo-800">
            Dr. Sridhar Chimalakonda
          </h3>
          <p className="text-gray-700">
            Indian Institute of Technology (IIT) Tirupati
          </p>

          <p className="mt-3 text-gray-600">
            Join us as he steers an insightful and thought-provoking dialogue on
            the future of AI-driven software engineering.
          </p>
        </div>

        {/* Panel Members */}
        <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg shadow-sm mb-8">
          <h3 className="text-xl font-semibold text-blue-800 mb-4 text-center">
            Panel Members
          </h3>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
            <a
              href="https://www.linkedin.com/in/sharmavibhu/?originalSubdomain=in"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li className="p-4 bg-white rounded-md shadow-sm">
                <p className="font-semibold text-gray-900">Vibhu S Sharma</p>
                <p className="text-gray-600">Accenture Labs</p>
              </li>
            </a>
            <a href="https://www.linkedin.com/in/vinayvkulkarni/?originalSubdomain=in" target="_blank" rel="noopener noreferrer">
              {" "}
              <li className="p-4 bg-white rounded-md shadow-sm">
                <p className="font-semibold text-gray-900">Vinay Kulkarni</p>
                <p className="text-gray-600">TCS Research</p>
              </li>
            </a>
            <a href="https://research.monash.edu/en/persons/chetan-arora" target="_blank" rel="noopener noreferrer">
              {" "}
              <li className="p-4 bg-white rounded-md shadow-sm">
                <p className="font-semibold text-gray-900">Chetan Arora</p>
                <p className="text-gray-600">Monash University, Australia</p>
              </li>
            </a>
            <a href="https://www.neeldhara.com/" target="_blank" rel="noopener noreferrer">
              <li className="p-4 bg-white rounded-md shadow-sm">
                <p className="font-semibold text-gray-900">Neeldhara Misra</p>
                <p className="text-gray-600">IIT Gandhinagar</p>
              </li>
            </a>
          </ul>
        </div>

        {/* Schedule */}
        <h3 className="text-xl font-semibold text-blue-700 mb-4">
          Session Details
        </h3>

        <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg shadow-sm">
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              <strong>Date:</strong> January 8, 2026
            </li>
            <li>
              <strong>Time:</strong> 2.00–3.30 PM
            </li>
            <li>
              <strong>Venue:</strong> AISE 2026 School Venue, DA-IICT Campus
            </li>
            <li>
              <strong>Audience:</strong> All registered participants of AISE
              2026
            </li>
          </ul>
        </div>

        <p className="mt-6 text-gray-800">
          Mark your calendars! This session is an opportunity to hear from
          leading voices in the field and take part in a conversation that will
          help shape the future of software engineering.
        </p>
      </div>
    </section>
  );
}
