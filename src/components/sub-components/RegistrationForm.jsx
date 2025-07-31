import { useState, useEffect } from "react";
import feeMap from "../../data/registrationFees.js";
import { toast } from "react-toastify";
import axios from "axios";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
    affiliation: "",
    category: "",
    gender: "",
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
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.address.trim()) newErrors.address = "Address is required.";
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      newErrors.email = "Valid email is required.";
    if (!formData.phone.match(/^[6-9]\d{9}$/))
      newErrors.phone = "Valid 10-digit phone number is required.";
    if (!formData.affiliation.trim()) newErrors.affiliation = "Affiliation is required.";
    if (!formData.category) newErrors.category = "Please select a category.";
    if (!formData.gender) newErrors.gender = "Please select your gender.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    try {
        const URL = import.meta.env.VITE_API_URL;
    const res = await axios.post(`${URL}/api/v1/registration/register`, formData);

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
      });
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
      <h2 className="text-xl font-bold mb-4 text-center">🎓 Registration Form</h2>

      <form className="grid grid-cols-1 gap-4">
        {[
          { name: "name", label: "Full Name", placeholder: "Your Name" },
          { name: "address", label: "Address", placeholder: "Your Address" },
          { name: "email", label: "Email", placeholder: "Your Email ID", type: "email" },
          { name: "phone", label: "Phone Number", placeholder: "Your Phone Number", type: "tel" },
          { name: "affiliation", label: "Affiliation", placeholder: "University/Organization" },
        ].map(({ name, label, placeholder, type = "text" }) => (
          <div key={name}>
            <label className="block text-sm font-medium text-gray-700">{label}</label>
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
          <label className="block text-sm font-medium text-gray-700">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="input w-full border p-2 rounded"
          >
            <option value="">Select category...</option>
            <option value="student">Student</option>
            <option value="academician">Academician</option>
            <option value="industry professional">Industry Professional</option>
          </select>
          {errors.category && (
            <p className="text-red-600 text-sm">{errors.category}</p>
          )}
        </div>

        {/* Gender */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="input w-full border p-2 rounded"
          >
            <option value="">Select gender...</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {errors.gender && (
            <p className="text-red-600 text-sm">{errors.gender}</p>
          )}
        </div>

        {/* Fee Display */}
        {fee !== null && (
          <div className="text-blue-700 font-medium">
            💰 Registration Fee: ₹{fee}
          </div>
        )}
      </form>

      <button
        onClick={handleSubmit}
        className="w-full cursor-pointer mt-6 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        🚀 Submit Registration
      </button>
    </div>
  );
};

export default RegistrationForm;
