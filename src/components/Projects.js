import { useContext } from "react";
import { LanguageContext } from "../App";
import { projects } from "./Text";
import Project from "./Proyect";

const Projects = () => {
  const language = useContext(LanguageContext);

  return (
    <div className="projects-container" id="projects">
      <h2>{language === "EN" ? "My projects" : "Mis proyectos"}</h2>
      {projects.map((project) => (
        <Project project={project} language={language} key={project.id} />
      ))}
    </div>
  );
};

export default Projects;
