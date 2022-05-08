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
            <Dictionary defaultKeyword="diamond" />
          </main>
          <footer className="App-footer">
            {" "}
            <small>
              Coded by{" "}
              <a
                href="https://www.linkedin.com/in/armita-vajed/"
                target="_blank"
                rel="noreferrer"
              >
                Armita{" "}
              </a>
              and is{" "}
              <a
                href="https://github.com/nili-vjd/dictionary-project"
                target="_blank"
                rel="noreferrer"
              >
                open-sourced on GitHub
              </a>{" "}
              and{" "}
              <a
                href="https://starlit-paletas-f5f1e6.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                hosted on Netlify
              </a>
            </small>
          </footer>
        </header>
      </div>
    </div>
  );
}
