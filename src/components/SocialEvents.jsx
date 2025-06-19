import events from "../data/socialEvents";
import SectionHeader from "./sub-components/SectionHeader";

export default function SocialEvents() {
  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <SectionHeader title={"Social Events"}/>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {events["events"].map((item) => {
            return (
              <article
                key={item.id}
                className="flex flex-col items-center text-center rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition-shadow bg-white"
              >
                <div className={`w-12 h-12 flex items-center justify-center ${item.id == 1 ? "bg-white "  : "bg-indigo-800"}  rounded-full`}>
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-12 h-12 rounded-full"
                  />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed max-w-xs">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
