import { ThemeProvider } from "./context/ThemeContext.jsx";
import Header from "./layout/Header.jsx";
import Footer from "./layout/Footer.jsx";
import Hero from "./components/Hero.jsx";
import StatsStrip from "./components/StatsStrip.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Education from "./components/Education.jsx";
import Contact from "./components/Contact.jsx";

export default function App() {
  return (
    <ThemeProvider>
      <Header />
      <Hero />
      <StatsStrip />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <div className="container">
        <Footer />
      </div>
    </ThemeProvider>
  );
}
