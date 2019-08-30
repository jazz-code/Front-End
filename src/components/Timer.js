import React, {useState, useEffect} from "react";

export default function Timer() {
    const [time, setTime]=useState(5);
    useEffect(() => {
      setInterval(() => {
        setTime((newTime) => newTime-1, 1000)
    }, [])
    return (
        <div className="timer">{time}</div>
    )
    }
    )
}


// setTimeout(() => {
//     // setTime(time => time-1)
//     var millis = Date.now() - start;
//     console.log(`millis: ${millis}`)
//     console.log("seconds elapsed = " + Math.floor(millis/1000));
//     if (Math.floor(millis/5000) === 1) {
//       props.history.push('/game')
//       setCurrentScore(currentScore - 1)
//       start = Date.now();
//       console.log(`second: ${start}`);
//     }
//     else {
//         console.log(`not yet`)
//     }
//   }, 5000)