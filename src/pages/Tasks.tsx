/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Section } from "../data/issues";
import IssueItem from "../components/IssueItem";

const countIssues = (data: any) => {
  let doneOrClosedCount = 0;
  let inProgressOrToDoCount = 0;

  data.forEach((section: Section) => {
    section.issues.forEach((issue) => {
      if (issue.status === "done" || issue.status === "closed") {
        doneOrClosedCount++;
      }
      if (issue.status === "to do" || issue.status === "in progress") {
        inProgressOrToDoCount++;
      }
    });
  });

  return { doneOrClosedCount, inProgressOrToDoCount };
};

interface TasksProps {
  tasksItems: Section[];
}

const Tasks: React.FC<TasksProps> = ({tasksItems}) => {
  const { doneOrClosedCount, inProgressOrToDoCount } = countIssues(tasksItems);
  const isAllDoneOrClosed = inProgressOrToDoCount === 0;

  return (
    <>
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-xl font-semibold text-white">Frontend</h2>
          <span className="text-sm text-neutral-400">
            {doneOrClosedCount}/{doneOrClosedCount + inProgressOrToDoCount}{" "}
            Completed
          </span>
        </div>
        <div className="w-full h-2 rounded-full bg-neutral-800 overflow-hidden">
          <div
            className="h-full bg-green-500 transition-all duration-500"
            style={{
              width: `${
                (doneOrClosedCount /
                  (doneOrClosedCount + inProgressOrToDoCount || 1)) *
                100
              }%`,
            }}
          />
        </div>
      </div>

      <div className="space-y-6">
        {tasksItems.map((section: Section) => {
          const doneOrClosedCount = section.issues.filter(
            (issue) => issue.status === "done" || issue.status === "closed"
          ).length;

          const inProgressOrToDoCount = section.issues.filter(
            (issue) =>
              issue.status === "to do" || issue.status === "in progress"
          ).length;

          const sectionDone = doneOrClosedCount === section.issues.length 
          return (
            <div
              className={`mt-6 border border-neutral-800 rounded-2xl shadow-md p-4 sm:p-6 ${
                sectionDone  ? "opacity-50" : ""
              } bg-neutral-950/60 transition-opacity`}
              key={section.title}
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-5 mb-4">
                <h2 className="text-lg sm:text-xl font-semibold text-white">
                  {section.title}
                </h2>
                <h3 className="text-sm text-neutral-400">
                  {doneOrClosedCount}/
                  {doneOrClosedCount + inProgressOrToDoCount}{" "}
                  {isAllDoneOrClosed ? "Done" : "Completed"}
                </h3>
              </div>

              <ul className="space-y-3 sm:space-y-4">
                {section.issues.map((issue, index) => (
                  <IssueItem
                    key={index}
                    issue={issue}
                    isAllDoneOrClosed={sectionDone}
                  />
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Tasks;
