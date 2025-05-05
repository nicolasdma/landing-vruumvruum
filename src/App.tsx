// App.tsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Documents from "./pages/Documents";
import Activity from "./pages/Activity";
import Suggestions from "./pages/Suggestions";
import Progress from "./pages/Progress";
import Tasks from "./pages/Tasks";
import Payments from "./pages/Payments";
import PricingPolicy from "./pages/PricingPolicy";
import { Tab } from "@headlessui/react";
import { issuesData } from "./data/issues";
import { activity } from "./data/activity";

const countIssues = (data: typeof issuesData) => {
  let doneOrClosedCount = 0;
  let inProgressOrToDoCount = 0;

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
  { title: "Leaderboard", status: "done" },
  { title: "Shop", status: "done" },
  { title: "Buy GC", status: "done" },
  { title: "Claims GS", status: "done" },
  { title: "Prize Pool", status: "in progress" },
  { title: "Profile", status: "in progress" },
  { title: "Inventory", status: "done" },
  { title: "Referral", status: "in progress" },
  { title: "Logout", status: "done" },
];

const HomeTabs = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const { doneOrClosedCount, inProgressOrToDoCount } = countIssues(issuesData);
  const total = progressItems.length;
  const done = progressItems.filter((item) => item.status === "done").length;
  const percent = Math.round((done / total) * 100);

  return (
    <Tab.Group selectedIndex={selectedTab} onChange={setSelectedTab}>
      <Header />
      <div className="flex flex-col lg:flex-row gap-6 w-full">
        <div className="w-full">
          <Tab.Panels>
            <Tab.Panel>
              <h3 className="text-white text-xl font-semibold mb-4">
                Overall Progress
              </h3>
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
                  <h2 className="text-xl font-semibold text-white">Frontend</h2>
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
              <div className="space-y-6">
                {issuesData.map((section, index) => {
                  const doneOrClosedCount = section.issues.filter(
                    (issue) =>
                      issue.status === "done" || issue.status === "closed"
                  ).length;

                  const inProgressOrToDoCount = section.issues.filter(
                    (issue) =>
                      issue.status === "to do" || issue.status === "in progress"
                  ).length;

                  return (
                    <Tasks
                      key={index}
                      section={section}
                      doneOrClosedCount={doneOrClosedCount}
                      inProgressOrToDoCount={inProgressOrToDoCount}
                    />
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
                Payments
              </h2>
              <Payments />
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
      <Footer />
    </Tab.Group>
  );
};

const App: React.FC = () => {
  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-6 max-w-screen-2xl mx-auto">
      <Router>
        <Routes>
          <Route path="/" element={<HomeTabs />} />
          <Route
            path="/pricing-policy"
            element={
              <>
                <header className="text-black py-4 mb-8 flex items-center justify-between gap-4 border-b border-neutral-900">
                  <div className="text-sm">
                    <a
                      href="./"
                      rel="noopener noreferrer"
                      className="text-white hover:text-neutral-300 font-medium transition-colors"
                    >
                      Back
                    </a>
                  </div>
                  <h1 className="text-white text-left text-2xl font-medium">
                    vroomvroom.studio
                  </h1>
                </header>
                <PricingPolicy />
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
