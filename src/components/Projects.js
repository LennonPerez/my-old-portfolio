import { useContext, useEffect } from "react";
import { LanguageContext } from "../App";
import { projects } from "./Text";
import Project from "./Proyect";

const Projects = () => {
  const language = useContext(LanguageContext);

  useEffect(() => {
    const title = document.querySelector(".title-projects");
    const options = {};

    const iotitle = new IntersectionObserver((entries, iotitle) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show-title");
        } else {
          entry.target.classList.remove("show-title");
        }
      });
    }, options);

    iotitle.observe(title);
  }, []);

  return (
    <div className="projects-container" id="projects">
      <h2 className="title-projects">
        {language === "EN" ? "My projects" : "Mis proyectos"}
      </h2>
      {projects.map((project) => (
        <Project project={project} language={language} key={project.id} />
      ))}
    </div>
  );
};

export default Projects;
