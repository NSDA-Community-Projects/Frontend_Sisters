import ContactSection from '../src/Section/ContactSection';

import About from "../src/Section//about";
import Features from "../src/Section/Features";
import Home from "../src/Section/Home";
import Navbar from "../src/Section/navbar";
function App() {
  return (
    <div className="font-sans bg-white min-h-screen">
      <Navbar />
      <Home />
      <Features />
      <About />
      <ContactSection />
    </div>
  );
}

export default App;
