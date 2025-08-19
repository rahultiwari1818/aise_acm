import { useCallback, useState } from "react";
import data from "../data/accomodation.js";
import SectionHeader from "./sub-components/SectionHeader.jsx";
import HostelForm from "./HostelFormDialog.jsx";

// export default function Accommodation() {
//   return (
//     <section className="px-4 py-12 md:px-12 max-w-7xl mx-auto">
//       <SectionHeader title={"Accommodation"}/>
//       <p className="text-center text-gray-600 max-w-2xl mx-auto mb-6">
//         DAU offers a wide range of accommodation options to suit every budget and preference.
//         Special rates may be available for Winter School attendees at partner hotels.
//       </p>

//       {/* <div className="bg-blue-50 text-sm text-blue-900 border border-blue-200 rounded-lg p-4 mb-8">
//         <strong>🏷️ Accommodation Scholarships Available:</strong> We are working to offer
//         scholarships that may cover part of the students’ accommodation costs. If you're interested
//         in applying for one, please indicate this in the registration form.
//       </div> */}

//       {/* <div className="grid md:grid-cols-2 gap-8">
//         {data["partners"].map((group, index) => (
//           <div key={index}>
//             <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-indigo-600">
//               {group.type === "Partner Hotels" ? "🏨" : "🏛️"} {group.type}
//             </h3>
//             {group.hotels.map((hotel, idx) => (
//               <div
//                 key={idx}
//                 className="border border-gray-200 rounded-xl shadow-sm p-4 mb-6 bg-white"
//               >
//                 <h4 className="font-bold text-gray-900 text-md mb-1">{hotel.name}</h4>
//                 <p className="text-sm text-gray-600 mb-2">{hotel.description}</p>
//                 <iframe
//                   src={hotel.mapSrc}
//                   title={hotel.name}
//                   width="100%"
//                   height="200"
//                   className="rounded-md border"
//                   allowFullScreen
//                   loading="lazy"
//                   referrerPolicy="no-referrer-when-downgrade"
//                 />
//                 <div className="mt-4">
//                   <a
//                     href={hotel.website}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-block px-4 py-1 text-sm bg-indigo-50 text-indigo-700 font-medium border border-indigo-200 rounded hover:bg-indigo-100"
//                   >
//                     Visit Website
//                   </a>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ))}
//       </div> */}

      
//     </section>
//   );
// }


export default function Accommodation() {


  const acc = data.accommodation;

  const [isOpenHostelFormDialog,setIsOpenHostelFormDialog] = useState(false);

  const openHostelFormDialog = () =>{
    setIsOpenHostelFormDialog(true);
  }

  const closeHostelFormDialog = useCallback(()=>{
    setIsOpenHostelFormDialog(false);
  },[]);

  return (
    <>
    <section id="Accommodation" className="px-4 py-12 md:px-12 max-w-7xl mx-auto">
      <SectionHeader title={"Accommodation"} />

      <p className="text-center text-gray-600 max-w-4xl mx-auto mb-6">
        The hostel accommodation is availiable for 40  participants on sharing basis in boys and girls hostels within DAU campus.
      </p>

      {/* Main Info */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8 space-y-4 text-gray-700">
        <p><strong>✅ Availability:</strong> {acc.availability}</p>
        <p><strong>ℹ️ Confirmation:</strong> {acc.confirmation}</p>
        <p><strong>💰 Charges:</strong> {acc.charges}</p>
        
      </div>

      {/* Contact Info */}
      {/* <div className="grid md:grid-cols-2 gap-6 mb-10">
        <div className="p-4 border rounded-lg shadow-sm bg-white">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">👨 Male Contact</h3>
          <p><strong>{acc.contacts.male.name}</strong></p>
          <p className="text-blue-600">{acc.contacts.male.phone}</p>
        </div>

        <div className="p-4 border rounded-lg shadow-sm bg-white">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">👩 Female Contact</h3>
          <p><strong>{acc.contacts.female.name}</strong></p>
          <p className="text-blue-600">{acc.contacts.female.phone}</p>
        </div>
      </div> */}


<div className="lg:flex justify-between items-center gap-5 ">

      {/* Female  Info */}
      <div className="mb-8 bg-pink-50 border border-pink-200 p-6 rounded-lg">
        <h3 className="text-md font-semibold text-pink-700 mb-2">👩‍🏫 Female  Accommodation</h3>
        <p><strong>📍 Location:</strong> {acc.female_faculty.location}</p>
        <p><strong>💰 Charges:</strong> {acc.female_faculty.charges}</p>
        <p><strong>📢 Notification:</strong> {acc.female_faculty.notification}</p>
        {/* <p><strong>✅ Action Required:</strong> {acc.female_faculty.action_required}</p> */}
        {/* <p>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 px-4 py-2 bg-indigo-600 text-white font-medium rounded hover:bg-indigo-700 transition"
          >
            Form will be available soon
          </a>
        </p> */}
      </div>

      {/* Male  Info */}
      <div className="mb-8 bg-pink-50 border border-pink-200 p-6 rounded-lg">
        <h3 className="text-md font-semibold text-pink-700 mb-2">👩‍🏫 Male  Accommodation</h3>
        <p><strong>📍 Location:</strong> {acc.male_faculty.location}</p>
        <p><strong>💰 Charges:</strong> {acc.male_faculty.charges}</p>
        <p><strong>📢 Notification:</strong> {acc.male_faculty.notification}</p>
        {/* <p><strong>✅ Action Required:</strong> {acc.male_faculty.action_required}</p> */}
        {/* <p>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 px-4 py-2 bg-indigo-600 text-white font-medium rounded hover:bg-indigo-700 transition"
          >
            Form will be available soon
          </a>
        </p> */}
      </div>
</div>

<div className=" flex justify-center items-center py-5">
  <button className="inline-block mt-2 px-4 py-2 bg-indigo-600 text-white font-medium rounded hover:bg-indigo-700 transition"
  onClick={openHostelFormDialog}
  >
    Book Hostel
  </button>
</div>

      {/* Male Faculty / Industry */}
      <div className="mb-8 bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
        <h3 className="text-md font-semibold text-yellow-700 mb-2">🏢 Faculty/Industrial Participants</h3>
        <p>{acc.male_faculty_and_industrial_persons.recommendation}</p>
        <p>
          <a
            href={acc.male_faculty_and_industrial_persons.hotel_list_link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-800 underline"
          >

            Check Hotels.
          </a>
        </p>
      </div>

      {/* INFLIBNET Option */}
      {/* <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
        <h3 className="text-md font-semibold text-blue-700 mb-2">🏠 Other Option: INFLIBNET Guest House</h3>
        <p><strong>🌐 Website:</strong> <a href={acc.other_options.INFLIBNET.website} className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Visit</a></p>
        <p><strong>📍 Address:</strong> {acc.other_options.INFLIBNET.address}</p>
        <p><strong>📏 Distance:</strong> {acc.other_options.INFLIBNET.distance}</p>
        <p><strong>🧭 Directions:</strong> {acc.other_options.INFLIBNET.directions}</p>
        <ul className="list-disc pl-5 mt-2 text-gray-600">
          {acc.other_options.INFLIBNET.requirements.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div> */}
    </section>
    <HostelForm isOpen={isOpenHostelFormDialog} onClose={closeHostelFormDialog}/>
    </>
  );
}
