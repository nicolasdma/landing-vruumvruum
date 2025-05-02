import React from "react";
import { Section } from "../data/issues";
import IssueItem from "./IssueItem";
interface ReportSectionProps {
  section: Section;
}

const ReportSection: React.FC<ReportSectionProps> = ({ section }) => {
  return (
    <div className="flex flex-col">
      <section className="w-full mb-10 rounded-lg border border-neutral-800 bg-neutral-950/60 shadow-md overflow-hidden">
        <header className="flex items-center gap-2 px-8 pt-8 text-white">
          <h2 className="text-xl font-semibold tracking-tight">
            {section.title}
          </h2>
        </header>
        <ul>
          {section.issues.map((issue, index) => (
            <IssueItem key={index} issue={issue} />
          ))}
        </ul>
      </section>
    </div>
  );
};

export default ReportSection;