import { useState, useRef, useContext, useEffect } from "react";
import Hiddenmenu from "./Hiddenmenu";
import { LanguageContext, ChangeLanguageContext, SectionContext } from "../App";

const Header = () => {
  const language = useContext(LanguageContext);
  const changeLanguage = useContext(ChangeLanguageContext);
  const section = useContext(SectionContext);
  const [open, setOpen] = useState(false);
  const [view, setView] = useState("Home");
  const menulogo = useRef();

  //open and close hidden menu on mobile version
  const openMenu = () => {
    if (menulogo.current.classList[1] === "show") {
      menulogo.current.classList.add("hidde");
      menulogo.current.classList.remove("show");
    } else {
      menulogo.current.classList.add("show");
      menulogo.current.classList.remove("hidde");
    }
    setOpen(open ? false : true);
  };

  useEffect(() => {
    setView(section);
  }, [section]);

  return (
    <>
      <header className="header">
        <div className="hidden-logo" ref={menulogo} onClick={openMenu} />
        <span>
          {language === "EN"
            ? view === "home" || view === "inicio"
              ? "home"
              : view === "skills" || view === "habilidades"
              ? "skills"
              : view === "projects" || view === "proyectos"
              ? "projects"
              : view === "contact" || view === "contacto"
              ? "contact"
              : null
            : view === "home" || view === "inicio"
            ? "inicio"
            : view === "skills" || view === "kabilidades"
            ? "habilidades"
            : view === "projects" || view === "proyectos"
            ? "proyectos"
            : view === "contact" || view === "contacto"
            ? "contacto"
            : null}
        </span>
        <div className="links">
          <a href="#home" id="home-link">
            {language === "EN" ? "Home" : "Inicio"}
          </a>
          <a href="#skillshero" id="skills-link">
            {language === "EN" ? "Skills" : "Habilidades"}
          </a>
          <a href="#projects" id="projects-link">
            {language === "EN" ? "Projects" : "Proyectos"}
          </a>
          <a href="#contact" id="contact-link">
            {language === "EN" ? "Contact" : "Contacto"}
          </a>
          <a
            href="https://drive.google.com/file/d/1zlnBFhPv_hxC1EUViFq-Au9pJiFlTZe_/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            {language === "EN" ? "Resume" : "Curriculum"}
          </a>
        </div>
        <p onClick={changeLanguage}>{language}</p>
      </header>
      {open && (
        <Hiddenmenu language={language} openMenu={openMenu} setView={setView} />
      )}
    </>
  );
};

export default Header;
