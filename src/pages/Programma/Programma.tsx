import React, { useState } from "react";
import "./style.css";
import programmaFesta from "../../static/img/programmaFesta.png";
import { Link } from "react-router-dom";

const Programma: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="programma screen">
      <div className="programma-wrapper">
        <img
          onLoad={() => setLoaded(true)}
          src={programmaFesta}
          alt="programma festa"
          style={loaded ? {} : { display: "none" }}
        />
      </div>
      <div style={{ margin: "1rem 0" }}>
        <Link className="main-button" to={"/"} color={"white"}>
          Ritorna a home
        </Link>
      </div>
    </div>
  );
};

export default Programma;
