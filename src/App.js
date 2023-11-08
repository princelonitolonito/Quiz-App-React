// App.js
import React from "react";
import Quiz from "./Quiz";
import Timer from "./Timer";
import { useState } from "react";

function App() {

  return (
    <div className="App">
      <h1>React Quiz App</h1>
   
      <Quiz />
    </div>
  );
}

export default App;
