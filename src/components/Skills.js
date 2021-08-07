import { useContext } from "react";
import { LanguageContext } from "../App";

const Skills = () => {
  const languages = useContext(LanguageContext);
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
