// import React, {useState, useRef, useEffect, useContext} from 'react';
// import TimerProvider from  "../contexts/TimerProvider"

// const Timer = (props) => {
//   // console.log("timer props:", props)
//   const [time, setTime] = useState(new Date().toLocaleTimeString());
//   const {secondsPassed} = useContext(TimerProvider)

//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       const date = new Date()
//       secondsPassed.current = secondsPassed.current - 1;
//       setTime(date.toLocaleTimeString());
//       if (secondsPassed.current === 0) { 
//         // alert("hi")
//         clearInterval(timeout)
//         clearTimeout(timeout)
//       }
//     }, 1000);
//     return () => {
//       // alert("hi")
//       clearTimeout(timeout);
//     }
//   }, [time]);

//   return (
//     <div>
//       {/* <div>{time}</div> */}
//       <div>Time Remaining: {secondsPassed.current} seconds</div>
//     </div>
//   )
// }

// export default Timer;

import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import {Redirect} from 'react-router-dom';



export default function CountdownTimer(props) {
  console.log("Timer props",props.history)
  const calculateTimeLeft = () => {
    const difference = +new Date("2025-08-01") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        seconds: Math.floor((difference / 1000) % 6)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach(interval => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div>
      {/* {console.log('coomom',timerComponents)} */}
      {timerComponents.length ? 
      timerComponents :
      <>
      <span>Time's up!</span>
      <Redirect to="/game" />
      </>
      }
    </div>
  );
}