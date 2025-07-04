import SectionHeader from "./sub-components/SectionHeader";
import ChairCard from "./sub-components/Chair";
import saurabh_sir from "../assets/chairs/saurabh_tiwari.jpg";
import yash_sir from "../assets/chairs/yash_agarwal.jpg";
import RegistrationFeeAndNotes from "./sub-components/RegistrationFeeAndNotes";

const RegistrationForm = () => {
  // const [formData, setFormData] = useState({
  //   fullName: "",
  //   email: "",
  //   institution: "",
  //   country: "",
  //   position: "",
  //   education: "",
  //   motivation: "",
  //   scholarship: "",
  // });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = () => {
//     const mailto = `mailto:chemacm@unex.es?subject=Registration&body=${encodeURIComponent(
//       `Full Name: ${formData.fullName}
// Email: ${formData.email}
// Institution: ${formData.institution}
// Country: ${formData.country}
// Position: ${formData.position}
// Highest Level of Education: ${formData.education}
// Motivation: ${formData.motivation}
// Accommodation Scholarship: ${formData.scholarship}`
//     )}`;
//     window.location.href = mailto;
//   };

  return (
    <div className="min-h-screen px-4 py-8  text-black">
      <div className="max-w-3xl mx-auto">
        <SectionHeader title={"Registration"} />
        {/* <p className="text-center text-blue-600 font-medium mb-6">
          🔧 Join the Future of Software Engineering
        </p> */}
        {/* <p className="text-center  text-blue-600 font-medium mb-6">
          * Registration fees is refundable to all school participants.
        </p> */}

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6 text-sm sm:text-base">
          <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
            🚻 Limited to 40 participants
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

        <RegistrationFeeAndNotes/>

        {/* <form className="grid grid-cols-1 gap-4">
          <input
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
            className="input"
            required
          />
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your.email@example.com"
            className="input"
            required
          />
          <input
            name="institution"
            value={formData.institution}
            onChange={handleChange}
            placeholder="University, Company, Organization..."
            className="input"
            required
          />
          <input
            name="country"
            value={formData.country}
            onChange={handleChange}
            placeholder="Your country"
            className="input"
            required
          />
          <input
            name="position"
            value={formData.position}
            onChange={handleChange}
            placeholder="e.g., Software Engineer, Chemistry..."
            className="input"
            required
          />
          <select
            name="education"
            value={formData.education}
            onChange={handleChange}
            className="input"
            required
          >
            <option value="">Select your education level...</option>
            <option value="Undergraduate">Undergraduate</option>
            <option value="Postgraduate">Postgraduate</option>
            <option value="PhD">PhD</option>
            <option value="Other">Other</option>
          </select>
          <textarea
            name="motivation"
            value={formData.motivation}
            onChange={handleChange}
            placeholder="Tell us about your motivation for attending and what you expect to learn..."
            rows={4}
            className="input"
          />
          <select
            name="scholarship"
            value={formData.scholarship}
            onChange={handleChange}
            className="input"
            required
          >
            <option value="">Select an option</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>

          
        </form> */}

        {/* <button
          onClick={handleSubmit}
          className="w-full mt-6 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          🚀 Submit Registration
        </button> */}

        <div className="mt-10 text-center">
          <h2 className="text-xl font-semibold mb-2">
            👥 Contact us
          </h2>
           <section className="mt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ChairCard bio={""} name={"Saurabh Tiwari"} image={saurabh_sir}  email={"saurabh_t@dau.ac.in"} phno={"+918224009398"}/>
            <ChairCard bio={""} name={"Yash Agrawal"} image={yash_sir} email={"yash_agrawal@dau.ac.in"} phno={" +919882114669"}  />
          
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

export default RegistrationForm;
