import React from "react";

interface FileStatus {
  name: string;
  progress: "not started" | "in progress" | "completed" | "review";
}

const Documents: React.FC = () => {
  const [files] = React.useState<FileStatus[]>([
    { name: "QuestsVogSystem.xlsx", progress: "completed" },
    { name: "InfoAndPrizesLogic.xlsx", progress: "in progress" },
  ]);

  const getFileStatusClass = (status: FileStatus["progress"]) => {
    switch (status) {
      case "not started":
        return "bg-neutral-800 text-neutral-400";
      case "in progress":
        return "bg-blue-900/40 text-blue-300";
      case "completed":
        return "bg-green-900/40 text-green-300";
      case "review":
        return "bg-purple-900/40 text-purple-300";
      default:
        return "bg-gray-800 text-gray-400";
    }
  };

  return (
    <div className="w-[570px]">
      <div className="sticky top-4">
        <div className="p-6 rounded-lg border border-neutral-800 bg-neutral-950/60">
          <h3 className="text-xl font-semibold text-white mb-6">
            Related Files
          </h3>
          <div className="space-y-4">
            {files.map((file, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-3 hover:bg-neutral-800/30 rounded-lg transition-colors"
              >
                <div className="mt-1 w-3 h-3 rounded-full bg-neutral-600 flex-shrink-0"></div>
                <div className="flex-1 min-w-0">
                  <p className="text-base text-neutral-300 font-medium">
                    {file.name}
                  </p>
                  <div className="mt-2">
                    <span
                      className={`px-3 py-1.5 rounded-full text-sm font-medium ${getFileStatusClass(
                        file.progress
                      )}`}
                    >
                      {file.progress.toUpperCase()}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documents;