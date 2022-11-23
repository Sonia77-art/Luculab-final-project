import { useState } from "react";
import "../App.css";
import Done from "../Components/Done.jsx";
import Audio from "../Components/Audio.jsx";

const Button = (props) => {
  const [color, setColors] = useState("");
  const [active, setActive] = useState(false);
  const handleClickButton = (Word) => {
    setActive(true);
    setColors("");
    if (active === true) {
      setActive(false);
      setColors("selected");
    }
  };
  return (
    <button className={`button ${color}`} onClick={handleClickButton}>
      {props.word}
    </button>
  );
};

export default function Words() {
  const words = ["shi", "ing", "ed", "ny", "er"];

  return (
    <>
      <div className="container">
        {words.map((word) => (
          <Button key={word} word={word} />
        ))}
      </div>

      <br />
      <div>
        <Audio />
        <br />
      </div>

      <div>
        <Done />
      </div>
    </>
  );
}
