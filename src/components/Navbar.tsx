import { useRef, useState } from "react";
import confetti from "canvas-confetti";

const Navbar = () => {
  const contactButtonRef = useRef<HTMLButtonElement | null>(null);
  const [copied, setCopied] = useState(false);

  const handleContactClick = async () => {
    const email = "hello@vruumvruum.studio";

    try {
      await navigator.clipboard.writeText(email);
      setCopied(true); // disable and change text

      if (contactButtonRef.current) {
        const rect = contactButtonRef.current.getBoundingClientRect();
        const x = (rect.left + rect.width / 2) / window.innerWidth;
        const y = 0.125;

        confetti({
          particleCount: 60,
          spread: 60,
          origin: { x, y },
        });
      }
    } catch (err) {
      console.error("Failed to copy email: ", err);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-neutral-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Profile + Logo + Tagline */}
          <div className="flex items-center space-x-3">
            <img
              src="/nicolas.jpg"
              alt="Nicolás profile"
              className="w-10 h-10 rounded-full object-cover border-2 border-blue-400 shadow-md"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-xs text-blue-300 font-semibold">Nicolás – React Dev & World Rider</span>
              <a
                href="/"
                className="text-white font-bold tracking-tight hover:text-blue-400 transition-colors duration-300 text-lg"
              >
                vruumvruum
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-sm text-neutral-400 hover:text-white transition-colors duration-300">About</a>
            <a href="#lab" className="text-sm text-neutral-400 hover:text-white transition-colors duration-300">Lab</a>
            <a href="#capabilities" className="text-sm text-neutral-400 hover:text-white transition-colors duration-300">Capabilities</a>
            <a href="#contact" className="text-sm text-neutral-400 hover:text-white transition-colors duration-300">Contact</a>
            <button
              ref={contactButtonRef}
              onClick={handleContactClick}
              disabled={copied}
              className={`text-sm transition-colors duration-300 ${
                copied ? "text-green-400 cursor-default" : "text-neutral-400 hover:text-white"
              }`}
            >
              {copied ? "email copied" : "email"}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-neutral-400 hover:text-white transition-colors duration-300">
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
