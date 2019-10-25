import React from "react";
import "./style.scss";

const Sale = () => {
  return (
    <div className="HOME">
      <div className="HOME__sale">
        <p className="HOME__sale__title">TOP AKCIJOS</p>
        <div className="HOME__sale__container">
          <div className="HOME__sale__container__1">
            <h2 className="HOME__sale__container__title">
              Ieškanties labai pigių belaidžių ausinukų - akcijos "Xiaomi"
              įrenginių kolekcijai
            </h2>
          </div>
          <div className="HOME__sale__container__2">
            <h2 className="HOME__sale__container__title">
              Puiki proga įsigyti el. pasipirtuką - dabar "Xiaomi M365 Pro" už
              itin žemą kainą ir be jokių mokesčių
            </h2>
          </div>
          <div className="HOME__sale__container__3">
            <h2 className="HOME__sale__container__title">
              Apsiperkame Kinijoje #1 - išmaniųjų telefonų kuponai ir akcijos
              populiariausiose parduotuvėse
            </h2>
          </div>
          <div className="HOME__sale__container__4">
            <h2 className="HOME__sale__container__title">
              Ieškantiems išmaniojo laikrodžio ar apyrankės - trys pigūs
              vasariški pasirinkimai
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sale;
