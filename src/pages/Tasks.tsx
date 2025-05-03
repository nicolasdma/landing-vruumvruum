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
  // Check if all issues in the section are either "done" or "closed"
  const isAllDoneOrClosed = inProgressOrToDoCount === 0

  return (
    <div
      className={`mt-6 border border-neutral-800 rounded-lg shadow-md p-6 ${
        isAllDoneOrClosed ? "opacity-50" : ""
      } bg-neutral-950/60`}
    >
      <div className="flex items-center gap-5 mb-4">
        <h2 className="text-xl font-semibold text-white" >
          {section.title}
        </h2>
        <h3 className="text-sm text-neutral-400">
          {doneOrClosedCount}/{doneOrClosedCount + inProgressOrToDoCount}{" "}
          {isAllDoneOrClosed ? "Done" : "Completed"}
        </h3>
      </div>
      <ul className="space-y-4">
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
