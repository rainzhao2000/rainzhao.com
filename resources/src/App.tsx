import React from "react";
// @ts-ignore
import pfp from "./profile.jpg";
import "./App.css";
import Navbar from "./navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <img src={pfp} className="App-logo" alt="logo" />
        <p>
          Hello, I'm <strong>Rain Zhao</strong>
          <br />
          and welcome to my playground.
        </p>
      </header>
      <div>
        <p>body</p>
      </div>
    </div>
  );
}

export default App;
