import "../App.css";
import ReactWordcloud from "react-wordcloud";

export default function Words() {
  const words = [
    "son",

    "sang",

    "run",

    "jump",

    "book",

    "flag",

    "gone",

    "slap",

    "hat",
  ];

  return (
    <div className="Wds">
      {words.map((word) => (
        <button className="btn-2" key={word}>
          {word}
        </button>
      ))}
    </div>
  );
}
