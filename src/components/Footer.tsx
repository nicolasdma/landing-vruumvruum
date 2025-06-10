import { socialMedia } from "../data/about";
import { useLocale } from "../context/LocaleContext";

const Footer = () => {
  const { t } = useLocale();
  return (
    <footer className="relative border-t border-neutral-800/50 bg-black/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Left: Brand */}
          <div className="flex flex-col items-center md:items-start space-y-2">
            <a
              href="/"
              className="text-white font-bold tracking-tight hover:text-blue-400 transition-colors duration-300"
            >
              {t.footer.brand}
            </a>
            <p className="text-sm text-neutral-500">
              {t.footer.tagline}
            </p>
          </div>

          {/* Center: Navigation */}
          <div className="flex space-x-8">
            <a
              href="/about"
              className="text-sm text-neutral-400 hover:text-white transition-colors duration-300"
            >
              {t.footer.about}
            </a>
            <a
              href="/pricing-policy"
              className="text-sm text-neutral-400 hover:text-white transition-colors duration-300"
            >
              {t.footer.pricing}
            </a>
          </div>

          {/* Right: Social Links */}
          <div className="flex space-x-6">
            {socialMedia.map((social) => (
              <a
                key={social.id}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors duration-300"
                aria-label={social.name}
              >
                <img
                  src={social.img}
                  alt={social.name}
                  className="h-5 w-5"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom: Copyright */}
        <div className="mt-8 pt-8 border-t border-neutral-800/50">
          <p className="text-center text-sm text-neutral-500">
            {t.footer.copyright.replace("{year}", new Date().getFullYear().toString())}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
