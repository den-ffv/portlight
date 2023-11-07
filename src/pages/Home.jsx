import React from "react";
import Button from "../components/Button/Button";
import Carousel from "../components/Carousel/Carousel";
import star from "/icon/star1.svg";
import bgTitle from "/icon/bg-h1.svg";
import ScrollBtn from "../components/ScrollBtn/ScrollBtn";
import TitleMinir from "../components/TitleMinir/TitleMinir";
import Partner from "../components/Partner/Partner";

function Home() {
  return (
    <section>
      <div className='container'>
        <div className='title-container'>
          <h1 className='main-title'>
            Take it t
            <span>
              <img src={star} alt='star' />
            </span>
            <br />
            the Creative
            <span>
              <img src={bgTitle} alt='bgTitle' />
            </span>
            level
          </h1>
          <p className='main-paragrafe'>
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
      <div className='container'>
        <ScrollBtn />
        <div className='section__we-do'>
          <TitleMinir
            text={"What"}
            colorBackground={"we do"}
            classicalTheme={false}
          />
          <div className='we-do-content'>
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
      <div style={{ backgroundColor: "#000" , paddingTop: 130, paddingBottom: 130}}>
        <div className='container'>
          <TitleMinir
            text={"Unlock Revenue Growth for"}
            colorBackground={"Your Business"}
            classicalTheme={true}
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
