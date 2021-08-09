import { useContext, useEffect } from "react";
import { LanguageContext } from "../App";
import Info from "../data.json";
import Project from "./Project";

const Projects = () => {
  const language = useContext(LanguageContext);
  const info = Info.projects;

  useEffect(() => {
    const title = document.querySelector(".title-projects");
    const options = {};

    const iotitle = new IntersectionObserver((entries, iotitle) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show-title-projects");
        } else {
          entry.target.classList.remove("show-title-projects");
        }
      });
    }, options);

    iotitle.observe(title);
  }, []);

  return (
    <div className="projects-container" id="projects">
      <h2 className="title-projects">{info[language].title}</h2>
      {info.allprojects.map((project) => (
        <Project project={project} language={language} key={project.id} />
      ))}
    </div>
  );
};

export default Projects;
