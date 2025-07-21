"use client";

import { useState } from "react";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import builtImage from "../assets/built.png"; // Adjust the path as necessary

// Constants for pie chart data
const PIE_DATA = [
  { name: "Central Team", value: 30, color: "#DFAD3B" },
  { name: "Campus Chapters", value: 35, color: "#4A90E2" },
  { name: "Coordinated Growth", value: 20, color: "#F4C430" },
  { name: "Operations", value: 15, color: "#7BB3F0" },
];

// Updated leadership team with Islamic names
const LEADERSHIP_TEAM = [
  {
    id: 1,
    name: "Fatuma Hassan",
    role: "National President",
    bio: "Oversees operations and strategy with over 8 years of experience.",
  },
  {
    id: 2,
    name: "Nebil Osman",
    role: "VP of Campus Relations",
    bio: "Connects the central team with 25+ chapters across campuses.",
  },
  {
    id: 3,
    name: "Osama Farid",
    role: "Director of Growth",
    bio: "Drives expansion and innovation across our national network.",
  },
  {
    id: 4,
    name: "Amina Yusuf",
    role: "Programs Coordinator",
    bio: "Facilitates community events and collaborative learning.",
  },
  {
    id: 5,
    name: "Mohammed Idris",
    role: "Finance Head",
    bio: "Manages budgets, donations, and financial planning.",
  },
  {
    id: 6,
    name: "Yasmin Abdullah",
    role: "Media Director",
    bio: "Handles all communications and public relations.",
  },
];

const ORG_STATS = {
  campusCount: 25,
  growthText: "and growing each semester",
  annualSummitText:
    "Our annual leadership summit brings together representatives from all campuses to share best practices.",
};

export default function OrganizationLayout() {
  const [currentPage, setCurrentPage] = useState(0);
  const CARDS_PER_PAGE = 3;
  const totalPages = Math.ceil(LEADERSHIP_TEAM.length / CARDS_PER_PAGE);

  const nextPage = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const visibleLeaders = LEADERSHIP_TEAM.slice(
    currentPage * CARDS_PER_PAGE,
    (currentPage + 1) * CARDS_PER_PAGE
  );

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-20">
          {/* Left Side */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-[#023665] mb-8">
              How We Are Structured
            </h2>
            <div className="flex flex-col items-start gap-8">
              {/* Pie Chart */}
              <div className="w-full max-w-xs mx-auto">
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={PIE_DATA}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={120}
                      paddingAngle={2}
                      dataKey="value"
                      label={({ name, percent }) =>
                        `${name} ${(percent * 100).toFixed(0)}%`
                      }
                    >
                      {PIE_DATA.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>

              {/* Description */}
              <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                  Our organization is built on collaboration between central
                  leadership and campus chapters. This structure maintains
                  national unity while empowering local creativity.
                </p>
                <p>
                  The pie chart shows how responsibilities are shared across
                  operational areas.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side Cards */}
          <div className="lg:col-span-3 space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#DFAD3B]">
              <h3 className="font-bold text-gray-900 text-xl mb-2">
                Central Leadership Team
              </h3>
              <p className="text-[#DFAD3B] font-semibold mb-4">
                Strategic Direction & National Coordination
              </p>
              <p className="text-gray-600 leading-relaxed">
                Leads national vision, branding, and strategy. Supports campus
                chapters with resources and training.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#4A90E2]">
              <h3 className="font-bold text-gray-900 text-xl mb-2">
                Campus Chapters
              </h3>
              <p className="text-[#DFAD3B] font-semibold mb-4">
                Local Implementation & Community Building
              </p>
              <p className="text-gray-600 leading-relaxed">
                Hosts events, recruits members, and adapts programs locally
                while staying aligned nationally.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#F4C430]">
              <h3 className="font-bold text-gray-900 text-xl mb-2">
                Growth & Development
              </h3>
              <p className="text-[#DFAD3B] font-semibold mb-4">
                Expansion & Capacity Building
              </p>
              <p className="text-gray-600 leading-relaxed">
                Monthly syncs and shared resources drive sustainable,
                high-quality chapter growth.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Leadership Cards */}
          <div>
            <h2 className="text-3xl font-bold text-[#023665] mb-6">
              Our Leadership
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Meet the dedicated individuals shaping our vision and ensuring we
              stay aligned with our mission.
            </p>

            <div className="relative">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {visibleLeaders.map((leader) => (
                  <div
                    key={leader.id}
                    className="bg-white border border-gray-100 rounded-lg p-5 text-center shadow hover:shadow-lg transition-all"
                  >
                    <div className="w-20 h-20 bg-gray-50 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl text-gray-400">
                      👤
                    </div>
                    <h4 className="font-bold text-gray-900 mb-1">
                      {leader.name}
                    </h4>
                    <p className="text-sm text-[#DFAD3B] font-semibold mb-3">
                      {leader.role}
                    </p>
                    <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                      {leader.bio}
                    </p>
                    <button className="text-xs text-[#023665] hover:text-[#DFAD3B] font-medium transition-colors">
                      View full profile →
                    </button>
                  </div>
                ))}
              </div>

              <div className="flex justify-center mt-8 space-x-4">
                <button
                  onClick={prevPage}
                  className="text-[#023665] px-4 py-2 rounded-full font-medium border border-[#023665] bg-transparent hover:bg-[#023665] hover:text-white transition-colors"
                >
                  &lt;
                </button>
                <div className="flex items-center space-x-2">
                  {Array.from({ length: totalPages }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentPage(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === currentPage ? "bg-[#DFAD3B]" : "bg-gray-300"
                      }`}
                      aria-label={`Go to page ${index + 1}`}
                    />
                  ))}
                </div>
                <button
                  onClick={nextPage}
                  className="text-[#023665] px-4 py-2 rounded-full font-medium border border-[#023665] bg-transparent hover:bg-[#023665] hover:text-white transition-colors"
                >
                  &gt;
                </button>
              </div>
            </div>
          </div>

          {/* Network Stats with SVG */}
          <div>
            <h2 className="text-3xl font-bold text-[#023665] mb-6">
              Our Network
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              With chapters at {ORG_STATS.campusCount}+ universities, we ensure
              local relevance and national strength.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              {ORG_STATS.annualSummitText}
            </p>
            <div className="bg-[#F8F9FA] rounded-lg p-6 flex flex-col items-center">
              <div className="text-center mb-4">
                <div className="text-5xl font-bold text-[#DFAD3B] mb-2">
                  {ORG_STATS.campusCount}+
                </div>
                <div className="text-lg font-medium text-[#023665]">
                  Campus Chapters
                </div>
                <div className="text-sm text-gray-500 mt-1">
                  {ORG_STATS.growthText}
                </div>
              </div>

              {/* Replace this div with your actual SVG component */}
              <div className="w-full max-w-md mt-4 flex justify-end">
                <img
                  src={builtImage}
                  alt="Organization structure"
                  className="w-48 h-48"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
