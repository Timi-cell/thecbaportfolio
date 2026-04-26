import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Partnerships from "./components/Partnerships";
import Projects from "./components/Projects";
import Results from "./components/Results";
import Testimonials from "./components/Testimonials";
import { ArrowUp } from "lucide-react";

function App() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
      <Results />
      <Testimonials />
      <Partnerships />
      <Footer />

      {/* Back to Top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-6 z-50 bg-amber-500 p-4 rounded-full border-2 border-amber-500 hover:scale-110 transition-all shadow-lg active:scale-95 flex items-center justify-center"
        >
          <ArrowUp className="text-white w-7 h-7" />
        </button>
      )}
    </div>
  );
}

export default App;
