// import React, {useState, useEffect} from "react";

// function Timer() {
//     const [time, setTime]=useState(3);
//     useEffect(() => {
//       setInterval(() => {
//         setTime((newTime) => newTime-1)
//       }, 1000)
//       if (`${}` === `3`) {
//       }
//       else {
//           console.log(`not yet`)
//       }
//     }, [])
//     return (
//         <div className="timer">{time}</div>
//     )
// }

// function Timer(props) {
//     const [time, setTime]=useState(3);
//     let ThisArray = []
//     // const [newTime, setNewTime]=useState("")
//     useEffect(() => {
//       setInterval(() => {
//         setTime(time => time-1)
//         // console.log(time)
//         ThisArray.push(1)
//         console.log(ThisArray)
//         if (`${ThisArray.length}` === `3`) {
//             console.log(`its working`)
//           props.push('/game');
//           ThisArray.shift();
//           ThisArray.shift();
//           ThisArray.shift();
//           setTime(3)
//         }
//         else {
//             console.log(`not yet`)
//         }
//       }, 1000)
//     }, [])

//     return (
//         <div className="timer">{time}</div>
//     )
    
//     // useEffect(() => {
//     //     setTime(3)
//     //   }, [ThisArray])
//     // return (
//     //     <div className="timer">{time}</div>
//     // )
// }

// export default Timer


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