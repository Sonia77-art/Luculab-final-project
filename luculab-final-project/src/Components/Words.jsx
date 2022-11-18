import "../App.css";

export default function Words() {
  function handleInformationClick(event) {}
  const words = ["son", "box", "hide", "dress", "bed"];

  return (
    <div className="Wds">
      {words.map((word) => (
        <button
          className="btn-2"
          onClick={() => handleInformationClick()}
          style={{ backgroundColor: "#42C2FF" }}
          key={word}
        >
          {word}
        </button>
      ))}
    </div>
  );
}
