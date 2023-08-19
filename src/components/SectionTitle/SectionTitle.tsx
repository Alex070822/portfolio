import { css } from "@emotion/css";

const sectionTitleCss = css`
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0.96px;
  margin-top: 48px;
  text-transform: uppercase;
  text-align: center;
`;

const dividerCss = css`
  width: 24px;
  margin: 20px auto;
  border: 2px #f8f301 solid;
`;

const sectionDescriptionCss = css`
  color: #68647d;
  font-size: 16px;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  letter-spacing: -0.64px;
  margin-top: 16px;
  margin-bottom: 40px;
  text-align: center;
`;

function SectionTitle({ title, description }) {
  return (
    <>
      <h2 className={sectionTitleCss}>{title}</h2>
      <div className={dividerCss}></div>
      <p className={sectionDescriptionCss}>{description}</p>
    </>
  );
}

export default SectionTitle;
