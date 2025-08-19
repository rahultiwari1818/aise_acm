import DialogBox from "./Dialog";

export default function SoeakerDetailDialog({
  isOpen,
  onClose,
  name,
  topic,
  abstract,
  bio
}) {
  return (
    <DialogBox isOpen={isOpen} onClose={onClose} title="Speaker Details">
      <div className="p-6 w-full  bg-white rounded-2xl shadow-lg max-h-[70vh]  overflow-scroll">
        <h2 className="text-xl font-semibold mb-4 text-center">
          Speaker Details
        </h2>
        <div className="space-y-3">
          <div>
            <p className="text-sm font-medium text-gray-600">Name : </p>
            <p className="text-base text-gray-900">{name || "-"}</p>
          </div>
                    <div>
            <p className="text-sm font-medium text-gray-600 ">Bio : </p>
            <p className="text-base text-gray-900 ">{bio || "-"}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-600">Title of the talk : </p>
            <p className="text-base text-gray-900">{topic || "-"}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-600 ">Abstract : </p>
            <p className="text-base text-gray-900 ">{abstract || "-"}</p>
          </div>

          
        </div>
      </div>
    </DialogBox>
  );
}
