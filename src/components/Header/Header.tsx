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
      <div className="logo"></div>
      <div className="navbar-title">Alexis González</div>
      <img
        src={"./src/assets/hamburger_menu.png"}
        alt="nav menu icon"
        className="navbar-button"
        onClick={toggleShowLinks}
      />
      <NavLinks showLinks={showLinks} setShowLinks={setShowLinks} />
    </header>
  );
}

export default Header;
