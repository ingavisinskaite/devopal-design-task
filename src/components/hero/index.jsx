import React from "react";
import "./style.scss";

const Hero = () => {
  return (
    <div className="HERO">
      <div className="HERO__news1">
        <p className="HERO__type">NAUJIENA</p>
        <h1 className="HERO__title">
          Galingiausias telefonas pasaulyje - pristatytas naujasis "Asus"
          flagmanas žaidimų mėgėjams
        </h1>
        <p className="HERO__author">
          Paskelbė <strong> Lukas Snarskis </strong>
        </p>
      </div>
      <div>
        <div className="HERO__sale1">
          <p className="HERO__type">AKCIJA</p>
          <h2 className="HERO__title">
            Apsiperkame Kinijoje #1 - išmaniųjų telefonų kuponai ir akcijos
            populiariausiose parduotuvėse
          </h2>
        </div>
        <div>
          <div className="HERO__news2">
            <p className="HERO__type">NAUJIENA</p>
            <h2 className="HERO__title">
              "Oukitel" išleido "Redmi Note 7" konkurentą už itin patrauklią
              kainą
            </h2>
          </div>
          <div className="HERO__sale2">
            <p className="HERO__type">AKCIJA</p>
            <h2 className="HERO__title">
              Ieškantiems labai pigių belaidžių ausinukų - akcijos "Xiaomi"
              kolekcijai
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
