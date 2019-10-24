import React from "react";
import "./style.scss";

const News = () => {
  return (
    <div className="NEWS">
      <p>NAUJIENOS</p>
      <div className="NEWS__container">
        <img src="./news.jpg" alt=""></img>
        <div className="NEWS__container__text">
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
      <div className="NEWS__container">
        <img src="./news.jpg" alt=""></img>
        <div className="NEWS__container__text">
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
  );
};

export default News;
