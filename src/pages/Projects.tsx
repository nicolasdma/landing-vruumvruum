import { useEffect, useState } from "react";
import { Tab } from "@headlessui/react";
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  useEffect(() => {
    window.history.pushState({}, "", "/dashboard/projects");
  }, []);

  const projects = [
    // {
    //   title: "Admin Panel",
    //   tasks: ["Connect/create Supabase DB", "Fix Frontend issues"],
    //   status: "In Progress",
    //   url: "admin-panel",
    // },
    {
      title: "Project 1",
      tasks: ["Supabase", "Frontend", "Admin Panel"],
      status: "In Progress",
      url: "project-1",
    },
  ];

  return (
    <Tab.Group selectedIndex={selectedTab} onChange={setSelectedTab}>
      <div className="flex flex-col lg:flex-row gap-6 w-full">
        {projects.map((project, index) => (
          <Link key={index} to={`/project/${project.url}`}>
            <ProjectCard
              title={project.title}
              tasks={project.tasks}
              status={project.status}
            />
          </Link>
        ))}
      </div>
    </Tab.Group>
  );
};

export default Projects;
