import React from "react";
import "./style.css";
export interface OverlayProps {
  children: React.ReactNode;
  active: boolean;
}
const Overlay: React.FC<OverlayProps> = ({ children, active }) => {
  if (!active) {
    return <></>;
  }
  return <div className="overlay">{children}</div>;
};

export default Overlay;
