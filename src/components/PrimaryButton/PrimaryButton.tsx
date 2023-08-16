import "./PrimaryButton.css";

function PrimaryButton({ buttonText, onClick }) {
  return (
    <button className="primary-button" onClick={onClick}>
      {buttonText}
    </button>
  );
}

export default PrimaryButton;
