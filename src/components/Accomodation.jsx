import data from "../data/accomodation.js";
import SectionHeader from "./sub-components/SectionHeader.jsx";

export default function Accommodation() {
  return (
    <section className="px-4 py-12 md:px-12 max-w-7xl mx-auto">
      <SectionHeader title={"Accommodation"}/>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-6">
        Cáceres offers a wide range of accommodation options to suit every budget and preference.
        Special rates may be available for Summer School attendees at partner hotels.
      </p>

      <div className="bg-blue-50 text-sm text-blue-900 border border-blue-200 rounded-lg p-4 mb-8">
        <strong>🏷️ Accommodation Scholarships Available:</strong> We are working to offer
        scholarships that may cover part of the students’ accommodation costs. If you're interested
        in applying for one, please indicate this in the registration form.
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {data["partners"].map((group, index) => (
          <div key={index}>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-indigo-600">
              {group.type === "Partner Hotels" ? "🏨" : "🏛️"} {group.type}
            </h3>
            {group.hotels.map((hotel, idx) => (
              <div
                key={idx}
                className="border border-gray-200 rounded-xl shadow-sm p-4 mb-6 bg-white"
              >
                <h4 className="font-bold text-gray-900 text-md mb-1">{hotel.name}</h4>
                <p className="text-sm text-gray-600 mb-2">{hotel.description}</p>
                <iframe
                  src={hotel.mapSrc}
                  title={hotel.name}
                  width="100%"
                  height="200"
                  className="rounded-md border"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="mt-4">
                  <a
                    href={hotel.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-1 text-sm bg-indigo-50 text-indigo-700 font-medium border border-indigo-200 rounded hover:bg-indigo-100"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
