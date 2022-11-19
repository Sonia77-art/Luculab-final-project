import Button from "./Components/Button.jsx";
import Done from "./Components/Done.jsx";
import "./App.css";
import Example from "./Components/Example.jsx";
import Wordbuttons from "./Components/Wordbuttons.jsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2 classname="heading">Excerise-1</h2>
        <p>
          There are scattered different types of Syllables.They hear 2 Words.
          They Should Selecet those syllables that makeup the word
        </p>
        <border className="Bro">
          <Example />
          <Wordbuttons />

          <div>
            <br />
            <Button text="Play">Play</Button>
            <br />
            <br />
            <Done />
          </div>
          <br />
        </border>
      </header>
    </div>
  );
}

export default App;
