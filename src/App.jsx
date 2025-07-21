import { Route, Routes } from 'react-router-dom';
import OrganizationLayout from "./Section/Building";
import ContactSection from './Section/ContactSection';
import EventSection from './Section/EventPage';
import Features from "./Section/Features";
import FeaturesSection from "./Section/FeaturesSection";
import Home from "./Section/Home";
import { Teams } from "./Section/Teams";
import About from "./Section/about";
import Navbar from "./Section/navbar";
import { Projects } from "./pages/Projects";

export default function App() {
  return (
    <div className="font-sans bg-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              
              <Features />
              <FeaturesSection />
              <OrganizationLayout />
              <About />
              <Teams />
              <EventSection />
              <ContactSection />
           
            </>
          } />
          <Route path="/teams" element={<Teams />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
    </div>
  );
}
