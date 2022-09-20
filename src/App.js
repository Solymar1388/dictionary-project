import './App.css';
import Dictionary from './Dictionary';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1 className="title text-center letter-capitalized">English Dictionary</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="waterfall" />
        </main>
        <footer className="text-center App-footer">
          <small>
            <a href="https://github.com/Solymar1388/dictionary-project">
              Open-source сode
            </a> {""}
            by Olesia Libra
          </small>
        </footer>
      </div>
    </div>
  );
}


