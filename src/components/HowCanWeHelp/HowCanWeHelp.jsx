import React from "react";
import mejoresSoluciones from "../../assets/mejoresSoluciones.jpg";
import "./HowCanWeHelp.css";

export const HowCanWeHelp = () => {
  return (
    <div className="containerHowCanWeHelp">
      <div className="weHelpText">
        <h2>Como Podemos Ayudar</h2>
        <h3>
          Ayudamos a crear el cambio en tu <span>negocio</span>.
        </h3>
        <p>
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y
          archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de
          las industrias desde el año 1500, cuando un impresor (N. del T.
          persona que se dedica a la imprenta) desconocido usó una galería de
          textos y los mezcló de tal manera que logró hacer un libro de textos
          especimen.
        </p>
      </div>
      <div className="weHelpImage">
        <img src={mejoresSoluciones} alt="" />
      </div>
    </div>
  );
};
