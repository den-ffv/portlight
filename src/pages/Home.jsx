import React from "react";
import star from "/icon/star1.svg";
import bgTitle from "/icon/bg-h1.svg";
import Button from "../components/Button/Button";
import Title from "../components/Title/Title";
function Home() {
  return (
    <section className='container'>
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
      <div style={{ display: "flex", justifyContent: "center", marginTop: 26 }}>
        <Button text={"Say Hello"} borderBtn={false} />
      </div>
    </section>
  );
}

export default Home;
