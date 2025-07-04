export default function ChairCard({ image, name, title, bio,email,phno}) {
  return (
    <div
      className="flex flex-col items-center gap-5 bg-white border border-gray-200 
                 rounded-xl p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:scale-[1.01] 
                 transition-all duration-300 hover:border hover:border-b-2 hover:border-blue-500 hover:border-t-8"
    >
      <img
        src={image}
        alt={name}
        className="w-24 h-24 rounded-full object-cover border-4 border-indigo-100"
      />
      <div className="text-center">
        <p className="text-lg font-bold text-gray-800">{name}</p>
        <p className="text-sm text-indigo-600">{title}</p>
        <p className="text-sm text-gray-700 mt-2">{bio}</p>
        <p className="text-sm text-gray-700 mt-2"><a href={`mailto:${email}`}>{email}</a></p>
        <p className="text-sm text-gray-700 mt-2"><a href={`tel:${phno}`}>{phno}</a></p>
      </div>
    </div>
  );
}
