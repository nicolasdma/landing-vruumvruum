import React from "react";

interface ProgressItem {
  title: string;
  status: "done" | "pending" | "in progress";
}

const progressItems: ProgressItem[] = [
  { title: "Home", status: "in progress" },
  { title: "Battle", status: "done" },
  { title: "Quests", status: "done" },
  { title: "Leaderboard", status: "pending" },
  { title: "Shop", status: "done" },
  { title: "Buy GC", status: "pending" },
  { title: "Claims GS", status: "done" },
  { title: "Profile", status: "in progress" },
  { title: "Inventory", status: "done" },
  { title: "Invites", status: "pending" },
  { title: "Logout", status: "done" },
];

const ProgressSection: React.FC = () => {
  const getStatusClass = (status: string) => {
    switch (status) {
      case "done":
        return "text-green-500";
      case "in progress":
        return "text-yellow-400";
      default:
        return "text-neutral-400";
    }
  };

  return (
    <div className="p-6 bg-[#0A0A0A] rounded-xl">
      <ul className="space-y-4">
        {progressItems.map((item) => (
          <li
            key={item.title}
            className="flex items-center gap-3 text-neutral-300"
          >
            <div
              className={`w-4 h-4 rounded-full ${
                item.status === "done"
                  ? "bg-green-500"
                  : item.status === "in progress"
                  ? "bg-yellow-400"
                  : "bg-neutral-500"
              }`}
            ></div>
            <span className={`${getStatusClass(item.status)} font-medium`}>
              {item.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProgressSection;
