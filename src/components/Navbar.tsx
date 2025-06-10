// import { navItems } from "../data/about";
import { useLocale } from "../context/LocaleContext";

const Navbar = () => {
  const { t } = useLocale();
  const navLinks = [
    { name: t.navbar.work, link: "#work" },
    { name: t.navbar.lab, link: "#lab" },
    { name: t.navbar.about, link: "#about" },
    { name: t.navbar.contact, link: "#contact" },
  ];
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-neutral-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="text-white font-bold tracking-tight hover:text-blue-400 transition-colors duration-300">
            vruumvruum
          </a>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.link}
                className="text-sm text-neutral-400 hover:text-white transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
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
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
