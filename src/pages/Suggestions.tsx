import React from "react";
import { suggestions } from "../data/suggestions";

const Suggestions: React.FC = () => {
  return (
    <>
      <h2 className="text-xl font-bold text-white mb-6">Suggestions</h2>
      {suggestions.map((suggestion, index) => (
        <div
          key={index}
          className="mt-8 rounded-2xl border border-neutral-800 bg-neutral-950/60 shadow-lg p-6 space-y-6"
        >
          <div>
            <h3 className="text-2xl font-semibold text-white mb-2">
              {suggestion.title}
            </h3>
            <div className="space-y-2 text-sm text-neutral-200">
              {suggestion.description.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-2">
              🕒 Time Estimate
            </h4>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm text-left text-white border border-neutral-700 rounded-lg overflow-hidden">
                <thead className="bg-neutral-900">
                  <tr>
                    <th className="px-4 py-2 font-medium">Task</th>
                    <th className="px-4 py-2 font-medium">Time</th>
                  </tr>
                </thead>
                <tbody>
                  {suggestion.timeEstimate.map((task, i) => (
                    <tr key={i} className="border-t border-neutral-800">
                      <td className="px-4 py-2">{task.task}</td>
                      <td className="px-4 py-2">{task.time}</td>
                    </tr>
                  ))}
                  <tr className="border-t border-neutral-700 font-semibold bg-neutral-900">
                    <td className="px-4 py-2">Total</td>
                    <td className="px-4 py-2">{suggestion.total}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-neutral-800 pt-4 text-sm text-neutral-300">
            <div className="flex items-center gap-2">
              <span className="font-medium text-white">
                {suggestion.workingDays}
              </span>
              <span className="text-neutral-400">—</span>
              <span>{suggestion.rate}</span>
            </div>

            <div className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center px-3 py-1 text-xs font-semibold text-white bg-violet-600 rounded-full">
              75% OFF
            </span>
              <span className="text-white font-medium">Cost {suggestion.cost}</span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Suggestions;
