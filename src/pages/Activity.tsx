import React from "react";

export interface Task {
  title: string;
}

export interface DailyUpdate {
  date: string; // Format: "YYYY-MM-DD"
  updates: Task[];
}

interface Props {
  updates: DailyUpdate[];
}

const Activity: React.FC<Props> = ({ updates }) => {
  return (
    <>
      <h2 className="text-xl font-semibold text-white mb-4">Activity logs</h2>
      {updates.map((section) => (
        <div
          key={section.date}
          className="mt-6 border border-neutral-800 rounded-lg bg-neutral-950/60 shadow-md p-6"
        >
          <h3 className="text-lg font-semibold text-white mb-4">
            {formatDate(section.date)}
          </h3>
          <ul className="space-y-4">
            {section.updates.map((task, index) => (
              <li key={index}>
                <div className="flex flex-col gap-2">
                  <div className="text-white flex gap-5 items-center font-medium text-sm">
                    <div className="mt-1 w-2 h-2 rounded-full bg-neutral-300 flex-shrink-0" />
                    {task.title}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

// Utility to display date as e.g. "Saturday, May 2"
function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
}

export default Activity;
