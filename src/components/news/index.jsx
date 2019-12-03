import React from "react";
import "./style.scss";

const New = props => (
  <div className="NEWSPHONES__news__container">
    <div>
      <img
        className="NEWSPHONES__news__container__image"
        src="./news.jpg"
        alt=""
      ></img>
    </div>

    <div className="NEWSPHONES__news__container__text">
      <h3>{props.title}</h3>
      <p>{props.text}</p>
      <p>{props.footer}</p>
    </div>
  </div>
);

const NEWSPHONES__news = () => {
  let post = (
    <New
      title="Tyrimas: mobiliojo banko paslaugomis pasitiki kas trečias žmogus"
      text={`"Įvairios paslaugos į išmaniuosius telefonus sumigravo per labai trumpą laiką - kiek daugiau nei 10 metų"`}
      footer="2019-07-30 | Redakcija | 9 pasidalinimų | 52 peržiūros"
    />
  );
  return (
    <div className="NEWSPHONES__news">
      <p className="NEWSPHONES__news__title">NAUJIENOS</p>
      {post}
      {post}
    </div>
  );
};

export default NEWSPHONES__news;
