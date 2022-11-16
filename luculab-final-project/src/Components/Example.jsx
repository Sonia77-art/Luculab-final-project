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
      value: 200,
    },
    {
      text: "mistake",
      value: 500,
    },
    {
      text: "jump",
      value: 50,
    },
    {
      text: "box",
      value: 1000,
    },
    {
      text: "run",
      value: 450,
    },
    {
      text: "hide",
      value: 800,
    },
    {
      text: "dress",
      value: 330,
    },
    {
      text: "school",
      value: 600,
    },
    {
      text: "game",
      value: 110,
    },
  ];

  return (
    <div style={{ height: 250, width: 500 }}>
      <ReactWordcloud options={options} words={words} />
    </div>
  );
}
