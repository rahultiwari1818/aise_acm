import SectionHeader from "../components/sub-components/SectionHeader";
import SpeakerCard from "../components/sub-components/Speakers";
import speakerData from "../data/speakers";

export default function Speakers() {
  return (
    <section className="py-16 text-center bg-white rounded-xl shadow-md mx-4 md:mx-10 lg:mx-44 my-10">
      <SectionHeader title={"Speakers"} />
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {speakerData?.["speakers"]?.map((speaker, index) => (
            <SpeakerCard key={index} {...speaker} />
          ))}
        </div>
      </section>
    </section>
  );
}
