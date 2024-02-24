import { NavLink } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div class="container">
          <div class="footer__wrapper">
            <div class="footer__logo">
              <img src="./images/logo.png" alt="" />
              <p class="paragraph">
                We are always open to discuss your project and improve your
                online presence.
              </p>
              <div class="footer__contact">
                <div class="footer__contact__item">
                  <span>Email me at</span>
                  <a href="mailto:contact@website.com" class="paragraph">
                    contact@website.com
                  </a>
                </div>
                <div class="footer__contact__item">
                  <span>Email me at</span>
                  <a href="mailto:contact@website.com" class="paragraph">
                    contact@website.com
                  </a>
                </div>
              </div>
            </div>
            <div class="footer__content">
              <h2 class="section__heading">Lets Talk!</h2>
              <p class="paragraph">
                We are always open to discuss your project, improve your online
                presence and help with your UX/UI design challenges.
              </p>
              <div class="footer__social">
                <a href="#">
                  <i class="fa-brands fa-facebook"></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-facebook"></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-facebook"></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-facebook"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="footer__rights">
          <div class="container">
            <div class="footer__rights__item">
              <span class="paragraph">Copyright 2022, Finsweet.com</span>
              <div class="footer__menu">
                <ul class="footer__list">
                  <li class="footer__item">
                    <NavLink className="footer__link paragraph" to="/">
                      Home
                    </NavLink>
                  </li>
                  <li class="footer__item">
                  <NavLink className="footer__link paragraph" to="/about">
                     About
                    </NavLink>
                  </li>
                  <li class="footer__item">
                  <NavLink className="footer__link paragraph" to="/service">
                      Srevice
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
