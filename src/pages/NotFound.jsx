import React from "react";
import Button from "../components/Button/Button";

function NotFound() {
  return (
    <section>
      <div className="container">
        <div className="title-container">
          <h1 className="main-title">404 </h1>
          <p className="main-paragrafe">
            We'll never push extras that don't make sense for your brand just to
            make a quick buck. <br /> Our pricing policy is as transparent as
            our process.
          </p>
        </div>
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: 30 }}
        >
          <Button text={"Got to Home"} appearance={false} />
        </div>
      </div>
    </section>
  );
}

export default NotFound;
