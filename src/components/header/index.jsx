import React from "react";
import "./style.scss";

const Header = () => {
  return (
    <div className="HEADER">
      <div className="HEADER__container">
        <div className="HEADER__container__logo">
          <a>
            <img src="/smartphone.png"></img>
            telefonai.eu
          </a>
        </div>
        <div className="HEADER__container__search">
          <input type="text" placeholder="Paieška"></input>
        </div>
      </div>
      <div className="HEADER__navbar">
        <a href="" className="HEADER__navbar-link">
          PRADINIS
        </a>
        <a href="" className="HEADER__navbar-link">
          NAUJIENOS
        </a>
        <a href="" className="HEADER__navbar-link">
          AKCIJOS
        </a>
        <a href="" className="HEADER__navbar-link">
          APŽVALGOS
        </a>
        <a href="" className="HEADER__navbar-link">
          STRAIPSNIAI
        </a>
        <a href="" className="HEADER__navbar-link">
          PATARIMAI
        </a>
        <a href="" className="HEADER__navbar-link">
          NUOMONĖS
        </a>
        <a href="" className="HEADER__navbar-link">
          IŠMANIEJI TELEFONAI
        </a>
        <a>
          <img src="/facebook.png"></img>
        </a>
        <a>
          <img src="/youtube.png"></img>
        </a>
      </div>
    </div>
  );
};

export default Header;
