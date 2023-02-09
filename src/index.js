import React, { useState } from "react";
import ReactDOM from "react-dom";
import { StrictMode } from 'react';

import "./styles.css";

function App() {

  const [inputPatner, setInputPatner] = React.useState("");
  const [inputChild, setInputChild] = React.useState("");
  const [inputGeographic, setInputGeographic] = React.useState("")
  const [inputJob, setInputJob] = React.useState("")
  const [result, setResult] = React.useState("");

  return (
    <div className="App">

      <p className="title">The fortune teller by (Pushpak - 591)</p>

      <div className="numbers">
        <p className="numberTitle">
          <p className="subTitle">
            Patner's Name :
          </p>
        </p>
        <input
          className="buttonStyle"
          onChange={(e) => setInputPatner(e.target.value)}
          value={inputPatner}
          type="text">
        </input>
      </div>

      <div className="numbers">
        <p className="numberTitle">
          <p className="subTitle">
            Number of Child :
          </p>
        </p>
        <input className="buttonStyle"
          onChange={(e) => setInputChild(e.target.value)}
          value={inputChild}
          type="text">
        </input>
      </div>

      <div className="numbers">
        <p className="numberTitle">
          <p className="subTitle">
            Geographic Location :
          </p>
        </p>
        <input className="buttonStyle"
          onChange={(e) => setInputGeographic(e.target.value)}
          value={inputGeographic}
          type="text">
        </input>
      </div>


      <div className="numbers">
        <p className="numberTitle">
          <p className="subTitle">
            Job title:
          </p>
        </p>
        <input className="buttonStyle"
          onChange={(e) => setInputJob(e.target.value)}
          value={inputJob}
          type="text">
        </input>
      </div>

      <div>
        <button className="buttonStyle"
          onClick={() => setResult('You will be a ' + inputJob + ' in ' + inputGeographic + ' and married to ' +
            inputPatner + ' ' + ' with ' + inputChild + ' kids.')}
          type="button">Submit</button>
      </div>


      <div className="numbers">
        <p className="numberTitle">
          <p className="subTitle">
            Your Fortune is :
          </p>
        </p>
        <p className="buttonStyle">
          {result}
        </p>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>, rootElement);
