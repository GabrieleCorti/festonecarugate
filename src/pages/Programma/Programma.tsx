import React from "react";
import "./style.css";
import programmaFesta from "../../static/img/programmaFesta.png";

const Programma: React.FC = () => {
  return (
    <div className="screen">
      <div className="programma-wrapper">
        <img src={programmaFesta} alt="programma festa" />
      </div>
    </div>
  );
};

export default Programma;
