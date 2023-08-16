import "./Header.css";
import NavLinks from "../NavLinks/NavLinks";
import { useState } from "react";

function Header() {
  const [showLinks, setShowLinks] = useState(false);
  const toggleShowLinks = () => {
    setShowLinks((prevState) => !prevState);
  };

  return (
    <header className="navbar">
      <div className="logo-container">
        <div className="logo-border"></div>
        <img src={"./src/assets/logo.png"} alt="logo" className="logo" />
      </div>
      <div className="navbar-title">Alexis González</div>
      <img
        src={"./src/assets/hamburger-menu.png"}
        alt="nav menu icon"
        className="navbar-button"
        id={showLinks ? "hidden" : ""}
        onClick={toggleShowLinks}
      />
      <img
        src={"./src/assets/close-menu-icon.png"}
        alt="close menu icon"
        className="navbar-button"
        id={!showLinks ? "hidden" : ""}
        onClick={toggleShowLinks}
      />
      <NavLinks showLinks={showLinks} setShowLinks={setShowLinks} />
    </header>
  );
}

export default Header;
