import React from "react";
import "./Navbar.css";
import { GiHamburgerMenu, GiBasketballBall } from "react-icons/gi";
import { BiSolidPlaneLand } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [navbar, setNavBar] = React.useState(false);
  const [showMenu, setShowMenu] = React.useState(false);

  function toggleMenu() {
    setShowMenu((prevShow) => !prevShow);
  }

  function changeBackground() {
    if (window.scrollY >= 50) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  }

  React.useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <header
      className={`header nav-section ${navbar ? "scroll-header" : "none"}`}
    >
      <nav className="container nav-container">
        <Link to="/" className="nav-logo link">
          <h1>Tour</h1>
        </Link>

        <ul className="nav-links">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/news">News</NavLink>
          </li>
          <li>
            <NavLink to="/games">Games</NavLink>
          </li>
        </ul>

        <div className="btns">
          <Link to="/login" className="tickets link">
            Sign In
          </Link>
          <button className="cta-btn">
            <NavLink to="/register" className="link">
              Create Account
            </NavLink>
          </button>
        </div>

        <div className="navbar-smallscreen">
          <GiHamburgerMenu
            color="#fff"
            fontSize={30}
            className="menu"
            onClick={toggleMenu}
          />

          {showMenu && (
            <div className="navbar-smallscreen-overlay flex-center slide-bottom">
              <BiSolidPlaneLand
                fontSize={30}
                className="overlay-close"
                onClick={toggleMenu}
              />
              <ul className="nav-smallscreen-links">
                <li onClick={toggleMenu} className="overlay-links">
                  <Link to="/">Home</Link>
                </li>
                <li onClick={toggleMenu} className="overlay-links">
                  <a href="/news">News</a>
                </li>
                <li onClick={toggleMenu} className="overlay-links">
                  <a href="/games">Games</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
