import { useState } from "react";
import Header from "../components/Header";
import Documents from "./Documents";
import Suggestions from "./Suggestions";
import Projects from "./Projects";
import Laboratory from "./Laboratory";
import { Tab } from "@headlessui/react";

const TAB_ITEMS = ["Projects", "Documents", "Suggestions", "Laboratory"];

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <Tab.Group selectedIndex={selectedTab} onChange={setSelectedTab}>
      <Header tabItems={TAB_ITEMS} />
      <div className="flex flex-col lg:flex-row gap-6 w-full">
        <div className="w-full">
          <Tab.Panels>
            <Tab.Panel>
              <Projects />
            </Tab.Panel>
            <Tab.Panel>
              <Documents />
            </Tab.Panel>
            <Tab.Panel>
              <Suggestions />
            </Tab.Panel>
            <Tab.Panel>
              <Laboratory />
            </Tab.Panel>
          </Tab.Panels>
        </div>
      </div>
    </Tab.Group>
  );
};

export default Dashboard;
