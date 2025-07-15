import React, { useState } from 'react';
import { Github, ExternalLink, Calendar, Users, Filter, Plus, Eye, Star } from 'lucide-react';

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [starredProjects, setStarredProjects] = useState(new Set());
  const [showProjectForm, setShowProjectForm] = useState(false);

  const projects = [
    {
      id: 1,
      title: 'Community Platform',
      description: 'A comprehensive platform for connecting Muslim tech professionals and students worldwide.',
      category: 'web',
      status: 'active',
      technologies: ['React', 'Node.js', 'MongoDB'],
      team: 'Development Team',
      startDate: '2024-01-15',
      progress: 75
    },
    {
      id: 2,
      title: 'Prayer Time App',
      description: 'Mobile application providing accurate prayer times with Islamic calendar integration.',
      category: 'mobile',
      status: 'completed',
      technologies: ['React Native', 'Firebase'],
      team: 'Innovation Team',
      startDate: '2023-09-01',
      progress: 100
    },
    {
      id: 3,
      title: 'Mentorship Portal',
      description: 'Platform connecting experienced professionals with students for career guidance.',
      category: 'web',
      status: 'active',
      technologies: ['Vue.js', 'Express', 'PostgreSQL'],
      team: 'Community Team',
      startDate: '2024-03-10',
      progress: 60
    },
    {
      id: 4,
      title: 'Islamic Learning AI',
      description: 'AI-powered tool for Islamic education and Quran study assistance.',
      category: 'ai',
      status: 'development',
      technologies: ['Python', 'TensorFlow', 'FastAPI'],
      team: 'Innovation Team',
      startDate: '2024-02-20',
      progress: 40
    },
    {
      id: 5,
      title: 'Charity Tracker',
      description: 'Blockchain-based platform for transparent charity donations and zakat distribution.',
      category: 'blockchain',
      status: 'planning',
      technologies: ['Solidity', 'Web3.js', 'React'],
      team: 'Development Team',
      startDate: '2024-05-01',
      progress: 20
    },
    {
      id: 6,
      title: 'Event Management System',
      description: 'Comprehensive system for organizing and managing community events and workshops.',
      category: 'web',
      status: 'completed',
      technologies: ['Angular', 'Spring Boot', 'MySQL'],
      team: 'Community Team',
      startDate: '2023-11-15',
      progress: 100
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'ai', label: 'AI/ML' },
    { id: 'blockchain', label: 'Blockchain' }
  ];

  const statusColors = {
    active: 'bg-green-100 text-green-800',
    completed: 'bg-blue-100 text-blue-800',
    development: 'bg-yellow-100 text-yellow-800',
    planning: 'bg-gray-100 text-gray-800'
  };

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const handleGithubClick = (projectTitle) => {
    alert(`Opening GitHub repository for ${projectTitle}`);
  };

  const handleLiveClick = (projectTitle) => {
    alert(`Opening live demo for ${projectTitle}`);
  };

  const handleViewProject = (projectTitle) => {
    alert(`Viewing detailed information for ${projectTitle}`);
  };

  const handleStarProject = (projectId) => {
    setStarredProjects(prev => {
      const newStarred = new Set(prev);
      if (newStarred.has(projectId)) {
        newStarred.delete(projectId);
      } else {
        newStarred.add(projectId);
      }
      return newStarred;
    });
  };

  const handleSubmitIdea = () => {
    setShowProjectForm(true);
  };

  const handleJoinProject = () => {
    alert('Project collaboration form would open here. You can select which projects to contribute to.');
  };

  const handleProjectSubmit = (e) => {
    e.preventDefault();
    setShowProjectForm(false);
    alert('Thank you for your project idea! We\'ll review it and get back to you soon.');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#023665] mb-3 sm:mb-4">
            Our Projects
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the innovative projects we're building to serve the Muslim tech community. 
            From web applications to AI solutions, we're creating tools that make a difference.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-6 sm:mb-8">
          <div className="flex items-center justify-center mb-4">
            <Filter size={20} className="text-[#023665] mr-2" />
            <span className="text-sm font-medium text-[#023665]">Filter Projects</span>
          </div>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-3 sm:px-4 py-2 rounded-md text-xs sm:text-sm font-medium transition-colors duration-200 ${
                  activeFilter === filter.id
                    ? 'bg-[#023665] text-white'
                    : 'text-[#023665] border border-[#023665] hover:bg-[#023665] hover:text-white'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 gap-y-10 mb-12 sm:mb-16">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col focus-within:ring-2 focus-within:ring-[#dfad3b]">
              {/* Project Header */}
              <div className="h-32 sm:h-40 bg-gradient-to-br from-[#023665] to-[#dfad3b] rounded-t-lg flex items-center justify-center relative">
                <div className="text-white text-4xl sm:text-6xl font-bold opacity-20 select-none">
                  {project.title.charAt(0)}
                </div>
                <button
                  onClick={() => handleStarProject(project.id)}
                  aria-label={starredProjects.has(project.id) ? 'Unstar project' : 'Star project'}
                  className={`absolute top-3 right-3 p-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#dfad3b] ${
                    starredProjects.has(project.id)
                      ? 'bg-yellow-400 text-white'
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  <Star size={16} fill={starredProjects.has(project.id) ? 'currentColor' : 'none'} />
                </button>
              </div>
              
              <div className="p-4 sm:p-6 flex-1 flex flex-col">
                {/* Status and Actions */}
                <div className="flex justify-between items-start mb-3 sm:mb-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[project.status]}`}> 
                    {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                  </span>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleGithubClick(project.title)}
                      aria-label="View on GitHub"
                      className="text-gray-500 hover:text-[#023665] transition-colors focus:outline-none focus:ring-2 focus:ring-[#dfad3b]"
                      title="View on GitHub"
                    >
                      <Github size={16} />
                    </button>
                    <button
                      onClick={() => handleLiveClick(project.title)}
                      aria-label="View Live Demo"
                      className="text-gray-500 hover:text-[#023665] transition-colors focus:outline-none focus:ring-2 focus:ring-[#dfad3b]"
                      title="View Live Demo"
                    >
                      <ExternalLink size={16} />
                    </button>
                    <button
                      onClick={() => handleViewProject(project.title)}
                      aria-label="View Details"
                      className="text-gray-500 hover:text-[#023665] transition-colors focus:outline-none focus:ring-2 focus:ring-[#dfad3b]"
                      title="View Details"
                    >
                      <Eye size={16} />
                    </button>
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="text-lg sm:text-xl font-bold text-[#023665] mb-2 sm:mb-3">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm sm:text-base mb-4 leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs text-gray-500">Progress</span>
                    <span className="text-xs text-gray-500">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-[#dfad3b] h-2 rounded-full transition-all duration-300"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="bg-[#023665]/10 text-[#023665] px-2 py-1 rounded text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Team & Start Date */}
                <div className="flex items-center text-xs text-gray-500 gap-3 mb-2">
                  <Users size={14} className="mr-1" /> {project.team}
                  <Calendar size={14} className="ml-4 mr-1" /> {project.startDate}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-[#023665] rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 text-center text-white">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
            Have a Project Idea?
          </h2>
          <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
            We're always looking for new project ideas that can benefit the Muslim tech community. 
            Share your vision and let's build something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button
              onClick={handleSubmitIdea}
              className="bg-[#dfad3b] hover:bg-[#c49a33] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-md font-medium transition-colors duration-200 flex items-center justify-center"
            >
              <Plus size={18} className="mr-2" />
              Submit Project Idea
            </button>
            <button
              onClick={handleJoinProject}
              className="border border-white text-white hover:bg-white hover:text-[#023665] px-6 sm:px-8 py-2 sm:py-3 rounded-md font-medium transition-colors duration-200"
            >
              Join a Project
            </button>
          </div>
        </div>

        {/* Project Idea Form Modal */}
        {showProjectForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-lg max-h-[90vh] overflow-y-auto">
              <h3 className="text-xl font-bold text-[#023665] mb-4">
                Submit Your Project Idea
              </h3>
              <form onSubmit={handleProjectSubmit}>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Title
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#023665]"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category
                  </label>
                  <select
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#023665]"
                  >
                    <option value="">Select a category</option>
                    <option value="web">Web Development</option>
                    <option value="mobile">Mobile App</option>
                    <option value="ai">AI/ML</option>
                    <option value="blockchain">Blockchain</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description
                  </label>
                  <textarea
                    required
                    rows="4"
                    placeholder="Describe your project idea, its purpose, and potential impact..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#023665]"
                  ></textarea>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#023665]"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#023665]"
                  />
                </div>
                <div className="flex gap-3">
                  <button
                    type="submit"
                    className="flex-1 bg-[#dfad3b] hover:bg-[#c49a33] text-white py-2 px-4 rounded-md font-medium transition-colors"
                  >
                    Submit Idea
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowProjectForm(false)}
                    className="flex-1 border border-gray-300 text-gray-700 hover:bg-gray-50 py-2 px-4 rounded-md font-medium transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};