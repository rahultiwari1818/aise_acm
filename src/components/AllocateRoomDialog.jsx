import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import DialogBox from "./sub-components/Dialog";

const AllocateRoomDialog = ({
  isOpen,
  onClose,
  registrationId,
  currentRoom = "",
  currentStatus = "",
}) => {
  const [roomNumber, setRoomNumber] = useState(currentRoom);
  const [status, setStatus] = useState(currentStatus);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Reset state on dialog open
    if (isOpen) {
      setRoomNumber(currentRoom);
      setStatus(currentStatus);
    }
  }, [isOpen, currentRoom, currentStatus]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (status === "allocated" && !roomNumber.trim()) {
      toast.error("Room number is required when allocating.");
      return;
    }

    const finalRoomNumber =
      status === "pending" || status === "rejected" ? null : roomNumber;

    setLoading(true);
    try {
      const URL = import.meta.env.VITE_API_URL;

      const res = await axios.put(
        `${URL}/api/v1/admin/changeBookingStatus/${registrationId}`,
        { roomNumber: finalRoomNumber, status },
        { withCredentials: true }
      );

      toast.success(res.data.message);
      onClose(); // Close dialog after success
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.error || "Failed to update room status.");
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = (value) => {
    setStatus(value);

    if (value === "Pending" || value === "Rejected") {
      setRoomNumber(""); // Clear room number
    }
  };

  return (
    <DialogBox
      isOpen={isOpen}
      onClose={onClose}
      title="Allocate Room / Change Status"
      confirmText="Save"
      cancelText="Cancel"
      onConfirm={handleSubmit}
    >
      <form onSubmit={handleSubmit} className="grid gap-4 text-sm">
        <div>
          <label className="block font-semibold mb-1">Room Number</label>
          <input
            type="text"
            className="border p-2 rounded w-full"
            placeholder="e.g., A-102"
            value={roomNumber}
            onChange={(e) => setRoomNumber(e.target.value)}
            disabled={status !== "allocated"}
            required={status === "allocated"}
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">
            Room Allocation Status
          </label>
          <select
            className="border p-2 rounded w-full"
            value={status}
            onChange={(e) => handleStatusChange(e.target.value)}
            required
          >
            <option value="">Select status</option>
            <option value="allocated">Allocated</option>
            <option value="pending">Pending</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          {loading ? "Updating..." : "Update"}
        </button>
      </form>
    </DialogBox>
  );
};

export default AllocateRoomDialog;
