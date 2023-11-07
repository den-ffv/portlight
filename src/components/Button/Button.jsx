import React from "react";
import iconForBtn from "/icon/iconBtn.svg";
import "./Button.scss";
function Button({ text, appearance }) {
  return (
    <button className={appearance ? 'button button__light' : 'button button__dark' } >
      {text} <img src={iconForBtn} alt='arrow' />{" "}
    </button>
  );
}

export default Button;
