import {
  Facebook,
  Instagram,
  Linkedin,
  Menu,
  TwitterIcon as TikTok,
  Twitter,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  // Check if current path matches the link
  const isActive = (path) => {
    return location.pathname === path ? 'text-blue-700' : 'text-[#023665]';
  };

  // Handle section navigation
  const handleSectionClick = (sectionId, e) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate(`/#${sectionId}`);
      // The actual scrolling will be handled by the Home component
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    closeMobileMenu();
  };

  return (
    <nav className="bg-white/80 backdrop-blur-sm px-4 py-1 fixed w-full top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center" onClick={closeMobileMenu}>
          <img src="/nsda-logo.png" alt="NSDA Logo" className="w-20 h-20" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4 text-sm">
          <Link 
            to="/" 
            className={`${isActive('/')} font-medium hover:text-blue-700 px-3 py-2 transition-colors`}
          >
            Home
          </Link>
          <a 
            href="#about" 
            onClick={(e) => handleSectionClick('about', e)}
            className="text-[#023665] font-medium hover:text-blue-700 px-3 py-2 transition-colors cursor-pointer"
          >
            About
          </a>
          <Link 
            to="/teams" 
            className={`${isActive('#teams')} font-medium hover:text-blue-700 px-3 py-2 transition-colors`}
          >
            Teams
          </Link>
          <Link 
            to="/projects" 
            className={`${isActive('/projects')} font-medium hover:text-blue-700 px-3 py-2 transition-colors`}
          >
            Projects
          </Link>
          <a 
            href="#events" 
            onClick={(e) => handleSectionClick('events', e)}
            className="text-[#023665] font-medium hover:text-blue-700 px-3 py-2 transition-colors cursor-pointer"
          >
            Events
          </a>
          <a 
            href="#blogs" 
            onClick={(e) => handleSectionClick('blogs', e)}
            className="text-[#023665] font-medium hover:text-blue-700 px-3 py-2 transition-colors cursor-pointer"
          >
            Blogs
          </a>
          <a 
            href="#ContactSection" 
            onClick={(e) => handleSectionClick('ContactSection', e)}
            className="text-[#023665] font-medium hover:text-blue-700 px-3 py-2 transition-colors cursor-pointer"
          >
            Contact
          </a>
        </div>

        {/* Social Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-[#023665] hover:text-blue-700 transition-colors">
            <TikTok className="w-5 h-5" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-[#023665] hover:text-blue-700 transition-colors">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-[#023665] hover:text-blue-700 transition-colors">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-[#023665] hover:text-blue-700 transition-colors">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-[#023665] hover:text-blue-700 transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
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

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link 
              to="/" 
              onClick={closeMobileMenu} 
              className={`${isActive('/')} block px-3 py-2 rounded-md text-base font-medium`}
            >
              Home
            </Link>
            <a 
              href="#about" 
              onClick={closeMobileMenu} 
              className="block px-3 py-2 rounded-md text-base font-medium text-[#023665] hover:bg-gray-50 hover:text-blue-700"
            >
              About
            </a>
            <Link 
              to="/teams" 
              onClick={closeMobileMenu} 
              className={`${isActive('/teams')} block px-3 py-2 rounded-md text-base font-medium`}
            >
              Teams
            </Link>
            <Link 
              to="/projects" 
              onClick={closeMobileMenu} 
              className={`${isActive('/projects')} block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50 hover:text-blue-700`}
            >
              Projects
            </Link>
            <a 
              href="#events" 
              onClick={(e) => handleSectionClick('events', e)}
              className="block px-3 py-2 rounded-md text-base font-medium text-[#023665] hover:bg-gray-50 hover:text-blue-700 cursor-pointer"
            >
              Events
            </a>
            <a 
              href="#blogs" 
              onClick={(e) => handleSectionClick('blogs', e)}
              className="block px-3 py-2 rounded-md text-base font-medium text-[#023665] hover:bg-gray-50 hover:text-blue-700 cursor-pointer"
            >
              Blogs
            </a>
            <a 
              href="#ContactSection" 
              onClick={(e) => handleSectionClick('ContactSection', e)}
              className="block px-3 py-2 rounded-md text-base font-medium text-[#023665] hover:bg-gray-50 hover:text-blue-700 cursor-pointer"
            >
              Contact
            </a>
          </div>

          {/* Mobile Social Icons */}
          <div className="flex items-center justify-center space-x-4 py-4 border-t border-gray-100">
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-[#023665] hover:text-blue-700 transition-colors">
              <TikTok className="w-5 h-5" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-[#023665] hover:text-blue-700 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-[#023665] hover:text-blue-700 transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-[#023665] hover:text-blue-700 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-[#023665] hover:text-blue-700 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
  