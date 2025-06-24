export default function TopicCard({ icon, title, description }) {
  return (
    <div
      className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm 
                 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 hover:shadow-blue-400 hover:bg-blue-100 hover:text-black"
    >
      <div className="flex justify-center items-center">
        <div className=" mb-4 bg-blue-400 rounded-full max-w-fit ">
          <img src={icon} alt="icon" className="w-16 h-16 mx-auto rounded-full "/>
        </div>
      </div>
      <h5 className="text-lg font-semibold  mb-2">{title}</h5>
      <p className="text-sm ">{description}</p>
    </div>
  );
}
