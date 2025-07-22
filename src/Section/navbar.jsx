import {
  Facebook,
  Instagram,
  Linkedin,
  Menu,
  TwitterIcon as TikTok, // Renamed for clarity
  Twitter,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Close mobile menu when route or hash changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname, location.hash]);

  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/' ? 'text-blue-700' : 'text-[#023665]';
    }
    if (path.startsWith('#')) {
      return location.pathname === '/' && location.hash === path ? 'text-blue-700' : 'text-[#023665]';
    }
    return 'text-[#023665]';
  };

  const handleSectionClick = (sectionId, e) => {
    e.preventDefault();
    closeMobileMenu();

    if (location.pathname !== '/') {
      navigate(`/#${sectionId}`);
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300); // Delay to wait for page transition
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="bg-white/80 backdrop-blur-sm px-4 py-1 fixed w-full top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center" onClick={closeMobileMenu}>
          <img src="/nsda-logo.png" alt="NSDA Logo" className="w-20 h-20" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-4 text-sm">
          <Link to="/" className={`${isActive('/')} font-medium hover:text-blue-700 px-3 py-2 transition-colors`}>
            Home
          </Link>
          <a
            href="#about"
            onClick={(e) => handleSectionClick('about', e)}
            className={`${isActive('#about')} font-medium hover:text-blue-700 px-3 py-2 transition-colors cursor-pointer`}
          >
            About
          </a>
          <a
            href="#teams"
            onClick={(e) => handleSectionClick('teams', e)}
            className={`${isActive('#teams')} font-medium hover:text-blue-700 px-3 py-2 transition-colors cursor-pointer`}
          >
            Teams
          </a>
          <a
            href="#events"
            onClick={(e) => handleSectionClick('events', e)}
            className={`${isActive('#events')} font-medium hover:text-blue-700 px-3 py-2 transition-colors cursor-pointer`}
          >
            Events
          </a>
          <Link to="/projects" className={`${isActive('/projects')} font-medium hover:text-blue-700 px-3 py-2 transition-colors`}>
            Projects
          </Link>
          <a
            href="#contact"
            onClick={(e) => handleSectionClick('contact', e)}
            className={`${isActive('#contact')} font-medium hover:text-blue-700 px-3 py-2 transition-colors cursor-pointer`}
          >
            Contact
          </a>
          
        </div>

        {/* Social Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="text-[#023665] hover:text-blue-700"><TikTok className="w-5 h-5" /></a>
          <a href="#" className="text-[#023665] hover:text-blue-700"><Instagram className="w-5 h-5" /></a>
          <a href="#" className="text-[#023665] hover:text-blue-700"><Facebook className="w-5 h-5" /></a>
          <a href="#" className="text-[#023665] hover:text-blue-700"><Twitter className="w-5 h-5" /></a>
          <a href="#" className="text-[#023665] hover:text-blue-700"><Linkedin className="w-5 h-5" /></a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#023665] hover:text-blue-700 p-2 focus:outline-none"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" onClick={closeMobileMenu} className={`${isActive('/')} block px-3 py-2 rounded-md text-base font-medium`}>
              Home
            </Link>
            <a
              href="#about"
              onClick={(e) => handleSectionClick('about', e)}
              className={`${isActive('#about')} block px-3 py-2 rounded-md text-base font-medium hover:text-blue-700`}
            >
              About
            </a>
            <Link to="#teams" onClick={closeMobileMenu} className={`${isActive("#teams")} block px-3 py-2 rounded-md text-base font-medium`}>
              Teams
            </Link>
            <Link to="/projects" onClick={closeMobileMenu} className={`${isActive('/projects')} block px-3 py-2 rounded-md text-base font-medium hover:text-blue-700`}>
              Projects
            </Link>
            <a
              href="#events"
              onClick={(e) => handleSectionClick('events', e)}
              className={`${isActive('#events')} block px-3 py-2 rounded-md text-base font-medium hover:text-blue-700`}
            >
              Events
            </a>
            <a
              href="#contact"
              onClick={(e) => handleSectionClick('contact', e)}
              className={`${isActive('#contact')} block px-3 py-2 rounded-md text-base font-medium hover:text-blue-700`}
            >
              Contact
            </a>
          </div>

          {/* Mobile Social Icons */}
          <div className="flex items-center justify-center space-x-4 py-4 border-t border-gray-100">
            <a href="#" className="text-[#023665] hover:text-blue-700"><TikTok className="w-5 h-5" /></a>
            <a href="#" className="text-[#023665] hover:text-blue-700"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="text-[#023665] hover:text-blue-700"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="text-[#023665] hover:text-blue-700"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="text-[#023665] hover:text-blue-700"><Linkedin className="w-5 h-5" /></a>
          </div>
        </div>
      )}
    </nav>
  );
}
