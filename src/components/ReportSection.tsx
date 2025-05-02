import React from "react";
import { Section } from "../data/issues";
import IssueItem from "./IssueItem";

interface ReportSectionProps {
  section: Section;
}

const ReportSection: React.FC<ReportSectionProps> = ({ section }) => {
  return (
    <>
      <div className="mt-6 border border-neutral-800 rounded-lg bg-neutral-950/60 shadow-md p-6">
      <h2 className="text-xl font-semibold text-white mb-4">{section.title}</h2>
        <ul className="space-y-4">
          {section.issues.map((issue, index) => (
            <IssueItem key={index} issue={issue} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default ReportSection;
