import SectionHeader from "../components/sub-components/SectionHeader";

export default function Mrt() {
  return (
    <section className="py-16 text-center bg-white rounded-xl shadow-md mx-4 md:mx-10 lg:mx-44 my-10">
      <SectionHeader title={"5 MRT"} />
      <p className="text-gray-600 text-lg max-w-6xl mx-auto px-4 text-justify">
        We also plan to have 5-minute research talks (5MRT) by master and
        doctoral students in software engineering research through the call for
        talk submissions and selection. 5MRT aims to provide a unique
        opportunity for master's and doctoral students to present their research
        work concisely in the broad areas of software engineering in 5 minutes.
        The students will be able to interact with eminent researchers from
        academia and industry. This will help them to gain visibility of their
        work and improve their research communication skills. Based on the
        reviews of the presentations by a panel of experts, three of the
        students will get a certificate and award.
      </p>
      <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6 shadow-sm mt-6 mx-5">
        <h3 className="text-lg font-semibold text-indigo-800 mb-3">
          Eligibility and Presentation Details:
        </h3>
        <ul className="list-disc list-inside text-gray-800 text-justify space-y-2">
          <li>
            <span className="font-medium text-gray-900">Eligibility:</span> Any
            Master and Ph.D. student who has registered for Winter School AISE 2026.
          </li>
          <li>
            <span className="font-medium text-gray-900">
              Selection Criteria:
            </span>{" "}
            Applications will be shortlisted by the expert committee. Shortlisted participants for presentations will be
            notified via email or website notifications.
          </li>
          <li>The presentation must not exceed 5 minutes.</li>
          <li>The shortlisted participants can bring the printed posters for presentation, and display during the school. More details will follow soon</li>
          <li>
            The decision of the expert committee shall be final in shortlisting
            and selection for the award of prizes.
          </li>
        </ul>
      </div>
    </section>
  );
}
