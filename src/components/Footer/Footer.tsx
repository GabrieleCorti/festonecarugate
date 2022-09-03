import React from "react";
import facebook from "../../static/img/facebook.png";
import telegram from "../../static/img/telegram.png";
import instagram from "../../static/img/instagram.png";
import youtube from "../../static/img/youtube.png";
import "./style.css";

const Footer = () => {
  const links = [
    {
      img: facebook,
      url: "https://m.facebook.com/OratorioCarugate/?tsid=0.6810567805313399&source=result",
    },
    {
      img: instagram,
      url: "https://instagram.com/oratoriocarugate?igshid=YmMyMTA2M2Y=",
    },
    {
      img: youtube,
      url: "https://youtube.com/channel/UCkMTEwDMvwGqSKL0Z31NjWw",
    },
    { img: telegram, url: "https://t.me/OratorioCarugate" },
  ];
  return (
    <div>
      <ul className="flex link-list">
        {links.map(({ url, img }, i) => (
          <li key={i}>
            <a href={url} target="_blank" rel="noopener noreferrer">
              <img src={img} alt="" />
            </a>
          </li>
        ))}
      </ul>
      <div className="link-wrapper">
        <a
          href="http://www.parrocchiacarugate.it/"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.parrocchiacarugate.it
        </a>
      </div>
    </div>
  );
};

export default Footer;
