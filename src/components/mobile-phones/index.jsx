import React from "react";
import "./style.scss";

const MobilePhones = () => {
  return (
    <div className="MOBILE-PHONES">
      <div className="MOBILE-PHONES__title">
        <span className="MOBILE-PHONES__title-new">NEW</span>
        <span>NAUJAUSI TELEFONAI</span>
      </div>
      <div className="MOBILE-PHONES__phones">
        <div className="MOBILE-PHONES__phones-phone">
          <img
            className="MOBILE-PHONES__phones-phone__img"
            src="./phone1.jpg"
            alt=""
          ></img>
          <div className="MOBILE-PHONES__phones-phone__info">
            <p>
              <strong>Xiaomi Mi A3</strong>
            </p>
            <span>kaina nuo </span>
            <span className="MOBILE-PHONES__phones-phone__price">
              <strong>264,38 €</strong>
            </span>
          </div>
        </div>
        <hr></hr>
        <div className="MOBILE-PHONES__phones-phone">
          <img
            className="MOBILE-PHONES__phones-phone__img"
            src="./phone2.jpg"
            alt=""
          ></img>
          <div className="MOBILE-PHONES__phones-phone__info">
            <p>
              <strong>Xiaomi Mi 9T</strong>
            </p>
            <span>kaina nuo </span>
            <span className="MOBILE-PHONES__phones-phone__price">
              <strong>289,63 €</strong>
            </span>
          </div>
        </div>
        <hr></hr>
        <div className="MOBILE-PHONES__phones-phone">
          <img
            className="MOBILE-PHONES__phones-phone__img"
            src="./phone3.jpg"
            alt=""
          ></img>
          <div className="MOBILE-PHONES__phones-phone__info">
            <p>
              <strong>Xiaomi Redmi K20 Pro</strong>
            </p>
            <span>kaina nuo </span>
            <span className="MOBILE-PHONES__phones-phone__price">
              <strong>368,74 €</strong>
            </span>
          </div>
        </div>
        <hr></hr>
        <div className="MOBILE-PHONES__phones-phone">
          <img
            className="MOBILE-PHONES__phones-phone__img"
            src="./phone3.jpg"
            alt=""
          ></img>
          <div className="MOBILE-PHONES__phones-phone__info">
            <p>
              <strong>Xiaomi Redmi K20</strong>
            </p>
            <span>kaina nuo </span>
            <span className="MOBILE-PHONES__phones-phone__price">
              <strong>271,81 €</strong>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobilePhones;
