const Experience = () => (
  <div className="pt-32 border-t border-neutral-800 space-y-12">
    <h3 className="text-2xl md:text-4xl font-semibold">
      Built with teams, powered solo
    </h3>
    <p className="text-lg text-neutral-400 max-w-3xl">
      I’ve been trusted by companies like Lemondata, Coderhouse (teaching JS),
      NanoApps (fullstack at a startup), and Powtoon (as a React dev). Beyond
      that, I’ve shipped independent work under my own studio — helping
      startups, artists, and founders go live fast with bold design and clean
      code.
    </p>

    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center">
      <div className="h-10 flex items-center justify-center">
        <img
          src="/experience/lemondata.png"
          alt="Lemondata"
          width="160px"
          className="h-full object-contain"
        />
      </div>
      <div className="h-10 flex items-center justify-center">
        <img
          src="/experience/coderhouse.png"
          alt="Coderhouse"
          width="160px"
          className="h-full object-contain"
        />
      </div>
      <div className="h-10 flex items-center justify-center">
        <img
          src="/experience/nanoapps.png"
          alt="NanoApps"
          width="160px"
          className="h-full object-contain"
        />
      </div>
      <div className="h-10 flex items-center justify-center">
        <img
          src="/experience/powtoon.png"
          alt="Powtoon"
          width="160px"
          className="h-full object-contain"
        />
      </div>
    </div>
  </div>
);

export default Experience;
