import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Partnerships from "./components/Partnerships";
import Projects from "./components/Projects";
import Results from "./components/Results";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
      <Results />
      <Testimonials />
      <Partnerships />
      <Footer />
    </div>
  );
}

export default App;
