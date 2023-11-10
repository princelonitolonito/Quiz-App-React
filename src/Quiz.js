// Quiz.js
import React, { useState } from "react";
import quizData from "./quizData";
import Timer from "./Timer";
import { useEffect } from "react";
function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [shuffledQuizData, setShuffledQuizData] = useState([]);

  // const[isTimeOver, setTimeOver] = useState(false); //

  const handleAnswerClick = (selectedAnswer) => {
    if (selectedAnswer === quizData[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    shuffle(quizData)
  };

  const handleTimerComplete = () => {
    // Update showResult to true when the timer completes
    setShowResult(true);
  };

  const handleGoBack = () => {
    if(currentQuestion === 1)
    {
      setCurrentQuestion(currentQuestion - 1);
    }
   
  };

  const shuffle = (array) => { 
    return array.sort(() => Math.random() - 0.5); 
  }; 

  useEffect(() => {
    const initialShuffledArray = shuffle(quizData);
    setShuffledQuizData(initialShuffledArray);

    // Optionally log the shuffled array
    console.log(initialShuffledArray);
  }, []); // Empty dependency array ensures this effect runs once on mount


  return (
    
      <div> 
        <div className = "timer">
        <Timer showResult={showResult } handleTimerComplete={handleTimerComplete}/>
          <div>{
          }
          </div>
        </div>
       
      {showResult ? (
        <div class="quiz-wrapper">
          
          <div class="done">  
            <h2>Quiz Completed</h2>
            <p> Your Score: {score} out of {quizData.length}</p>
            <button onClick={resetQuiz}>Restart Quiz</button> 
          </div>
          <div class="logo"><p>JS<img src="https://i.ibb.co/NyrgSCz/Kuys-logo.png" alt="Kuys-logo" border="0"></img></p></div>
        </div>
      ) : ( 
        <div class="quiz-wrapper">
          <div class="quiz-box">
              <div class="question-count">
                  <p class="count"><span class="count-question">{currentQuestion + 1}</span>/<strong>{quizData.length}</strong></p>
                  <p class="question-title">Question</p>
              </div>
              <div class="question-box">
                  <span class="question-number">{currentQuestion + 1}</span>
                  <p class="question">{quizData[currentQuestion].question}</p>
              </div>
              <div class="answers-box">
                  <div class="box">
                      <button class="answer-lable" onClick={() =>handleAnswerClick(quizData[currentQuestion].options[0])}>{quizData[currentQuestion].options[0]}</button>
                  </div>    
                  <div class="box">
                      <button class="answer-lable" onClick={() =>handleAnswerClick(quizData[currentQuestion].options[1])}>{quizData[currentQuestion].options[1]}</button>
                  </div>    
                  <div class="box">
                      <button class="answer-lable" onClick={() =>handleAnswerClick(quizData[currentQuestion].options[2])}>{quizData[currentQuestion].options[2]}</button>
                  </div>    
                  <div class="box">
                      <button class="answer-lable" onClick={() =>handleAnswerClick(quizData[currentQuestion].options[3])}>{quizData[currentQuestion].options[3]}</button>
                  </div>    
              </div>
            </div> 
            <div class="logo"><p>JS<img src="https://i.ibb.co/NyrgSCz/Kuys-logo.png" alt="Kuys-logo" border="0"></img></p></div>  
          </div>
          
      )}
      
    </div>
    
  );
}

export default Quiz;
