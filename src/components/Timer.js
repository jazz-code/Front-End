import React, { useState, useEffect, useContext } from 'react';
import ReactDOM from "react-dom";
import { Redirect } from 'react-router-dom';

// Utils
import { axiosWithAuth } from "../utils/axiosWithAuth";
import useTraceUpdate from "../utils/useTraceUpdate"
import axios from 'axios'

// Context API
import UserDataContext from "../contexts/UserDataContext";
import TimerContext from  "../contexts/TimerContext"


const Timer = ({count, currentScore, history}) => {
  // console.log("count:" , count)
  const [timeLeft, setTimeLeft] = useState(1500);
  const { userData, setUserData } = useContext(UserDataContext)
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

  // Updates authenticated User score
  const scorePut = () => {
    axiosWithAuth()
      .put(`https://bw-celeb-dead-app.herokuapp.com/users/${userData.id}`, {
        'points': combined,
      })
      .then(res => console.log("RES", res))
      .catch(err => console.log("error",err.response));
  }
  // console.log("userData", userData);
  
  // Displays different scores whether user is logged in and authenticated or not
  let userScore = userData.score;
  let combined = userScore + currentScore;
  console.log("combined", combined);

  // Helper function checks if object is empty
  function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}
  // Helper function displays different modals whether user is logged in and authenticated
  const authModal = () => {
    if (isEmpty(userData)) {
      console.log("here******", userData)
      history.push('/modal')
      
    } else {
      history.push('/registered')
    }
  }

  return (
    <div>
      <h1>
        {timeLeft < 0 ?  
      <span>Time's up!
      {scorePut()}
      {authModal()}
      </span>: 
      <div style={{fontfamily: "Lato"}}>Countdown: {timeLeft} </div>} </h1>
    </div>
  );
};

export default Timer;