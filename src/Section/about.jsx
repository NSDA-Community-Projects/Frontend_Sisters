import { Eye, Flag } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="bg-[#DFAD3B] py-8 md:py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About NSDA Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12 md:mb-16">
          <div className="order-2 lg:order-1">
            <h2
              className="text-2xl sm:text-3xl font-bold text-blue-900 mb-3 sm:mb-4"
              style={{ fontFamily: "Tajawal, sans-serif" }}
            >
              About Us
            </h2>
            <p
              className="text-gray-800 text-base sm:text-lg leading-relaxed"
              style={{ fontFamily: "Nunito, sans-serif" }}
            >
              The Nejm Student Developers Association (NSDA) is a nationwide
              initiative uniting Muslim students passionate about technology. We
              aim to nurture talent, promote collaboration, and build tech
              solutions rooted in Islamic values — empowering the next
              generation to serve the Ummah through innovation, mentorship, and
              purposeful development.
            </p>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            <img
              src="/first.png"
              alt="About NSDA illustration"
              width="300"
              height="220"
              className="rounded-lg w-full max-w-xs sm:max-w-sm md:max-w-md"
            />
          </div>
        </div>

        {/* How We Began Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12 md:mb-16">
          <div className="order-2 lg:order-2">
            <h2 
              className="text-2xl sm:text-3xl font-bold text-blue-900 mb-3 sm:mb-4"
              style={{ fontFamily: "Tajawal, sans-serif" }}
            >
              How We Began
            </h2>
            <p
              className="text-gray-800 text-base sm:text-lg leading-relaxed"
              style={{ fontFamily: "Nunito, sans-serif" }}
            >
              NSDA was founded on March 31, 2025, through the collaboration of
              students from eight Ethiopian universities. Sparked by a shared
              vision to uplift the Ummah through technology, we united to create
              a faith-driven tech community that empowers Muslim students across
              the nation with purpose, knowledge, and support.
            </p>
          </div>
          <div className="order-1 lg:order-1 flex justify-center">
            <img
              src="/second.png"
              alt="How we began illustration"
              width="300"
              height="220"
              className="rounded-lg w-full max-w-xs sm:max-w-sm md:max-w-md"
            />
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
          {/* Our Mission */}
          <div className="bg-white/30 rounded-xl p-4 sm:p-6 w-full sm:w-1/2 max-w-md">
            <div className="flex items-center gap-2 mb-2">
              <Flag size={18} color="#DFAD3B" />
              <h3 className="text-lg sm:text-xl font-bold text-blue-900">Our Mission</h3>
            </div>
            <p
              className="text-gray-800 text-sm sm:text-md leading-relaxed"
              style={{ fontFamily: "Nunito, sans-serif" }}
            >
              To empower Muslim students across the nation by providing mentorship, learning opportunities, and collaborative platforms rooted in Islamic values—enabling them to innovate, grow, and contribute meaningfully to the Ummah through technology.
            </p>
          </div>

          {/* Our Vision */}
          <div className="bg-white/30 rounded-xl p-4 sm:p-6 w-full sm:w-1/2 max-w-md">
            <div className="flex items-center gap-2 mb-2">
              <Eye size={18} color="#DFAD3B" />
              <h3 className="text-lg sm:text-xl font-bold text-blue-900">Our Vision</h3>
            </div>
            <p
              className="text-gray-800 text-sm sm:text-md leading-relaxed"
              style={{ fontFamily: "Nunito, sans-serif" }}
            >
              To be the leading nationwide Muslim developer community that nurtures faith-driven tech talent, fostering a generation of innovators dedicated to uplifting the Ummah and making lasting positive impacts through technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}