import "../App.css";

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
    <div className="container">
      {words.map((word) => (
        <button className="btn-2" key={word}>
          {word}
        </button>
      ))}
    </div>
  );
}
