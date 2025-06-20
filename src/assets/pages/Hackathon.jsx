import SectionHeader from "../../components/sub-components/SectionHeader";

export default function Hackathon() {
  return (
    <section className="py-16 text-center bg-white rounded-xl shadow-md mx-4 md:mx-10 lg:mx-44 my-10">
    <SectionHeader title={"Hackathon"}/>
      <p className="text-gray-600 text-lg max-w-3xl mx-auto px-4">
        We're thrilled to announce that a hackathon will be a part of the upcoming event!
        More details including problem statements, team participation rules, and rewards
        will be shared soon. Stay tuned!
      </p>

      <div className="mt-6 text-blue-500 font-medium animate-pulse">
        🚀 Details Awaited...
      </div>
    </section>
  );
}
