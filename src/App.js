import React from 'react';
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
          Learn React With Detail Method
        </a>
        <p>Be a logical and good programmer needs effort and work hard daily</p>
        <p>Hello & Assalam-0-Alikum from Zeeshan Ali Rajpoot</p>
        <h2>Thanks</h2>

      </header>
    </div>
    
  );
  const teachers = ['Ali', 'Usman', 'Waqas', 'Zakriya', 'Shan']
    const titles= teachers.map( name => 'Mr. ' + name)
    console.log (titles)
}

export default App;
