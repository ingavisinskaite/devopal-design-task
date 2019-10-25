import React from "react";
import "./style.scss";

const Footer = () => {
  return (
    <div className="FOOTER">
      <div>
        <img src="./logo-footer.jpg" alt=""></img>
      </div>
      <div className="FOOTER__info">
        <p>
          Copyright @ Telefonai.eu 2015-2019. Visas turinys, jeigu nėra
          nurodytas kitas šaltinis, yra portalo nuosavybė ir jį kopijuoti be
          sutikimo yra draudžiama. Pranešimai spaudai ir kita -
          press@telefonai.eu
        </p>
        <hr></hr>
        <a className="FOOTER__info__link" href="/">
          Apie mus /{" "}
        </a>
        <a className="FOOTER__info__link" href="/">
          Naudojimosi taisyklės /{" "}
        </a>
        <a className="FOOTER__info__link" href="/">
          Tapk autoriumi! /{" "}
        </a>
        <a className="FOOTER__info__link" href="/">
          Kontaktai
        </a>
      </div>
      <div className="FOOTER__media">
        <a href="/" className="FOOTER__media__link">
          <img
            className="FOOTER__media__link__icon"
            src="./facebook.png"
            alt=""
          ></img>
        </a>
        <a href="/" className="FOOTER__media__link">
          <img
            className="FOOTER__media__link__icon"
            src="./instagram.png"
            alt=""
          ></img>
        </a>
        <a href="/" className="FOOTER__media__link">
          <img
            className="FOOTER__media__link__icon"
            src="./youtube.png"
            alt=""
          ></img>
        </a>
      </div>
    </div>
  );
};

export default Footer;
