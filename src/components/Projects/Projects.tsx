import { css } from "@emotion/css";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import SectionTitle from "../SectionTitle/SectionTitle";
import projectsData from "../../data/projectsData";

const projectsCss = css`
  background-color: #f9f9f9;
  padding: 72px 24px 25px 24px;
  scroll-snap-align: start;
  scroll-snap-stop: always;
`;

const projectImgCss = css`
  width: 100%;
  margin-bottom: 20px;

  &:hover {
    opacity: 0.8;
  }
`;

const projectHeaderCss = css`
  color: #1c1b22;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0.8px;
  margin-bottom: 16px;
  text-transform: capitalize;
`;

const projectParagraphCss = css`
  color: #68647d;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.56px;
  margin-bottom: 24px;
`;

function Projects() {
  return (
    <div className={projectsCss} id="projects">
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
              className={projectImgCss}
            />
          </a>
          <h3 className={projectHeaderCss}>{project.title}</h3>
          <p className={projectParagraphCss}>{project.description}</p>
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
