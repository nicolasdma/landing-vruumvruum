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
        return "bg-red-900/40 text-red-400";
      case "medium":
        return "bg-yellow-900/40 text-yellow-300";
      case "low":
        return "bg-green-900/40 text-green-300";
      default:
        return "bg-gray-800 text-gray-400";
    }
  };

  const getStatusClass = () => {
    switch (issue.status) {
      case "to do":
        return "bg-neutral-800 text-blue-300";
      case "in progress":
        return "bg-orange-900/40 text-orange-300";
      case "done":
        return "bg-green-900/40 text-green-300";
      case "on hold":
        return "bg-gray-900/40 text-gray-300";
      case "closed":
        return "bg-red-900/40 text-red-300";
      default:
        return "bg-gray-800 text-gray-400";
    }
  };

  return (
    <li
      className={`group mx-8 p-6 bg-[#0A0A0A] border border-neutral-800 transition-all hover:shadow-[0_0_0_2px_rgba(255,255,255,0.05)] last:mb-8 first:mt-8 first:rounded-t-xl last:rounded-b-xl last:border first:border-t
        w-[700px]
        `}
    >
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-medium text-white group-hover:text-white/90 transition-colors">
              {issue.title}
            </h3>
            <p className="mt-2 text-sm text-white">{issue.description}</p>
          </div>
          <div className="flex gap-2 mt-4 flex-wrap">
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium ${getPriorityClass()}`}
            >
              {issue.priority.toUpperCase()}
            </span>
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusClass()}`}
            >
              {issue.status.toUpperCase()}
            </span>
            {issue.fixEstimation && (
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-neutral-800 text-neutral-300 border border-neutral-700">
                ⏱ {issue.fixEstimation}
              </span>
            )}
          </div>
        </div>

        <div className="w-full md:w-[180px] h-[100px] bg-neutral-800 border border-neutral-700 rounded-xl overflow-hidden flex items-center justify-center">
          {issue.src ? (
            <>
              <div
                className="w-full h-full cursor-zoom-in"
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
                  className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center"
                  onClick={() => setIsOpen(false)}
                >
                  <img
                    src={issue.src}
                    alt={issue.title}
                    className="max-w-[90%] max-h-[90%] rounded-xl shadow-lg"
                    onClick={(e) => e.stopPropagation()}
                  />
                </div>
              )}
            </>
          ) : (
            <span className="text-sm text-neutral-500">[No image]</span>
          )}
        </div>
      </div>
    </li>
  );
};

export default IssueItem;
