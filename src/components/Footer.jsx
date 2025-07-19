import React from 'react';
import { Mail, Phone, MessageCircle, ExternalLink } from 'lucide-react';

export const Footer = () => {
  const handleContactClick = (type, value) => {
    switch (type) {
      case 'email':
        window.open(`mailto:${value}`, '_blank');
        break;
      case 'phone':
        window.open(`tel:${value}`, '_blank');
        break;
      case 'social':
        window.open(`https://twitter.com/${value}`, '_blank');
        break;
      default:
        break;
    }
  };

  const handleLinkClick = (url) => {
    // In a real app, these would navigate to actual pages
    alert(`Navigating to: ${url}`);
  };

  return (
    <footer className="bg-[#023665] text-white py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* About */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">NSDA</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Empowering Muslim students in technology through innovation, mentorship, and community building.
            </p>
          </div>

          {/* Contact Info */}
          <div className="text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Contact Us</h4>
            <div className="space-y-2 sm:space-y-3">
              <button
                onClick={() => handleContactClick('email', 'contact@nsda.org')}
                className="flex items-center justify-center sm:justify-start space-x-3 w-full hover:text-[#dfad3b] transition-colors"
              >
                <Mail size={16} className="text-[#dfad3b] flex-shrink-0" />
                <span className="text-sm text-gray-300">contact@nsda.org</span>
              </button>
              <button
                onClick={() => handleContactClick('phone', '+1-555-123-4567')}
                className="flex items-center justify-center sm:justify-start space-x-3 w-full hover:text-[#dfad3b] transition-colors"
              >
                <Phone size={16} className="text-[#dfad3b] flex-shrink-0" />
                <span className="text-sm text-gray-300">+1 (555) 123-4567</span>
              </button>
              <button
                onClick={() => handleContactClick('social', 'nsda_official')}
                className="flex items-center justify-center sm:justify-start space-x-3 w-full hover:text-[#dfad3b] transition-colors"
              >
                <MessageCircle size={16} className="text-[#dfad3b] flex-shrink-0" />
                <span className="text-sm text-gray-300">@nsda_official</span>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left sm:col-span-2 lg:col-span-1">
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h4>
            <div className="space-y-2">
              <button
                onClick={() => handleLinkClick('About Us')}
                className="block w-full text-center sm:text-left text-sm text-gray-300 hover:text-[#dfad3b] transition-colors"
              >
                About Us
              </button>
              <button
                onClick={() => handleLinkClick('Join Our Community')}
                className="block w-full text-center sm:text-left text-sm text-gray-300 hover:text-[#dfad3b] transition-colors"
              >
                Join Our Community
              </button>
              <button
                onClick={() => handleLinkClick('Resources')}
                className="block w-full text-center sm:text-left text-sm text-gray-300 hover:text-[#dfad3b] transition-colors"
              >
                Resources
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-xs sm:text-sm text-gray-400">
            © 2025 NSDA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};