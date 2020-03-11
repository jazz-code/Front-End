import React, {useState, useRef, useEffect, useContext} from 'react';
import ReactDOM from "react-dom";
import {Redirect} from 'react-router-dom';
import TimerContext from  "../contexts/TimerContext"
import CelebDisplay from './CelebDisplay';
// import ScoreContext from "../contexts/Score"


const Timer = ({currentScore, setCurrentScore, count, isDead, history}) => {
  console.log("count:" , count)
  // initialize timeLeft with the seconds prop
  const [timeLeft, setTimeLeft] = useState(15);
  // const { timeLeft, setTimeLeft } = useContext(TimerContext)
  
  // console.log("TimerCount: ", timerCount)
  useEffect(() => {
    // exit early when we reach 0
    if (!timeLeft) {
      // setCurrentScore(currentScore - 1)
      // setTimerCount(count)
      // clearInterval(0);
      // console.log("interval*****", clearInterval())
      // setTimeLeft(5)
      setTimeLeft(timeLeft)
    };


    // save intervalId to clear the interval when the component re-renders
    const intervalId = setInterval(() => {
      // setTimeLeft(5)
      setTimeLeft(timeLeft - 1);
    }, 1000);
    
    // clear interval on re-render to avoid memory leaks
    return () => clearInterval(intervalId);
    // add timeLeft as a dependency to re-rerun the effect
    // when we update it
  }, [timeLeft]);
  
  // const update = () => {
  //   if (timeLeft === 0 || count++) {
  //     // setCurrentScore(currentScore - 1)
  //     return true
  //   }
  // }
  
  return (
    <div>
      <h1>
        {timeLeft < 0 ?  
      <span>Time's up!
      <Redirect to="/modal" />
      </span>: 
      <div>Countdown: {timeLeft} </div>} </h1>
    </div>
  );
};

export default Timer;


// const Timer = (props) => {
//   // console.log("timer props:", props)
//   // const [time, setTime] = useState(new Date().toLocaleTimeString());
//   const {time, setTime} = useContext(TimerContext)

//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       setTime(time - 1)
//       if (time === 0) { 
//         // alert("hi")
//         setTime(time + 5)
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
//       <div>{time === 0 ?  <span>Time's up!</span> : <div>Time Remaining: {time} </div>} </div>
//     </div>
//   )
// }

// export default Timer;



// import React, { useEffect, useState, useRef } from "react";
// import ReactDOM from "react-dom";
// import {Redirect} from 'react-router-dom';



// export default function CountdownTimer(props) {
//   console.log("Timer props",props.history)
//   const calculateTimeLeft = () => {
//     const difference = +new Date("2025-08-01") - +new Date();
//     let timeLeft = {};

//     if (difference > 0) {
//       timeLeft = {
//         seconds: Math.floor((difference / 1000) % 6)
//       };
//     }

//     return timeLeft;
//   };

//   const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

//   useEffect(() => {
//     setTimeout(() => {
//       setTimeLeft(calculateTimeLeft());
//     }, 1000);
//   });

//   const timerComponents = [];

//   Object.keys(timeLeft).forEach(interval => {
//     if (!timeLeft[interval]) {
//       return;
//     }

//     timerComponents.push(
//       <span>
//         {timeLeft[interval]} {interval}{" "}
//       </span>
//     );
//   });

//   return (
//     <div>
//       {/* {console.log('coomom',timerComponents)} */}
//       {timerComponents.length ? 
//       timerComponents :
//       <>
//       <span>Time's up!</span>
//       <Redirect to="/game" />
//       </>
//       }
//     </div>
//   );
// }