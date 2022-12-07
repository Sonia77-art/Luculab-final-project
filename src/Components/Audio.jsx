import { useState } from "react";
export default function Audio({ exercise }) {
  const [isOpen, setIsOpen] = useState(true);
  function handleClick(event) {
    setIsOpen(!isOpen);
  }
  return (
    <div className="Play">
      <button className="Btn" onClick={handleClick}>
        <audio controls>
          <source src={`/Audio/${exercise.Audio}`} type="audio/mp3" />
        </audio>
      </button>
    </div>
  );
}
