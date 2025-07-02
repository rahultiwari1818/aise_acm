import React from "react";
import { Link } from "react-router-dom";

export default function RegistrationFeeAndNotes() {
  const notes = [
    "The registration fee for all school participants will be reimbursed after attending the school, provided they attend all four days.",
    "Accommodations for school participants on the DAU campus, tea/coffee, and lunch are complimentary.",
    "A participation certificate will be awarded to individuals with full attendance across all four days.",
    "You may also register for the pre-event hackathon on January 5 to 7, 2026 at DAU, and accommodation will be provided in the university hostel at no additional cost.",
    // "Accommodation will be provided in university campus hostels at no additional cost.",
    // "For more details, visit the Hackathon page.",
  ];

  return (
    <div className="my-10 px-4">
      {/* Heading */}
      <h2 className="text-2xl font-bold mb-4 text-center">Registration Fees</h2>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-[600px] w-full text-center border-collapse rounded-xl overflow-hidden shadow-lg">
          <thead>
            <tr className="bg-indigo-800 text-white">
              <th className="px-6 py-4 text-base border-r border-indigo-700">
                Category
              </th>
              <th className="px-6 py-4 text-base border-r border-indigo-700">
                ACM Member
              </th>
              <th className="px-6 py-4 text-base">Non-ACM Member</th>
            </tr>
          </thead>
          <tbody className="text-gray-800 text-sm">
            <tr className="bg-gray-50">
              <td className="px-6 py-4 font-semibold border-r border-gray-300">
                Students
              </td>
              <td className="px-6 py-4 border-r border-gray-300">₹400 + GST</td>
              <td className="px-6 py-4">₹500 + GST</td>
            </tr>
            <tr className="bg-white">
              <td className="px-6 py-4 font-semibold border-r border-gray-300">
                Faculty
              </td>
              <td className="px-6 py-4 border-r border-gray-300">₹800 + GST</td>
              <td className="px-6 py-4">₹1000 + GST</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-6 py-4 font-semibold border-r border-gray-300">
                Industry Professionals
              </td>
              <td className="px-6 py-4 border-r border-gray-300">
                ₹1500 + GST
              </td>
              <td className="px-6 py-4">₹2000 + GST</td>
            </tr>
          </tbody>
        </table>
        <p className="text-right w-fit py-4 text-sm italic text-gray-700">
          * 18% GST on the registration fee. (Non-refundable)
        </p>

        <p>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 px-4 py-2 bg-indigo-600 text-white font-medium rounded hover:bg-indigo-700 transition"
          >
            Registration window will open soon.
          </a>
        </p>
      </div>

      {/* Notes Section */}
      <div className="mt-6 bg-indigo-50 border border-indigo-200 rounded-lg p-5 shadow-sm">
        <h3 className="text-lg font-semibold text-indigo-800 mb-3">
          Important Notes:
        </h3>
        <ul className="list-disc text-sm text-gray-800 space-y-2 pl-4 text-justify ">
          {notes.map((note, index) => (
            <li key={index}>{note}</li>
          ))}
          <li>
            For more details, visit the{" "}
            <Link
              to="/hackathon"
              className="text-indigo-700 underline font-medium hover:text-indigo-900"
            >
              Hackathon page
            </Link>
            .
          </li>
        </ul>
      </div>
    </div>
  );
}
