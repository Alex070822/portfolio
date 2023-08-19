import { css } from "@emotion/css";
import { widthBreakpoint } from "../shared";
import { HashLink as Link } from "react-router-hash-link";

const navLinksContainerCss = css`
  position: absolute;
  top: 71px;
  right: 0;
  background-color: white;
  width: 100%;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1);

  @media (min-width: ${widthBreakpoint.md}px) {
    position: initial;
    width: auto;
    box-shadow: none;
    margin: 0 0 0 auto;
  }
`;

const navLinksListCss = css`
  list-style-type: none;

  @media (min-width: ${widthBreakpoint.md}px) {
    display: flex;
    column-gap: 28px;
  }
`;

const navLinkCss = css`
  text-align: right;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding: 12px 24px;

  a {
    color: black;
    font-size: 12px;
    font-family: "Oswald", sans-serif;
    font-weight: 500;
    letter-spacing: 1.68px;
    text-decoration: none;
    text-transform: uppercase;

    &:hover {
      color: #81e3f8;
    }
  }

  @media (min-width: ${widthBreakpoint.md}px) {
    border-top: none;
    padding: 0;
  }
`;

const hiddenCss = css`
  @media (max-width: ${widthBreakpoint.md}px) {
    display: none;
  }
`;

function NavLinks({ showLinks, setShowLinks }) {
  const closeNavLinks = () => {
    setShowLinks(false);
  };

  const navigationLinks = [
    { id: "#home", label: "Home" },
    { id: "#about", label: "About" },
    { id: "#projects", label: "Projects" },
    { id: "#contact", label: "Contact" },
  ];

  return (
    <nav className={`${navLinksContainerCss} ${!showLinks ? hiddenCss : ""}`}>
      <ul className={navLinksListCss}>
        {navigationLinks.map((link) => (
          <li key={link.id} className={navLinkCss}>
            <Link to={link.id} smooth onClick={closeNavLinks}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavLinks;
