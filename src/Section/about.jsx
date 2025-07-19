

import { Flag, Eye } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="min-h-screen bg-yellow-400 py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* About NSDA Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-4xl font-bold text-blue-900 mb-6" style={{ fontFamily: "Tajawal, sans-serif" }}>About Us</h2>
            <p className="text-gray-800 leading-relaxed" style={{ fontFamily: "Nunito, sans-serif" }}>
              The Nejm Student Developers Association (NSDA) is a nationwide initiative uniting Muslim students passionate about technology. 
              We aim to nurture talent, promote collaboration, and build tech solutions rooted in Islamic values — empowering the next generation 
              to serve the Ummah through innovation, mentorship, and purposeful development.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="/first.png"
              alt="About NSDA illustration"
              width="400"
              height="300"
              className="rounded-lg"
            />
          </div>
        </div>

        {/* How We Began Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="lg:order-2">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">How We Began</h2>
            <p className="text-gray-800 leading-relaxed" style={{ fontFamily: "Nunito, sans-serif" }}>
              NSDA was founded on March 31, 2025, through the collaboration of students from eight Ethiopian universities. 
              Sparked by a shared vision to uplift the Ummah through technology, we united to create a faith-driven tech community 
              that empowers Muslim students across the nation with purpose, knowledge, and support.
            </p>
          </div>
          <div className="lg:order-1 flex justify-center">
            <img
              src="/second.png"
              alt="How we began illustration"
              width="400"
              height="300"
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Mission and Vision Section */}
        <div className="bg-white/20 rounded-3xl p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Our Mission */}
            <div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Mission</h3>
              <p className="text-gray-800 leading-relaxed" style={{ fontFamily: "Nunito, sans-serif" }}>
                To empower Muslim students across the nation by providing mentorship, learning opportunities, and collaborative platforms 
                rooted in Islamic values—enabling them to innovate, grow, and contribute meaningfully to the Ummah through technology.
              </p>
            </div>

            {/* Our Vision */}
            <div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Vision</h3>
              <p className="text-gray-800 leading-relaxed" style={{ fontFamily: "Nunito, sans-serif" }}>
                To be the leading nationwide Muslim developer community that nurtures faith-driven tech talent, fostering a generation 
                of innovators dedicated to uplifting the Ummah and making lasting positive impacts through technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
