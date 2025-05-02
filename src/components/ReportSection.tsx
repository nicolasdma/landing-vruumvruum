import React from "react";
import { Section } from "../data/issues";
import IssueItem from "./IssueItem";

interface ReportSectionProps {
  section: Section;
}

const ReportSection: React.FC<ReportSectionProps> = ({ section }) => {
  // Check if all issues in the section are either "done" or "closed"
  const isAllDoneOrClosed = section.issues.every(
    (issue) => issue.status === "done" || issue.status === "closed"
  );

  return (
    <div
      className={`mt-6 border border-neutral-800 rounded-lg shadow-md p-6 ${
        isAllDoneOrClosed ? "opacity-50" : ""
      } bg-neutral-950/60`}
    >
      <h2 className="text-xl font-semibold text-white mb-4">{section.title}</h2>
      <ul className="space-y-4">
        {section.issues.map((issue, index) => (
          <IssueItem key={index} issue={issue} isAllDoneOrClosed={isAllDoneOrClosed} />
        ))}
      </ul>
    </div>
  );
};

export default ReportSection;
