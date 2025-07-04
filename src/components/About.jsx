import aboutJson from "../data/about";
import AboutSectionHeader from "./sub-components/AboutSectionHeader";
import ChairCard from "./sub-components/Chair";
import TopicCard from "./sub-components/KeyTopics";

export default function About() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12 py-16">
      {/* Header */}
      <AboutSectionHeader
        title={aboutJson.title}
        subHeading={aboutJson.subTitle}
        subtitle={aboutJson.edition}
        description={aboutJson.description}
        highlight={aboutJson.highlight}
      />
      <div className="text-center mb-4">
        <h3 className="text-2xl md:text-3xl font-bold text-indigo-700">
          {aboutJson.eventName}
        </h3>
        <h4 className="text-2xl md:text-3xl font-bold text-indigo-700">
          {aboutJson.subTitle}
        </h4>

        <p className="text-sm text-gray-500 ">{aboutJson.eventCode}</p>
        <div className="text-indigo-700 font-bold px-4 py-2 rounded-full flex flex-col items-center justify-between gap-2">
          <h3 className="text-base">
            📍 Dhirubhai Ambani University, Gandhinagar
          </h3>
          <h6 className="">(Formely DA-IICT)</h6>
          <h6 className="">January 7 - 10,   2026</h6>
        </div>
      </div>

      {/* Key Topics */}
      <section className="mt-16">
        <h4 className="text-2xl font-semibold text-center mb-10">Key Topics</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:gap-4 lg:gap-5 xl:gap-6">
          {aboutJson.topics.map((topic, idx) => (
            <TopicCard key={idx} {...topic} />
          ))}
        </div>
      </section>

      {/* Chairs */}
      {/* <section className="mt-20">
        <h4 className="text-2xl font-semibold text-center mb-10">Chairs</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {aboutJson.chairs.map((chair, idx) => (
            <ChairCard key={idx} {...chair} />
          ))}
        </div>
      </section> */}

      {/* Footer */}
      <footer className="mt-20 text-center text-sm text-gray-500 italic">
        {aboutJson.footer}
      </footer>
    </section>
  );
}
