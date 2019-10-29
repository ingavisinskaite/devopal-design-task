import React from "react";
import "./style.scss";
import ReactSwipe from "react-swipe";

function useWindowWidth() {
  const [size, setSize] = React.useState(0);
  React.useLayoutEffect(() => {
    function updateSize() {
      setSize(window.innerWidth);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

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
  const width = useWindowWidth();
  let reactSwipeEl;

  React.useEffect(() => {
    reactSwipeEl.swipe.setup();
  }, [reactSwipeEl]);

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

  let saleAds = sales.map((s, index) => {
    return <SaleAd imgUrl={s.imgUrl} text={s.text} key={index} />;
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

        {width > 426 ? (
          <ReactSwipe
            swipeOptions={{ continuous: true }}
            ref={el => (reactSwipeEl = el)}
          >
            <div className="SALE__swiper__container">{saleAds}</div>
            <div className="SALE__swiper__container">{saleAds}</div>
            <div className="SALE__swiper__container">{saleAds}</div>
          </ReactSwipe>
        ) : (
          <ReactSwipe
            swipeOptions={{ continuous: true }}
            ref={el => (reactSwipeEl = el)}
          >
            <div>
              <SaleAd imgUrl={sales[0].imgUrl} text={sales[0].text} />
            </div>
            <div>
              <SaleAd imgUrl={sales[1].imgUrl} text={sales[1].text} />
            </div>
            <div>
              <SaleAd imgUrl={sales[2].imgUrl} text={sales[2].text} />
            </div>
            <div>
              <SaleAd imgUrl={sales[3].imgUrl} text={sales[3].text} />
            </div>
          </ReactSwipe>
        )}

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
