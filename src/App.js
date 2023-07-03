import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Changes for Docker 3. Running with volumes on WSL Ubuntu and deployed with Travis CI to AWS Elastic Beanstalk. EXP 80
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with Docker
        </a>
      </header>
    </div>
  );
}

export default App;
