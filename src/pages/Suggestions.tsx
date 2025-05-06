import React from "react"; // Importing React for the component
import { suggestions } from "../data/suggestions"; // Importing the suggestions data


// const suggestions = [
//   {
//     title: "🚀 Performance, Maintainability & Public Access",
//     description: [
//       "This proposal bundles three high-impact improvements to the app in a single development cycle:",
//       "",
//       "**1. Global State & Optimistic UI Updates:** We’ll implement a global state (likely Zustand) to avoid redundant backend calls across navigation, improve perceived performance, and handle optimistic updates (like opening chests or fusing guardians).",
//       "",
//       "**2. Code Refactoring with React Query:** We'll gradually replace custom fetch logic and large `useEffect` blocks with `useQuery`, enabling automatic loading/error states, background refetching, and better structure.",
//       "",
//       "**3. Public User Pages:** We'll introduce public-facing pages like 'About', 'Contact', or 'FAQ', improving accessibility and platform transparency.",
//       "",
//       "Together, these initiatives will significantly enhance user experience, maintainability, and engagement.",
//     ],
//     timeEstimate: [
//       { task: "Setup Zustand + global store helpers", time: "2h" },
//       { task: "Refactor 8 pages to use Zustand state", time: "8–10h" },
//       { task: "Add optimistic updates & error fallback", time: "4–5h" },
//       { task: "Setup React Query + replace fetch logic", time: "4–5h" },
//       { task: "Remove dead/duplicated code", time: "3–4h" },
//       { task: "Refactor large files", time: "5–6h" },
//       { task: "Create and integrate 3 public pages", time: "8h" },
//       { task: "Routing, responsiveness & QA", time: "2–3h" },
//     ],
//     total: "36–45 hours",
//     cost: "$180",
//     rate: "$4/hr",
//     workingDays: "6–8 working days",
//     discountLabel: "75% OFF",
//   },
// ];

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
