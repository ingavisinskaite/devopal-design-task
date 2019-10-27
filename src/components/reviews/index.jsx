import React from "react";
import "./style.scss";

const Review = props => (
  <div
    className="REVIEWS__container__review"
    style={{
      background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('./${props.imgUrl}.jpg')`,
      backgroundSize: "cover",
      backgroundPosition: "center"
    }}
  >
    <p className="REVIEWS__container__review__rating">{props.rating}</p>
    <p className="REVIEWS__container__review__title">{props.title}</p>
  </div>
);

const Reviews = () => {
  let reviewsInfo = [
    {
      imgUrl: "review1",
      rating: "Mūsų: 9.8",
      title: `"Drone GW89" drono apžvalga`
    },
    {
      imgUrl: "review2",
      rating: "Mūsų: 9.8",
      title: `"Huawei P30 Pro" apžvalga`
    },
    {
      imgUrl: "review3",
      rating: "Mūsų: 9.8",
      title: `"1More Stylish TWS" visiškai belaidžių ausinių apžvalga`
    },
    {
      imgUrl: "review4",
      rating: "Mūsų: 9.8",
      title: `"Xiaomi Mi 9" apžvalga`
    }
  ];

  let reviews = reviewsInfo.map(r => {
    return <Review imgUrl={r.imgUrl} rating={r.rating} title={r.title} />;
  });

  return (
    <div className="REVIEWS">
      <p className="REVIEWS__title">NAUJAUSIOS APŽVALGOS</p>
      <div className="REVIEWS__container">{reviews}</div>
    </div>
  );
};

export default Reviews;
