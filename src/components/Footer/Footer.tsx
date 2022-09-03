import React from "react";
import facebook from "../../static/img/facebook.png";
import telegram from "../../static/img/telegram.png";
import instagram from "../../static/img/instagram.png";
import youtube from "../../static/img/youtube.png";
import "./style.css";

const Footer = () => {
  const links = [
    { img: facebook, url: "https://www.google.it/" },
    { img: instagram, url: "https://www.google.it/" },
    { img: youtube, url: "https://www.google.it/" },
    { img: telegram, url: "https://www.google.it/" },
  ];
  return (
    <div>
      <ul className="flex link-list">
        {links.map(({ url, img }, i) => (
          <li key={i}>
            <a href={url}>
              <img src={img} alt="" />
            </a>
          </li>
        ))}
      </ul>
      <div className="link-wrapper">
        <a href="https://www.google.it/">www.parrocchiacarugate.it</a>
      </div>
    </div>
  );
};

export default Footer;
