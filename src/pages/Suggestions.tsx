import React from "react"; // Importing React for the component
import { suggestions } from "../data/suggestions"; // Importing the suggestions data

const Suggestions: React.FC = () => {
  return (
    <>
      <h2 className="text-xl font-semibold text-white mb-4">Suggestions</h2>
      {suggestions.map((suggestion, index) => (
        <div
          key={index}
          className="mt-6 border border-neutral-800 rounded-lg bg-neutral-950/60 shadow-md p-6"
        >
          <h2 className="text-xl font-semibold text-white mb-4">
            {suggestion.title}
          </h2>
          <div className="mb-4">
            {suggestion.description.map((paragraph, i) => (
              <p key={i} className="text-white mt-2">
                {paragraph}
              </p>
            ))}
          </div>

          <h3 className="text-lg font-semibold text-white mt-4 mb-2">
            🕒 Time Estimate
          </h3>

          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left text-white">
              <thead>
                <tr className="font-semibold">
                  <th className="px-4 py-2 font-medium">Task</th>
                  <th className="px-4 py-2 font-medium">Time</th>
                </tr>
              </thead>
              <tbody>
                {suggestion.timeEstimate.map((task, i) => (
                  <tr key={i} className="border-t border-neutral-700">
                    <td className="px-4 py-2">{task.task}</td>
                    <td className="px-4 py-2">{task.time}</td>
                  </tr>
                ))}
                <tr className="border-t border-neutral-700 font-semibold">
                  <td className="px-4 py-2">Total</td>
                  <td className="px-4 py-2">{suggestion.total}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-white mt-4 flex flex-row w-full justify-between items-center gap-2 whitespace-nowrap">
            <strong>
              {suggestion.workingDays} - {suggestion.rate}
            </strong>
            {/* Violet badge for 75% discount */}
            <span className="inline-flex items-center justify-center px-3 py-1 text-xs font-semibold text-white bg-violet-600 rounded-full">
              75% OFF
            </span>
            <div className="w-full h-[1px] bg-neutral-600" />
            <h3>Cost {suggestion.cost}</h3>
          </p>
        </div>
      ))}
    </>
  );
};

export default Suggestions;
