import React from "react";
import "./style.scss";

const Hero = () => {
  return (
    <div className="HERO">
      <div className="HERO__news1">
        <p>NAUJIENA</p>
        <p>
          Galingiausias telefonas pasaulyje - pristatytas naujasis "Asus"
          flagmanas žaidimų mėgėjams
        </p>
        <p>Paskelbė Lukas Snarskis</p>
      </div>
      <div>
        <div className="HERO__sale1">
          <p>AKCIJA</p>
          <p>
            Apsiperkame Kinijoje #1 - išmaniųjų telefonų kuponai ir akcijos
            populiariausiose parduotuvėse
          </p>
        </div>
        <div>
          <div className="HERO__news2">
            <p>NAUJIENA</p>
            <p>
              "Oukitel" išleido "Redmi Note 7" konkurentą už itin patrauklią
              kainą
            </p>
          </div>
          <div className="HERO__sale2">
            <p>AKCIJA</p>
            <p>
              Ieškantiems labai pigių belaidžių ausinukų - akcijos "Xiaomi"
              kolekcijai
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
