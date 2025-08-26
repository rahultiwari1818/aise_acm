import { useState } from "react";
import { useCallback } from "react";
import SpeakerDetailDialog from "./SpeakerDetailsDialog";

export default function SpeakerCard({
  image,
  name,
  bio,
  institution,
  abstract,
  topic,
  link,
  showMore,
  abstracts1,
  topic1
}) {
  const [isOpenUserDetailsDialog, setIsOpenUserDetailsDialog] = useState(false);

  const closeUserDetailsDialog = useCallback(() => {
    setIsOpenUserDetailsDialog(false);
  }, []);

  return (
    <>
      <div
        className="relative bg-white border border-gray-200 rounded-xl shadow-md 
                 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 
                 overflow-hidden p-6 animate-fadeIn hover:border hover:border-b-2 hover:border-blue-500 hover:border-t-8 cursor-pointer"
        onClick={()=>{
          window.location.href=link
        }}
      >
        <div className="flex flex-col items-center text-center space-y-4">
          <img
            src={image}
            alt={name}
            className="w-28 h-28 rounded-full object-cover border-4 border-indigo-100 shadow"
          />
          <div>
            <h4 className="text-xl font-bold text-gray-800">{name}</h4>
            <p className="text-sm text-indigo-600">{institution}</p>
          </div>
          {/* <p className="text-sm text-gray-600">{bio}</p> */}
          {
            showMore
            &&
          <button
          className="bg-blue-600 text-white px-4 py-2 rounded-2xl hover:border hover:border-blue-600 hover:bg-white hover:text-blue-600 cursor-pointer"
          onClick={(e)=>{
            e.stopPropagation();
            setIsOpenUserDetailsDialog(true)}}>
            More Details
          </button>
          }
        </div>

        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-transparent opacity-0 hover:opacity-20 transition-opacity duration-300 pointer-events-none"></div>
      </div>
      <SpeakerDetailDialog
        isOpen={isOpenUserDetailsDialog}
        onClose={closeUserDetailsDialog}
        name={name}
        bio={bio}
        abstract={abstract}
        topic={topic}
        abstracts1={abstracts1}
        topics1={topic1}
      />
    </>
  );
}
