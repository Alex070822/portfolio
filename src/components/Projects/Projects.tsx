import "./Projects.css";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import SectionTitle from "../SectionTitle/SectionTitle";
import projectsData from "../../data/projectsData";

function Projects() {
  return (
    <div className="projects" id="projects">
      <SectionTitle
        title="Projects"
        description="Here, you will find some of the projects that i have created."
      />
      {projectsData.map((project, index) => (
        <div key={index}>
          <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
            <img
              src={project.imgSrc}
              alt={`${project.title} website`}
              className="project-img"
            />
          </a>
          <h3 className="project-header">{project.title}</h3>
          <p className="project-paragraph">{project.description}</p>
          <PrimaryButton
            buttonText="Github"
            onClick={() => window.open(project.githubLink, "_blank")}
          />
        </div>
      ))}
    </div>
  );
}

export default Projects;
