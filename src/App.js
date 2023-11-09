// App.js
import React from "react";
import Quiz from "./Quiz";
import Timer from "./Timer";
import { useState } from "react";


function App() {
  const [quizStarted, setQuizStarted] = useState(false);

  const handleStartQuiz = () =>{
    setQuizStarted(true);
  }

  return (
    <div className= "App">
      <h1>Quiz App</h1>
      {!quizStarted && (
        <button onClick={handleStartQuiz}> Start Quiz </button>
      )}
      {quizStarted && <Quiz />}

    </div>
  );
}

export default App;
