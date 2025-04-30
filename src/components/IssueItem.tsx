import React, { useState } from "react";
import { Issue } from "../data/issues";

interface IssueItemProps {
  issue: Issue;
}

const IssueItem: React.FC<IssueItemProps> = ({ issue }) => {
  const [isOpen, setIsOpen] = useState(false);

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
    <li className="p-6 bg-card text-text shadow-sm hover:shadow-md transition-shadow border-t border-border last:rounded-b-xl">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold text-text leading-tight">
              {issue.title}
            </h3>
            <p className="mt-2 text-muted text-sm">{issue.description}</p>
          </div>
          <span
            className={`mt-4 inline-block w-fit px-3 py-1 rounded-full text-sm font-medium ${getPriorityClass()}`}
          >
            {issue.priority.charAt(0).toUpperCase() + issue.priority.slice(1)}
          </span>
        </div>

        <div className="w-full md:w-[280px] h-[180px] bg-muted/10 border border-dashed border-border rounded-lg flex items-center justify-center overflow-hidden">
          {issue.src ? (
            <>
              <div
                className="w-full md:w-[280px] h-[180px] bg-muted/10 border border-dashed border-border rounded-lg flex items-center justify-center overflow-hidden cursor-pointer"
                onClick={() => setIsOpen(true)}
              >
                <img
                  src={issue.src}
                  alt={issue.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              {isOpen && (
                <div
                  className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center"
                  onClick={() => setIsOpen(false)}
                >
                  <img
                    src={issue.src}
                    alt={issue.title}
                    className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
                    onClick={(e) => e.stopPropagation()}
                  />
                </div>
              )}
            </>
          ) : (
            <span className="text-muted text-xs">[No image provided]</span>
          )}
        </div>
      </div>
    </li>
  );
};

export default IssueItem;
