import React from "react";
import "./style.scss";

const HomePage = () => {
  return (
    <div className="HOME">
      <div className="HOME__header">
        <div>telefonai.eu</div>
        <div>
          <input type="text" placeholder="Paieška"></input>
        </div>
      </div>
      <div className="HOME__navbar">
        <a href="">PRADINIS</a>
        <a href="">NAUJIENOS</a>
        <a href="">AKCIJOS</a>
        <a href="">APŽVALGOS</a>
        <a href="">STRAIPSNIAI</a>
        <a href="">PATARIMAI</a>
        <a href="">NUOMONĖS</a>
        <a href="">IŠMANIEJI TELEFONAI</a>
      </div>
      <div className="HOME__hero">
        <div>
          <p>NAUJIENA</p>
          <p>
            Galingiausias telefonas pasaulyje - pristatytas naujasis "Asus"
            flagmanas žaidimų mėgėjams
          </p>
          <p>Paskelbė Lukas Snarskis</p>
        </div>
        <div>
          <div>
            <p>AKCIJA</p>
            <p>
              Apsiperkame Kinijoje #1 - išmaniųjų telefonų kuponai ir akcijos
              populiariausiose parduotuvėse
            </p>
          </div>
          <div>
            <div>
              <p>NAUJIENA</p>
              <p>
                "Oukitel" išleido "Redmi Note 7" konkurentą už itin patrauklią
                kainą
              </p>
            </div>
            <div>
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
        <div>
          <p>Mūsų: 9.8</p>
          <p>"Drone GW89" drono apžvalga</p>
        </div>
        <div>
          <p>Mūsų: 9.8</p>
          <p>"Huawei P30 Pro" apžvalga</p>
        </div>
        <div>
          <p>Mūsų: 9.8</p>
          <p>"1More Stylish TWS" visiškai belaidžių ausinių apžvalga</p>
        </div>
        <div>
          <p>Mūsų: 9.8</p>
          <p>"Xiaomi Mi 9" apžvalga</p>
        </div>
      </div>
      <div className="HOME__news">
        <div>
          <img src="./news.jpg" alt=""></img>
          <div>
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
        <div>
          <img src="./news.jpg" alt=""></img>
          <div>
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
        <div>
          <p>
            Ieškanties labai pigių belaidžių ausinukų - akcijos "Xiaomi"
            įrenginių kolekcijai
          </p>
        </div>
        <div>
          <p>
            Puiki proga įsigyti el. pasipirtuką - dabar "Xiaomi M365 Pro" už
            itin žemą kainą ir be jokių mokesčių
          </p>
        </div>
        <div>
          <p>
            Apsiperkame Kinijoje #1 - išmaniųjų telefonų kuponai ir akcijos
            populiariausiose parduotuvėse
          </p>
        </div>
        <div>
          <p>
            Ieškantiems išmaniojo laikrodžio ar apyrankės - trys pigūs vasariški
            pasirinkimai
          </p>
        </div>
      </div>
      <div className="HOME__footer">
        <p>
          Copyright @ Telefonai.eu 2015-2019. Visas turinys, jeigu nėra
          nurodytas kitas šaltinis, yra portalo nuosavybė ir jį kopijuoti be
          sutikimo yra draudžiama. Pranešimai spaudai ir kita -
          press@telefonai.eu
        </p>
        <a>Apie mus</a>
        <a>Naudojimosi taisyklės</a>
        <a>Tapk autoriumi!</a>
        <a>Kontaktai</a>
      </div>
    </div>
  );
};

export default HomePage;
