import { ChevronLeft, ChevronRight, Code, Database, Laptop } from "lucide-react";
import { useState } from "react";

export const UpcomingProjects = () => {
  const upcomingProjects = [
    {
      id: 1,
      date: "19 JUL 2024", // Changed to 2024 to match current year
      title: "Reserve your spot for our next podcast event",
      icon: Database,
      bgColor: "bg-amber-600", // This will be the solid color if no image is used
      textColor: "text-white",
      // If you want background images like in your visual, you'd add:
      // backgroundImage: "url('/path/to/your/image1.jpg')",
    },
    {
      id: 2,
      date: "28 JUL 2024", // Changed to 2024
      title: "Join Our Coding Hackathon and Turn Ideas Into Innovations!",
      subtitle: "REGISTER NOW",
      icon: Code,
      bgColor: "bg-slate-800",
      textColor: "text-white",
      hasButton: true,
      // backgroundImage: "url('/path/to/your/image2.jpg')",
    },
    {
      id: 3,
      date: "05 AUG 2024", // Changed to 2024
      title: "Experiencing the Future",
      subtitle: "AI Workshop Series",
      icon: Laptop,
      bgColor: "bg-green-600",
      textColor: "text-white",
      // backgroundImage: "url('/path/to/your/image3.jpg')",
    },
    // Adding more projects to demonstrate pagination with 3 items per page
    {
      id: 4,
      date: "15 AUG 2024",
      title: "Web Development Masterclass",
      subtitle: "Learn React & Tailwind CSS",
      icon: Code,
      bgColor: "bg-blue-600",
      textColor: "text-white",
      // backgroundImage: "url('/path/to/your/image4.jpg')",
    },
    {
      id: 5,
      date: "01 SEP 2024",
      title: "Data Science Summit",
      subtitle: "Exploring Big Data Analytics",
      icon: Database,
      bgColor: "bg-purple-600",
      textColor: "text-white",
      // backgroundImage: "url('/path/to/your/image5.jpg')",
    },
    {
      id: 6,
      date: "10 SEP 2024",
      title: "Mobile App Design Workshop",
      subtitle: "UI/UX for iOS & Android",
      icon: Laptop,
      bgColor: "bg-pink-600",
      textColor: "text-white",
      // backgroundImage: "url('/path/to/your/image6.jpg')",
    },
  ];

  const itemsPerPage = 3;
  const totalPages = Math.ceil(upcomingProjects.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const nextSlide = () => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : 1));
  };

  const prevSlide = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : totalPages));
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const projectsToDisplay = upcomingProjects.slice(startIndex, endIndex);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 via-yellow-500 to-amber-500 p-8 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="text-left">
            <h1 className="text-6xl font-bold text-amber-900 mb-6 leading-tight">
              Upcoming
              <br />
              Projects
            </h1>
            <p className="text-xl text-amber-800 leading-relaxed max-w-md">
              Exciting projects await. Secure your spot and stay in the loop!
            </p>
          </div>

          {/* Right Side - Project Cards Container */}
          <div className="relative">
            {/* This div now holds the grid of 3 cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {projectsToDisplay.map((project) => {
                const IconComponent = project.icon;
                return (
                  <div
                    key={project.id}
                    // Apply background color or image here
                    className={`${project.bgColor} rounded-xl p-4 w-[220px] h-[250px] flex flex-col justify-end relative overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300
                    ${project.backgroundImage ? 'bg-cover bg-center' : ''}`}
                    // Conditional style for background image if present
                    style={project.backgroundImage ? { backgroundImage: project.backgroundImage } : {}}
                  >
                    {/* Dark overlay to make text readable on images */}
                    {project.backgroundImage && (
                        <div className="absolute inset-0 bg-black opacity-40 rounded-xl"></div>
                    )}
                    {/* Icon for background pattern, positioned differently for visual match */}
                    <div className="absolute top-2 right-2 opacity-10">
                      <IconComponent size={80} className="text-white" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 text-white"> {/* Ensure text is white and on top */}
                      <div className="text-xs font-medium text-white/90 mb-1">
                        {project.date}
                      </div>
                      <h3 className="text-base font-bold leading-tight mb-2">
                        {project.title}
                      </h3>
                      {project.subtitle && (
                        <div className="mt-auto">
                          {project.hasButton ? (
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md font-medium text-xs transition-colors">
                              {project.subtitle}
                            </button>
                          ) : (
                            <p className="text-white/80 text-xs font-medium">
                              {project.subtitle}
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Navigation */}
            {/* Positioned slightly lower and to the left to match the image */}
            <div className="flex items-center justify-start mt-8 ml-4"> {/* Adjusted margin-left for visual alignment */}
              {/* Left Arrow */}
              <button
                onClick={prevSlide}
                className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors mr-2"
                aria-label="Previous slide"
              >
                <ChevronLeft size={16} className="text-amber-900" /> {/* Smaller icon */}
              </button>

              {/* Page Number Indicator */}
              <div className="flex items-center space-x-1">
                <span className="text-amber-900 font-semibold text-sm">
                  {currentPage}
                </span>
                <span className="text-amber-800 text-sm">/</span>
                <span className="text-amber-800 text-sm">{totalPages}</span>
              </div>

              {/* Right Arrow */}
              <button
                onClick={nextSlide}
                className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors ml-2"
                aria-label="Next slide"
              >
                <ChevronRight size={16} className="text-amber-900" /> {/* Smaller icon */}
              </button>

              {/* Removed dot indicators as they are not explicitly visible in your image for this specific pagination style */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};