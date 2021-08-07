import { useState, useRef, useContext } from "react";
import Hiddenmenu from "./Hiddenmenu";
import { LanguageContext, ChangeLanguageContext } from "../App";

const Header = () => {
  const language = useContext(LanguageContext);
  const changeLanguage = useContext(ChangeLanguageContext);
  const [open, setOpen] = useState(false);
  const [view, setView] = useState("Home");
  const menulogo = useRef();

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

  return (
    <>
      <header className="header">
        <div className="hidden-logo" ref={menulogo} onClick={openMenu} />
        <span>
          {language === "EN"
            ? view === "Home" || view === "Inicio"
              ? "Home"
              : view === "Skills" || view === "Habilidades"
              ? "Skills"
              : view === "Projects" || view === "Proyectos"
              ? "Projects"
              : view === "Contact" || view === "Contacto"
              ? "Contact"
              : null
            : view === "Home" || view === "Inicio"
            ? "Inicio"
            : view === "Skills" || view === "Habilidades"
            ? "Habilidades"
            : view === "Projects" || view === "Proyectos"
            ? "Proyectos"
            : view === "Contact" || view === "Contacto"
            ? "Contacto"
            : null}
        </span>
        <div className="links">
          <a href="#home">{language === "EN" ? "Home" : "Inicio"}</a>

          <a href="#skills">{language === "EN" ? "Skills" : "Habilidades"}</a>

          <a href="#home">{language === "EN" ? "Resume" : "Curriculum"}</a>

          <a href="#projects">{language === "EN" ? "Projects" : "Proyectos"}</a>

          <a href="#contact">{language === "EN" ? "Contact" : "Contacto"}</a>
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
