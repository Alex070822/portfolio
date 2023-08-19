import { css } from "@emotion/css";

const primaryButtonCss = css`
  background-color: #f8f301;
  border-radius: 2px;
  border: none;
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  letter-spacing: 1.2px;
  padding: 1rem;
  margin-bottom: 40px;
  text-transform: uppercase;
  cursor: pointer;
  transition: transform 250ms ease-in-out;

  &:hover {
    transform: translateY(-2px);
  }
`;

function PrimaryButton({ buttonText, onClick }) {
  return (
    <button className={primaryButtonCss} onClick={onClick}>
      {buttonText}
    </button>
  );
}

export default PrimaryButton;
