import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import DialogBox from "./sub-components/Dialog";

const HostelForm = ({ isOpen, onClose }) => {
  const [form, setForm] = useState({
    emailOrPhone: "",
    fromDate: "",
    toDate: "",
    file: null,
  });

  const [days, setDays] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const MIN_DATE = "2026-01-06";
  const MAX_DATE = "2026-01-11";

  const calculateDays = (from, to) => {
    const start = new Date(from);
    const end = new Date(to);
    if (start > end) return 0;
    return Math.ceil((end - start) / (1000 * 60 * 60 * 24)) + 1;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedForm = { ...form, [name]: value };

    // Update days only when both dates are selected
    if (name === "fromDate" || name === "toDate") {
      const d = calculateDays(
        name === "fromDate" ? value : form.fromDate,
        name === "toDate" ? value : form.toDate
      );
      setDays(d);
    }

    setForm(updatedForm);
  };

  const handleFileChange = (e) => {
    setForm({ ...form, file: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { emailOrPhone, fromDate, toDate, file } = form;

    if (!emailOrPhone || !fromDate || !toDate || !file) {
      toast.error("All fields are required.");
      return;
    }

    const from = new Date(fromDate);
    const to = new Date(toDate);
    const minDate = new Date(MIN_DATE);
    const maxDate = new Date(MAX_DATE);

    if (from < minDate || to > maxDate) {
      toast.error("Dates must be between Jan 6 and Jan 11, 2026.");
      return;
    }

    if (from >= to) {
      toast.error("From date must be earlier than To date.");
      return;
    }

    setIsSubmitting(true);

    const data = new FormData();
    data.append("emailOrPhone", emailOrPhone);
    data.append("fromDate", fromDate);
    data.append("toDate", toDate);
    data.append("days", days);
    data.append("idProof", file);

    try {
      const URL = import.meta.env.VITE_API_URL;

      const res = await axios.post(`${URL}/api/v1/hostel/register`, data);
      toast.success(res.data.message);
      setForm({
        emailOrPhone: "",
        fromDate: "",
        toDate: "",
        file: null,
      });
      setDays(0);
      onClose();
    } catch (err) {
      toast.error(err.response?.data?.error || "Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <DialogBox
      isOpen={isOpen}
      onClose={onClose}
      title="Hostel Accommodation Form"
      confirmText="Submit"
      cancelText="Cancel"
      onConfirm={handleSubmit}
    >
      <form onSubmit={handleSubmit} className="grid gap-4 text-sm">
        <div>
          <label className="block font-semibold mb-1">
            Registered Email or Phone
          </label>
          <input
            name="emailOrPhone"
            placeholder="Enter your email or phone number"
            value={form.emailOrPhone}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
        </div>

        <div className="flex gap-4">
          <div className="w-1/2">
            <label className="block font-semibold mb-1">From Date</label>
            <input
              name="fromDate"
              type="date"
              value={form.fromDate}
              onChange={handleChange}
              className="border p-2 rounded w-full"
              min={MIN_DATE}
              max={MAX_DATE}
              required
            />
          </div>
          <div className="w-1/2">
            <label className="block font-semibold mb-1">To Date</label>
            <input
              name="toDate"
              type="date"
              value={form.toDate}
              onChange={handleChange}
              className="border p-2 rounded w-full"
              min={form.fromDate || MIN_DATE}
              max={MAX_DATE}
              required
            />
          </div>
        </div>

        {days > 0 && (
          <p className="text-blue-600 font-medium text-sm">
            🛏️ Hostel will be booked for <strong>{days}</strong> day
            {days > 1 ? "s" : ""}.
          </p>
        )}

        <div>
          <label className="block font-semibold mb-1">
            Upload ID Proof (PDF/JPG/PNG)
          </label>
          <input
            name="idProof"
            type="file"
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={handleFileChange}
            className="border p-2 rounded w-full"
            required
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </DialogBox>
  );
};

export default HostelForm;
