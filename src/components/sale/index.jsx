import React from "react";
import "./style.scss";

const Sale = () => {
  return (
    <div className="HOME">
      <div className="HOME__sale">
        <p className="HOME__sale__title">TOP AKCIJOS</p>
        <div className="HOME__sale__container">
          <div className="HOME__sale__container__1">
            <p>
              Ieškanties labai pigių belaidžių ausinukų - akcijos "Xiaomi"
              įrenginių kolekcijai
            </p>
          </div>
          <div className="HOME__sale__container__2">
            <p>
              Puiki proga įsigyti el. pasipirtuką - dabar "Xiaomi M365 Pro" už
              itin žemą kainą ir be jokių mokesčių
            </p>
          </div>
          <div className="HOME__sale__container__3">
            <p>
              Apsiperkame Kinijoje #1 - išmaniųjų telefonų kuponai ir akcijos
              populiariausiose parduotuvėse
            </p>
          </div>
          <div className="HOME__sale__container__4">
            <p>
              Ieškantiems išmaniojo laikrodžio ar apyrankės - trys pigūs
              vasariški pasirinkimai
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sale;
