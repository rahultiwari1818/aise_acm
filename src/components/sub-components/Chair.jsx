export default function ChairCard({ image, name, title, bio, email, phno }) {
  // Format phone number for display (e.g., "+91 79 6826 1618")
  const formattedPhno = phno?.replace(/^(\+91)(\d{2})(\d{4})(\d{4})$/, "$1 $2 $3 $4");

  // Clean phone number for href (e.g., "+917968261618")
  const telPhno = phno?.replace(/\D/g, ""); // removes all non-digit characters
  const telHref = telPhno ? `tel:+${telPhno}` : "#";

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
        {title && <p className="text-sm text-indigo-600">{title}</p>}
        {bio && <p className="text-sm text-gray-700 mt-2">{bio}</p>}
        {email && (
          <p className="text-sm text-gray-700 mt-2">
            <a href={`mailto:${email}`}>{email}</a>
          </p>
        )}
        {phno && (
          <p className="text-sm text-gray-700 mt-2">
            <a href={telHref}>{formattedPhno}</a>
          </p>
        )}
      </div>
    </div>
  );
}
