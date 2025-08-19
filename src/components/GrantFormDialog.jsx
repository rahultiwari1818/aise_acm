import { useState } from "react";
import DialogBox from "./sub-components/Dialog";
import { toast } from "react-toastify";

export default function GrantFormDialog({ isOpen, onClose, onSubmit }) {
  const [email, setEmail] = useState("");
  const [idCard, setIdCard] = useState(null);
  const [collegeLetter, setCollegeLetter] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !idCard || !collegeLetter) {
      toast.info("Please fill all fields before submitting.");
      return;
    }

    const formData = new FormData();
    formData.append("email", email);
    formData.append("id_proof", idCard);
    formData.append("college_letter", collegeLetter);

    if (onSubmit) onSubmit(formData);

    setEmail("");
    setIdCard(null);
    setCollegeLetter(null);
    // onClose();
  };

  return (
    <DialogBox isOpen={isOpen} onClose={onClose} title="Register For Grant">
      <div className="p-6 w-full  bg-white rounded-2xl shadow-lg">
        <h2 className="text-xl font-semibold mb-4 text-center">
          Grant Application Form
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">Registered Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring focus:ring-blue-400 focus:outline-none"
              placeholder="Enter your registered email"
              required
            />
          </div>

          {/* ID Card Upload */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Upload ID Card (PDF/Image)
            </label>
            <input
              type="file"
              accept=".pdf,image/*"
              onChange={(e) => setIdCard(e.target.files[0])}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none"
              required
            />
          </div>

          {/* College Letter Upload */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Upload Letter from College (PDF/Image)
            </label>
            <input
              type="file"
              accept=".pdf,image/*"
              onChange={(e) => setCollegeLetter(e.target.files[0])}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none"
              required
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end space-x-3 pt-3">
            
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </DialogBox>
  );
}
