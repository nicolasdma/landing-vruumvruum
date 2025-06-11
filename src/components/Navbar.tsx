import { useLocale } from "../context/LocaleContext";
import { useRef, useState } from "react";
import confetti from "canvas-confetti";

const Navbar = () => {
  const { t } = useLocale();
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
          {/* Logo */}
          <a
            href="/"
            className="text-white font-bold tracking-tight hover:text-blue-400 transition-colors duration-300"
          >
            vruumvruum
          </a>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              ref={contactButtonRef}
              onClick={handleContactClick}
              disabled={copied}
              className={`text-sm transition-colors duration-300 ${
                copied ? "text-green-400 cursor-default" : "text-neutral-400 hover:text-white"
              }`}
            >
              {copied ? "email copied" : t.navbar.contact}
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
