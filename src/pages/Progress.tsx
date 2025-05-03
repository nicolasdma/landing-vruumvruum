import React from "react";
import { ProgressItem } from '../App'

interface ProgressProps {
  progressItems: ProgressItem[];
}

const Progress: React.FC<ProgressProps> = ({progressItems}) => {
  const getStatusClass = (status: string) => {
    switch (status) {
      case "done":
        return "text-green-500";
      case "in progress":
        return "text-yellow-400";
      default:
        return "text-neutral-400";
    }
  };

  return (
    <div className="p-6 bg-[#0A0A0A] rounded-xl">
      <ul className="space-y-4">
        {progressItems.map((item) => (
          <li
            key={item.title}
            className="flex items-center gap-3 text-neutral-300"
          >
            <div
              className={`w-4 h-4 rounded-full ${
                item.status === "done"
                  ? "bg-green-500"
                  : item.status === "in progress"
                  ? "bg-yellow-400"
                  : "bg-neutral-500"
              }`}
            ></div>
            <span className={`${getStatusClass(item.status)} font-medium`}>
              {item.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Progress;
