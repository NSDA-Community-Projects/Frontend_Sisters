import React from 'react';

const features = [
  {
    title: 'Sadaqah Jariyah',
    description: 'We build open-source tools and platforms as ongoing charity — serving the Ummah and empowering local developers with impactful projects that benefit communities and inspire lasting good deeds.'
  },
  {
    title: 'Nujum al-Code',
    description: 'A bi-weekly series featuring experienced Muslim developers who share real-world insights, career advice, and faith-driven guidance — lighting the way for the next generation in tech.'
  },
  {
    title: 'Mentorship',
    description: 'We mentor aspiring Muslim students from the basics to advanced skills — offering consistent guidance, encouragement, and faith-centered direction to help them grow confidently in tech.'
  },
  {
    title: 'Muslim Devs',
    description: 'A nationwide community of Muslim developers who collaborate, support one another, and build together — strengthening both the tech ecosystem and the Ummah through shared knowledge and purpose.'
  }
];

export const Home = () => (
  <div className="bg-gray-50 min-h-screen">
    {/* Hero Section */}
    <section className="py-16 px-4 sm:px-8 bg-gradient-to-br from-[#023665] to-[#dfad3b] text-white text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">The Nejm Student Developers Association (NSDA)</h1>
        <p className="text-lg sm:text-xl leading-relaxed mb-4">
          is a nation wide community of Muslim students and developers dedicated to advancing in tech while staying true to Islamic values. We provide mentorship, learning opportunities, and open-source projects to empower the Ummah through technology.
        </p>
      </div>
    </section>

    {/* What We Are Building Section */}
    <section className="py-16 px-4 sm:px-8 max-w-5xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold text-[#023665] text-center mb-10">What we are building</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((feature, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-md p-6 flex flex-col h-full">
            <h3 className="text-xl font-semibold text-[#dfad3b] mb-3">{feature.title}</h3>
            <p className="text-gray-700 text-base flex-1">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>

    {/* About Us Section */}
    <section className="py-16 px-4 sm:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#023665] mb-6 text-center">About Us</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-8 text-center">
          The Nejm Student Developers Association (NSDA) is a nationwide initiative uniting Muslim students passionate about technology. We aim to nurture talent, promote collaboration, and build tech solutions rooted in Islamic values — empowering the next generation to serve the Ummah through innovation, mentorship, and purposeful development.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-[#dfad3b] mb-2">How We Began</h3>
            <p className="text-gray-700 text-base">
              NSDA was founded on March 31, 2025, through the collaboration of students from eight Ethiopian universities. Sparked by a shared vision to uplift the Ummah through technology, we united to create a faith-driven tech community that empowers Muslim students across the nation with purpose, knowledge, and support.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#dfad3b] mb-2">Mission</h3>
            <p className="text-gray-700 text-base mb-4">
              To empower Muslim students across the nation by providing mentorship, learning opportunities, and collaborative platforms rooted in Islamic values—enabling them to innovate, grow, and contribute meaningfully to the Ummah through technology.
            </p>
            <h3 className="text-xl font-semibold text-[#dfad3b] mb-2">Vision</h3>
            <p className="text-gray-700 text-base">
              To be the leading nationwide Muslim developer community that nurtures faith-driven tech talent, fostering a generation of innovators dedicated to uplifting the Ummah and making lasting positive impacts through technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Home; 