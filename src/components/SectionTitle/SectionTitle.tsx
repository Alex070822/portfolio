import { css } from "@emotion/css";
import { widthBreakpoint } from "../shared";
import { FC } from "react";

const sectionTitleCss = css`
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0.96px;
  margin-top: 48px;
  text-transform: uppercase;
  text-align: center;

  @media (min-width: ${widthBreakpoint.md}px) {
    font-size: 36px;
    letter-spacing: 1.44px;
    margin-top: 96px;
  }

  @media (min-width: ${widthBreakpoint.lg}px) {
    font-size: 42px;
    letter-spacing: 1.68px;
  }
`;

const dividerCss = css`
  width: 24px;
  margin: 20px auto;
  border: 2px #f8f301 solid;

  @media (min-width: ${widthBreakpoint.md}px) {
    width: 36px;
    margin: 28px auto;
    border: 4px #f8f301 solid;
  }

  @media (min-width: ${widthBreakpoint.lg}px) {
    width: 42px;
    margin: 32px auto;
  }
`;

const sectionDescriptionCss = css`
  color: #68647d;
  font-size: 16px;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  letter-spacing: -0.64px;
  margin-bottom: 40px;
  text-align: center;

  @media (min-width: ${widthBreakpoint.md}px) {
    font-size: 28px;
    letter-spacing: -1.12px;
    margin-bottom: 48px;
  }

  @media (min-width: ${widthBreakpoint.lg}px) {
    font-size: 34px;
    letter-spacing: -1.36px;
  }
`;

interface SectionTitleProps {
  title: string;
  description: string;
}

const SectionTitle: FC<SectionTitleProps> = ({ title, description }) => {
  return (
    <>
      <h2 className={sectionTitleCss}>{title}</h2>
      <div className={dividerCss}></div>
      <p className={sectionDescriptionCss}>{description}</p>
    </>
  );
};

export default SectionTitle;
