
import sponsors from "../data/sponsors";
import SectionHeader from "./sub-components/SectionHeader";


export default function Sponsors() {
  return (
    <section className="px-4 py-12 md:px-12 max-w-7xl mx-auto text-center bg-white rounded-xl">
      <SectionHeader title={"Sponsors"}/>

      <div className="  flex justify-center  gap-8  items-center">
        {sponsors["sponsors"].map((sponsor, index) => (
            <a href={sponsor.link} target="_blank">
          <img
            key={index}
            src={sponsor.image}
            alt={sponsor.alt}
            className="h-24 w-40 object-contain  hover:grayscale-0 transition duration-300"
          />
          </a>
        ))}
      </div>
    </section>
  );
}
