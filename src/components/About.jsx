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
        subtitle={aboutJson.edition}
        description={aboutJson.description}
        highlight={aboutJson.highlight}
      />
      <div className="text-center mb-4">
        <h3 className="text-2xl md:text-3xl font-bold text-indigo-700">
          {aboutJson.eventName}
        </h3>
        <p className="text-sm text-gray-500 italic">{aboutJson.eventCode}</p>
      </div>

      {/* Key Topics */}
      <section className="mt-16">
        <h4 className="text-2xl font-semibold text-center mb-10">Key Topics</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {aboutJson.topics.map((topic, idx) => (
            <TopicCard key={idx} {...topic} />
          ))}
        </div>
      </section>

      {/* Chairs */}
      <section className="mt-20">
        <h4 className="text-2xl font-semibold text-center mb-10">Chairs</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {aboutJson.chairs.map((chair, idx) => (
            <ChairCard key={idx} {...chair} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-20 text-center text-sm text-gray-500 italic">
        {aboutJson.footer}
      </footer>
    </section>
  );
}
