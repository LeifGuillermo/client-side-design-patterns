import logo from './logo.svg';
import './App.css';
import Header from './header/Header'

function App() {
  return (
    <div className="App">
      <Header headerText="This is a header"></Header>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React.
      </a>
    </div>
  );
}

export default App;
