import React from "react";
import "./style.css";

export interface PostInputProps {
  icon?: React.ReactNode;
  title: string;
  onChangeText?: (value: string) => unknown;
  onChangeName?: (value: string) => unknown;
}

const PostInput: React.FC<PostInputProps> = ({
  title,
  icon,
  onChangeName,
  onChangeText,
}) => {
  return (
    <div className="post-input">
      {icon && <div className="post-input_icon">{icon}</div>}
      <h2 className="post-input_title">{title}</h2>
      <div className="post-input_input-wrapper top">
        <input
          type="text"
          name=""
          id=""
          onChange={(e) => onChangeName?.(e.target.value)}
          placeholder="Nome"
        />
      </div>
      <div className="post-input_input-wrapper">
        <textarea
          maxLength={255}
          onChange={(e) => onChangeText?.(e.target.value)}
          placeholder="Dicci la tua"
        />
      </div>
    </div>
  );
};

export default PostInput;
