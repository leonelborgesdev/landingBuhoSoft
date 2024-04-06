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
      </div>
    </div>
  );
};
