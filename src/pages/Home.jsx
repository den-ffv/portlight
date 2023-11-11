import React from "react";
import Button from "../components/Button/Button";
import Carousel from "../components/Carousel/Carousel";
import star from "/icon/star1.svg";
import bgTitle from "/icon/bg-h1.svg";
import ScrollBtn from "../components/ScrollBtn/ScrollBtn";
import TitleMinir from "../components/TitleMinir/TitleMinir";
import Partner from "../components/Partner/Partner";
import HoverCard from "../components/HoverCard/HoverCard";
import RunningLine from "../components/RunningLine/RunningLine";
import ProjectCard from "../components/ProjectCard/ProjectCard";

function Home() {
  return (
    <section>
      <div className="container">
        <div className="title-container">
          <h1 className="main-title">
            Take it t
            <span>
              <img src={star} alt="star" />
            </span>
            <br />
            the Creative
            <span>
              <img src={bgTitle} alt="bgTitle" />
            </span>
            level
          </h1>
          <p className="main-paragrafe">
            High-end <span>digital experiences</span> . Created at the heart{" "}
            <br /> of Manhattan, we are a human-sized team.
          </p>
        </div>
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: 30 }}
        >
          <Button text={"Say Hello"} appearance={false} />
        </div>
      </div>
      <Carousel />
      <div className="container">
        <ScrollBtn />
        <div className="section__we-do">
          <TitleMinir
            text={"What"}
            colorBackground={"we do"}
            classicalTheme={false}
          />
          <div className="we-do-content">
            <p>
              High-end digital experiences. Created at the heart of Manhattan,
              <span>we are a should human team.</span>
              <br />
              <br />‍ The driving force of all speeches, we believe that
              creation should be the point around which any strategy revolves.
            </p>
            <Button text={"See Our Process"} appearance={true} />
          </div>
        </div>
        <Partner />
      </div>
      <div className="section__hover-card">
        <div className="container">
          <div style={{ textAlign: "center", margin: "0 auto", maxWidth: 750 }}>
            <TitleMinir
              text={"Unlock Revenue Growth for"}
              colorBackground={"Your Business"}
              classicalTheme={true}
            />
          </div>
          <div className="hover-card-content">
            <HoverCard />
            <HoverCard />
            <HoverCard />
          </div>
        </div>
        <div>
          <RunningLine />
        </div>
        <div className="container">
          <div style={{ textAlign: "center", margin: "0 auto", maxWidth: 800 }}>
            <TitleMinir
              text={"We Work to Craft Solid Products &"}
              colorBackground={"Project For You"}
              classicalTheme={true}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: 190,
              flexWrap: "wrap",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: 90,
              }}
            >
              <ProjectCard />
              <ProjectCard />
              <button>
                See <br /> All Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
