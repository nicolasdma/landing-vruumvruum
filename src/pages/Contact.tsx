import { useLocale } from "../context/LocaleContext";

const Contact = () => {
  const { t } = useLocale();
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Subtle Diagonal Line Background */}
      <div className="absolute inset-0 bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.04)_0,rgba(255,255,255,0.04)_1px,transparent_1px,transparent_20px)]" />
      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black/90" />
      {/* Blue Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none z-0 animate-pulse" />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl w-full space-y-10">
          <div className="space-y-2">
            <p className="text-lg sm:text-xl text-neutral-400 font-medium mb-2">{t.contact.title}</p>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-none tracking-tight mb-4">
              {t.contact.mainStatement}
            </h1>
            <a
              href={`mailto:${t.contact.email}`}
              className="block w-fit text-3xl sm:text-5xl md:text-6xl font-extrabold underline underline-offset-8 decoration-white hover:text-blue-400 transition-colors duration-300 shadow-[0_0_32px_0_rgba(255,255,255,0.15)]"
              style={{ textShadow: "0 2px 24px rgba(255,255,255,0.15)" }}
            >
              {t.contact.email}
            </a>
          </div>
        </div>
      </div>

      {/* Footer Statement */}
      <div className="relative z-10 border-t border-neutral-800/50 mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-[16vw] sm:text-[12vw] font-extrabold tracking-tighter uppercase leading-none text-neutral-900 hover:text-neutral-800 transition-colors duration-500">
            {t.contact.footer}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Contact; 