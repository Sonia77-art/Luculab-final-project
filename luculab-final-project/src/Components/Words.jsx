import "../App.css";

export default function Words() {
  const words = [
    "son",

    "mistake",

    "jump",

    "box",

    "run",

    "hide",

    "dress",

    "school",

    "game",
  ];

  return (
    <div className="Wds">
      {words.map((word) => (
        <button onclick="red" className="btn-2" key={word}>
          {word}
        </button>
      ))}
    </div>
  );
}
