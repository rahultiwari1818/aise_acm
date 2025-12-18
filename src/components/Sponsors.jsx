import sponsors from "../data/sponsors";
import SectionHeader from "./sub-components/SectionHeader";

export default function Sponsors() {
  return (
    <section className="px-4 py-12 md:px-12 max-w-7xl mx-auto text-center bg-white rounded-xl">
      <SectionHeader title={"Sponsors"} />

      <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5  place-items-center">
        {sponsors["sponsors"].map((sponsor, index) => {
          return (
            // <a href={sponsor.link} target="_blank" className={`${index === 3  ? "bg-black px-3 rounded-2xl" :""}`}>
            //   <img
            //     key={index}
            //     src={sponsor.image}
            //     alt={sponsor.alt}
            //     className="h-24 w-40 object-contain  hover:grayscale-0 transition duration-300"
            //   />
            // </a>


                        <a href={sponsor.link} target="_blank" className={``}>
              <img
                key={index}
                src={sponsor.image}
                alt={sponsor.alt}
                className="h-24 w-40 object-contain  hover:grayscale-0 transition duration-300"
              />
            </a>
          );
        })}
      </div>
    </section>
  );
}
