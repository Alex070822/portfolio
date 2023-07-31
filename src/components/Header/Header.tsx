import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo"></div>
      <div className="header-title">Alexis González</div>
      <img
        src={"./src/assets/hamburger_menu.png"}
        alt="nav menu icon"
        className="nav-menu"
      />
    </header>
  );
}

export default Header;
