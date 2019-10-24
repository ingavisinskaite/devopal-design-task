import React from "react";
import "./style.scss";

const Reviews = () => {
  return (
    <div className="REVIEWS">
      <p className="REVIEWS__title">NAUJAUSIOS APŽVALGOS</p>
      <div className="REVIEWS__container">
        <div className="REVIEWS__container__1">
          <p className="REVIEWS__container__rating">Mūsų: 9.8</p>
          <p>"Drone GW89" drono apžvalga</p>
        </div>
        <div className="REVIEWS__container__2">
          <p className="REVIEWS__container__rating">Mūsų: 9.8</p>
          <p>"Huawei P30 Pro" apžvalga</p>
        </div>
        <div className="REVIEWS__container__3">
          <p className="REVIEWS__container__rating">Mūsų: 9.8</p>
          <p>"1More Stylish TWS" visiškai belaidžių ausinių apžvalga</p>
        </div>
        <div className="REVIEWS__container__4">
          <p className="REVIEWS__container__rating">Mūsų: 9.8</p>
          <p>"Xiaomi Mi 9" apžvalga</p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
