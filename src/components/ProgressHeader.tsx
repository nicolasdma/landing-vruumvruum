import React from "react";
import { getProgressStats, ProgressItem } from "../utils/getProgressStats";
import ProgressBar from "./ProgressBar";

interface Props {
  title: string;
  items: ProgressItem[];
}

const ProgressHeader: React.FC<Props> = ({ title, items }) => {
  const { done, total, percent } = getProgressStats(items);

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

  const getDotClass = (status: string) => {
    switch (status) {
      case "done":
        return "bg-green-500";
      case "in progress":
        return "bg-yellow-400";
      default:
        return "bg-neutral-500";
    }
  };

  return (
    <div className="p-6 bg-[#0A0A0A] rounded-xl">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-white text-xl font-semibold">{title}</h3>
        <span className="text-sm text-neutral-400">
          {done}/{total} done
        </span>
      </div>
      <ProgressBar percent={percent} />
      <ul className="space-y-4 mt-4">
        {items.map((item) => (
          <li key={item.title} className="flex items-center gap-3 text-neutral-300">
            <div className={`w-4 h-4 rounded-full ${getDotClass(item.status)}`} />
            <span className={`${getStatusClass(item.status)} font-medium`}>
              {item.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProgressHeader;
