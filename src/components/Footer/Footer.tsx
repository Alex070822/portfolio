import { css } from "@emotion/css";
import { widthBreakpoint } from "../shared";

const footerCss = css`
  color: white;
  background-color: #1c1b22;
  padding: 36px 12px 20px 12px;
  scroll-snap-align: start;
  scroll-snap-stop: always;

  @media (min-width: ${widthBreakpoint.md}px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 44px 24px 28px 24px;
  }

  @media (min-width: ${widthBreakpoint.lg}px) {
    padding: 44px 100px 28px 100px;
  }
`;

const socialContainerCss = css`
  display: flex;
  flex-direction: column;

  @media (min-width: ${widthBreakpoint.md}px) {
    order: 2;
    width: 25%;
    align-items: left;
    padding-left: 10%;
  }
`;

const footerTitleCss = css`
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  margin-bottom: 12px;

  @media (min-width: ${widthBreakpoint.md}px) {
    font-size: 27px;
    letter-spacing: 1.08px;
    margin-bottom: 22px;
  }
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

  @media (min-width: ${widthBreakpoint.md}px) {
    width: 32px;
  }
`;

const footerDescriptionContainerCss = css`
  display: flex;
  flex-direction: column;

  @media (min-width: ${widthBreakpoint.md}px) {
    order: 1;
    width: 75%;
  }
`;

const footerNameCss = css`
  font-size: 10px;
  font-family: "Oswald", sans-serif;
  font-weight: 700;
  letter-spacing: 2.88px;
  text-transform: uppercase;
  margin-bottom: 12px;

  @media (min-width: ${widthBreakpoint.md}px) {
    font-size: 24px;
    letter-spacing: 5.76px;
    margin-bottom: 20px;
  }
`;

const footerDescriptionCss = css`
  font-size: 10px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: -0.4px;
  margin-bottom: 36px;

  @media (min-width: ${widthBreakpoint.md}px) {
    font-size: 22px;
    line-height: 24px;
    letter-spacing: -0.88px;
    margin-bottom: 48px;
  }
`;

const footerHrCss = css`
  border: 0.5px solid rgba(255, 255, 255, 0.5);
  margin-bottom: 20px;

  @media (min-width: ${widthBreakpoint.md}px) {
    width: 100%;
    order: 3;
  }
`;

const footerCopyrightCss = css`
  font-size: 10px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: -0.64px;
  text-align: center;

  @media (min-width: ${widthBreakpoint.md}px) {
    order: 4;
    font-size: 20px;
    line-height: normal;
    letter-spacing: -0.8px;
    width: 100%;
  }
`;

function Footer() {
  return (
    <footer className={footerCss}>
      <div className={socialContainerCss}>
        <div className={footerTitleCss}>Social</div>
        <div className={socialIconsContainerCss}>
          <a href="https://www.linkedin.com/in/alexis-glez-h/" target="_blank">
            <img
              src={"/assets/linkedin-logo.png"}
              alt="linkedin logo"
              className={footerSocialIconCss}
            />
          </a>
          <a href="https://github.com/Alex070822" target="_blank">
            <img
              src={"/assets/github-logo.png"}
              alt="github logo"
              className={footerSocialIconCss}
            />
          </a>
        </div>
      </div>
      <div className={footerDescriptionContainerCss}>
        <div className={footerNameCss}>Alexis González</div>
        <div className={footerDescriptionCss}>
          A México-based full-stack developer with a passion for crafting
          digital solutions. I have always been fascinated by the power of
          technology and its ability to shape the world we live in.
        </div>
      </div>
      <hr className={footerHrCss} />
      <div className={footerCopyrightCss}>
        © Copyright 2023. Made by Alexis González
      </div>
    </footer>
  );
}

export default Footer;
