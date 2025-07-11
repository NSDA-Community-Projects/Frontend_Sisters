import ContactSection from './components/ContactSection';

import Navbar from "./components/navbar"
import Home from "./components/Home"
import About from "./components/about"
import Features from "./components/Features"
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
