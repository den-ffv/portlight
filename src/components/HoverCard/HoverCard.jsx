import React from "react";
import "./HoverCard.scss";

import image from "/img.svg";
import iconBtn from "/icon/iconBtn.svg";

function HoverCard() {
  return (
    <div className="hover-card">
      <h2 className="hover-card__title">Strategy</h2>
      <div className="hover-card__img-contaiter">
        <img className="hover-card__img" src={image} alt="image" />
      </div>
      <p className="hover-card__text">
        High-end digital experiences. Created the heart Manhattan, we are a
        should human team driving force.
      </p>
      <button className="hover-card__button">
        <img src={iconBtn} alt="icon arrey" />
      </button>
    </div>
  );
}

export default HoverCard;
