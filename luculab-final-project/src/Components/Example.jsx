import React from "react";
import ReactWordcloud from "react-wordcloud";

export default function Example() {
  const options = {
    colors: ["#fff"],
    enableTooltip: false,
    deterministic: true,
    fontFamily: "sans-serif",
    fontSizes: [30, 30],
    fontStyle: "italic",
    fontWeight: "normal",
    rotations: 0,
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
      text: "bed",
      value: 1500,
    },
    {
      text: " ",
      value: 50,
    },
    {
      text: "box",
      value: 1000,
    },
    {
      text: " ",
      value: 450,
    },
    {
      text: "hide",
      value: 1500,
    },
    {
      text: "dress",
      value: 1830,
    },
    {
      text: " ",
      value: 600,
    },
    {
      text: " ",
      value: 110,
    },
  ];

  return (
    <>
      <div style={{ height: 250, width: 500 }}>
        <ReactWordcloud options={options} words={words} />
      </div>
    </>
  );
}
