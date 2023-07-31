import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-title">Social</div>
      <div className="social-icons-container">
        <a href="https://www.linkedin.com/in/alexis-glez-h/" target="_blank">
          <img
            src={"./src/assets/linkedin-logo.png"}
            alt="linkedin logo"
            className="footer-social-icon"
          />
        </a>
        <a href="https://github.com/Alex070822" target="_blank">
          <img
            src={"./src/assets/github-logo.png"}
            alt="github logo"
            className="footer-social-icon"
          />
        </a>
      </div>
      <div className="footer-name">Alexis González</div>
      <div className="footer-description">
        A México-based full-stack developer with a passion for crafting digital
        solutions. I have always been fascinated by the power of technology and
        its ability to shape the world we live in.
      </div>
      <hr className="footer-hr" />
      <div className="footer-copyright">
        © Copyright 2023. Made by Alexis González
      </div>
    </footer>
  );
}

export default Footer;
