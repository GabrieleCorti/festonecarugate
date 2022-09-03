import React from "react";
import "./style.css";
export interface ButtonProps {
  text: string;
  svg?: React.ReactNode;
  disable?: boolean;
  onClick: () => unknown;
  small?: boolean;
}
const Button: React.FC<ButtonProps> = ({
  onClick,
  text,
  disable,
  svg,
  small = false,
}) => {
  return (
    <div className="button-wrapper">
      {svg && <div className="svg">{svg}</div>}
      <button
        type="button"
        className={`main-button text-white ${small ? "small" : ""} ${
          disable ? "disable" : ""
        }`}
        disabled={disable}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
