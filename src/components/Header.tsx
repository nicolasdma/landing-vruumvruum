// Header.tsx
import React from "react";
import { Tab } from "@headlessui/react";

const Header: React.FC = () => {
  return (
    <header className="text-black py-4 mb-8">
      <h1 className="text-white text-left text-2xl font-medium mb-4">Valley of Guardians - Phase 1</h1>
      <Tab.List className="flex space-x-6 border-b border-neutral-900">
        {["Progress", "Tasks", "Activity", "Documents", "Payments","Suggestions"].map((tab) => (
          <Tab key={tab} className={({ selected }) =>
            `px-1 pb-2 text-sm font-medium ${
              selected
                ? "text-white border-b-2 border-black"
                : "text-gray-500 hover:text-white"
            }`
          }>
            {tab}
          </Tab>
        ))}
      </Tab.List>
    </header>
  );
};

export default Header;
