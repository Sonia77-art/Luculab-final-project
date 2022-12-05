import { useEffect, useState } from "react";
import "../App.css";
import Done from "../Components/Done.jsx";
import Audio from "../Components/Audio.jsx";
import NextButton from "../Components/NextButton.jsx";
// import LukulabAudio from "../LukulabAudio.MP3";
import { fetchLukulab_Exercise } from "../Fetch_data";

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
  const [pullDatas, setPullDatas] = useState();

  const fetchData = async function () {
    const data = await fetchLukulab_Exercise();
    setPullDatas(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDoneClick = () => {
    setDonePressed(true);
  };
  const handleNextButton = () => {
    setSlideNumber(slideNumber + 1);
    setDonePressed(false);
    setDisabled(true);
  };

  const exerciseSet =
    pullDatas &&
    pullDatas.data.Lukulab_Exercise.filter((exercise) => {
      if (exercise.Exercise_Set === "3") {
        return true;
      } else {
        return false;
      }
    });

  console.log(exerciseSet);
  const exercise = pullDatas && exerciseSet[slideNumber];
  return (
    <>
      <div className="container">
        {pullDatas &&
          exercise.Text.split(", ").map((word) => {
            const handleClick = () => {
              selectedWords.length > 0 && setDisabled(false);
              setSelectedWords([...selectedWords, word]);
            };
            return (
              <Button
                key={word}
                correctWords={exercise.Correctanswer.split(", ")}
                word={word}
                showResults={donePressed}
                onClick={handleClick}
              />
            );
          })}
      </div>

      <br />
      <div>
        {pullDatas && <Audio key={exercise.ID} exercise={exercise} />}
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
