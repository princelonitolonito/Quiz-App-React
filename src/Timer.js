import React, { useState, useEffect } from 'react';

function Timer({ showResult }) {
  const startingMinutes = 10;
  const [time, setTime] = useState(startingMinutes * 60);


  // Update the countdown timer
  function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    return `${minutes}:${seconds}`;
  }

  // Display the countdown timer
  function displayCountdown() {
    return updateCountdown();
  }

  useEffect(() => {
    const interval = setInterval(() => {
        console.log(showResult);

        if(showResult)
        {
            console.log(time);
            console.log("TEST");

            return 0;
        }
        else
        {
            setTime((prevTime) => {
            if (prevTime > 0) {
                  console.log(prevTime);
                  console.log("TEST");
                  return prevTime - 1;
                }
                clearInterval(interval); // Clear the interval when showResult becomes true
                return 0;
              });
        }

    
    }, 1000);

    return () => {
      clearInterval(interval); // Clear the interval when the component unmounts
    };
  }, [showResult]);

  return (
    <div>
      <h1>Countdown Timer</h1>
      <p>{displayCountdown()}</p>
    </div>
  );
}

export default Timer;
