import React from "react";
import "./style.scss";

const MobilePhone = props => (
  <div className="MOBILE-PHONES__phones-phone">
    <div>
      <img
        className="MOBILE-PHONES__phones-phone__img"
        src={`/${props.src}.jpg`}
        alt=""
      ></img>
    </div>
    <div className="MOBILE-PHONES__phones-phone__info">
      <p className="MOBILE-PHONES__phones-phone__info__title">
        <strong>{props.title}</strong>
      </p>
      <span>kaina nuo </span>
      <span className="MOBILE-PHONES__phones-phone__price">
        <strong>{props.price}</strong>
      </span>
    </div>
  </div>
);

const MobilePhones = () => {
  return (
    <div className="MOBILE-PHONES">
      <div className="MOBILE-PHONES__title">
        <span className="MOBILE-PHONES__title-new">NEW</span>
        <span>NAUJAUSI TELEFONAI</span>
      </div>
      <div className="MOBILE-PHONES__phones">
        <MobilePhone title="Xiaomi Mi A3" price="264,38 €" src="phone1" />
        <hr></hr>
        <MobilePhone title="Xiaomi Mi 9T" price="289,63 €" src="phone2" />
        <hr></hr>
        <MobilePhone
          title="Xiaomi Redmi K20 Pro"
          price="368,74 €"
          src="phone3"
        />
        <hr></hr>
        <MobilePhone title="Xiaomi Redmi K20" price="271,81 €" src="phone3" />
      </div>
    </div>
  );
};

export default MobilePhones;
