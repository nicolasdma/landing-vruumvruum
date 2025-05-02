// App.tsx
import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ReportSection from "./components/ReportSection";
import { issuesData } from "./data/issues";
import Documents from "./components/Documents";
import PendingTasksSection from "./components/PendingTasksSection";
import { activityLog } from "./data/tasks";
import { Tab } from "@headlessui/react";

const App: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className="container mx-12 px-5 py-4 w-full">
      <Tab.Group selectedIndex={selectedTab} onChange={setSelectedTab}>
        <Header />
        <div className="flex flex-col lg:flex-row gap-6 w-full">
          <div className="w-full">
            <Tab.Panels>
              <Tab.Panel>
                <h2 className="text-xl font-semibold text-white mb-4">
                  UX/UI issues
                </h2>
                <div>
                  {issuesData.map((section, index) => (
                    <ReportSection key={index} section={section} />
                  ))}
                </div>
              </Tab.Panel>
              <Tab.Panel>
              <PendingTasksSection updates={activityLog} />
              </Tab.Panel>
              <Tab.Panel>
                <Documents />
              </Tab.Panel>
            </Tab.Panels>
          </div>
        </div>
      </Tab.Group>
      <Footer />
    </div>
  );
};

export default App;
