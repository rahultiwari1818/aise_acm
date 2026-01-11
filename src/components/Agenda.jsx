import { useState } from "react";
import data from "../data/schedule";
import SectionHeader from "./sub-components/SectionHeader";

export default function Agenda() {
  const days = Object.keys(data.schedule); // ["7 Jan", "8 Jan", ...]
  const [activeDay, setActiveDay] = useState(days[0]);

  return (
    <div className="my-12">
      <SectionHeader title="Program Schedule" />
      {/* <p className="text-sm text-gray-600 text-center font-semibold">(subject to change/update)</p> */}

      {/* Day Tabs */}
      <div className="flex justify-center gap-3 flex-wrap mt-6 mb-10">
        {days.map((day) => (
          <button
            key={day}
            onClick={() => setActiveDay(day)}
            className={`
              px-5 py-2 rounded-full border transition font-medium
              ${activeDay === day 
                ? "bg-indigo-700 text-white border-indigo-700 shadow-md" 
                : "bg-white text-gray-700 border-gray-300 hover:bg-indigo-50" }
            `}
          >
            {day}
          </button>
        ))}
      </div>

      {/* Day Schedule Table */}
      <div className="max-w-4xl mx-auto overflow-x-auto px-5">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="py-3 px-4 text-center font-semibold text-sm text-nowrap">Time</th>
              <th className="py-3 px-4 text-center font-semibold text-sm text-nowrap">Topic</th>
              <th className="py-3 px-4 text-center font-semibold text-sm text-nowrap">Speaker</th>
            </tr>
          </thead>
          <tbody>
            {data.schedule[activeDay].map((item, i) => (
              <tr 
                key={i} 
                className={`transition duration-150 ease-in-out ${i % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-indigo-50`}
              >
                <td className="py-3 px-4 text-center text-gray-800 text-nowrap">{item.time}</td>
                <td className="py-3 px-4 text-center text-gray-800  ">{item.event}</td>
                <td className="py-3 px-4 text-center text-gray-800 ">{item?.speaker}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
