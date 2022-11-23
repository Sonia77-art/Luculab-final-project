import "./App.css";
import Wordbuttons from "./Components/Wordbuttons.jsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2 className="heading">Excerise-1</h2>
        <p>
          There are scattered different types of Syllables.They hear 2 Words.
          They Should Selecet those syllables that makeup the word
        </p>
        <border className="Bro">
          <br />
          <br />
          <Wordbuttons />
          <br />
          <br />
        </border>
        <br />
        <br />
      </header>
    </div>
  );
}

export default App;
