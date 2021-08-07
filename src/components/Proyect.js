const Project = ({ project, language }) => {
  return (
    <div className="project">
      <div className={`img ${project.class}`} />
      <div className="info">
        <h3 className="name">{project.title}</h3>
        <p className="description">
          {language === "EN" ? project.descriptionEN : project.descriptionES}
        </p>
        <div className="buttons">
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            demo
          </a>
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            {language === "EN" ? "Code" : "Codigo"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
