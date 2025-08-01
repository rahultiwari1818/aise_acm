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
    if (isOpen) {
      setRoomNumber(currentRoom);
      setStatus(currentStatus);
      console.log(currentRoom,currentStatus)
    }
  }, [isOpen, currentRoom, currentStatus]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!status) {
      toast.error("Please select a status.");
      return;
    }

    if (status === "approved" && !roomNumber.trim()) {
      toast.error("Room number is required when status is approved.");
      return;
    }

    const finalRoomNumber = status === "approved" ? roomNumber : null;

    setLoading(true);
    try {
      const URL = import.meta.env.VITE_API_URL;

      const res = await axios.put(
        `${URL}/api/v1/admin/changeBookingStatus/${registrationId}`,
        { roomNumber: finalRoomNumber, status },
        { withCredentials: true }
      );

      toast.success(res.data.message);
      onClose();
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.error || "Failed to update room status.");
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = (value) => {
    setStatus(value);
    if (value !== "approved") {
      setRoomNumber("");
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
        {/* Step 1: Status Selection */}
        <div>
          <label className="block font-semibold mb-1">Room Allocation Status</label>
          <select
            className="border p-2 rounded w-full"
            value={status}
            onChange={(e) => handleStatusChange(e.target.value)}
            required
          >
            <option value="">Select status</option>
            <option value="approved">Allocated</option>
            <option value="pending">Pending</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>

        {/* Step 2: Only show room number if status is approved */}
        {status === "approved" && (
          <div>
            <label className="block font-semibold mb-1">Room Number</label>
            <input
              type="text"
              className="border p-2 rounded w-full"
              placeholder="e.g., A-102"
              value={roomNumber}
              onChange={(e) => setRoomNumber(e.target.value)}
              required
            />
          </div>
        )}

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
