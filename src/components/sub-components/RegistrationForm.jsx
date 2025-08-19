import { useState, useEffect } from "react";
import feeMap from "../../data/registrationFees.js";
import { toast } from "react-toastify";
import axios from "axios";

const MultiStepRegistrationForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
    affiliation: "",
    category: "",
    gender: "",
    degree: "",
    researchArea: "",
    transactionId: "",
    paymentReceipt: null,
  });

  const [errors, setErrors] = useState({});
  const [fee, setFee] = useState(null);

  useEffect(() => {
    if (formData.category) {
      setFee(feeMap[formData.category.toLowerCase()] || null);
    } else {
      setFee(null);
    }
  }, [formData.category]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const validateStep1 = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.address.trim()) newErrors.address = "Address is required.";
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      newErrors.email = "Valid email is required.";
    if (!formData.phone.match(/^[6-9]\d{9}$/))
      newErrors.phone = "Valid 10-digit phone number is required.";
    if (!formData.affiliation.trim())
      newErrors.affiliation = "Affiliation is required.";
    if (!formData.category) newErrors.category = "Please select a category.";
    if (!formData.gender) newErrors.gender = "Please select your gender.";
    if (formData.category === "student" && !formData.degree.trim())
      newErrors.degree = "Please select your current degree.";
    if (!formData.researchArea.trim())
      newErrors.researchArea = "Research Area/Project/Interest is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors = {};
    if (!formData.transactionId.trim())
      newErrors.transactionId = "Transaction ID is required.";
    if (!formData.paymentReceipt)
      newErrors.paymentReceipt = "Payment receipt is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep1()) {
      setStep(2);
    }
  };

  const handleBack = () => {
    setStep(1);
  };

  const handleSubmit = async () => {
    if (!validateStep2()) return;

    try {
      const URL = import.meta.env.VITE_API_URL;
      const form = new FormData();
      Object.keys(formData).forEach((key) => {
        form.append(key, formData[key]);
      });

      const res = await axios.post(
        `${URL}/api/v1/registration/register`,
        form,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      if (res.status === 200 || res.status === 201) {
        toast.success("🎉 Registration successful!");
        setFormData({
          name: "",
          address: "",
          email: "",
          phone: "",
          affiliation: "",
          category: "",
          gender: "",
          degree: "",
          researchArea: "",
          transactionId: "",
          paymentReceipt: null,
        });
        setStep(1);
      } else {
        toast.error("❌ Unexpected response. Please try again.");
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.errors) {
        const errorMsgs = Object.values(error.response.data.errors).join(", ");
        toast.error(`❗ ${errorMsgs}`);
      } else {
        toast.error("🚨 Server error. Please try again later.");
      }
      console.error("Submission error:", error);
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto p-6 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4 text-center">
        🎓 Registration Form
      </h2>

      {step === 1 && (
        <form className="grid grid-cols-1 gap-4">
          {[
            { name: "name", label: "Full Name", placeholder: "Your Name" },
            { name: "address", label: "Address", placeholder: "Your Address" },
            {
              name: "email",
              label: "Email",
              placeholder: "Your Email ID",
              type: "email",
            },
            {
              name: "phone",
              label: "Phone Number",
              placeholder: "Your Phone Number",
              type: "tel",
            },
            {
              name: "affiliation",
              label: "Affiliation",
              placeholder: "University/Organization",
            },
          ].map(({ name, label, placeholder, type = "text" }) => (
            <div key={name}>
              <label className="block text-sm font-medium text-gray-700">
                {label}
              </label>
              <input
                type={type}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                placeholder={placeholder}
                className="input w-full border p-2 rounded"
              />
              {errors[name] && (
                <p className="text-red-600 text-sm">{errors[name]}</p>
              )}
            </div>
          ))}

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Category
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="input w-full border p-2 rounded"
            >
              <option value="">Select category...</option>
              <option value="student">Student</option>
              <option value="academician">Academician</option>
              <option value="industry professional">
                Industry Professional
              </option>
            </select>
            {errors.category && (
              <p className="text-red-600 text-sm">{errors.category}</p>
            )}
          </div>

          {/* Degree (conditional) */}
          {formData.category && formData.category === "student" && (
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Current Degree
              </label>
              <select
                name="degree"
                value={formData.degree}
                onChange={handleChange}
                className="input w-full border p-2 rounded"
              >
                <option value="">Select degree...</option>
                <option value="Bachelors">Bachelors</option>
                <option value="Masters">Masters</option>
                <option value="PhD">PhD</option>
              </select>
              {errors.degree && (
                <p className="text-red-600 text-sm">{errors.degree}</p>
              )}
            </div>
          )}

          {/* Gender */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Gender
            </label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="input w-full border p-2 rounded"
            >
              <option value="">Select gender...</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="prefer not to say">Prefer not to say</option>
            </select>
            {errors.gender && (
              <p className="text-red-600 text-sm">{errors.gender}</p>
            )}
          </div>

          {/* Research Area */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Briefly state about your Research Area/Project/Interest
            </label>
            <textarea
              name="researchArea"
              value={formData.researchArea}
              onChange={handleChange}
              placeholder="Describe your research/project/area of interest..."
              rows={3}
              className="input w-full border p-2 rounded"
            />
            {errors.researchArea && (
              <p className="text-red-600 text-sm">{errors.researchArea}</p>
            )}
          </div>

          <button
            type="button"
            onClick={handleNext}
            className="w-full cursor-pointer mt-6 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Next ➡️
          </button>
        </form>
      )}

{step === 2 && (
  <form className="grid grid-cols-1 gap-6 bg-white p-6 rounded-2xl shadow-md">
    <div>
      {/* Fee Display */}
      {fee !== null && (
        <div className="text-blue-700 font-semibold mb-4">
          💰 Registration Fee: ₹{fee}
        </div>
      )}

      <a
        href="https://eazypay.icicibank.com/eazypayLink?P1=r+Ng5xjj7ICaXTTroOSFxg=="
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mb-4 px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition"
      >
        Pay Now
      </a>

      <label className="block text-sm font-medium text-gray-700 mb-1">
        Transaction ID
      </label>
      <input
        type="text"
        name="transactionId"
        value={formData.transactionId}
        onChange={handleChange}
        placeholder="Enter your transaction ID"
        className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
      />
      {errors.transactionId && (
        <p className="text-red-600 text-sm mt-1">{errors.transactionId}</p>
      )}
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Upload Payment Receipt (PDF/Image)
      </label>
      <input
        type="file"
        name="paymentReceipt"
        accept=".pdf,image/*"
        onChange={handleChange}
        className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
      />
      {errors.paymentReceipt && (
        <p className="text-red-600 text-sm mt-1">{errors.paymentReceipt}</p>
      )}
    </div>

    <div className="flex justify-between mt-6">
      <button
        type="button"
        onClick={handleBack}
        className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 font-medium hover:bg-gray-300 transition"
      >
        ⬅️ Back
      </button>
      <button
        type="button"
        onClick={handleSubmit}
        className="px-4 py-2 rounded-lg bg-green-600 text-white font-medium hover:bg-green-700 transition"
      >
        ✅ Submit Registration
      </button>
    </div>
  </form>
)}

    </div>
  );
};

export default MultiStepRegistrationForm;
