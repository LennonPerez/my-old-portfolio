import { useState, useRef, useContext, useEffect } from "react";
import Hiddenmenu from "./Hiddenmenu";
import Info from "../data.json";
import { LanguageContext, ChangeLanguageContext, SectionContext } from "../App";

const Header = () => {
  const language = useContext(LanguageContext);
  const changeLanguage = useContext(ChangeLanguageContext);
  const section = useContext(SectionContext);
  const [open, setOpen] = useState(false);
  const [view, setView] = useState("home");
  const menulogo = useRef();

  const info = Info.header[language];

  //open and close hidden menu on mobile version
  const openMenu = () => {
    if (menulogo.current.classList[1] === "show") {
      menulogo.current.classList.replace("show", "hidde");
    } else {
      menulogo.current.classList.add("show");
      menulogo.current.classList.remove("hidde");
    }
    setOpen(open ? false : true);
  };

  useEffect(() => {
    setView(section);
  }, [section, language]);

  return (
    <>
      <header className="header">
        <div className="hidden-logo" ref={menulogo} onClick={openMenu} />
        <span>{info[view]}</span>
        <div className="links">
          <a href="#home" id="home-link">
            {info.home}
          </a>
          <a href="#skillshero" id="skills-link">
            {info.skills}
          </a>
          <a href="#projects" id="projects-link">
            {info.projects}
          </a>
          <a href="#contact" id="contact-link">
            {info.contact}
          </a>
          <a
            href="https://drive.google.com/file/d/1-1Qbws8FcW6Lny7JyinPPcWnkBZ7U50r/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            {info.resume}
          </a>
        </div>
        <p onClick={changeLanguage}>{language}</p>
      </header>
      {open && <Hiddenmenu info={info} openMenu={openMenu} setView={setView} />}
    </>
  );
};

export default Header;
