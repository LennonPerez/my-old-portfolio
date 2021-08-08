import { useContext, useEffect } from "react";
import { LanguageContext } from "../App";

const Skills = () => {
  const languages = useContext(LanguageContext);

  useEffect(() => {
    const skills = document.querySelector(".skills-container");

    const options = {
      root: null,
      threshold: 0,
      rootMargin: "-80px 0px -5% 0px",
    };

    const io2 = new IntersectionObserver((entries, io) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          skills.classList.add("show-skills");
        } else {
          skills.classList.remove("show-skills");
        }
      });
    }, options);

    io2.observe(skills);
  }, []);

  return (
    <div className="skills-container" id="skills">
      <h2>{languages === "EN" ? "My skills" : "Mis habilidades"}</h2>
      <ul>
        <li className="skill-box">
          <span className="logo html" />
          <h3>HTML5</h3>
        </li>
        <li className="skill-box">
          <span className="logo css" />
          <h3>CSS3</h3>
        </li>
        <li className="skill-box">
          <span className="logo sass" />
          <h3>SASS</h3>
        </li>
        <li className="skill-box">
          <span className="logo js" />
          <h3>JavaScript</h3>
        </li>
        <li className="skill-box">
          <span className="logo jquery" />
          <h3>jQuery</h3>
        </li>
        <li className="skill-box">
          <span className="logo react" />
          <h3>React</h3>
        </li>
        <li className="skill-box">
          <span className="logo redux" />
          <h3>Redux</h3>
        </li>
      </ul>
    </div>
  );
};

export default Skills;
