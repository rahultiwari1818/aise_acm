import SectionHeader from "./sub-components/SectionHeader";
import gandhinagar from "../assets/dau/gandhinagar.png";
import gift_city from "../assets/dau/gift_city.jpg";
import riverfront from "../assets/dau/riverfront.jpg";
export default function AboutCity() {
  const images = [
    gandhinagar,gift_city,riverfront
  ]; // Replace with your actual image paths

  return (
    <section className="py-12 text-center bg-white rounded-xl">
        <SectionHeader title={"About Gandhinagar"}/>
        

      <div className="text-gray-600 max-w-7xl mx-auto space-y-6 px-4 text-justify">
        <p>
          The host institution is located in Gujarat, a western state of India.
          Gandhinagar is the capital city of Gujarat and was created as a modern twin
          city to Ahmedabad. Nearby, GIFT City (Gujarat International Finance Tec-City)
          is emerging as a rapidly growing financial and technology hub. GIFT City aims
          to provide world-class infrastructure that attracts global companies in
          sectors such as banking, insurance, and IT services.
        </p>

        <p>
          Recognized as a Knowledge Corridor, Gandhinagar, along with Ahmedabad—the
          commercial capital of Gujarat—offers numerous attractions. Notably,
          Ahmedabad was declared the first UNESCO World Heritage City. Transportation
          options are convenient, with the Sardar Vallabhbhai Patel International
          Airport as well as railway stations in both Ahmedabad and Gandhinagar.
        </p>

        <p>
          The airport is about a 25-minute drive away, while the Ahmedabad railway
          station is approximately a 50-minute drive, and the Gandhinagar railway
          station is just a 10-minute drive. From November to February, the average
          maximum temperature is around 28°C (82°F), and the average minimum temperature
          is about 15°C (59°F).
        </p>
      </div>

      {/* Image Gallery */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Gujarat Location ${index + 1}`}
            className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer w-full  h-[30vh] md:w-[30vw]"
            onClick={() => window.open(img, "_blank")}
          />
        ))}
      </div>

      <p className="text-sm text-blue-600 mt-4">
        🔍 Click on any image to enlarge it
      </p>
    </section>
  );
}
