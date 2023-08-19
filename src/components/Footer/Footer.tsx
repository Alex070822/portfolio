import { css } from "@emotion/css";

const footerCss = css`
  color: white;
  background-color: #1c1b22;
  padding: 36px 12px 20px 12px;
  scroll-snap-align: start;
  scroll-snap-stop: always;
`;

const footerTitleCss = css`
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  margin-bottom: 12px;
`;

const socialIconsContainerCss = css`
  display: flex;
  column-gap: 8px;
  margin-bottom: 20px;
  align-items: center;
`;

const footerSocialIconCss = css`
  width: 24px;

  &:hover {
    opacity: 0.75;
  }
`;

const footerNameCss = css`
  font-size: 10px;
  font-family: "Oswald", sans-serif;
  font-weight: 700;
  letter-spacing: 2.88px;
  text-transform: uppercase;
  margin-bottom: 12px;
`;

const footerDescriptionCss = css`
  font-size: 10px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: -0.4px;
  margin-bottom: 36px;
`;

const footerHrCss = css`
  border: 0.5px solid rgba(255, 255, 255, 0.5);
  margin-bottom: 20px;
`;

const footerCopyrightCss = css`
  font-size: 10px;
  font-weight: 700;
  line-height: 16px;
  text-align: center;
`;

function Footer() {
  return (
    <footer className={footerCss}>
      <div className={footerTitleCss}>Social</div>
      <div className={socialIconsContainerCss}>
        <a href="https://www.linkedin.com/in/alexis-glez-h/" target="_blank">
          <img
            src={"./src/assets/linkedin-logo.png"}
            alt="linkedin logo"
            className={footerSocialIconCss}
          />
        </a>
        <a href="https://github.com/Alex070822" target="_blank">
          <img
            src={"./src/assets/github-logo.png"}
            alt="github logo"
            className={footerSocialIconCss}
          />
        </a>
      </div>
      <div className={footerNameCss}>Alexis González</div>
      <div className={footerDescriptionCss}>
        A México-based full-stack developer with a passion for crafting digital
        solutions. I have always been fascinated by the power of technology and
        its ability to shape the world we live in.
      </div>
      <hr className={footerHrCss} />
      <div className={footerCopyrightCss}>
        © Copyright 2023. Made by Alexis González
      </div>
    </footer>
  );
}

export default Footer;
