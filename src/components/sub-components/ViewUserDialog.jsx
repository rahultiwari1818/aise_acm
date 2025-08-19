import DialogBox from "./Dialog";

export default function ViewUserDialog({
  isOpen,
  onClose,
  name,
  email,
  phone,
  research_area,
  category,
  registered_on,
}) {
  return (
    <DialogBox isOpen={isOpen} onClose={onClose} title="Register For Grant">
      <div className="p-6 w-full  bg-white rounded-2xl shadow-lg max-h-[70vh]  overflow-scroll">
        <h2 className="text-xl font-semibold mb-4 text-center">
          User Details
        </h2>
        <div className="space-y-3">
          <div>
            <p className="text-sm font-medium text-gray-600">Name</p>
            <p className="text-base text-gray-900">{name || "-"}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-600">Email</p>
            <p className="text-base text-gray-900">{email || "-"}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-600">Phone</p>
            <p className="text-base text-gray-900">{phone || "-"}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-600">Research Area</p>
            <p className="text-base text-gray-900">{research_area || "-"}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-600">Category</p>
            <p className="text-base text-gray-900">{category || "-"}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-600">Registered On</p>
            <p className="text-base text-gray-900">
              {registered_on
                ? new Date(registered_on).toLocaleDateString("en-IN", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })
                : "-"}
            </p>
          </div>
        </div>
      </div>
    </DialogBox>
  );
}
