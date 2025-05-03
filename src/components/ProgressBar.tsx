import React from "react";

interface ProgressBarProps {
  percent: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ percent }) => (
  <div className="w-full h-2 bg-neutral-800 rounded-full mb-4 overflow-hidden">
    <div
      className="h-full bg-gradient-to-r from-green-500 to-lime-400 rounded-full transition-all duration-700 ease-out"
      style={{ width: `${percent}%` }}
    ></div>
  </div>
);

export default ProgressBar;
