import React from "react";
import "./LandingHeader.css";

export const LandingHeader = () => {
  return (
    <div className="LandingHeader">
      <h2>
        {"We're "}
        <span style={{ "--i": "0" }} data-text={" Coders."}>
          Coders.
        </span>
        <span style={{ "--i": "1" }} data-text={" Developers."}>
          Developers.
        </span>
        <span style={{ "--i": "2" }} data-text={" DevelopersFullStack."}>
          DevelopersFullStack
        </span>
      </h2>
    </div>
  );
};
