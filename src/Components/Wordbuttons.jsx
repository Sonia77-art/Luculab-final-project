import { useState } from "react";
import "../App.css";
import Done from "../Components/Done.jsx";
import Audio from "../Components/Audio.jsx";
import NextButton from "../Components/NextButton.jsx";
import LukulabAudio from "../LukulabAudio.MP3";

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
  const [disabled, setDisabled] = useState(true);
  const [slideNumber, setSlideNumber] = useState(0);
  const handleDoneClick = () => {
    setDonePressed(true);
  };
  const handleNextButton = () => {
    setSlideNumber(slideNumber + 1);
    setDonePressed(false);
    setDisabled(true);
  };

  const slides = [
    {
      words: ["shi", "ing", "ed", "ny", "er"],
      correctWords: ["shi", "ny"],
      audio: LukulabAudio,
    },
    {
      words: ["num", "ber", "dom", "sum", "ral"],
      correctWords: ["num", "ber"],
      audio: LukulabAudio,
    },
    {
      words: ["spot", "un", "ly", "ted", "ful"],
      correctWords: ["spot", "ted"],
      audio: LukulabAudio,
    },
    {
      words: ["morn", "ish", "ger", "ing", "est"],
      correctWords: ["morn", "ing"],
      audio: LukulabAudio,
    },
  ];

  return (
    <>
      <div className="container">
        {slides[slideNumber].words.map((word) => {
          const handleClick = () => {
            selectedWords.length > 0 && setDisabled(false);
            setSelectedWords([...selectedWords, word]);
          };
          return (
            <Button
              key={word}
              correctWords={slides[slideNumber].correctWords}
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
        <Done disabled={disabled} onClick={handleDoneClick} />
      </div>
      <br />
      <br />
      <div>
        {donePressed ? <NextButton onClick={handleNextButton} /> : null}
      </div>
    </>
  );
}
