import React, { useState, useEffect } from "react";

function Timer({ showResult ,handleTimerComplete}) {
  const [time, setTime] = useState(10 * 60);

  // Update the countdown timer
  function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    return `${minutes}:${seconds}`;
  }
  
  // Display the countdown timer
  function displayCountdown() {
    return updateCountdown();
  }



  useEffect(() => {
    if (!showResult) {
      setTime(10 * 60); //reset the timer
      const interval = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime > 0) {
            return prevTime - 1;
          }

           //if run out of time
       
          handleTimerComplete() //setShowResultTrue
     

         
         
          clearInterval(interval); // Clear the interval when showResult becomes true
          return 0;
        });
      }, 1000);

      return () => {
        clearInterval(interval); // Clear the interval when the component unmounts
      };
    }
  }, [showResult]);

  return (
    <div>
      <h1>Countdown Timer</h1>
      <p>{displayCountdown()}</p>
    </div>
  );
}

export default Timer;

