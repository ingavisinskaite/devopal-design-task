import React from "react";
import "./style.scss";

const Reviews = () => {
  return (
    <div className="REVIEWS">
      <p className="REVIEWS__title">NAUJAUSIOS APŽVALGOS</p>
      <div className="REVIEWS__container">
        <div className="REVIEWS__container__1">
          <p className="REVIEWS__container__rating">Mūsų: 9.8</p>
          <h2 className="REVIEWS__container__title">
            "Drone GW89" drono apžvalga
          </h2>
        </div>
        <div className="REVIEWS__container__2">
          <p className="REVIEWS__container__rating">Mūsų: 9.8</p>
          <h2 className="REVIEWS__container__title">
            "Huawei P30 Pro" apžvalga
          </h2>
        </div>
        <div className="REVIEWS__container__3">
          <p className="REVIEWS__container__rating">Mūsų: 9.8</p>
          <h2 className="REVIEWS__container__title">
            "1More Stylish TWS" visiškai belaidžių ausinių apžvalga
          </h2>
        </div>
        <div className="REVIEWS__container__4">
          <p className="REVIEWS__container__rating">Mūsų: 9.8</p>
          <h2 className="REVIEWS__container__title">"Xiaomi Mi 9" apžvalga</h2>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
