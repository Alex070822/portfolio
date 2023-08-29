import { css, keyframes } from "@emotion/css";
import { widthBreakpoint } from "../shared";
import NavLinks from "../NavLinks/NavLinks";
import { useState } from "react";

const navbarCss = css`
  display: flex;
  position: fixed;
  align-items: center;
  background: white;
  width: 100%;
  padding: 16px 24px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  z-index: 1;

  @media (min-width: ${widthBreakpoint.lg}px) {
    padding: 19px 48px;
  }
`;

const logoContainerCss = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 16px;

  @media (min-width: ${widthBreakpoint.md}px) {
    margin-right: 18px;
  }

  @media (min-width: ${widthBreakpoint.lg}px) {
    margin-right: 24px;
  }
`;

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const logoBorderCss = css`
  position: absolute;
  background: linear-gradient(45deg, transparent, transparent 40%, #81e3f8),
    linear-gradient(#67b5c6, #b3eefa);
  animation: ${rotate} 1.5s linear infinite;
  border-radius: 21px;
  height: 42px;
  width: 42px;
  z-index: -1;

  &::before,
  &::after {
    content: " ";
    position: absolute;
    inset: 2px;
    border-radius: inherit;
  }

  &::before {
    background: linear-gradient(45deg, transparent, transparent 40%, #81e3f8);
    filter: blur(4px);
  }

  @media (min-width: ${widthBreakpoint.lg}px) {
    border-radius: 26px;
    height: 52px;
    width: 52px;
  }
`;

const logoCss = css`
  height: 39px;

  @media (min-width: ${widthBreakpoint.lg}px) {
    height: 49px;
  }
`;

const navbarTitleCss = css`
  font-family: "Oswald", sans-serif;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2.88px;
  text-transform: uppercase;

  @media (min-width: ${widthBreakpoint.md}px) {
    font-size: 14px;
    letter-spacing: 3.36px;
  }

  @media (min-width: ${widthBreakpoint.lg}px) {
    font-size: 20px;
    letter-spacing: 24%;
  }
`;

const navbarButtonCss = css`
  width: 20px;
  height: auto;
  margin: 0 0 0 auto;
  cursor: pointer;

  &:hover {
    filter: invert(75%) sepia(62%) saturate(428%) hue-rotate(162deg)
      brightness(104%) contrast(95%);
  }

  @media (min-width: ${widthBreakpoint.md}px) {
    display: none;
  }
`;

const hiddenCss = css`
  @media (max-width: ${widthBreakpoint.md}px) {
    display: none;
  }
`;

function Header() {
  const [showLinks, setShowLinks] = useState(false);
  const toggleShowLinks = () => {
    setShowLinks((prevState) => !prevState);
  };

  return (
    <header className={navbarCss}>
      <div className={logoContainerCss}>
        <div className={logoBorderCss}></div>
        <img src={"/assets/logo.png"} alt="logo" className={logoCss} />
      </div>
      <div className={navbarTitleCss}>Alexis González</div>
      <img
        src={"/assets/hamburger-menu.png"}
        alt="nav menu icon"
        className={`${navbarButtonCss} ${showLinks ? hiddenCss : ""}`}
        onClick={toggleShowLinks}
      />
      <img
        src={"/assets/close-menu-icon.png"}
        alt="close menu icon"
        className={`${navbarButtonCss} ${!showLinks ? hiddenCss : ""}`}
        onClick={toggleShowLinks}
      />
      <NavLinks showLinks={showLinks} setShowLinks={setShowLinks} />
    </header>
  );
}

export default Header;
