import React, { useMemo } from "react";
import Button from "../../components/Button";
import { ButtonProps } from "../../components/Button/Button";
import titolo from "../../static/img/titolo.png";
import "../page-general.css";
import "./style.css";
import MainPage from "../../components/layouts/MainPage";
import post from "../../static/img/post.png";
import storia from "../../static/img/storia.png";
import programma from "../../static/img/programma.png";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const actions = useMemo<ButtonProps[]>(
    () => [
      {
        text: "La storia",
        onClick: () => navigate("storia"),
        svg: <img src={storia} alt="storia" />,
      },
      {
        text: "Il programma",
        onClick: () => console.log("pressed"),
        svg: <img src={programma} alt="programma" />,
      },
      {
        text: "Dicci la tua",
        onClick: () => navigate("dicci-la-tua"),
        svg: <img src={post} alt="dicci la tua" />,
      },
    ],
    [navigate]
  );
  return (
    <MainPage viewportH>
      <div>
        <img src={titolo} alt="festone santa marcellina" />
      </div>
      <div className="full-w actions-wrapper">
        <ul>
          {actions.map((buttonProp, i) => (
            <li key={i} className="full-w flex action">
              <Button {...buttonProp} />
            </li>
          ))}
        </ul>
      </div>
    </MainPage>
  );
};

export default Home;
