import React from "react";
import teamProgramers from "../../assets/teamProgramers.jpg";
import "./WhoWeAre.css";

export const WhoWeAre = () => {
  return (
    <div className="container_who_whe_are">
      <div className="whoWeAre_img">
        <img src={teamProgramers} alt="" />
      </div>
      <div className="whoWeAre_text">
        <h2>Quienes Somos</h2>
        <p>
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y
          archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de
          las industrias desde el año 1500, cuando un impresor (N. del T.
          persona que se dedica a la imprenta) desconocido usó una galería de
          textos y los mezcló de tal manera que logró hacer un libro de textos
          especimen.
        </p>
      </div>
    </div>
  );
};
