import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Tab } from "@headlessui/react";
import Header from "../components/Header";
import Progress from "../pages/Progress";
import Tasks from "../pages/Tasks";
import Activity from "../pages/Activity";
import Payments from "../pages/Payments";

const TAB_ITEMS = ["Progress", "Tasks", "Activity", "Payments"];

interface ProjectData {
    title: string;
    tasks: string[];
    status: string;
}
const projects: Record<string, ProjectData> = {
    "admin-panel": {
      title: "Admin Panel",
      tasks: ["Connect/create Supabase DB", "Fix Frontend issues"],
      status: "In Progress",
    },
    "project-1": {
      title: "Project 1",
      tasks: ["Connect/create Supabase DB", "Fix Frontend issues"],
      status: "Completed",
    },
  };

const Project = () => {
  const { projectId } = useParams();
  const [selectedTab, setSelectedTab] = useState(0);
  const [projectData, setProjectData] = useState<ProjectData | null>(null);

  useEffect(() => {
    // Simulate a fetch or API call to get project data based on the `projectId`
    const fetchData = async () => {
      // Replace this with actual data fetching


      setProjectData(projects[projectId!]); // Set the data based on `projectId`
    };

    fetchData();
  }, [projectId]);

  if (!projectData) {
    return <div>Loading...</div>;
  }

  return (
    <Tab.Group selectedIndex={selectedTab} onChange={setSelectedTab}>
      <Header title={projectData.title} tabItems={TAB_ITEMS} />
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
              <Payments />
            </Tab.Panel>
          </Tab.Panels>
        </div>
      </div>
    </Tab.Group>
  );
};

export default Project;
