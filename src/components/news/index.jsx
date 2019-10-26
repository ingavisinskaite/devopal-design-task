import React from "react";
import "./style.scss";

const New = props => (
  <div className="NEWS__container">
    <img src="./news.jpg" alt=""></img>
    <div className="NEWS__container__text">
      <h3>{props.title}</h3>
      <p>{props.text}</p>
      <p>{props.footer}</p>
    </div>
  </div>
);

const News = () => {
  let post = (
    <New
      title="Tyrimas: mobiliojo banko paslaugomis pasitiki kas trečias žmogus"
      text={`"Įvairios paslaugos į išmaniuosius telefonus sumigravo per labai trumpą laiką - kiek daugiau nei 10 metų"`}
      footer="2019-07-30 | Redakcija | 9 pasidalinimų | 52 peržiūros"
    />
  );
  return (
    <div className="NEWS">
      <p>NAUJIENOS</p>
      {post}
      {post}
    </div>
  );
};

export default News;
