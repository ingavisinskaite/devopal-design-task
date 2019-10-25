import React from "react";
import "./style.scss";

const Header = () => {
  return (
    <div className="HEADER">
      <div className="HEADER__container">
        <div className="HEADER__container__logo">
          <a href="/">
            <img alt="" src="/logo-header.jpg"></img>
          </a>
        </div>
        <div className="HEADER__container__search">
          <input
            className="HEADER__container__search__input"
            type="text"
            placeholder="Paieška"
          ></input>
          <img src="/search-icon.png" alt=""></img>
        </div>
      </div>
      <div className="HEADER__navbar">
        <a href="/" className="HEADER__navbar-link">
          PRADINIS
        </a>
        <a href="/" className="HEADER__navbar-link">
          NAUJIENOS
        </a>
        <a href="/" className="HEADER__navbar-link">
          AKCIJOS
        </a>
        <a href="/" className="HEADER__navbar-link">
          APŽVALGOS
        </a>
        <a href="/" className="HEADER__navbar-link">
          STRAIPSNIAI
        </a>
        <a href="/" className="HEADER__navbar-link">
          PATARIMAI
        </a>
        <a href="/" className="HEADER__navbar-link">
          NUOMONĖS
        </a>
        <a href="/" className="HEADER__navbar-link">
          IŠMANIEJI TELEFONAI
        </a>
        <div className="HEADER__navbar__icons">
          <a href="/">
            <img
              alt=""
              src="/facebook.png"
              className="HEADER__navbar__icons-icon"
            ></img>
          </a>
          <a href="/">
            <img
              alt=""
              src="/youtube.png"
              className="HEADER__navbar__icons-icon"
            ></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
