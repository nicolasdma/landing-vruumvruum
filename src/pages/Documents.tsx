import React, {useEffect} from "react";

interface FileStatus {
  name: string;
  progress: "to do" | "in progress" | "done" | "review";
}

const Documents: React.FC = () => {

   useEffect(() => {
      window.history.pushState({}, "", "/dashboard/documents");
    }, []);

  const [files] = React.useState<FileStatus[]>([
    { name: "GC and GS generation and usage VOG.xlsx", progress: "done" },
    { name: "classes and atributes vog.xlsx", progress: "done" },
    { name: "chest info vog.xlsx", progress: "done" },
    { name: "Season info and prizes logic.xlsx", progress: "done" },
    { name: "quests vog system.xlsx", progress: "done" },
    { name: "World Boss Damage Table and Info.xlsx", progress: "done" },
  ]);

  const getProgressColor = (progress: FileStatus["progress"]) => {
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
    <div>
      {/* Buttons */}
      <div className="flex flex-wrap gap-4 mb-6">
        <a
          href="https://github.com/jameskoulburn12/valleyofguardians"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="px-4 py-2 border border-neutral-800 bg-neutral-950/60 text-white rounded-lg hover:bg-gray-700 transition">
            GitHub
          </button>
        </a>
        <a
          href="https://supabase.com/dashboard/project/ibbnabweekkflcdlodgf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="px-4 py-2 border border-neutral-800 bg-neutral-950/60 text-white rounded-lg hover:bg-gray-700 transition">
            Supabase
          </button>
        </a>
        <a
          href="https://vercel.com/valleyofguadians/valleyofguardians"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="px-4 py-2 border border-neutral-800 bg-neutral-950/60 text-white rounded-lg hover:bg-gray-700 transition">
            Vercel
          </button>
        </a>
        <a
          href="https://valleyofguardians.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="px-4 py-2 border border-neutral-800 bg-neutral-950/60 text-white rounded-lg hover:bg-gray-700 transition">
            Website
          </button>
        </a>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left column */}
        <div className="w-full lg:w-[570px]">
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
                    <div
                      className={`mt-1 w-3 h-3 rounded-full ${getProgressColor(
                        file.progress
                      )} flex-shrink-0`}
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-base text-neutral-300 font-medium">
                        {file.name}
                      </p>
                      <a
                        href={`/excel/${encodeURIComponent(file.name)}`}
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

        {/* Right column */}
        <div className="w-full lg:w-[570px] space-y-10">
          {/* Video */}
          <div className="p-6 rounded-lg border border-neutral-800 bg-neutral-950/60">
            <h3 className="text-xl font-semibold text-white mb-6">
              Video Preview
            </h3>
            <div className="aspect-video w-full rounded-lg overflow-hidden border border-neutral-800">
              <iframe
                src="https://drive.google.com/file/d/1J4fitRhsbPGUNyRwMihCFHLabWcoZZcT/preview"
                width="100%"
                height="360"
                allow="autoplay"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Google Doc preview */}
          <div className="p-6 rounded-lg border border-neutral-800 bg-neutral-950/60">
            <h3 className="text-xl font-semibold text-white mb-6">
              Email Template
            </h3>
            <div
              onClick={() =>
                window.open(
                  "https://docs.google.com/document/d/1SbNwBJkkFypgJFkB3JisS0_oV43khGXt/edit?usp=sharing",
                  "_blank"
                )
              }
              className="cursor-pointer"
            >
              <div className="w-full h-[600px] rounded-lg overflow-hidden border border-neutral-800">
                <iframe
                  src="https://docs.google.com/document/d/1SbNwBJkkFypgJFkB3JisS0_oV43khGXt/preview"
                  width="100%"
                  height="100%"
                  allowFullScreen
                  className="w-full h-full pointer-events-none"
                />
              </div>
              <noscript>
                <p className="text-sm text-neutral-400 mt-2">
                  Preview not available.{" "}
                  <a
                    href="https://docs.google.com/document/d/1SbNwBJkkFypgJFkB3JisS0_oV43khGXt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Open in Google Docs
                  </a>
                </p>
              </noscript>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documents;
