import React from "react";

interface ProgressItem {
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
  { title: "Prize Pool", status: "done" },
  { title: "Profile", status: "done" },
  { title: "Inventory", status: "done" },
  { title: "Referral", status: "done" },
  { title: "Logout", status: "done" },
];

const Progress: React.FC = () => {
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

  const total = progressItems.length;
  const done = progressItems.filter((item) => item.status === "done").length;
  const percent = Math.round((done / total) * 100);

  return (
    <>
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
      <div className="p-4 sm:p-6 md:p-8 bg-[#0A0A0A] rounded-xl">
        <ul className="space-y-3 sm:space-y-4">
          {progressItems.map((item) => (
            <li
              key={item.title}
              className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-neutral-300"
            >
              <div
                className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full ${
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
    </>
  );
};

export default Progress;
