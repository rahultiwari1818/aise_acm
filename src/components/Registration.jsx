import SectionHeader from "./sub-components/SectionHeader";
import ChairCard from "./sub-components/Chair";
import saurabh_sir from "../assets/chairs/saurabh_tiwari.jpg";
import yash_sir from "../assets/chairs/yash_agarwal.jpg";
import RegistrationFeeAndNotes from "./sub-components/RegistrationFeeAndNotes";
import RegistrationForm from "./sub-components/RegistrationForm";
import WhoCanAttend from "./sub-components/WhoCanAttend";
import { useEffect, useState } from "react";
import axios from "axios";

const Registration = () => {
  const [seats, setSeats] = useState(0);
  const TOTAL_SEATS = import.meta.env.VITE_TOTAL_SEATS;

  useEffect(() => {
    const fetchSeats = async () => {
      try {
        const URL = import.meta.env.VITE_API_URL;
        const { data } = await axios.get(
          `${URL}/api/v1/registration/noOfRegisteredUsers`
        );
        setSeats(data.data);
      } catch (error) {
        console.log("Error while getting seats: ", error);
        setSeats(0); // fallback value
      }
    };

    fetchSeats();
  }, []);

  return (
    <div className="min-h-screen px-4 py-8  text-black">
      <div className="max-w-3xl mx-auto">
        <SectionHeader title={"Registration"} />
        <WhoCanAttend />
        {/* <p className="text-center text-blue-600 font-medium mb-6">
          🔧 Join the Future of Software Engineering
        </p> */}
        {/* <p className="text-center  text-blue-600 font-medium mb-6">
          * Registration fees is refundable to all school participants.
        </p> */}

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6 text-sm sm:text-base">
          <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
            🚻 Limited to {TOTAL_SEATS} participants
          </span>

          {/* <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full">
            🗓️ Free registration deadline: 15 July
          </span> */}
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6 text-sm sm:text-base">
          <span className="bg-blue-100 text-red-800 px-4 py-2 rounded-full">
            🚻 Only {TOTAL_SEATS - seats} Seats Left.
          </span>

          {/* <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full">
            🗓️ Free registration deadline: 15 July
          </span> */}
        </div>
        {/* <div className="text-center mb-2 font-semibold text-lg">
          📧 How to Register
        </div>
        <p className="text-center text-sm text-gray-500 mb-6">
          Fill out the form below or contact us directly at{" "}
          <a href="mailto:chemacm@unex.es" className="text-blue-600 underline">
            chemacm@unex.es
          </a>
        </p> */}

        {/* <div className="bg-blue-50 border border-blue-300 p-3 rounded mb-6 text-sm text-blue-700">
          <strong>Note:</strong> After clicking “Submit Registration”, your
          default email client will open with the form data pre-filled. Simply
          send the email to complete your registration.
        </div> */}

        <RegistrationFeeAndNotes />

        {/* {
          seats < 40 
          && */}

        <RegistrationForm />
        {/* } */}


        {/* <div className="mt-10 bg-yellow-50 border-l-4 border-yellow-400 p-5 rounded-lg shadow-sm">
      <div className="flex items-center mb-3">
        <AlertCircle className="text-yellow-600 mr-2" size={22} />
        <h2 className="text-xl font-semibold text-yellow-700">
          Important Note
        </h2>
      </div>
      <p className="text-gray-700 leading-relaxed">
        After submitting your registration details,{" "}
        <span className="font-semibold text-yellow-800">
          you will receive an email
        </span>{" "}
        (if selected for participation in the school) to submit the registration
        fees. Once you pay the registration fees, your registration will be{" "}
        <span className="font-semibold text-yellow-800">
          confirmed by the organisers via email
        </span>
        .
      </p>
    </div> */}

        <div className="mt-10 text-center">
          <h2 className="text-xl font-semibold mb-2">👥 Contact us</h2>
          <section className="mt-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* <ChairCard
                bio={""}
                name={"Saurabh Tiwari"}
                image={saurabh_sir}
                email={"saurabh_t@dau.ac.in"}
                phno={"+9107968261618"}
              />
              <ChairCard
                bio={""}
                name={"Yash Agrawal"}
                image={yash_sir}
                email={"yash_agrawal@dau.ac.in"}
                phno={" +9107968261629"}
              /> */}
              <ChairCard
  name="Saurabh Tiwari"
  image={saurabh_sir}
  email="saurabh_t@dau.ac.in"
  phno="+917968261618"  // Raw format (for processing)
/>

<ChairCard
  name="Yash Agrawal"
  image={yash_sir}
  email="yash_agrawal@dau.ac.in"
  phno="+917968261629"
/>

            </div>
          </section>
          {/* <div className="flex flex-col sm:flex-row justify-center gap-8 text-sm text-gray-700">
            <div>
              <p className="font-medium">Saurabh Tiwari</p>
              <p>Associate Professor</p>
              <a
                href="mailto:saurabh_t@daiict.ac.in"
                className="text-blue-600 underline"
              >
                saurabh_t@daiict.ac.in
              </a>
            </div>
            <div>
              <p className="font-medium">Yash Agrawal</p>
              <p>Associate Professor</p>
              <a
                href="mailto:yash_agrawal@daiict.ac.in"
                className="text-blue-600 underline"
              >
                yash_agrawal@daiict.ac.in
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Registration;
