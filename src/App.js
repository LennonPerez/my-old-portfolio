import { useState, createContext } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./styles/app.css";

export const LanguageContext = createContext();
export const ChangeLanguageContext = createContext();

function App() {
  const [language, setLanguage] = useState("EN");

  const changeLanguage = () => setLanguage(language === "ES" ? "EN" : "ES");

  return (
    <LanguageContext.Provider value={language}>
      <ChangeLanguageContext.Provider value={changeLanguage}>
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
      </ChangeLanguageContext.Provider>
    </LanguageContext.Provider>
  );
}

export default App;
