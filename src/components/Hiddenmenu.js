const Hiddenmenu = ({ info, openMenu, setView }) => {
  const closeMenu = (e) => {
    setTimeout(() => {
      openMenu();
      setView(e.target.name);
    }, 500);
  };

  return (
    <ul className="hidden-menu">
      <li>
        <a href="#home" name="home" onClick={closeMenu}>
          {info.home}
        </a>
      </li>
      <li>
        <a href="#skillshero" name="skills" onClick={closeMenu}>
          {info.skills}
        </a>
      </li>
      <li>
        <a href="#projects" name="projects" onClick={closeMenu}>
          {info.projects}
        </a>
      </li>
      <li>
        <a href="#contact" name="contact" onClick={closeMenu}>
          {info.contact}
        </a>
      </li>
      <li>
        <a
          href="https://drive.google.com/file/d/1DNJO_YdmFH2ciB8rg0_34e1ty7G7fUeO/view"
          target="_blank"
          rel="noreferrer"
        >
          {info.resume}
        </a>
      </li>
    </ul>
  );
};
export default Hiddenmenu;
