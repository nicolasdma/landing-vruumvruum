import React from "react";
import { Section } from "../data/issues";
import IssueItem from "../components/IssueItem";

interface TasksProps {
  section: Section;
  doneOrClosedCount: number;
  inProgressOrToDoCount: number;
}

const Tasks: React.FC<TasksProps> = ({
  section,
  doneOrClosedCount,
  inProgressOrToDoCount,
}) => {
  const isAllDoneOrClosed = inProgressOrToDoCount === 0;

  return (
    <div
      className={`mt-6 border border-neutral-800 rounded-2xl shadow-md p-4 sm:p-6 ${
        isAllDoneOrClosed ? "opacity-50" : ""
      } bg-neutral-950/60 transition-opacity`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-5 mb-4">
        <h2 className="text-lg sm:text-xl font-semibold text-white">
          {section.title}
        </h2>
        <h3 className="text-sm text-neutral-400">
          {doneOrClosedCount}/{doneOrClosedCount + inProgressOrToDoCount}{" "}
          {isAllDoneOrClosed ? "Done" : "Completed"}
        </h3>
      </div>

      <ul className="space-y-3 sm:space-y-4">
        {section.issues.map((issue, index) => (
          <IssueItem
            key={index}
            issue={issue}
            isAllDoneOrClosed={isAllDoneOrClosed}
          />
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
