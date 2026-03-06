import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Features from "./components/Features";
import About from "./components/About";
import Locations from "./components/Locations";
import Footer from "./components/Footer";
import BookingModal from "./components/BookingModal";

function App() {
  const [isModalOpen,setIsModalOpen] = useState(false)

  return (
    <div>
      <Navbar onBookClick={() => setIsModalOpen(true)}/>
      <Hero onBookClick={() => setIsModalOpen(true)}/>
      <Services />
      <Features />
      <About />
      <Locations />
      <Footer />
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}/>
    </div>
  );
}

export default App;