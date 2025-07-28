import React from "react";
import { Users, BookOpen, Heart, Headphones } from "react-feather";

const Feature = () => {
  return (
    <div className="w-full bg-white rounded-lg shadow-xl py-6 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          <div className="text-center px-3 py-1.5">
            <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-2.5">
              <Users className="w-5 h-5 text-white" />
            </div>
            <h3 className="font-semibold text-sm" style={{ color: "#023665" }}>
              Top Speakers
            </h3>
          </div>

          <div className="text-center px-3 py-1.5">
            <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-2.5">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <h3 className="font-semibold text-sm" style={{ color: "#023665" }}>
              Expert Guidance
            </h3>
          </div>

          <div className="text-center px-3 py-1.5">
            <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-2.5">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <h3 className="font-semibold text-sm" style={{ color: "#023665" }}>
              Strong Community
            </h3>
          </div>

          <div className="text-center px-3 py-1.5">
            <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-2.5">
              <Headphones className="w-5 h-5 text-white" />
            </div>
            <h3 className="font-semibold text-sm" style={{ color: "#023665" }}>
              Ongoing Support
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
