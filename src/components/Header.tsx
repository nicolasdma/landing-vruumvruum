// Header.tsx
import React from "react";
import { Tab } from "@headlessui/react";

interface HeaderProps {
  title?: string;
  tabItems: string[];
}

const Header: React.FC<HeaderProps> = ({
  title = "Valley of Guardians",
  tabItems,
}) => {
  return (
    <header className="text-black py-4 mb-8">
      <div className="flex gap-6 justify-center">
        {/* <div className="text-sm">
        <a
          href="../"
          rel="noopener noreferrer"
          className="text-white hover:text-neutral-300 font-medium transition-colors"
          >
          Back
        </a>
      </div> */}
        <h1 className="text-white text-left text-2xl font-medium mb-4">
          {title}
        </h1>
      </div>
      <Tab.List className="flex space-x-6 border-b border-neutral-900">
        {tabItems.map((tab) => {
          const isLast = tab === "Laboratory";
          return (
            <Tab
              key={tab}
              className={({ selected }) =>
                `px-1 pb-2 text-sm font-medium ${
                  selected
                    ? "text-white border-b-2 border-black"
                    : "text-gray-500 hover:text-white"
                }
                
                ${isLast && "text-yellow-400"}
                `
              }
            >
              {tab}
            </Tab>
          );
        })}
      </Tab.List>
    </header>
  );
};

export default Header;
