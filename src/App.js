import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const submitForm = () =>{
  console.log("Form Submitted23444");
}

function App3() {

  return (
    <form>
      <label>
        Name:
        <input type="text" />
      </label>
      <input type="submit" value="Submit" onClick={submitForm}/>
    </form>
    
  );
}

export default App;
export {App3};
