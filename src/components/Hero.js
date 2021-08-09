import { useContext, useEffect } from "react";
import Info from "../data.json";
import { LanguageContext } from "../App";

const Hero = () => {
  const language = useContext(LanguageContext);
  const info = Info.hero[language];

  useEffect(() => {
    const title = document.querySelector(".main-title");
    const social = document.querySelector(".social-media");
    const btn = document.querySelector(".btn");

    const options = {
      root: null,
      threshold: 0,
      rootMargin: "-80px 0px 0px 0px",
    };

    const io2 = new IntersectionObserver((entries, io) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show-title");
        } else {
          entry.target.classList.remove("show-title");
        }
      });
    }, options);

    io2.observe(title);
    io2.observe(social);
    io2.observe(btn);
  }, []);

  return (
    <div className="hero" id="home">
      <h1 className="main-title">
        {info.title.part1} <span>Lennon</span>, {info.title.part2}
      </h1>
      <div className="social-media">
        <a href="https://wa.me/584126736618" target="_blank" rel="noreferrer">
          <i className="fab fa-whatsapp-square"></i>1
        </a>
        <a
          href="https://www.linkedin.com/in/lennonperez/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-linkedin"></i>2
        </a>
        <a
          href="https://github.com/LennonPerez"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-github-square"></i>3
        </a>
        <a
          href="https://m.me/lennon.perez.96/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-facebook-square"></i>4
        </a>
      </div>
      <a href="#projects" className="btn">
        {info.button}
      </a>
      <div id="skillshero" />
    </div>
  );
};

export default Hero;
