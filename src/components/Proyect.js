import { useEffect } from "react";

const Project = ({ project, language }) => {
  useEffect(() => {
    const projects = document.querySelectorAll(".project");

    const options = {
      root: null,
      threshold: 0,
      rootMargin: "0px 0px -10% 0px",
    };

    const io = new IntersectionObserver((entries, io) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.children[0].classList.add("show-img");
          entry.target.children[1].classList.add("show-info");
        } else {
          entry.target.children[0].classList.remove("show-img");
          entry.target.children[1].classList.remove("show-info");
        }
      });
    }, options);

    projects.forEach((projec) => {
      io.observe(projec);
    });
  }, []);

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
