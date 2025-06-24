import travelGrants from "../data/travelGrants";
import SectionHeader from "./sub-components/SectionHeader";

export default function TravelGrants() {
  return (
    <section id="TravelGrants" className="px-4 py-12 md:px-12 max-w-7xl mx-auto">
      <SectionHeader title={"Travel Grants"} />

      <p className="text-gray-700 mb-6 text-center max-w-5xl mx-auto">
        AISE 2026 are pleased to announce the travel and registration grant for participants to attend the winter school. 
        This initiative supports outstation students from Indian technical institutions to participate in the school.
      </p>

      {/* Form Button */}
      <div className="text-center my-6">
        <a
          href={travelGrants.formLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-2 border-2 border-indigo-600 text-indigo-600 font-semibold rounded hover:bg-indigo-600 hover:text-white transition"
        >
          Fill the Form
        </a>
      </div>

      {/* Coverage */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-indigo-700 mb-2">📋 Grant Coverage</h3>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          {travelGrants.coverage.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>

      {/* Volunteering Note */}
      {/* <div className="bg-yellow-50 border border-yellow-200 text-yellow-900 p-4 rounded mb-8">
        Travel grant recipients may be asked to assist as volunteers. Tasks may include registration help,
        session support, etc., with less than 7 hours of commitment across the conference.
      </div> */}

      {/* Eligibility */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-indigo-700 mb-2">✅ Eligibility Criteria: for students</h3>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          {travelGrants.eligibility.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>

      {/* Registration Button */}
      <div className="text-center my-6">
        <a
          href={travelGrants.registrationLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-2 border-2 border-indigo-600 text-indigo-600 font-semibold rounded hover:bg-indigo-600 hover:text-white transition"
        >
          Visit the Registration Page
        </a>
      </div>

      {/* Note Section */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-indigo-700 mb-2">📌 Note for School Participants</h3>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          {travelGrants.notes.map((note, index) => (
            <li key={index}>{note}</li>
          ))}
        </ul>
      </div>

      {/* Contact */}
      <div className="bg-gray-50 border border-gray-200 p-4 rounded text-gray-700">
        For any queries, please contact the organisers via email:{" "}
        <a
          href={`mailto:${travelGrants.email}`}
          className="text-blue-600 underline"
        >
          {travelGrants.email}
        </a>
      </div>
    </section>
  );
}
