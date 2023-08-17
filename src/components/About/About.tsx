import "./About.css";
import { HashLink as Link } from "react-router-hash-link";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import SectionTitle from "../SectionTitle/SectionTitle";

function About() {
  return (
    <div className="about" id="about">
      <SectionTitle
        title="About me"
        description="Here, you can find more information about me, my knowledge, and
        technical skills in terms of programming and technology."
      />
      <h3 className="about-header">Get to know me!</h3>
      <p className="section-paragraph">
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
      <h3 className="about-header">Skills</h3>
      <div className="skill-container">
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
          <div key={index} className="skill">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
