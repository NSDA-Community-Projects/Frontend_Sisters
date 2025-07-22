import { Route, Routes } from 'react-router-dom';
import About from "./Section/about";
import OrganizationLayout from './Section/Building';
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
      <main className="flex-grow pt-20">
        <Routes>
          {/* Homepage route */}
          <Route path="/" element={
            <>
              <Home />
              <Features />
              <FeaturesSection />
              <OrganizationLayout />
              <About />
              <Teams id="teams" />
              <UpcomingProjects />
              <EventSection id="events" />
              <ContactSection id="contact" />
            </>
          } />

          {/* Dedicated route for Teams */}
          <Route path="/teams" element={<Teams />} />

          {/* Dedicated route for Projects */}
          <Route path="/projects" element={<UpcomingProjects />} />

          {/* Add more routes if needed */}
        </Routes>
      </main>
    </div>
  );
}
