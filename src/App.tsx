// App.tsx
import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Documents from "./pages/Documents";
import Activity from "./pages/Activity";
import Suggestions from "./pages/Suggestions";
import Progress from "./pages/Progress";
import Tasks from "./pages/Tasks";

import { issuesData } from "./data/issues";
import { activity } from "./data/activity";

// Function to count done, closed, to-do, and in-progress issues
const countIssues = (data: typeof issuesData) => {
  let doneOrClosedCount = 0;
  let inProgressOrToDoCount = 0;

  // Loop through each section and issue to calculate the counts
  data.forEach((section) => {
    section.issues.forEach((issue) => {
      if (issue.status === "done" || issue.status === "closed") {
        doneOrClosedCount++;
      }
      if (issue.status === "to do" || issue.status === "in progress") {
        inProgressOrToDoCount++;
      }
    });
  });

  return { doneOrClosedCount, inProgressOrToDoCount };
};

export interface ProgressItem {
  title: string;
  status: "done" | "pending" | "in progress";
}

const progressItems: ProgressItem[] = [
  { title: "Auth", status: "in progress" },
  { title: "Home", status: "done" },
  { title: "Battle", status: "done" },
  { title: "Quests", status: "done" },
  { title: "Leaderboard", status: "in progress" },
  { title: "Shop", status: "done" },
  { title: "Buy GC", status: "pending" },
  { title: "Claims GS", status: "done" },
  { title: "Prize Pool", status: "in progress" },
  { title: "Profile", status: "in progress" },
  { title: "Inventory", status: "done" },
  { title: "Invites", status: "pending" },
  { title: "Logout", status: "done" },
];

const App: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const { doneOrClosedCount, inProgressOrToDoCount } = countIssues(issuesData);
  const total = progressItems.length;
  const done = progressItems.filter((item) => item.status === "done").length;
  const percent = Math.round((done / total) * 100);

  return (
    <div className="container mx-12 px-5 py-4 w-full">
      <Tab.Group selectedIndex={selectedTab} onChange={setSelectedTab}>
        <Header />
        <div className="flex flex-col lg:flex-row gap-6 w-full">
          <div className="w-full">
            <Tab.Panels>
              <Tab.Panel>
                <h3 className="text-white text-xl font-semibold mb-4">
                  Overall Progress
                </h3>

                {/* Progress Bar */}
                <div className="w-full h-2 bg-neutral-800 rounded-full mb-6 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-700 ease-out ${
                      percent === 100
                        ? "bg-green-500"
                        : "bg-gradient-to-r from-green-500 to-lime-400"
                    }`}
                    style={{ width: `${percent}%` }}
                  ></div>
                </div>
                <Progress progressItems={progressItems} />
              </Tab.Panel>
              <Tab.Panel>
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="text-xl font-semibold text-white">
                      Fronted
                    </h2>
                    <span className="text-sm text-neutral-400">
                      {doneOrClosedCount}/
                      {doneOrClosedCount + inProgressOrToDoCount} Completed
                    </span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-neutral-800 overflow-hidden">
                    <div
                      className="h-full bg-green-500 transition-all duration-500"
                      style={{
                        width: `${
                          (doneOrClosedCount /
                            (doneOrClosedCount + inProgressOrToDoCount || 1)) *
                          100
                        }%`,
                      }}
                    />
                  </div>
                </div>
                <div>
                  {issuesData.map((section, index) => {
                    // Count done or closed issues
                    const doneOrClosedCount = section.issues.filter(
                      (issue) =>
                        issue.status === "done" || issue.status === "closed"
                    ).length;

                    // Count issues that are still to do or in progress
                    const inProgressOrToDoCount = section.issues.filter(
                      (issue) =>
                        issue.status === "to do" ||
                        issue.status === "in progress"
                    ).length;

                    return (
                      <div key={index}>
                        <Tasks
                          key={index}
                          section={section}
                          doneOrClosedCount={doneOrClosedCount}
                          inProgressOrToDoCount={inProgressOrToDoCount}
                        />
                      </div>
                    );
                  })}
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <Activity updates={activity} />
              </Tab.Panel>
              <Tab.Panel>
                <Documents />
              </Tab.Panel>
              <Tab.Panel>
                <h2 className="text-xl font-semibold text-white mb-4">
                  Suggestions
                </h2>
                <Suggestions />
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
