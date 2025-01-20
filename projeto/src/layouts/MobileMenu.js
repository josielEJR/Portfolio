import { useState } from "react";

const MobileMenu = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="aali_tm_mobile_menu">
      <div className="mobile_menu_inner">
        <div className="mobile_in">
          <div className="logo">
            <a href="#">
              <img src="img/logo/JosielEJR.png" alt="aali image" />
            </a>
          </div>
          <div className="trigger">
            <div
              className={`hamburger hamburger--slider ${
                toggle ? "is-active" : ""
              }`}
            >
              <div className="hamburger-box" onClick={() => setToggle(!toggle)}>
                <div className="hamburger-inner" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="dropdown"
        style={{ display: `${toggle ? "block" : "none"}` }}
      >
        <div className="dropdown_inner">
          <ul className="anchor_nav">
            <li className="current">
              <a onClick={() => setToggle(false)} href="#home">
                Home
              </a>
            </li>
            <li>
              <a onClick={() => setToggle(false)} href="#about">
                Sobre
              </a>
            </li>
            <li>
              <a onClick={() => setToggle(false)} href="#portfolio">
                Portfólio
              </a>
            </li>
            {/* <li>
              <a onClick={() => setToggle(false)} href="#service">
                Serviços
              </a>
            </li> */}
            <li>
              <a onClick={() => setToggle(false)} href="#testimonial">
                Depoimentos
              </a>
            </li>
            {/* <li>
              <a onClick={() => setToggle(false)} href="#blog">
                Blog
              </a>
            </li> */}
            <li>
              <a onClick={() => setToggle(false)} href="#contact">
                Contato
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
