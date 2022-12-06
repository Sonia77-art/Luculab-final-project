import { useState } from "react";
// import LukulabAudio from "../LukulabAudio.MP3";

export default function Audio({ exercise }) {
  const [isOpen, setIsOpen] = useState(true);
  function handleClick(event) {
    setIsOpen(!isOpen);
  }
  return (
    <div className="Play">
      <button className="Btn" onClick={handleClick}>
        <audio controls>
          <source src={`/Audio/${exercise.Audio}`} type="audio/MP3" />
        </audio>
      </button>
    </div>
  );
}
