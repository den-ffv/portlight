import React from "react";
import Button from "../components/Button/Button";
import Partner from "../components/Partner/Partner";

function About() {
  return (
    <section>
      <div className="container">
        <div className="title-container">
          <h1 className="main-title">About Us</h1>
          <p className="main-paragrafe">
            Whereby is the super simple way to connect over video. No downloads
            or <br /> long having into meeting links.
          </p>
        </div>
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: 30 }}
        >
          <Button text={"Join Our Team"} appearance={false} />
        </div>
        <Partner />
      </div>
    </section>
  );
}

export default About;
