import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <main>
            <Dictionary defaultKeyword="Diamond" />
          </main>
          <footer className="App-footer">
            {" "}
            <small>
              Coded by Armita and is{" "}
              <a
                href="https://github.com/nili-vjd/dictionary-project"
                target="_blank"
                rel="noreferrer"
              >
                open-sourced on GitHub
              </a>
            </small>
          </footer>
        </header>
      </div>
    </div>
  );
}
