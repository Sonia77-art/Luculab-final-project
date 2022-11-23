import { useState } from "react";
import lukulabAudio from "./lukulabAudio.mp4";

export default function Audio() {
  const [isOpen, setIsOpen] = useState(true);
  function handleClick(event) {
    setIsOpen(!isOpen);
  }
  return (
    <div className="Play">
      <button className="Btn" onClick={handleClick}>
        <audio controls>
          <source src={lukulabAudio} type="audio/mp4" />
        </audio>
      </button>
    </div>
  );
}
