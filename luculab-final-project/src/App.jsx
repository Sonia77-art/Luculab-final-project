import Button from "./Components/Button.jsx";
import Done from "./Components/Done.jsx";
// import Words from "./Components/Words.jsx";
import "./App.css";
import Example from "./Components/Example.jsx";
import Words from "./Components/Words.jsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Excerise-1</h2>
        <p>
          There are scattered different types of Syllables.They hear 2 Words.
          They Should Selecet those syllables that makeup the word
        </p>

        <Example />

        <Words />
        <div>
          <br />
          <br />
          <br />
          <Button text="Play">Play</Button>
          <br />
          <br />
          <Done />
        </div>
      </header>
    </div>
  );
}

export default App;
