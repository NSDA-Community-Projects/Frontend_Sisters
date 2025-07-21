import { Route, Routes } from 'react-router-dom';
import ContactSection from './Section/ContactSection';
import Features from "./Section/Features";
import Home from "./Section/Home";
import About from "./Section/about";
import Navbar from "./Section/navbar";
import { Projects } from "./pages/Projects";
import { Teams } from "./pages/Teams";
import EventSection from './sections/EventPage';

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
              <About />
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
