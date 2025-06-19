// components/TargetAudience.tsx
import data from "../data/targetAudience.js";

export default function TargetAudience() {
  return (
    <section className="px-4 md:px-10 py-12 ">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">{data.title}</h2>
        <div className="h-1 w-16 bg-gradient-to-r from-indigo-500 to-blue-500 mx-auto mb-4 rounded" />
        <p className="text-gray-600 max-w-2xl mx-auto">{data.description}</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3 mb-10">
        {data.audiences.map((audience, idx) => (
          <div
            key={idx}
            className={`rounded-xl p-6 shadow-md text-center transition-all duration-300 
             bg-white border border-gray-200 hover:shadow-blue-400 hover:bg-blue-100 hover:text-black
            }`}
          >
            <div className="flex justify-center mb-4">
              <img
                src={audience.icon}
                alt={audience.title}
                className="w-16 h-16 rounded-full "
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {audience.title}
            </h3>
            <p className="text-sm text-gray-600 mb-4">{audience.description}</p>
            <ul className="text-sm text-green-700 text-left space-y-1 list-disc list-inside">
              {audience.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {data.footnotes.map((note, idx) => (
          <div
            key={idx}
            className="flex gap-4 items-start p-6 bg-gray-50 rounded-xl border border-gray-200"
          >
            <div className="w-12 h-12 flex items-center justify-center bg-indigo-800 rounded-full">
              <img src={note.icon} alt={note.title} className="w-12 h-12 rounded-full" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">{note.title}</h4>
              <p className="text-sm text-gray-600">{note.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
