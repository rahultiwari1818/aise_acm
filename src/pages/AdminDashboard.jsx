import { useCallback, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { formatDateToDDMMYYYY } from "../utils/dateUtils";
import AllocateRoomDialog from "../components/AllocateRoomDialog";
import exportToExcel from "../utils/exportToExcel";
import SearchBar from "../components/sub-components/SearchBar";
import debounce from "../utils/otherUtils.js";
import ViewUserDialog from "../components/sub-components/ViewUserDialog.jsx";
import GrantAllocationDialog from "../components/sub-components/GrantAllocationDialog.jsx";


export default function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [hostels, setHostels] = useState([]);
  const [grants, setGrants] = useState([]);
  const [view, setView] = useState("users");
  const [loading, setLoading] = useState(true);

  const [isOpenAllocateRoomDialog, setIsOpenAllocateRoomDialog] =
    useState(false);

      const [isOpenGrantDialog, setIsOpenGrantDialog] =
    useState(false);


    const [grantData,setGrantData] = useState({
      id:"",status:""
    })

  const [isOpenUserDetailsDialog,setIsOpenUserDetailsDialog] = useState(false);

  const openGrantDialog = (id,status)=>{
    setIsOpenGrantDialog(true);
    setGrantData(()=>{
      return {
        id,status
      }
    })
  }

  const closeGrantDialog = useCallback(()=>{
    setIsOpenGrantDialog(false);
    setGrantData(()=>{
      return {
        id:"",status:""
      }
    })
  },[]);

  const closeUserDetailsDialog = useCallback(()=>{
    setIsOpenUserDetailsDialog(false);
  },[])



  
  const [selectedUserDetails, setSelectedUserDetails] = useState({
    email:"",
    phno:"",
    name:"",
    research_area:"",
    category:"",
    registered_on:""
  });





  const [selectedRegistrationData, setSelectedRegistrationData] = useState({
    id: "",
    allocatedRoom: "",
    status: "",
  });

  const URL = import.meta.env.VITE_API_URL;

  const closeAllocateRoomDialog = useCallback(() => {
    setIsOpenAllocateRoomDialog(false);
    setSelectedRegistrationData({
      id: "",
      allocatedRoom: "",
      status: "",
    });
    fetchHostelRegistrations(); // Refresh data on close
  }, []);

  const openAllocateRoomDialog = (id, roomNo, status) => {
    setSelectedRegistrationData({
      id: id,
      allocatedRoom: roomNo,
      status: status,
    });
    setIsOpenAllocateRoomDialog(true);
  };

  const fetchHostelRegistrations = async (search = "") => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${URL}/api/v1/admin/getAllHostelBookings?search=${search}`,
        { withCredentials: true }
      );
      setHostels(res.data.data);
    } catch (err) {
      console.log(err);
      toast.error("Failed to load hostel data");
    } finally {
      setLoading(false);
    }
  };

  const fetchUsers = async (search = "") => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${URL}/api/v1/admin/getAllUsers?search=${search}`,
        { withCredentials: true }
      );
      setUsers(res.data.data);
    } catch (err) {
      console.log(err);
      toast.error("Failed to load users");
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Fetch Grant Registrations
  const fetchGrantRegistrations = async (search = "") => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${URL}/api/v1/admin/getAllGrantRegistrations?search=${search}`,
        { withCredentials: true }
      );
      setGrants(res.data.data);
    } catch (err) {
      console.log(err);
      toast.error("Failed to load grant data");
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Extend handleViewChange
  const handleViewChange = (v) => {
    setView(v);
    if (v === "users" ) {
      fetchUsers();
    } else if (v === "hostels" ) {
      fetchHostelRegistrations();
    } else if (v === "grants" ) {
      fetchGrantRegistrations();
    }
  };

  // 🔹 Update searchHandler
  const searchHandler = useCallback(
    debounce(async (searchTerm) => {
      if (view === "users") {
        await fetchUsers(searchTerm);
      } else if (view === "hostels") {
        await fetchHostelRegistrations(searchTerm);
      } else if (view === "grants") {
        await fetchGrantRegistrations(searchTerm);
      }
    }, 300),
    [view]
  );

  return (
    <>
      <div className="p-6 bg-gray-100 mt-16 md:mt-5 min-h-screen">
        <h1 className="text-3xl font-bold mb-6 text-blue-700">
          Admin Dashboard
        </h1>

        {/* 🔹 Buttons */}
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

          <button
            onClick={() => handleViewChange("grants")}
            className={`px-4 py-2 rounded my-2 cursor-pointer ${
              view === "grants"
                ? "bg-blue-600 text-white"
                : "bg-white border border-gray-300"
            }`}
          >
            Grant Registrations
          </button>

          <button
            onClick={() =>
              view === "hostels"
                ? exportToExcel(hostels)
                : view === "users"
                ? exportToExcel(users)
                : exportToExcel(grants)
            }
            className="px-4 py-2 rounded my-2 cursor-pointer bg-green-500 text-white hover:text-green-500 hover:bg-white hover:border-green-500 border"
          >
            Export{" "}
            {view === "hostels"
              ? "Hostel"
              : view === "users"
              ? "User"
              : "Grant"}{" "}
            Data
          </button>
        </div>

        <div className="my-4">
          <SearchBar
            onSearch={searchHandler}
            placeholder={
              view === "hostels"
                ? "Search by name, email, phone, status, room no, dates..."
                : view === "users"
                ? "Search users..."
                : "Search grants..."
            }
          />
        </div>

        {/* 🔹 GRANT TABLE */}
        {loading ? (
          <p className="text-gray-600">Loading...</p>
        ) : view === "grants" ? (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border rounded shadow-sm">
              <thead className="bg-gray-200">
                <tr>
                  <th className="p-3 text-left">Sr.No</th>
                  <th className="p-3 text-left">Name</th>
                  <th className="p-3 text-left">Email</th>
                  <th className="p-3 text-left">Phone</th>
                  <th className="p-3 text-left">ID Proof</th>
                  <th className="p-3 text-left">College Letter</th>
                  <th className="p-3 text-left">Status</th>
                  <th className="p-3 text-left">Applied On</th>
                  <th className="p-3 text-left">Action</th>

                </tr>
              </thead>
              <tbody>
                {grants.length === 0 ? (
                  <tr className="border-t hover:bg-gray-50">
                    <td className="p-3 text-center" colSpan={7}>
                      No Grant Registrations Found
                    </td>
                  </tr>
                ) : (
                  grants.map((g, i) => (
                    <tr key={g._id} className="border-t hover:bg-gray-50">
                      <td className="p-3">{i + 1}</td>
                      <td className="p-3">{g.user_id?.name}</td>
                      <td className="p-3">{g.user_id?.email}</td>
                      <td className="p-3">{g.user_id?.phone_number}</td>
                      <td className="p-3">
                        <a
                          href={`${URL}/${g.id_proof}`}
                          target="_blank"
                          rel="noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          View
                        </a>
                      </td>
                      <td className="p-3">
                        <a
                          href={`${URL}/${g.college_letter}`}
                          target="_blank"
                          rel="noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          View
                        </a>
                      </td>
                      <td className="p-3">
                        {formatDateToDDMMYYYY(g.created_at)}
                      </td>
                                            <td
                        className={`p-3 capitalize font-medium ${
                          g.status === "approved"
                            ? "text-green-600"
                            : g.status === "rejected"
                            ? "text-red-600"
                            : "text-yellow-600"
                        }`}
                      >
                        {g.status}
                      </td>
                      <td className="p-3">
                        <button
                          onClick={() =>{

                            console.log("called");
                            openGrantDialog(
                              g._id,
                              g.status
                            )
                          }
                          }
                          className={`px-3 py-2 text-sm rounded ${
                            g.status === "pending"
                              ? "bg-green-600 hover:bg-green-700"
                              : "bg-orange-500 hover:bg-orange-600"
                          } text-white`}
                        >
                          Change Status
                        </button>
                        </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        ) : view === "users" ? (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border rounded shadow-sm">
              <thead className="bg-gray-200">
                <tr>
                  <th className="p-3 text-left">Sr.No</th>
                  <th className="p-3 text-left">Name</th>
                  <th className="p-3 text-left">Email</th>
                  <th className="p-3 text-left">Phone</th>
                  <th className="p-3 text-left">Category</th>
                  <th className="p-3 text-left">Current Degree</th>
                  <th className="p-3 text-left">Gender</th>
                  <th className="p-3 text-left">Area of Research</th>
                  <th className="p-3 text-left">Transaction ID</th>
                  <th className="p-3 text-left">Transaction Reciept</th>
                  <th className="p-3 text-left">Registered On</th>
                </tr>
              </thead>
              <tbody>
                {users.length === 0 ? (
                  <tr className="border-t hover:bg-gray-50">
                    <td className="p-3 text-center" colSpan={11}>
                      No Users Found
                    </td>
                  </tr>
                ) : (
                  users.map((u, i) => (
                    <tr key={u.id} className="border-t hover:bg-gray-50">
                      <td className="p-3">{i + 1}</td>
                      <td className="p-3">{u.name}</td>
                      <td className="p-3">{u.email}</td>
                      <td className="p-3">{u.phone_number}</td>
                      <td className="p-3 capitalize">{u.category}</td>
                      <td className="p-3 capitalize">
                        {u?.current_degree || "-"}
                      </td>
                      <td className="p-3">{u.gender}</td>
                      <td className="p-3">
                        {u?.research_area.length > 20 ? (
                          <span className="text-blue-600 cursor-pointer" onClick={()=>{
                            setIsOpenUserDetailsDialog(true);
                            setSelectedUserDetails(()=>{
                              return {
                                name:u?.name,
                                email:u?.email,
                                registered_on:u?.created_at,
                                phno:u?.phone_number,
                                research_area:u?.research_area,
                                category:u?.category
                              }
                            })
                          }}>{u?.research_area?.substring(0, 20)}...</span>
                        ) : (
                          u.research_area
                        )}
                      </td>
                      <td className="p-3">{u.transaction_id}</td>
                      <td className="p-3">
                        <a
                          href={`${URL}/${u.payment_receipt}`}
                          target="_blank"
                          rel="noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          View
                        </a>
                      </td>
                      <td className="p-3">
                        {formatDateToDDMMYYYY(u.created_at)}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border rounded shadow-sm">
              <thead className="bg-gray-200">
                <tr>
                  <th className="p-3 text-left">Sr.No</th>
                  <th className="p-3 text-left">Name</th>
                  <th className="p-3 text-left">Email</th>
                  <th className="p-3 text-left">Phone</th>
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
                {hostels.length === 0 ? (
                  <tr className="border-t hover:bg-gray-50">
                    <td className="p-3 text-center" colSpan={11}>
                      No Hostel Registrations Found
                    </td>
                  </tr>
                ) : (
                  hostels.map((h, i) => (
                    <tr key={h.id} className="border-t hover:bg-gray-50">
                      <td className="p-3">{i + 1}</td>
                      <td className="p-3">{h.registration_id.name}</td>
                      <td className="p-3">{h.registration_id.email}</td>
                      <td className="p-3">{h.registration_id.phone_number}</td>
                      <td className="p-3">
                        {formatDateToDDMMYYYY(h.from_date)}
                      </td>
                      <td className="p-3">{formatDateToDDMMYYYY(h.to_date)}</td>
                      <td className="p-3">{h.days}</td>
                      <td className="p-3">
                        <a
                          href={`${URL}/${h.id_proof}`}
                          target="_blank"
                          rel="noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          View
                        </a>
                      </td>
                      <td className="p-3">
                        {h.room_number || "Not Allocated"}
                      </td>
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
                          onClick={() =>
                            openAllocateRoomDialog(
                              h._id,
                              h.room_number,
                              h.status
                            )
                          }
                          className={`px-3 py-2 text-sm rounded ${
                            h.status === "pending"
                              ? "bg-green-600 hover:bg-green-700"
                              : "bg-orange-500 hover:bg-orange-600"
                          } text-white`}
                        >
                          {h.status === "pending"
                            ? "Allocate Room"
                            : "Change Status"}
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <AllocateRoomDialog
        isOpen={isOpenAllocateRoomDialog}
        onClose={closeAllocateRoomDialog}
        registrationId={selectedRegistrationData.id}
        currentRoom={selectedRegistrationData.allocatedRoom}
        currentStatus={selectedRegistrationData.status}
      />
      <ViewUserDialog
      isOpen={isOpenUserDetailsDialog}
      onClose={closeUserDetailsDialog}
      name={selectedUserDetails.name}
      email={selectedUserDetails.email}
      category={selectedUserDetails.category}
      phone={selectedUserDetails.phno}
      registered_on={selectedUserDetails.registered_on}
      research_area={selectedUserDetails.research_area}
      />
      <GrantAllocationDialog 
      isOpen={isOpenGrantDialog}
      onClose={closeGrantDialog}
      id={grantData.id}
      currentStatus={grantData.status}
      />
    </>
  );
}
