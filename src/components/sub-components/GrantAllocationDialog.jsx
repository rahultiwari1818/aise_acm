import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import DialogBox from "./Dialog";

const GrantAllocationDialog = ({
  isOpen,
  onClose,
  id,
  currentStatus
}) => {
  const [status, setStatus] = useState(currentStatus);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setStatus(currentStatus);
      // console.log(currentRoom,currentStatus,registrationId)
    }
  }, [isOpen, currentStatus]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!status) {
      toast.error("Please select a status.");
      return;
    }



    setLoading(true);
    try {
      const URL = import.meta.env.VITE_API_URL;

      const res = await axios.put(
        `${URL}/api/v1/admin/changeGrantStatus`,
        { grantId:id,status },
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
    
  };

  return (
    <DialogBox
      isOpen={isOpen}
      onClose={onClose}
      title="Change Grant Status"
      confirmText="Save"
      cancelText="Cancel"
      onConfirm={handleSubmit}
    >
      <form onSubmit={handleSubmit} className="grid gap-4 text-sm">
        {/* Step 1: Status Selection */}
        <div>
          <label className="block font-semibold mb-1">Grant Status</label>
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

export default GrantAllocationDialog;
