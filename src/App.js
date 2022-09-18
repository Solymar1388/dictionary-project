import './App.css';
import Dictionary from './Dictionary';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1 className="text-center letter-capitalized">Dictionary</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="sunset"/>
        </main>
        <footer className="text-center App-footer">
          <small>Coded by Olesia Libra</small>
        </footer>
      </div>
    </div>
  );
}


