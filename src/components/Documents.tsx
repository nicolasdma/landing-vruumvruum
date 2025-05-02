import React from "react";

interface FileStatus {
  name: string;
  progress: "to do" | "in progress" | "done" | "review";
}

const Documents: React.FC = () => {
  const [files] = React.useState<FileStatus[]>([
    { name: "GC and GS generation and usage VOG.xlsx", progress: "to do" },
    { name: "classes and atributes vog.xlsx", progress: "in progress" },
    { name: "chest info vog.xlsx", progress: "review" },
    { name: "Season info and prizes logic.xlsx", progress: "done" },
    { name: "quests vog system.xlsx", progress: "done" },
    { name: "World Boss Damage Table and Info.xlsx", progress: "done" },
  ]);

  const getProgressColor = (progress: FileStatus['progress']) => {
    switch (progress) {
      case "to do":
        return "bg-neutral-600";
      case "in progress":
        return "bg-yellow-500";
      case "review":
        return "bg-blue-500";
      case "done":
        return "bg-green-500";
      default:
        return "bg-neutral-600";
    }
  };

  return (
    <div className="w-[570px]">
      <div className="sticky top-4">
        <div className="p-6 rounded-lg border border-neutral-800 bg-neutral-950/60">
          <h3 className="text-xl font-semibold text-white mb-6">Related Files</h3>
          <div className="space-y-4">
            {files.map((file, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-3 hover:bg-neutral-800/30 rounded-lg transition-colors"
              >
                <div
                  className={`mt-1 w-3 h-3 rounded-full ${getProgressColor(file.progress)} flex-shrink-0`}
                />
                <div className="flex-1 min-w-0">
                  <p className="text-base text-neutral-300 font-medium">{file.name}</p>
                  <a
                    href={`/excel/${file.name}`} // The file should be in the public/excel folder
                    download
                    className="text-sm text-blue-400 hover:underline mt-1 block"
                  >
                    Download
                  </a>
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
