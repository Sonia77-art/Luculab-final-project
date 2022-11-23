import { useState } from "react";
import LukulabAudio from "../LukulabAudio.MP3";

export default function Audio() {
  const [isOpen, setIsOpen] = useState(true);
  function handleClick(event) {
    setIsOpen(!isOpen);
  }
  return (
    <div className="Play">
      <button className="Btn" onClick={handleClick}>
        <audio controls>
          <source src={LukulabAudio} type="audio/MP3" />
        </audio>
      </button>
    </div>
  );
}
