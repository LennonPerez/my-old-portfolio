import { useContext, useEffect } from "react";
import Info from "../data.json";
import { LanguageContext } from "../App";

const Skills = () => {
  const language = useContext(LanguageContext);
  const info = Info.skills[language];

  useEffect(() => {
    const skills = document.querySelectorAll(".skill-box");

    const options = {
      root: null,
      threshold: 0,
      rootMargin: "-80px 0px -5% 0px",
    };

    const io2 = new IntersectionObserver((entries, io) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show-skills");
        } else {
          entry.target.classList.remove("show-skills");
        }
      });
    }, options);

    skills.forEach((skill) => {
      io2.observe(skill);
    });
  }, []);

  return (
    <div className="skills-container" id="skills">
      <h2>{info.title}</h2>
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
          <span className="logo ts" />
          <h3>TypeScript</h3>
        </li>
        <li className="skill-box">
          <span className="logo react" />
          <h3>React</h3>
        </li>
        <li className="skill-box">
          <span className="logo redux" />
          <h3>Redux</h3>
        </li>
        <li className="skill-box">
          <span className="logo next" />
          <h3>Next</h3>
        </li>
        <li className="skill-box">
          <span className="logo vue" />
          <h3>Vue</h3>
        </li>
      </ul>
    </div>
  );
};

export default Skills;
