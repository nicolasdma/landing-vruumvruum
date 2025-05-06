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

const HomeTabs = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <Tab.Group selectedIndex={selectedTab} onChange={setSelectedTab}>
      <Header />
      <div className="flex flex-col lg:flex-row gap-6 w-full">
        <div className="w-full">
          <Tab.Panels>
            <Tab.Panel>
              <Progress />
            </Tab.Panel>
            <Tab.Panel>
              <Tasks />
            </Tab.Panel>
            <Tab.Panel>
              <Activity />
            </Tab.Panel>
            <Tab.Panel>
              <Documents />
            </Tab.Panel>
            <Tab.Panel>
              <Payments />
            </Tab.Panel>
            <Tab.Panel>
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
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-6 ">
      <Router>
        <Routes>
          <Route path="/" element={<HomeTabs />} />
          <Route
            path="/pricing-policy"
            element={
              <>
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
