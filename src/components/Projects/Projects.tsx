import "./Projects.css";

function Projects() {
  return (
    <div className="projects" id="projects">
      <h2 className="section-title ">Projects</h2>
      <div className="divider"></div>
      <p className="section-description">
        Here, you will find some of the projects that i have created.
      </p>
      <a
        href="https://taupe-bonbon-fc5739.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={"./src/assets/countdown.png"}
          alt="launch countdown timer website"
          className="project-img"
        />
      </a>
      <h3 className="project-header">Launch countdown timer</h3>
      <p className="project-paragraph">
        A responsive launch countdown timer that i made using React, Vite and
        Emotion.
      </p>
      <button
        type="button"
        className="content-button"
        onClick={() =>
          window.open(
            "https://github.com/Alex070822/frontend-mentor/tree/main/launch-countdown-timer",
            "_blank"
          )
        }
      >
        Github
      </button>
      <a
        href="https://steady-panda-cd2ef5.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={"./src/assets/ip-tracker.png"}
          alt="ip address tracker website"
          className="project-img"
        />
      </a>
      <h3 className="project-header">Ip address tracker</h3>
      <p className="project-paragraph">
        A responsive IP address tracker made with React, Vite, Emotion and two
        different APIs.
      </p>
      <button
        type="button"
        className="content-button"
        onClick={() =>
          window.open(
            "https://github.com/Alex070822/frontend-mentor/tree/main/ip-address-tracker",
            "_blank"
          )
        }
      >
        Github
      </button>
      <a
        href="https://warm-licorice-4a2442.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={"./src/assets/planets.png"}
          alt="planets fact website"
          className="project-img"
        />
      </a>
      <h3 className="project-header">Planets fact site</h3>
      <p className="project-paragraph">
        A responsive 8-page fact site for all planets in our solar system using
        React. Vite and Emotion.
      </p>
      <button
        type="button"
        className="content-button"
        onClick={() =>
          window.open(
            "https://github.com/Alex070822/frontend-mentor/tree/main/planets-fact-site",
            "_blank"
          )
        }
      >
        Github
      </button>
      <a
        href="https://remarkable-crepe-2bd39c.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={"./src/assets/time-tracking-dashboard.png"}
          alt="time tracking dashboard website"
          className="project-img"
        />
      </a>
      <h3 className="project-header">Time tracking dashboard</h3>
      <p className="project-paragraph">
        A responsive time tracking dashboard using React and a JSON file to
        manage data.
      </p>
      <button
        type="button"
        className="content-button"
        onClick={() =>
          window.open(
            "https://github.com/Alex070822/frontend-mentor/tree/main/time-tracking-dashboard",
            "_blank"
          )
        }
      >
        Github
      </button>
    </div>
  );
}

export default Projects;
