import React from "react";
import "./style.scss";

const HomePage = () => {
  return (
    <div className="HOME">
      <div className="HOME__hero">
        <div className="HOME__hero__news1">
          <p>NAUJIENA</p>
          <p>
            Galingiausias telefonas pasaulyje - pristatytas naujasis "Asus"
            flagmanas žaidimų mėgėjams
          </p>
          <p>Paskelbė Lukas Snarskis</p>
        </div>
        <div>
          <div className="HOME__hero__sale1">
            <p>AKCIJA</p>
            <p>
              Apsiperkame Kinijoje #1 - išmaniųjų telefonų kuponai ir akcijos
              populiariausiose parduotuvėse
            </p>
          </div>
          <div>
            <div className="HOME__hero__news2">
              <p>NAUJIENA</p>
              <p>
                "Oukitel" išleido "Redmi Note 7" konkurentą už itin patrauklią
                kainą
              </p>
            </div>
            <div className="HOME__hero__sale2">
              <p>AKCIJA</p>
              <p>
                Ieškantiems labai pigių belaidžių ausinukų - akcijos "Xiaomi"
                kolekcijai
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="HOME__reviews">
        <p className="HOME__reviews__title">NAUJAUSIOS APŽVALGOS</p>
        <div className="HOME__reviews__container">
          <div className="HOME__reviews-1">
            <p className="HOME__reviews__rating">Mūsų: 9.8</p>
            <p>"Drone GW89" drono apžvalga</p>
          </div>
          <div className="HOME__reviews-2">
            <p className="HOME__reviews__rating">Mūsų: 9.8</p>
            <p>"Huawei P30 Pro" apžvalga</p>
          </div>
          <div className="HOME__reviews-3">
            <p className="HOME__reviews__rating">Mūsų: 9.8</p>
            <p>"1More Stylish TWS" visiškai belaidžių ausinių apžvalga</p>
          </div>
          <div className="HOME__reviews-4">
            <p className="HOME__reviews__rating">Mūsų: 9.8</p>
            <p>"Xiaomi Mi 9" apžvalga</p>
          </div>
        </div>
      </div>
      <div className="HOME__news">
        <p>NAUJIENOS</p>
        <div className="HOME__news__container">
          <img src="./news.jpg" alt=""></img>
          <div className="HOME__news__container__text">
            <h3>
              Tyrimas: mobiliojo banko paslaugomis pasitiki kas trečias žmogus
            </h3>
            <p>
              "Įvairios paslaugos į išmaniuosius telefonus sumigravo per labai
              trumpą laiką - kiek daugiau nei 10 metų"
            </p>
            <p>2019-07-30 | Redakcija | 9 pasidalinimų | 52 peržiūros</p>
          </div>
        </div>
        <div className="HOME__news__container">
          <img src="./news.jpg" alt=""></img>
          <div className="HOME__news__container__text">
            <h3>
              Tyrimas: mobiliojo banko paslaugomis pasitiki kas trečias žmogus
            </h3>
            <p>
              "Įvairios paslaugos į išmaniuosius telefonus sumigravo per labai
              trumpą laiką - kiek daugiau nei 10 metų"
            </p>
            <p>2019-07-30 | Redakcija | 9 pasidalinimų | 52 peržiūros</p>
          </div>
        </div>
      </div>
      <div className="HOME__new-phones"></div>
      <div className="HOME__sale">
        <p className="HOME__sale__title">TOP AKCIJOS</p>
        <div className="HOME__sale__container">
          <div className="HOME__sale-1">
            <p>
              Ieškanties labai pigių belaidžių ausinukų - akcijos "Xiaomi"
              įrenginių kolekcijai
            </p>
          </div>
          <div className="HOME__sale-2">
            <p>
              Puiki proga įsigyti el. pasipirtuką - dabar "Xiaomi M365 Pro" už
              itin žemą kainą ir be jokių mokesčių
            </p>
          </div>
          <div className="HOME__sale-3">
            <p>
              Apsiperkame Kinijoje #1 - išmaniųjų telefonų kuponai ir akcijos
              populiariausiose parduotuvėse
            </p>
          </div>
          <div className="HOME__sale-4">
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

export default HomePage;
