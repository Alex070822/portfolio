import { css } from "@emotion/css";
import { HashLink as Link } from "react-router-hash-link";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

const homeCss = css`
  padding: 72px 24px 25px 24px;
  background-image: url("./src/assets/background-pattern.svg");
  scroll-snap-align: start;
  scroll-snap-stop: always;
`;

const greetingCss = css`
  font-size: 14px;
  font-weight: 400;
  padding-top: 62px;
`;

const homeTitleCss = css`
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0.96px;
  margin-top: 16px;
`;

const quoteCss = css`
  color: #68647d;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -0.48px;
  margin-top: 16px;
`;

const homeParagraphCss = css`
  color: #68647d;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: -0.64px;
  margin-top: 16px;
  width: 59.327217%;
  margin-bottom: 32px;
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
