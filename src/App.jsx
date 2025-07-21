import { Route, Routes } from 'react-router-dom';
import About from "./Section/about";
import ContactSection from './Section/ContactSection';
import EventSection from './Section/EventPage';
import Features from "./Section/Features";
import FeaturesSection from "./Section/FeaturesSection";
import Home from "./Section/Home";
import Navbar from "./Section/navbar";
import { Teams } from "./Section/Teams";
import { UpcomingProjects } from "./Section/upcoming-projects";


export default function App() {
  return (
    <div className="font-sans bg-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20"> {/* Added pt-20 for spacing below fixed navbar */}
        <Routes>
          {/* Route for the Home page, including scrollable sections */}
          <Route path="/" element={
            <>
              <Home />
              <Features />
              <FeaturesSection />
              <OrganizationLayout />
              <About />
              {/* Teams and UpcomingProjects will have their own routes,
                  but can also be included here if you want them to appear
                  on the homepage AND have dedicated pages.
                  For now, let's assume they are only on their dedicated routes.
              */}
              <Teams id="teams" /> {/* Add id for potential direct scroll if needed */}
              <UpcomingProjects id="projects" /> {/* Add id for potential direct scroll if needed */}
              <EventSection id="events" />
              <ContactSection id="contact" />
            </>
          } />

          {/* Dedicated route for the Teams page */}
          <Route path="/teams" element={<Teams />} />

          {/* Dedicated route for the Projects page */}
          <Route path="/projects" element={<UpcomingProjects />} />

          {/* You can add more dedicated routes here if needed */}
          {/* <Route path="/blogs" element={<BlogsPage />} /> */}

        </Routes>
      </main>
    </div>
  );
}
