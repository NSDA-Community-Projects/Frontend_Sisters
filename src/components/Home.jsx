
import { ArrowRight, Users, BookOpen, Heart, Headphones } from "lucide-react"

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen pt-20"
      style={{
        backgroundImage: "url(/nsda-bg.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight" style={{ color: "#023665", fontFamily: "Amiri, serif" }}>
          Empowering Muslim Students in Tech
          <br />
          Innovate with Faith
        </h1>

        <p className="text-lg mb-12 max-w-2xl mx-auto" style={{ color: "#023665", fontFamily: "Nunito, sans-serif" }}>
          A nation wide community of Muslim students and developers dedicated to advancing in tech while staying true to Islamic values. 
          We provide mentorship, learning opportunities, and open-source projects to empower the Ummah through technology.
        </p>

        {/* Team Members Section */}
        <div className="mb-8">
          <div className="flex justify-center items-center mb-4">
            <div className="flex -space-x-2">
              <div className="w-10 h-10 bg-yellow-400 rounded-full border-2 border-white"></div>
              <div className="w-10 h-10 bg-blue-400 rounded-full border-2 border-white"></div>
              <div className="w-10 h-10 bg-green-400 rounded-full border-2 border-white"></div>
            </div>
          </div>
          <p className="mb-6" style={{ color: "#023665", fontFamily: "Nunito, sans-serif" }}>
            Meet our core team members
          </p>
        </div>

        {/* CTA Button */}
        <button
  className="text-[#023665] px-8 py-3 rounded-full font-medium border border-[#023665] bg-transparent hover:bg-[#023665] hover:text-white transition-colors inline-flex items-center gap-2"
>
  Become part of Najm
  <ArrowRight className="w-4 h-4" />
</button>


      </div>
      
    </section>
  )
}
