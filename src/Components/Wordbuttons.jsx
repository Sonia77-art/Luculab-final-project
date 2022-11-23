import { useState } from "react";
import "../App.css";
import Done from "../Components/Done.jsx";
import Audio from "../Components/Audio.jsx";
import NextButton from "../Components/NextButton.jsx";

const Button = (props) => {
  const [active, setActive] = useState(false);
  const handleClickButton = (Word) => {
    if (!active && !props.showResults) {
      setActive(true);

      props.onClick();
    }
  };

  const isCorrect = props.correctWords.includes(props.word);
  let color = "grey";
  if (active && !props.showResults) {
    color = "blue";
  } else if (props.showResults) {
    if (active && isCorrect) {
      color = "green";
    } else if (active && !isCorrect) {
      color = "red";
    } else if (!active && isCorrect) {
      color = "blue";
    }
  }
  return (
    <button className={`button ${color}`} onClick={handleClickButton}>
      {props.word}
    </button>
  );
};

export default function Words() {
  const [selectedWords, setSelectedWords] = useState([]);
  const [donePressed, setDonePressed] = useState(false);
  const handleDoneClick = () => {
    setDonePressed(true);
  };

  const words = ["shi", "ing", "ed", "ny", "er"];
  const correctWords = ["shi", "ny"];

  return (
    <>
      <div className="container">
        {words.map((word) => {
          const handleClick = () => {
            setSelectedWords([...selectedWords, word]);
          };
          return (
            <Button
              key={word}
              correctWords={correctWords}
              word={word}
              showResults={donePressed}
              onClick={handleClick}
            />
          );
        })}
      </div>

      <br />
      <div>
        <Audio />
        <br />
      </div>

      <div>
        {selectedWords.length > 1 && <Done onClick={handleDoneClick} />}
      </div>
      <br />
      <br />
      <div>
        <NextButton />
      </div>
    </>
  );
}
