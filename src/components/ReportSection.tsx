import React from 'react';
import { Issue, Section } from '../data/issues';
import IssueItem from './IssueItem';

interface ReportSectionProps {
  section: Section;
}

const ReportSection: React.FC<ReportSectionProps> = ({ section }) => {
  const getIcon = () => {
    const baseIconStyle = "mr-2.5 text-accent";
    switch (section.icon) {
      case 'general':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
               fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
               className={baseIconStyle}>
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        );
      case 'home':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
               fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
               className={baseIconStyle}>
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
        );
      case 'login':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
               fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
               className={baseIconStyle}>
            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
            <polyline points="10 17 15 12 10 7" />
            <line x1="15" y1="12" x2="3" y2="12" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-card rounded-lg border border-border mb-8 overflow-hidden">
      <div className="bg-primary-hover text-white px-5 py-3 font-semibold flex items-center">
        {getIcon()}
        {section.title}
      </div>
      <ul className="p-0 m-0 list-none">
        {section.issues.map((issue: Issue, index: number) => (
          <IssueItem key={index} issue={issue} />
        ))}
      </ul>
    </div>
  );
};

export default ReportSection;
