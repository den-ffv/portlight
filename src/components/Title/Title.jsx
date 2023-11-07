import React from "react";

function Title({ titelText, paragraph}) {
  return (
    <div>
      <h1>{titelText}</h1>
      <p>{paragraph}</p>
    </div>
  );
}

export default Title;
