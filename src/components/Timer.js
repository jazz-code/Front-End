import React, {useState, useEffect} from "react";

function Timer() {
    const [time, setTime]=useState(3);
    useEffect(() => {
      setInterval(() => {
        setTime((newTime) => newTime-1)
      }, 1000)
      if ("newTime" === "0") {
        this.props.history.push('/game')
        setTime(3)
      }
    }, [])
    return (
        <div className="timer">{time}</div>
    )
}

export default Timer