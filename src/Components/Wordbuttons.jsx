import { useState } from "react";
import "../App.css";

const Button = (props) => {
  const [color, setColors] = useState("");
  const [active, setActive] = useState(false);
  const handleClickButton = (Words) => {
    setActive(true);
    setColors(Words);
    if (active === true) {
      setActive(false);
      setColors("");
    }
  };

  return (
    <button
      className={`button ${color}`}
      onClick={() => handleClickButton(props.word)}
    >
      {props.word}
    </button>
  );
};

export default function Words() {
  const [words, setWords] = useState(["son", "bed", "box", "hide", "dress"]);

  return (
    <div className="container">
      {words.map((words) => (
        <Button key={words} word={words} />
      ))}
    </div>
  );
}
