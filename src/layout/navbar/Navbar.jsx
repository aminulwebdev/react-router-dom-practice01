import "./navbar.css";
import Logo from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import Home from "../../pages/Home";
import Extreme from "../../pages/About";
const Navbar = () => {
  return (
    <>
      <nav id="navbar">
        <div class="container">
          <div class="nav__wrapper">
            <div class="logo">
              <NavLink to="/">
                <picture>
                  <img src={Logo} alt="" />
                </picture>
              </NavLink>
            </div>
            <div class="nav__menu">
              <ul class="nav__list">
                <li class="nav__item">
                  <NavLink className="nav__link" to="/">
                    Home
                  </NavLink>
                </li>
                <li class="nav__item">
                  <NavLink className="nav__link" to="/about">
                    About
                  </NavLink>
                </li>
                <li class="nav__item">
                  <NavLink className="nav__link" to="/service">
                    Service
                  </NavLink>
                </li>
                {/* <li class="nav__item">
                                <a class="nav__link" href="#">Home</a>
                            </li>
                            <li class="nav__item">
                                <a class="nav__link" href="#">Home</a>
                            </li>
                            <li class="nav__item">
                                <a class="nav__link" href="#">Home</a>
                            </li> */}
              </ul>
              <div class="nav__btn">
                <a href="#" class="commonbtn">
                  Contact us
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
