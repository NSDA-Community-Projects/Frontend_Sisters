import {
    Menu,
    X,
    TwitterIcon as TikTok,
    Instagram,
    Facebook,
    Twitter,
    Linkedin,
  } from "lucide-react"
  import { useState } from "react"
  
  export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
  
    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
      setIsOpen(false)
    }
  
    return (
        <nav className="bg-transparent backdrop-blur-sm px-4 py-1 fixed w-full top-0 z-50">

        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/nsda-logo.png" alt="NSDA Logo" className="w-20 h-20 " />
          </div>
  
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 text-sm">
            {["home", "about", "teams", "projects", "events", "blogs", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-[#023665] font-medium hover:text-blue-700 capitalize px-2 py-1 transition-colors"
              >
                {section}
              </button>
            ))}
          </div>
  
          {/* Social Icons */}
          <div className="hidden md:flex items-center space-x-3">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <TikTok className="w-5 h-5 text-[#023665] hover:text-blue-700 transition-colors" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-5 h-5 text-[#023665] hover:text-blue-700 transition-colors" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Facebook className="w-5 h-5 text-[#023665] hover:text-blue-700 transition-colors" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Twitter className="w-5 h-5 text-[#023665] hover:text-blue-700 transition-colors" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5 text-[#023665] hover:text-blue-700 transition-colors" />
            </a>
          </div>
  
          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-[#023665] hover:text-blue-700">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
  
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-2 pb-4 bg-white px-4 space-y-4">
            <div className="flex flex-col space-y-2 text-sm">
              {["home", "about", "teams", "projects", "events", "blogs", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-[#023665] font-medium hover:text-blue-700 text-left capitalize px-2 py-1 transition-colors"
                >
                  {section}
                </button>
              ))}
            </div>
  
            {/* Mobile Social Icons */}
            <div className="flex items-center space-x-3 pt-2">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <TikTok className="w-5 h-5 text-[#023665] hover:text-blue-700 transition-colors" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-5 h-5 text-[#023665] hover:text-blue-700 transition-colors" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Facebook className="w-5 h-5 text-[#023665] hover:text-blue-700 transition-colors" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Twitter className="w-5 h-5 text-[#023665] hover:text-blue-700 transition-colors" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 text-[#023665] hover:text-blue-700 transition-colors" />
              </a>
            </div>
          </div>
        )}
      </nav>
    )
  }
  