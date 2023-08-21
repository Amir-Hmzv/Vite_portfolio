// import components
import Hero from "./components/Hero";
import Navbar from "./Layouts/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { useEffect } from "react";
// Animation package
import Aos from "aos";
import "aos/dist/aos.css";
const now = new Date();

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });
  }, []);
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Skills />
      {/* <Service /> */}
      <Projects />
      {/* <Testimonials /> */}
      {/* <Hireme /> */}
      <Contact />
      <footer className="p-3 text-center">
        <h6 className="mb-3">Amir Mohammad Hamzavi</h6>
        <p>© All CopyRights Reserved {now.getFullYear()}</p>
      </footer>
    </div>
  );
};

export default App;
