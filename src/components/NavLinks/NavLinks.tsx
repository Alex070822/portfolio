import "./NavLinks.css";
import { HashLink as Link } from "react-router-hash-link";

function NavLinks({ showLinks, setShowLinks }) {
  const closeNavLinks = () => {
    setShowLinks(false);
  };

  return (
    <nav className="nav-links-container" id={!showLinks ? "hidden" : ""}>
      <ul className="nav-links-list">
        <li className="nav-link">
          <Link to="#home" smooth onClick={closeNavLinks}>
            Home
          </Link>
        </li>
        <li className="nav-link">
          <Link to="#about" smooth onClick={closeNavLinks}>
            About
          </Link>
        </li>
        <li className="nav-link">
          <Link to="#projects" smooth onClick={closeNavLinks}>
            Projects
          </Link>
        </li>
        <li className="nav-link">
          <Link to="#contact" smooth onClick={closeNavLinks}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavLinks;
