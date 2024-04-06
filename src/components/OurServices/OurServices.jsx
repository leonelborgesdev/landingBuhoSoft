import React from "react";
import "./OurServices.css";
import graficos from "../../assets/graficos.gif";
import laptop from "../../assets/laptop.gif";
import soporte from "../../assets/soporte.gif";

export const OurServices = () => {
  return (
    <div className="container_services">
      <div className="title_services">
        <h2>We Provide Best</h2>
        <h2>
          <span>Solutions</span> for you
        </h2>
      </div>
      <div className="services">
        <div className="card_service">
          <img src={laptop} alt="" />
          <h2>Web Developer</h2>
        </div>
        <div className="card_service">
          <img src={soporte} alt="" />
          <h2>Soprte Tecnico</h2>
        </div>
        <div className="card_service">
          <img src={graficos} alt="" />
          <h2>Analisis de Datos</h2>
        </div>
      </div>
    </div>
  );
};
