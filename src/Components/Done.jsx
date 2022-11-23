import "../App.css";

export default function Done(props) {
  function handleClick(event) {
    console.log("Button was clicked!");
    alert("Go To Next Excercise");
  }
  return (
    <button className="btn-1" onClick={handleClick}>
      Done
    </button>
  );
}
