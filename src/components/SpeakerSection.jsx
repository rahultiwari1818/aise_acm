import SpeakerCard from "./sub-components/Speakers";
import speakerData from "../data/organizers";
import SectionHeader from "./sub-components/SectionHeader";

export default function SpeakerSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
        <SectionHeader title={"School Organizers"}/>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {speakerData?.["speakers"]?.map((speaker, index) => (
          <SpeakerCard key={index} {...speaker} />
        ))}
      </div>
    </section>
  );
}
