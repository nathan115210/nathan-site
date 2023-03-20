import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Tech from "./components/Tech";
import Works from "./components/Works";
import Contact from "./components/Contact";
function App() {
  return (
    <BrowserRouter>
      <div className={"relative z-0 bg-primary"}>
        <div className={"bg-hero-pattern bg-cover bg-no-repeat bg-center"}>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Tech />
        <Experience />
        <Works />
        <div className={"relative z-0"}>
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
