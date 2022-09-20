import logo from './logo.png';
import './App.css';

import Dictionary from './Dictionary';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1 className="title text-center letter-capitalized">
            Welcome to English Dictionary
          </h1>
          <img
            src={logo}
            class="img-fluid App-logo"
            alt="logo"
          ></img>
        </header>
        <main>
          <Dictionary defaultKeyword="waterfall" />
        </main>
        <footer className="text-center App-footer">
          <small>
            <a href="https://github.com/Solymar1388/dictionary-project">
              Open-source сode
            </a>{' '}
            {''}
            by Olesia Libra
          </small>
        </footer>
      </div>
    </div>
  );
}
