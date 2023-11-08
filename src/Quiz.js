// Quiz.js
import React, { useState } from "react";
import quizData from "./quizData";
import Timer from "./Timer";
function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerClick = (selectedAnswer) => {
    if (selectedAnswer === quizData[currentQuestion].correctAnswer) 
    {
      setScore(score + 1);
      
    }

    if (currentQuestion < quizData.length - 1) 
    {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div>
       <Timer showResult={showResult} />
      {
      showResult ? 
      (
        <div>
          <h2>Quiz Completed</h2>
          <p>Your Score: {score} out of {quizData.length}</p>
         

        </div>
      ) : 
        (
          <div>
            <h2>{quizData[currentQuestion].question}</h2>
            <ul>
              {quizData[currentQuestion].options.map((option, index) => 
                  (
                    <li key={index} onClick={() => handleAnswerClick(option)}>{option}
                    </li>
                  )
                )
              }
            </ul>
          </div>
        )}
    </div>
  );
}

export default Quiz;
