import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Tab } from "@headlessui/react";
// import Header from "../components/Header";
import Progress from "../pages/Progress";
import Tasks from "../pages/Tasks";
import Activity from "../pages/Activity";
import Payments from "../pages/Payments";
import { issuesData, Section } from "../data/issues";
import { activity, DailyUpdate } from "../data/activity";
export interface ProgressItem {
  title: string;
  status: "done" | "pending" | "in progress";
}

const progressItems: ProgressItem[] = [
  { title: "Auth", status: "done" },
  { title: "Home", status: "done" },
  { title: "Battle", status: "done" },
  { title: "Quests", status: "done" },
  { title: "Leaderboard", status: "done" },
  { title: "Shop", status: "done" },
  { title: "Buy GC", status: "done" },
  { title: "Claims GS", status: "done" },
  { title: "Prize Pool", status: "done" },
  { title: "Profile", status: "done" },
  { title: "Inventory", status: "done" },
  { title: "Referral", status: "done" },
  { title: "Logout", status: "done" },
];

export interface PaymentsItem {
  task: string;
  delivered: boolean;
  paid: boolean;
}

const payments: PaymentsItem[] = [
  {
    task: "Delivery #1 – Core features (excl. admin panel)",
    delivered: true,
    paid: true,
  },
  {
    task: "Delivery #2 – Admin panel",
    delivered: true,
    paid: true,
  },
  {
    task: "Delivery #3 – Testing & tweaks (1 week)",
    delivered: false,
    paid: false,
  },
  {
    task: "Delivery #4 – Support (3 extra weeks)",
    delivered: false,
    paid: false,
  },
];

interface ProjectData {
  title: string;
  subTitle: string[];
  status: string;
  progress?: ProgressItem[] | null;
  tasks?: Section[] | null;
  activity?: DailyUpdate[] | null;
  payments?: PaymentsItem[] | null;
}

const projects: Record<string, ProjectData> = {
  "admin-panel": {
    title: "Admin Panel",
    subTitle: ["Connect/create Supabase DB", "Fix Frontend issues"],
    status: "In Progress",
    progress: null,
    tasks: null,
    activity: null,
    payments: null,
  },
  "project-1": {
    title: "Project 1",
    subTitle: ["Connect/create Supabase DB", "Fix Frontend issues"],
    status: "Completed",
    progress: progressItems,
    tasks: issuesData,
    activity: activity,
    payments: payments,
  },
};

const Project = () => {
  const { projectId } = useParams();
  const [selectedTab, setSelectedTab] = useState(0);
  const [projectData, setProjectData] = useState<ProjectData | null>(null);

  // const getTabItems = (data: ProjectData | null) => {
  //   if (!data) return [];
  //   const items = [];

  //   if (data.progress) items.push("Progress");
  //   if (data.tasks) items.push("Tasks");
  //   if (data.activity) items.push("Activity");
  //   if (data.payments) items.push("Payments");

  //   return items;
  // };
  // const tabItems = getTabItems(projectData);

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

      <div className="flex flex-col lg:flex-row gap-6 w-full">
        <div className="w-full">
          <Tab.Panels>
            {projectData.progress && (
              <Tab.Panel>
                <Progress progressItems={projectData.progress} />
              </Tab.Panel>
            )}
            {projectData.tasks && (
              <Tab.Panel>
                <Tasks tasksItems={projectData.tasks} />
              </Tab.Panel>
            )}
            {projectData.activity && (
              <Tab.Panel>
                <Activity activityData={projectData.activity} />
              </Tab.Panel>
            )}
            {projectData.payments && (
              <Tab.Panel>
                <Payments payments={projectData.payments} />
              </Tab.Panel>
            )}
          </Tab.Panels>
        </div>
      </div>
    </Tab.Group>
  );
};

export default Project;
