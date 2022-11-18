import "../App.css";
import { useState } from "react";

//* export default function Words() {
// function handleInformationClick(event) {}
// const words = ["son", "box", "hide", "dress", "bed"];

// return (
// <div className="Wds">
// {words.map((word) => (
// <button
// className="btn-2"
// onClick={() => handleInformationClick()}
// style={{ backgroundColor: "#42C2FF" }}
// key={word}
// >
// {word}
// </button>
// ))}
// </div>
// );
// }

export default function Button(props) {
  const [color, setColors] = useState("blue");
  const [active, setActive] = useState(false);
  const handleClickButton = (words) => {
    setActive(true);
    setColors(words);
    if (active === true) {
      setActive(false);
      setColors("blue");
    }
  };

  return (
    <button
      className={`button ${color}`}
      onClick={() => handleClickButton(props.words)}
    >
      {props.words}
    </button>
  );
}

const Words = () => {
  const [words, setWords] = useState(["son", "bed", "box", "hide", "dress"]);

  return (
    <div className="container">
      {words.map((word) => (
        <Button key={word} word={word} />
      ))}
    </div>
  );
};
