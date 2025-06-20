
import venueData from "../data/venue";
import SectionHeader from "./sub-components/SectionHeader";


export default function VenueDates() {
  const { location, dates, format } = venueData;

  return (
    <section className="px-4 py-12 md:px-12 max-w-7xl mx-auto">
        <SectionHeader title={"Venue & Dates "} />
        
        

      <div className="flex flex-col lg:flex-row lg:justify-between gap-10">
        {/* LEFT SECTION */}
        <div className="flex-1 space-y-8">
          {/* Location */}
          <div>
            <h3 className="flex items-center gap-2 font-semibold text-lg text-gray-900">
              <span className="text-blue-600 text-xl">{location.icon}</span> {location.title}
            </h3>
            <p className="font-semibold mt-2">{location.heading}</p>
            <p className="text-gray-600">
              {location.lines.map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
          </div>

          {/* Dates */}
          <div>
            <h3 className="flex items-center gap-2 font-semibold text-lg text-gray-900">
              <span className="text-blue-600 text-xl">{dates.icon}</span> {dates.title}
            </h3>
            <p className="text-indigo-600 font-semibold mt-2">{dates.range}</p>
            <p className="text-gray-600">{dates.note}</p>
          </div>

          {/* Format */}
          <div>
            <h3 className="flex items-center gap-2 font-semibold text-lg text-gray-900">
              <span className="text-blue-600 text-xl">{format.icon}</span> {format.title}
            </h3>
            <p className="font-semibold mt-2 text-gray-800">{format.type}</p>
            <p className="text-gray-600">{format.desc}</p>
          </div>
        </div>

        {/* RIGHT SECTION (unchanged) */}
        <div className="flex-1">
          <h3 className="flex items-center gap-2 font-semibold text-lg text-gray-900 mb-4">
            <span className="text-blue-600 text-xl">🗺️</span> Campus Map
          </h3>
          <iframe
            title="Campus Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.4973993967487!2d72.62634057626623!3d23.188536979057865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2a3c9618d2c5%3A0xc54de484f986b1fa!2sDA-IICT!5e0!3m2!1sen!2sin!4v1750255245631!5m2!1sen!2sin"
            width="100%"
            height="300"
            className="rounded-xl shadow-lg border border-gray-200"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <div className="flex justify-between mt-4 text-sm text-gray-600">
            <div>
              <span className="font-semibold text-gray-800">4</span> Days
            </div>
            <div>
              <span className="font-semibold text-gray-800">40</span> Max Participants
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
