import "./App.css";
import Wordbuttons from "./Components/Wordbuttons.jsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2 className="heading">Exercise-3</h2>

        <div className="border">
          <br />
          <br />
          <Wordbuttons />
          <br />

          <br />
        </div>
        <br />
        <br />
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#"> How to do the exercise </a>
        <br />
      </header>
    </div>
  );
}

export default App;
