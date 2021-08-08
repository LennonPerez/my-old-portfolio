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
          {language === "EN" ? "home" : "inicio"}
        </a>
      </li>
      <li>
        <a href="#skillshero" onClick={closeMenu}>
          {language === "EN" ? "skills" : "habilidades"}
        </a>
      </li>
      <li>
        <a href="#projects" onClick={closeMenu}>
          {language === "EN" ? "projects" : "proyectos"}
        </a>
      </li>
      <li>
        <a href="#contact" onClick={closeMenu}>
          {language === "EN" ? "contact" : "contacto"}
        </a>
      </li>
      <li>
        <a href="#home">{language === "EN" ? "resume" : "curriculum"}</a>
      </li>
    </ul>
  );
};
export default Hiddenmenu;
