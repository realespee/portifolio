import logo from './logo.svg';
import muele from './muele.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={muele} className="App-logo" alt="logo" />
        <p>
          What you are looking for will all be here soon!
        </p>
        <a
          className="App-link"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Cheers!
        </a>
      </header>
    </div>
  );
}

export default App;
