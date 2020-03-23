import React, { useState, useEffect, useContext } from 'react';
import ReactDOM from "react-dom";
import { Redirect } from 'react-router-dom';
import TimerContext from  "../contexts/TimerContext"
import "../styling/components/timer.scss";



const Timer = ({count}) => {
  console.log("count:" , count)
  const [timeLeft, setTimeLeft] = useState(1500);

  useEffect(() => {
    // exit early when we reach 0
    if (!timeLeft) {
      setTimeLeft(timeLeft)
    };

    // save intervalId to clear the interval when the component re-renders
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
    
    // clear interval on re-render to avoid memory leaks
    return () => clearInterval(intervalId);
    // add timeLeft as a dependency to re-rerun the effect when we update it
  }, [timeLeft]);
  
  return (
        <>
    <div className="timer-container">
      <h1>
        {timeLeft < 0 ?  
      <span>Time's up!
      <Redirect to="/modal" />
      </span>: 
      <div className="flip-clock">
        <span className="flip-clock__piece">
          <b className="flip-clock__card" className="card">
          <b class="card__top">{timeLeft}</b>
          <b class="card__bottom" data-value={timeLeft}>
          {/* <div>Countdown: {timeLeft} </div> */}
          </b>
          <b class="card__back" data-value={timeLeft}>
          <b class="card__bottom" data-value={timeLeft}>
          </b>
          </b>
          </b>
          {/* <span class="flip-clock__slot">Seconds</span> */}
          </span>  
      </div>
      } 
      </h1>
    </div>
      </>
  );
};

export default Timer;