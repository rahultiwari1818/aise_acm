import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { formatDateToDDMMYYYY } from "../utils/dateUtils";
import AllocateRoomDialog from "../components/AllocateRoomDialog";

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [hostels, setHostels] = useState([]);
  const [view, setView] = useState("users");
  const [loading, setLoading] = useState(true);

  const [isOpenAllocateRoomDialog, setIsOpenAllocateRoomDialog] = useState(false);
  const [selectedRegistrationId, setSelectedRegistrationId] = useState(null);

  const URL = import.meta.env.VITE_API_URL;

  const closeAllocateRoomDialog = useCallback(() => {
    setIsOpenAllocateRoomDialog(false);
    setSelectedRegistrationId(null);
    fetchHostelRegistrations(); // Refresh data on close
  }, []);

  const openAllocateRoomDialog = (id) => {
    setSelectedRegistrationId(id);
    setIsOpenAllocateRoomDialog(true);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${URL}/api/v1/admin/getAllUsers`, {
        withCredentials: true,
      });
      setUsers(res.data.data);
    } catch (err) {
        console.log(err);
      toast.error("Failed to load users");
    } finally {
      setLoading(false);
    }
  };

  const fetchHostelRegistrations = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${URL}/api/v1/admin/getAllHostelBookings`, {
        withCredentials: true,
      });
      setHostels(res.data.data);
    } catch (err) {
        console.log(err);
      toast.error("Failed to load hostel data");
    } finally {
      setLoading(false);
    }
  };

  const handleViewChange = (v) => {
    setView(v);
    if (v === "hostels" && hostels.length === 0) {
      fetchHostelRegistrations();
    }
  };

  return (
    <>
      <div className="p-6 bg-gray-100 mt-16 md:mt-5 min-h-screen">
        <h1 className="text-3xl font-bold mb-6 text-blue-700">Admin Dashboard</h1>

        <div className="mb-4 md:flex gap-4">
          <button
            onClick={() => handleViewChange("users")}
            className={`px-4 py-2 rounded my-2 cursor-pointer ${
              view === "users"
                ? "bg-blue-600 text-white"
                : "bg-white border border-gray-300"
            }`}
          >
            Registered Users
          </button>
          <button
            onClick={() => handleViewChange("hostels")}
            className={`px-4 py-2 rounded my-2 cursor-pointer ${
              view === "hostels"
                ? "bg-blue-600 text-white"
                : "bg-white border border-gray-300"
            }`}
          >
            Hostel Registrations
          </button>
        </div>

        {loading ? (
          <p className="text-gray-600">Loading...</p>
        ) : view === "users" ? (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border rounded shadow-sm">
              <thead className="bg-gray-200">
                <tr>
                  <th className="p-3 text-left">#</th>
                  <th className="p-3 text-left">Name</th>
                  <th className="p-3 text-left">Email</th>
                  <th className="p-3 text-left">Phone</th>
                  <th className="p-3 text-left">Category</th>
                  <th className="p-3 text-left">Gender</th>
                </tr>
              </thead>
              <tbody>
                {users.map((u, i) => (
                  <tr key={u.id} className="border-t hover:bg-gray-50">
                    <td className="p-3">{i + 1}</td>
                    <td className="p-3">{u.name}</td>
                    <td className="p-3">{u.email}</td>
                    <td className="p-3">{u.phone_number}</td>
                    <td className="p-3 capitalize">{u.category}</td>
                    <td className="p-3">{u.gender}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border rounded shadow-sm">
              <thead className="bg-gray-200">
                <tr>
                  <th className="p-3 text-left">#</th>
                  <th className="p-3 text-left">Email/Phone</th>
                  <th className="p-3 text-left">From</th>
                  <th className="p-3 text-left">To</th>
                  <th className="p-3 text-left">Days</th>
                  <th className="p-3 text-left">Proof</th>
                  <th className="p-3 text-left">Room No</th>
                  <th className="p-3 text-left">Status</th>
                  <th className="p-3 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {hostels.map((h, i) => (
                  <tr key={h.id} className="border-t hover:bg-gray-50">
                    <td className="p-3">{i + 1}</td>
                    <td className="p-3">{h.name}</td>
                    <td className="p-3">{formatDateToDDMMYYYY(h.from_date)}</td>
                    <td className="p-3">{formatDateToDDMMYYYY(h.to_date)}</td>
                    <td className="p-3">{h.days}</td>
                    <td className="p-3">
                      <a
                        href={`${URL}/${h.id_proof}`}
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        View Proof
                      </a>
                    </td>
                    <td className="p-3">{h.room_number || "Not Allocated"}</td>
                    <td
                      className={`p-3 capitalize font-medium ${
                        h.status === "approved"
                          ? "text-green-600"
                          : h.status === "rejected"
                          ? "text-red-600"
                          : "text-yellow-600"
                      }`}
                    >
                      {h.status}
                    </td>
                    <td className="p-3">
                      <button
                        onClick={() => openAllocateRoomDialog(h.id)}
                        className={`px-3 py-2 text-sm rounded ${
                          h.status === "pending"
                            ? "bg-green-600 hover:bg-green-700"
                            : "bg-orange-500 hover:bg-orange-600"
                        } text-white`}
                      >
                        {h.status === "pending" ? "Allocate Room" : "Change Status"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <AllocateRoomDialog
        isOpen={isOpenAllocateRoomDialog}
        onClose={closeAllocateRoomDialog}
        registrationId={selectedRegistrationId}
      />
    </>
  );
}
