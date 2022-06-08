import * as React from 'react';
// import logo from './logo.svg';
// import './App.css';

//the App component is just a JS function (called a function component)
// it doesn't receice any parameters right now, but it can (props)

function getTitle(title){
  return title;
}

function App() {
  return (
    <div>
      <h1>Hello {getTitle("React")}</h1>
      <label htmlFor="search">Search: </label>
      <input id="search" type ="text"/>
      
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
