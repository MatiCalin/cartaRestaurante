import React from "react";
import "./AboutUsScreen.css";
import img1 from "./assets/img/membersImg/MatiasCalin.jpg";
import img2 from "./assets/img/membersImg/VickiSerrano.jpg";
import img3 from "./assets/img/membersImg/GabrielCarrizo.jpeg";
import img4 from "./assets/img/membersImg/BrendaLescano.jpg";
import img5 from "./assets/img/membersImg/GiselleSoria.jpeg";
import img6 from "./assets/img/membersImg/PucciMilagros.jpg";
import img7 from "./assets/img/membersImg/work.png";

export const AboutUsScreen = () => {
  return (
    <div className="aboutBody">
      <div className="aboutUs">
        <h1 className="py-2">¿QUIENES SOMOS?</h1>
        <img src={img7} alt="[texto alternativo de la imagen]" />
        <p className="aboutUsBody py-2 my-4">
          Somos estudiantes de Programacion en Rolling Code. Presentamos nuestro
          Proyecto Final: Carta Restaurante{" "}
        </p>

        <div>
          <h2 className="aboutUsSubtitle">Integrantes:</h2>

          <ul className="aboutUsUl">
            <li className="aboutUsLi">
              <img src={img1} alt="Matias Calin" />
              Matias Calin
            </li>
            <li className="aboutUsLi">
              <img src={img2} alt="Victoria Serrano" />
              Victoria Serrano
            </li>

            <li className="aboutUsLi">
              <img src={img3} alt="Gabriel Carrizo" />
              Gabriel Carrizo
            </li>
            <li className="aboutUsLi">
              <img src={img4} alt="Brenda Lescano" />
              Brenda Lescano
            </li>

            <li className="aboutUsLi">
              <img src={img5} alt="Giselle Soria" />
              Giselle Soria
            </li>
            <li className="aboutUsLi">
              <img src={img6} alt="Milagros Pucci" />
              Milagros Pucci
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
