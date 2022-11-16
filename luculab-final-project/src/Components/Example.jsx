import React from "react";
import ReactWordcloud from "react-wordcloud";

export default function Example() {
  const options = {
    colors: ["blue"],
    enableTooltip: false,
    deterministic: true,
    fontFamily: "sans-serif",
    fontSizes: [30, 30],
    fontStyle: "italic",
    fontWeight: "normal",
    padding: 1,
    rotations: 0,
    rotationAngles: [0, 0],
    scale: "sqrt",
    spiral: "rectangular",
    transitionDuration: 1000,
  };
  const words = [
    {
      text: "Son",
      value: 80,
    },
    {
      text: "mistake",
      value: 50,
    },
    {
      text: "jump",
      value: 50,
    },
    {
      text: "box",
      value: 70,
    },
    {
      text: "run",
      value: 50,
    },
    {
      text: "hide",
      value: 90,
    },
    {
      text: "dress",
      value: 50,
    },
    {
      text: "school",
      value: 50,
    },
    {
      text: "game",
      value: 110,
    },
  ];

  return (
    <div style={{ height: 400, width: 600 }}>
      <ReactWordcloud options={options} words={words} />
    </div>
  );
}
