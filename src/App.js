import { useState, createContext, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./styles/app.css";

export const LanguageContext = createContext();
export const ChangeLanguageContext = createContext();
export const SectionContext = createContext();

function App() {
  const [language, setLanguage] = useState("EN");
  const [section, setSection] = useState("home");

  const changeLanguage = () => setLanguage(language === "ES" ? "EN" : "ES");

  useEffect(() => {
    const home = document.querySelector("#home");
    const skills = document.querySelector("#skills");
    const projects = document.querySelector("#projects");
    const contact = document.querySelector("#contact");

    const options = {
      root: null,
      threshold: 0,
      rootMargin: "-82px 0px -85% 0px",
    };

    const io = new IntersectionObserver((entries, io) => {
      entries.forEach((entry) => {
        const link = document.querySelector(`#${entry.target.id}-link`);
        if (entry.isIntersecting) {
          link.classList.add("selected");
          setSection(entry.target.id);
        } else {
          link.classList.remove("selected");
        }
      });
    }, options);

    io.observe(home);
    io.observe(skills);
    io.observe(projects);
    io.observe(contact);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <LanguageContext.Provider value={language}>
      <ChangeLanguageContext.Provider value={changeLanguage}>
        <SectionContext.Provider value={section}>
          <div className="container">
            <Header />
            <main className="main-container">
              <Hero />
              <Skills />
              <Projects />
              <Contact />
            </main>
            <Footer />
          </div>
        </SectionContext.Provider>
      </ChangeLanguageContext.Provider>
    </LanguageContext.Provider>
  );
}

export default App;
