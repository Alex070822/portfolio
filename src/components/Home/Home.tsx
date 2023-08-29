import { css } from "@emotion/css";
import { widthBreakpoint } from "../shared";
import { HashLink as Link } from "react-router-hash-link";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

const homeCss = css`
  padding: 72px 24px 25px 24px;
  background-image: url("/assets/background-pattern.svg");
  scroll-snap-align: start;
  scroll-snap-stop: always;

  @media (min-width: ${widthBreakpoint.md}px) {
    padding: 72px 48px 223px 48px;
  }

  @media (min-width: ${widthBreakpoint.lg}px) {
    padding: 88px 200px 213px 200px;
  }
`;

const greetingCss = css`
  font-size: 14px;
  font-weight: 400;
  padding-top: 62px;

  @media (min-width: ${widthBreakpoint.md}px) {
    font-size: 26px;
    padding-top: 191px;
  }

  @media (min-width: ${widthBreakpoint.lg}px) {
    font-size: 32px;
    padding-top: 158px;
  }
`;

const homeTitleCss = css`
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0.96px;
  margin-top: 16px;

  @media (min-width: ${widthBreakpoint.md}px) {
    font-size: 36px;
    letter-spacing: 1.44px;
    margin-top: 24px;
  }

  @media (min-width: ${widthBreakpoint.lg}px) {
    font-size: 42px;
    letter-spacing: 1.68px;
    margin-top: 25px;
  }
`;

const quoteCss = css`
  color: #68647d;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -0.48px;
  margin-top: 16px;

  @media (min-width: ${widthBreakpoint.md}px) {
    font-size: 36px;
    letter-spacing: -0.72px;
    margin-top: 24px;
  }

  @media (min-width: ${widthBreakpoint.lg}px) {
    font-size: 42px;
    letter-spacing: -0.84px;
    margin-top: 25px;
  }
`;

const homeParagraphCss = css`
  color: #68647d;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: -0.64px;
  margin-top: 16px;
  width: 59.327217%;
  margin-bottom: 32px;

  @media (min-width: ${widthBreakpoint.md}px) {
    font-size: 28px;
    letter-spacing: -1.12px;
    margin-top: 24px;
    width: 100%;
    margin-bottom: 40px;
  }

  @media (min-width: ${widthBreakpoint.lg}px) {
    font-size: 34px;
    letter-spacing: -1.36px;
    margin-top: 25px;
  }
`;

function Home() {
  return (
    <div className={homeCss} id="home">
      <h1 className={greetingCss}>Hi, my name is</h1>
      <p className={homeTitleCss}>Alexis González.</p>
      <p className={quoteCss}>
        I thrive on the challenges that come with turning concepts into tangible
        solutions.
      </p>
      <p className={homeParagraphCss}>
        I'm a México-based full-stack developer with a passion for crafting
        digital solutions. I have always been fascinated by the power of
        technology and its ability to shape the world we live in. Today, I
        channel that passion into building innovative and user-friendly software
        applications.
      </p>
      <Link to="#about" smooth>
        <PrimaryButton buttonText="About me" />
      </Link>
    </div>
  );
}

export default Home;
