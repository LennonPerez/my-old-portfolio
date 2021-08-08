import { useContext } from "react";
import { LanguageContext } from "../App";

const Hero = () => {
  const language = useContext(LanguageContext);

  return (
    <div className="hero" id="home">
      <h1 className="main-title">
        {language === "EN" ? "Hi, I'm" : "Hola, soy"} <span>Lennon</span>,{" "}
        {language === "EN"
          ? "a front-end developer."
          : "un desarrollador front-end"}
      </h1>
      <div className="social-media">
        <a href="https://wa.me/584126736618" target="_blank" rel="noreferrer">
          <i className="fab fa-whatsapp-square"></i>
          whatsapp
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
          <i className="fab fa-linkedin"></i>
          linkedin
        </a>
        <a
          href="https://github.com/LennonPerez"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-github-square"></i>
          github
        </a>
        <a
          href="https://m.me/lennon.perez.96/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-facebook-square"></i>
          facebook
        </a>
      </div>
      <a href="#projects" className="btn">
        {language === "EN" ? "See my work" : "Mira mi trabajo"}
      </a>
      <div id="skillshero" />
    </div>
  );
};

export default Hero;
