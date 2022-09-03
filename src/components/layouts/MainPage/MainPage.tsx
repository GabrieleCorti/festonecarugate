import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../Footer";
import { ReactComponent as Logo } from "../../../static/svg/logofestone.svg";
import "./style.css";

export interface MainPageProps {
  children: React.ReactNode;
  viewportH?: boolean;
}

const MainPage: React.FC<MainPageProps> = ({ children, viewportH = false }) => {
  return (
    <div className={`screen ${viewportH ? "no-scroll" : ""}`}>
      <div>
        <Link to="/">
          <Logo />
        </Link>
      </div>
      {children}
      <div className="footer-wrapper">
        <Footer />
      </div>
    </div>
  );
};

export default MainPage;
