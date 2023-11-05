import React from "react";
import iconForBtn from "/icon/iconBtn.svg";
import "./Button.scss";
function Button({ text, borderBtn }) {
  return (
    <button className='button' style={{ border: borderBtn ? "2px solid #fff" : "none" }}>
      {text} <img src={iconForBtn} alt='arrow' />{" "}
    </button>
  );
}

export default Button;
