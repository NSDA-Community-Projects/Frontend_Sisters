import React, { useState } from 'react';
import { Users, Code, Lightbulb, Heart, CheckCircle } from 'lucide-react';

export const Teams = () => {
  const [joinedTeams, setJoinedTeams] = useState(new Set());
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState(null);

  const teams = [
    {
      id: 1,
      name: 'Development Team',
      icon: <Code className="w-6 h-6 sm:w-8 sm:h-8" />,
      description: 'Building innovative solutions and maintaining our technical infrastructure.',
      responsibilities: [
        'Full-stack development',
        'Code review and mentoring',
        'Technical architecture',
        'Open source contributions'
      ],
      color: 'bg-blue-500',
      requirements: 'Programming experience in JavaScript, Python, or similar languages'
    },
    {
      id: 2,
      name: 'Community Team',
      icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />,
      description: 'Fostering connections and building our vibrant community.',
      responsibilities: [
        'Event organization',
        'Member engagement',
        'Social media management',
        'Partnership development'
      ],
      color: 'bg-green-500',
      requirements: 'Strong communication skills and passion for community building'
    },
    {
      id: 3,
      name: 'Innovation Team',
      icon: <Lightbulb className="w-6 h-6 sm:w-8 sm:h-8" />,
      description: 'Driving creative solutions and exploring new technologies.',
      responsibilities: [
        'Research and development',
        'Prototype creation',
        'Technology evaluation',
        'Innovation workshops'
      ],
      color: 'bg-purple-500',
      requirements: 'Creative thinking and interest in emerging technologies'
    },
    {
      id: 4,
      name: 'Outreach Team',
      icon: <Heart className="w-6 h-6 sm:w-8 sm:h-8" />,
      description: 'Connecting with the broader community and spreading our mission.',
      responsibilities: [
        'Public relations',
        'Content creation',
        'Educational programs',
        'Community partnerships'
      ],
      color: 'bg-red-500',
      requirements: 'Marketing or communications background preferred'
    }
  ];

  const handleJoinTeam = (teamId, teamName) => {
    setSelectedTeam({ id: teamId, name: teamName });
    setShowApplicationForm(true);
  };

  const handleApplicationSubmit = (e) => {
    e.preventDefault();
    setJoinedTeams(prev => new Set([...prev, selectedTeam.id]));
    setShowApplicationForm(false);
    setSelectedTeam(null);
    alert(`Successfully applied to join ${selectedTeam.name}! We'll contact you soon.`);
  };

  const handleApplyNow = () => {
    alert('General application form would open here. Please select a specific team to join.');
  };

  const handleLearnMore = () => {
    alert('More information about our teams and mission would be displayed here.');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#023665] mb-3 sm:mb-4">
            Our Teams
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Meet the dedicated teams that drive our mission forward. Each team brings unique skills 
            and perspectives to create meaningful impact in the tech community.
          </p>
        </div>

        {/* Teams Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 gap-y-10 mb-12 sm:mb-16">
          {teams.map((team) => (
            <div key={team.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 h-full focus-within:ring-2 focus-within:ring-[#dfad3b]">
              <div className="p-6 sm:p-8">
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className={`${team.color} text-white p-2 sm:p-3 rounded-lg mr-3 sm:mr-4 flex-shrink-0 select-none`}>
                    {team.icon}
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#023665]">{team.name}</h2>
                  {joinedTeams.has(team.id) && (
                    <CheckCircle className="w-6 h-6 text-green-500 ml-auto" aria-label="Application Submitted" />
                  )}
                </div>
                
                <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                  {team.description}
                </p>
                
                <div className="mb-4">
                  <h3 className="text-base sm:text-lg font-semibold text-[#023665] mb-3">Key Responsibilities:</h3>
                  <ul className="space-y-2">
                    {team.responsibilities.map((responsibility, index) => (
                      <li key={index} className="flex items-center text-gray-600 text-sm sm:text-base">
                        <div className="w-2 h-2 bg-[#dfad3b] rounded-full mr-3 flex-shrink-0"></div>
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-base sm:text-lg font-semibold text-[#023665] mb-2">Requirements:</h3>
                  <p className="text-gray-600 text-sm sm:text-base">{team.requirements}</p>
                </div>
                
                <button
                  onClick={() => handleJoinTeam(team.id, team.name)}
                  disabled={joinedTeams.has(team.id)}
                  aria-label={joinedTeams.has(team.id) ? 'Application Submitted' : `Join ${team.name}`}
                  className={`w-full py-2 sm:py-3 px-4 rounded-md font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#dfad3b] ${
                    joinedTeams.has(team.id)
                      ? 'bg-green-500 text-white cursor-not-allowed'
                      : 'bg-[#dfad3b] hover:bg-[#c49a33] text-white'
                  }`}
                >
                  {joinedTeams.has(team.id) ? 'Application Submitted' : 'Join This Team'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-[#023665] rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 text-center text-white">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
            Join one of our teams and contribute to building a stronger tech community. 
            We welcome members of all skill levels and backgrounds.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button
              onClick={handleApplyNow}
              className="bg-[#dfad3b] hover:bg-[#c49a33] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-md font-medium transition-colors duration-200"
            >
              Apply Now
            </button>
            <button
              onClick={handleLearnMore}
              className="border border-white text-white hover:bg-white hover:text-[#023665] px-6 sm:px-8 py-2 sm:py-3 rounded-md font-medium transition-colors duration-200"
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Application Modal */}
        {showApplicationForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
              <h3 className="text-xl font-bold text-[#023665] mb-4">
                Apply to {selectedTeam?.name}
              </h3>
              <form onSubmit={handleApplicationSubmit}>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#023665]"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#023665]"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Why do you want to join this team?
                  </label>
                  <textarea
                    required
                    rows="3"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#023665]"
                  ></textarea>
                </div>
                <div className="flex gap-3">
                  <button
                    type="submit"
                    className="flex-1 bg-[#dfad3b] hover:bg-[#c49a33] text-white py-2 px-4 rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#dfad3b]"
                  >
                    Submit Application
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowApplicationForm(false)}
                    aria-label="Cancel Application"
                    className="flex-1 border border-gray-300 text-gray-700 hover:bg-gray-50 py-2 px-4 rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#dfad3b]"
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