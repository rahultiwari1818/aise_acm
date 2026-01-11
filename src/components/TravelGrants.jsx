import { useCallback, useState } from "react";
import travelGrants from "../data/travelGrants";
import GrantFormDialog from "./GrantFormDialog";
import SectionHeader from "./sub-components/SectionHeader";
import { toast } from "react-toastify";
import axios from "axios";

export default function TravelGrants() {
  const [isOpenGrantFormDialog, setIsOpenGrantFormDialog] = useState(false);

  const openGrantFormDialog = () => {
    setIsOpenGrantFormDialog(true);
  };

  const closeGrantFormDialog = useCallback(() => {
    setIsOpenGrantFormDialog(false);
  }, []);

  const registerForGrant = useCallback(async(data)=>{
    try {
          const URL = import.meta.env.VITE_API_URL;
    
          const res = await axios.post(
            `${URL}/api/v1/grant/register`,
            data
          );
    
          toast.success(res.data.message);
          closeGrantFormDialog();
        } catch (err) {
          console.error(err);
          toast.error(err.response?.data?.error || "Failed to Submit Grant Details.");
        }
  },[])

  return (
    <>
      <section
        id="TravelGrants"
        className="px-4 py-12 md:px-12 max-w-7xl mx-auto"
      >
        <SectionHeader title={"Travel Grants"} />

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6 text-sm sm:text-base">
          <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
            🚻 Limited to 30 participants
          </span>
          {/* <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full">
            🗓️ Free registration deadline: 15 July
          </span> */}
        </div>

        <h2 className="text-xl font-semibold text-indigo-700 mb-2 text-center">
          Call For Applications
        </h2>

        <p className="text-gray-700 mb-6  max-w-5xl mx-auto text-justify">
          We are pleased to announce a travel grant for student participants to
          attend the AISE 2026. ACM India is providing travel grant support. The
          grant is meant to encourage outstation students studying in technical
          institutions in India to attend the school. Each travel grant covers:
        </p>
        {/* Form Button */}
        <div className="text-center my-6">
          {/* <a
          href={travelGrants.formLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-2 border-2 border-indigo-600 text-indigo-600 font-semibold rounded hover:bg-indigo-600 hover:text-white transition"
        >
          Fill the Form
        </a> */}
        </div>

        {/* Coverage */}

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-indigo-700 mb-2">
            📋 Grant Coverage for Student Participants{" "}
          </h3>
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
      </div>  */}

        {/* Eligibility */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-indigo-700 mb-2">
            ✅ Eligibility Criteria: for students
          </h3>
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

        {/* Travel Grant Reg Form */}
        <div className="text-center my-6">
          {/* <a
          href={travelGrants.registrationLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-2 border-2 border-indigo-600 text-indigo-600 font-semibold rounded hover:bg-indigo-600 hover:text-white transition"
        >
          Grant Registration window will open soon.
        </a> */}

          <button
            className="inline-block mt-2 px-4 py-2 bg-indigo-600 text-white font-medium rounded hover:bg-indigo-700 transition cursor-not-allowed"
            // onClick={openGrantFormDialog}
            disabled
          >
            Register For Grant
          </button>
        </div>

        {/* Note Section */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-indigo-700 mb-2">
            📌 Note for School Participants
          </h3>
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
          </a>,
          
          <a
            href={`mailto:aise2026.dau@gmail.com`}
            className="text-blue-600 underline lg:px-4 block lg:inline"
          >
           aise2026.dau@gmail.com 
          </a>
          
        </div>
      </section>
      <GrantFormDialog
        isOpen={isOpenGrantFormDialog}
        onClose={closeGrantFormDialog}
        onSubmit={registerForGrant}
      />
    </>
  );
}
