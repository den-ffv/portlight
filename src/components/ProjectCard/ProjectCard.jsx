import React from "react";
import "./ProjectCard.scss";

import imageProjectCard from "/project-card.png";

function ProjectCard() {
  return (
    <div className="project-card">
      <div className="project-card__img-conteiner">
        <img className="project-card__img" src={imageProjectCard} alt="" />
      </div>
      <h2 className="project-card__title">Website Design</h2>
      <p className="project-card__teg">Web Design</p>
    </div>
  );
}

export default ProjectCard;
