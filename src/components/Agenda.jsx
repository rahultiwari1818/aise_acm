import data from "../data/schedule";
import SectionHeader from "./sub-components/SectionHeader";

export default function Agenda() {
  const days = ["Wednesday", "Thursday", "Friday", "Saturday"];
  const dates = ["7 Jan", "8 Jan", "9 Jan", "10 Jan"];

  return (
    <div className="my-12">
      <SectionHeader title="Agenda" />

      <div className="overflow-x-auto shadow-xl rounded-2xl">
        <table className="min-w-[900px] w-full text-sm text-center border-collapse">
          {/* Table Head */}
          <thead>
            <tr className="bg-gradient-to-r from-indigo-800 to-blue-800 text-white">
              <th className="px-4 md:px-6 py-5 font-bold text-base sticky left-0 bg-indigo-800 z-10 rounded-tl-2xl">
                Time
              </th>
              {days.map((day, index) => (
                <th
                  key={day}
                  className={`px-4 md:px-6 py-5 font-semibold text-base ${
                    index === days.length - 1 ? "rounded-tr-2xl" : ""
                  }`}
                >
                  {day}, {dates[index]}
                </th>
              ))}
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="text-gray-800">
            {data.schedule.map((slot, idx) => (
              <tr
                key={idx}
                className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}
              >
                <td className="px-4 md:px-6 py-5 font-bold text-indigo-800 text-sm sticky left-0 bg-white z-10 border-r border-l border-gray-200">
                  {slot.time}
                </td>
                {days.map((day) => (
                  <td
                    key={day}
                    className="px-4 md:px-6 py-5 align-middle text-sm border-r border-gray-200"
                  >
                    <div
                      className="leading-relaxed"
                      dangerouslySetInnerHTML={{
                        __html:
                          typeof slot[day] === "string"
                            ? slot[day]
                            : slot[day]?.props?.children?.map
                            ? slot[day].props.children
                                .map((el) =>
                                  typeof el === "string"
                                    ? el
                                    : `<a href="#" class='text-indigo-700 font-medium underline'>${el.props.children}</a>`
                                )
                                .join("<br />")
                            : "",
                      }}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
