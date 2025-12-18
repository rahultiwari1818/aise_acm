import React from "react";
import SectionHeader from "../components/sub-components/SectionHeader";

export default function IdeaShowcase() {
  return (
    <section className="py-16 bg-white rounded-xl shadow-md mx-4 md:mx-10 lg:mx-44 my-10">
      <SectionHeader title="Idea Showcase" />

      <div className="max-w-5xl mx-auto px-6 text-gray-700 leading-relaxed text-justify">
        {/* Intro */}
        <p className="mb-6">
          We plan to hold poster sessions featuring Master’s and Doctoral
          students working in software engineering research, following a call
          for abstracts and a selection process. The Idea Showcase aims to
          provide a focused platform for young researchers to present their work
          concisely through a poster. Participants will have the opportunity to
          interact with distinguished researchers from academia and industry,
          gain visibility for their ideas, and refine their research
          communication skills.
        </p>

        <p className="mb-6">
          A panel of experts will evaluate the posters based on clarity, content
          quality, design, and presentation. The{" "}
          <strong>three best posters</strong>{" "}
          will receive a certificate and an award.
        </p>

        {/* Submission Link */}
        <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-5 shadow-sm mb-10">
          <h3 className="text-lg font-semibold text-indigo-800 mb-2">
            Poster Submission
          </h3>
          <p className="mb-3">
            Registered participants interested in submitting their posters
            (Title, Abstract, and Contribution) may use the link below:
          </p>
          <a
            href="https://forms.gle/Z1E6VB5jWkbbWbmb7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 bg-indigo-600 text-white px-5 py-2 rounded hover:bg-indigo-700 transition"
          >
            Submit Poster Proposal
          </a>
        </div>

        {/* Guidelines */}
        <h3 className="text-xl font-semibold text-blue-700 mb-4">
          Guidelines for Preparing the Poster
        </h3>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm">
          {/* Poster Size */}
          <h4 className="text-lg font-semibold text-gray-800 mb-2">
            Poster Size
          </h4>
          <p className="mb-5">
            A1 size: <strong>594 mm × 841 mm</strong>
          </p>

          {/* Content Structure */}
          <h4 className="text-lg font-semibold text-gray-800 mb-2">
            Content Structure
          </h4>
          <ul className="list-disc list-inside space-y-2 mb-5">
            <li>Title</li>
            <li>Author(s) and Affiliation(s)</li>
            <li>Introduction</li>
            <li>Objectives</li>
            <li>Methodology</li>
            <li>Results</li>
            <li>Discussion</li>
            <li>Conclusion</li>
            <li>References and Acknowledgements</li>
          </ul>

          {/* Printing and Display */}
          <h4 className="text-lg font-semibold text-gray-800 mb-2">
            Printing and Display
          </h4>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Participants should bring a printed copy of their poster on the
              first day of the school.
            </li>
            <li>
              Display boards and mounting materials will be provided at the
              venue.
            </li>
            <li>
              Posters will be evaluated based on clarity, content quality,
              visual design, and presentation.
            </li>
          </ul>

          <h4 className="text-lg font-semibold text-gray-800 mb-2">
            Evaluation
          </h4>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Posters will be evaluated based on clarity, content quality,
              visual design, and presentation.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
