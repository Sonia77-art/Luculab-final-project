import React from "react";
import ReactWordcloud from "react-wordcloud";

export default function Example() {
  const options = {
    colors: ["#FDFF00"],
    enableTooltip: false,
    deterministic: true,
    fontFamily: "impact",
    fontSizes: [20, 20],
    fontStyle: "normal",
    fontWeight: "normal",
    padding: 1,
    rotations: 0,
    rotationAngles: [0, 0],
    scale: "sqrt",
    spiral: "archimedean",
    transitionDuration: 1000,
  };
  const words = [
    {
      text: "told",
    },
    {
      text: "mistake",
    },
    {
      text: "thought",
    },
    {
      text: "bad",
    },
  ];

  return (
    <div style={{ height: 400, width: 600 }}>
      <ReactWordcloud options={options} words={words} />
    </div>
  );
}
