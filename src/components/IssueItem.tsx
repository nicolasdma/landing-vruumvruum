import React from "react";
import { Issue } from "../data/issues";

interface IssueItemProps {
  issue: Issue;
}

const IssueItem: React.FC<IssueItemProps> = ({ issue }) => {
  const getPriorityClass = () => {
    switch (issue.priority) {
      case "high":
        return "bg-error/20 text-error";
      case "medium":
        return "bg-warning/20 text-warning";
      case "low":
        return "bg-success/20 text-success";
      default:
        return "bg-muted/20 text-muted";
    }
  };

  return (
    <li className="p-5 border-b border-border flex flex-col last:border-b-0 bg-card text-text rounded-md">
      <div className="flex flex-col md:flex-row mb-4">
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <strong className="text-lg text-text">{issue.title}</strong>
            <p className="mt-1 text-muted">{issue.description}</p>
          </div>
          <div
            className={`${getPriorityClass()} inline-block mt-3 px-2 py-1 rounded text-sm font-medium max-w-[100px] text-center`}
          >
            {issue.priority.charAt(0).toUpperCase() + issue.priority.slice(1)}
          </div>
        </div>
        <div className="w-full md:w-[300px] md:h-[180px] mt-4 md:mt-0 md:ml-5 bg-background border border-dashed border-border flex items-center justify-center text-muted text-sm rounded">
          {issue.src ? (
            <img
              src={issue.src}
              alt={issue.title}
              className="w-full h-full object-cover rounded"
            />
          ) : (
            <span>[No image provided]</span>
          )}
        </div>
      </div>
    </li>
  );
};

export default IssueItem;
