import { useEffect } from "react";
import { scroll_, stickyNav } from "../utilits";

const Header = ({ dark }) => {
  useEffect(() => {
    window.addEventListener("scroll", stickyNav);
    window.addEventListener("scroll", scroll_);
  });
  return (
    <div className="aali_tm_header">
      <div className="container">
        <div className="inner">
          {dark ? (
            <div className="logo">
              <a href="#">
                <img src="img/logo/JosielEJR.png" alt="" />
              </a>
            </div>
          ) : (
            <div className="logo">
              <a className="light" href="#">
                  <img src="img/logo/JosielEJRDark.png" alt="aali image" />
              </a>
              <a className="dark" href="#">
                  <img src="img/logo/JosielEJR.png" alt="aali image" />
              </a>
            </div>
          )}

          <div className="menu">
            <ul className="anchor_nav">
              <li className="current">
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">Sobre</a>
              </li>
              <li>
                <a href="#portfolio">Portifólio</a>
              </li>
              {/* <li>
                <a href="#service">Serviços</a>
              </li> */}
              <li>
                <a href="#testimonial">Depoimentos</a>
              </li>
              {/* <li>
                <a href="#blog">Blog</a>
              </li> */}
              <li>
                <a href="#contact">Contato</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
