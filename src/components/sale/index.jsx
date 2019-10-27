import React from "react";
import "./style.scss";
import ReactSwipe from "react-swipe";

const SaleAd = props => (
  <div
    className="SALE__swiper__container__ad"
    style={{
      background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('./${props.imgUrl}.jpg')`,
      backgroundSize: "cover",
      backgroundPosition: "center"
    }}
  >
    <p className="SALE__swiper__container__ad__title">{props.text}</p>
  </div>
);

const SaleSwiper = () => {
  let reactSwipeEl;

  let sales = [
    {
      imgUrl: "hero4",
      text:
        'Ieškantiems labai pigių belaidžių ausinukų - akcijos "Xiaomi" įrenginių kolekcijai'
    },
    {
      imgUrl: "sale1",
      text:
        'Puiki proga įsigyti el. pasipirtuką - dabar "Xiaomi M365 Pro" už itin žemą kainą ir be jokių mokesčių'
    },
    {
      imgUrl: "hero2",
      text:
        "Apsiperkame Kinijoje #1 - išmaniųjų telefonų kuponai ir akcijos populiariausiose parduotuvėse"
    },
    {
      imgUrl: "sale2",
      text:
        "Ieškantiems išmaniojo laikrodžio ar apyrankės - trys pigūs vasariški pasirinkimai"
    }
  ];

  let saleAds = sales.map(s => {
    return <SaleAd imgUrl={s.imgUrl} text={s.text} />;
  });

  return (
    <div className="SALE">
      <p className="SALE__title">TOP AKCIJOS</p>

      <div className="SALE__swiper">
        <button
          className="SALE__swiper__button"
          onClick={() => reactSwipeEl.prev()}
        >
          <img src="/back.png" alt=""></img>
        </button>
        <ReactSwipe
          swipeOptions={{ continuous: true }}
          ref={el => (reactSwipeEl = el)}
        >
          <div className="SALE__swiper__container">{saleAds}</div>
          <div className="SALE__swiper__container">{saleAds}</div>
          <div className="SALE__swiper__container">{saleAds}</div>
        </ReactSwipe>
        <button
          className="SALE__swiper__button"
          onClick={() => reactSwipeEl.next()}
        >
          <img src="/next.png" alt=""></img>
        </button>
      </div>
    </div>
  );
};

export default SaleSwiper;
