// App.js
import React from "react";
import Quiz from "./Quiz";
import { useState } from "react";


function App() {
  const [quizStarted, setQuizStarted] = useState(false);

  const handleStartQuiz = () =>{
    setQuizStarted(true);
  }

  return (
    <div>
      {!quizStarted && (
        <div class="app">
          <p>Prepare yourself for a quick challenge as the test lasts only 10 minutes, and you'll need to answer 5 questions. Are you ready for the task ahead?</p>
          <button onClick={handleStartQuiz} class="appb"> Start Quiz </button>
        </div>
      )}
      {quizStarted && <Quiz />}

    </div>
  );
}

export default App;
