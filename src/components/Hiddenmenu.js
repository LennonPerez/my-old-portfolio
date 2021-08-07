const Hiddenmenu = ({ language, openMenu, setView }) => {
  const closeMenu = (e) => {
    setTimeout(() => {
      openMenu();
      setView(e.target.textContent);
    }, 500);
  };

  return (
    <ul className="hidden-menu">
      <li>
        <a href="#home" onClick={closeMenu}>
          {language === "EN" ? "Home" : "Inicio"}
        </a>
      </li>
      <li>
        <a href="#skills" onClick={closeMenu}>
          {language === "EN" ? "Skills" : "Habilidades"}
        </a>
      </li>
      <li>
        <a href="#home">{language === "EN" ? "Resume" : "Curriculum"}</a>
      </li>
      <li>
        <a href="#projects" onClick={closeMenu}>
          {language === "EN" ? "Projects" : "Proyectos"}
        </a>
      </li>
      <li>
        <a href="#contact" onClick={closeMenu}>
          {language === "EN" ? "Contact" : "Contacto"}
        </a>
      </li>
    </ul>
  );
};
export default Hiddenmenu;
