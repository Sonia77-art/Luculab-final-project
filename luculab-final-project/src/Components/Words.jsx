import "../App.css";
import { useState } from "react";

export default function Words() {
  const [isBlue, setIsBlue] = useState("Blue");
  function handleInformationClick(event) {
    setIsBlue(!isBlue);
  }
  const words = ["son", "box", "hide", "dress", "bed"];

  return (
    <div className="Wds">
      {words.map((word) => (
        <button
          className="btn-2"
          onClick={() => handleInformationClick(true)}
          style={{ Color: "blue" }}
          key={word}
        >
          {word}
        </button>
      ))}
    </div>
  );
}
