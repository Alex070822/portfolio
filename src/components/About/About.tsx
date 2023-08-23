import { css } from "@emotion/css";
import { widthBreakpoint } from "../shared";
import { HashLink as Link } from "react-router-hash-link";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import SectionTitle from "../SectionTitle/SectionTitle";

const aboutCss = css`
  background-color: #f9f9f9;
  padding: 72px 24px 65px 24px;
  scroll-snap-align: start;
  scroll-snap-stop: always;

  @media (min-width: ${widthBreakpoint.md}px) {
    padding: 72px 48px 96px 48px;
  }

  @media (min-width: ${widthBreakpoint.lg}px) {
    padding: 88px 200px 96px 200px;
  }
`;

const aboutHeaderCss = css`
  color: #1c1b22;
  font-size: 24px;
  font-weight: 500;
  letter-spacing: -0.32px;
  margin-bottom: 20px;

  @media (min-width: ${widthBreakpoint.md}px) {
    font-size: 36px;
    letter-spacing: -0.72px;
    margin-bottom: 28px;
  }

  @media (min-width: ${widthBreakpoint.lg}px) {
    font-size: 42px;
    letter-spacing: -0.84px;
    margin-bottom: 32px;
  }
`;

const aboutParagraphCss = css`
  color: #68647d;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: -0.64px;
  margin-bottom: 20px;

  br {
    display: block;
    content: "";
    margin-top: 12px;
  }

  @media (min-width: ${widthBreakpoint.md}px) {
    font-size: 28px;
    letter-spacing: -1.12px;
    margin-bottom: 36px;

    br {
      margin-top: 24px;
    }
  }

  @media (min-width: ${widthBreakpoint.lg}px) {
    font-size: 34px;
    letter-spacing: -1.36px;
    margin-bottom: 42px;
  }
`;

const skillContainerCss = css`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  @media (min-width: ${widthBreakpoint.md}px) {
    gap: 24px;
  }

  @media (min-width: ${widthBreakpoint.lg}px) {
    gap: 36px;
  }
`;

const skillCss = css`
  color: #68647d;
  font-size: 16px;
  font-weight: 400;
  background-color: #e0e0e0;
  border-radius: 4px;
  letter-spacing: -0.64px;
  padding: 12px 16px;

  @media (min-width: ${widthBreakpoint.md}px) {
    font-size: 28px;
    letter-spacing: -1.12px;
    padding: 20px 24px;
  }

  @media (min-width: ${widthBreakpoint.lg}px) {
    font-size: 34px;
    letter-spacing: -1.36px;
  }
`;

function About() {
  return (
    <div className={aboutCss} id="about">
      <SectionTitle
        title="About me"
        description="Here, you can find more information about me, my knowledge, and
        technical skills in terms of programming and technology."
      />
      <h3 className={aboutHeaderCss}>Get to know me!</h3>
      <p className={aboutParagraphCss}>
        With a solid foundation in <strong>Full-stack development</strong>, i'm
        able to design intuitive user interfaces as well as robust and scalable
        server-side systems. Make sure to visit the <strong>Projects</strong>{" "}
        section to get a glimpse of my work.
        <br />
        Beyond the technical aspects, I also understand the importance of
        collaboration and communication in the software development process.
        <br />
        Continuous learning is at the core of my approach. In a field that is
        constantly evolving, I stay up-to-date with the latest industry trends
        and best practices, eagerly embracing new technologies and
        methodologies.
        <br />
        Let's connect and discuss how we can bring your ideas to life through
        functional and elegant code.
      </p>
      <Link to="#contact" smooth>
        <PrimaryButton buttonText="Contact" />
      </Link>
      <h3 className={aboutHeaderCss}>Skills</h3>
      <div className={skillContainerCss}>
        {[
          "React",
          "Node.js",
          "MongoDB",
          "JavaScript",
          "HTML",
          "CSS",
          "RESTful APIs",
          "Git",
          "Docker",
          "Kubernetes",
        ].map((skill, index) => (
          <div key={index} className={skillCss}>
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
