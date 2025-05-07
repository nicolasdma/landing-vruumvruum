interface ProjectCardProps {
    title: string;
    tasks: string[];
    status: string;
  }
  
  const ProjectCard: React.FC<ProjectCardProps> = ({ title, tasks, status }) => {
    return (
      <div
        className={`w-[500px] max-w-xs border border-neutral-800 rounded-lg bg-neutral-950/60 p-4 shadow-md cursor-pointer transition-all duration-300 hover:shadow-lg ${"bg-neutral-950/60"}`}
      >
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <ul className="mt-2 text-sm text-neutral-300 flex space-x-2">
          {tasks.map((task, index) => (
            <li key={index}>
              {task}
              {index < tasks.length - 1 && " | "}
            </li>
          ))}
        </ul>
        <div
          className={`mt-4 text-sm font-medium ${
            status === "In Progress" ? "text-yellow-400" : "text-green-400"
          }`}
        >
          {status}
        </div>
      </div>
    );
  };
  
  export default ProjectCard;
  