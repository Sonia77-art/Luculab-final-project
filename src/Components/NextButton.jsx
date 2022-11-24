import "../App.css";

export default function NextButton(props) {
  function handleClick(event) {
    console.log("Button was clicked!");
    props.onClick();
  }
  return (
    <button className="btn-3" onClick={handleClick}>
      Next
    </button>
  );
}
