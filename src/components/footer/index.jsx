import React from "react";
import "./style.scss";

const Footer = () => {
  return (
    <div className="FOOTER">
      <img className="FOOTER__logo" src="./logo-footer.jpg" alt=""></img>
      <div className="FOOTER__info">
        <p>
          Copyright @ Telefonai.eu 2015-2019. Visas turinys, jeigu nėra
          nurodytas kitas šaltinis, yra portalo nuosavybė ir jį kopijuoti be
          sutikimo yra draudžiama. Pranešimai spaudai ir kita -
          press@telefonai.eu
        </p>
        <hr></hr>
        <a href="/">Apie mus / </a>
        <a href="/">Naudojimosi taisyklės / </a>
        <a href="/">Tapk autoriumi! / </a>
        <a href="/">Kontaktai</a>
      </div>
      <div className="FOOTER__media">
        <a href="/">
          <img src="./facebook.png" alt=""></img>
        </a>
        <a href="/">
          <img src="./instagram.png" alt=""></img>
        </a>
        <a href="/">
          <img src="./youtube.png" alt=""></img>
        </a>
      </div>
    </div>
  );
};

export default Footer;
