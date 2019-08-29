import React, {useState, useEffect} from "react";

function Timer() {
    const [time, setTime]=useState(3);
    useEffect(() => {
      setInterval(() => {
        setTime((newTime) => newTime-1)
      }, 1000)
    //   if (`${}` === `3`) {
    //   }
    //   else {
    //       console.log(`error`)
    //   }
    }, [])
    return (
        <div className="timer">{time}</div>
    )
}

// function Timer() {
//     const [time, setTime]=useState(3);
//     let ThisArray = []
//     // const [newTime, setNewTime]=useState("")
//     useEffect(() => {
//       setInterval(() => {
//         setTime((newTime) => newTime-1)
//         ThisArray.push(1)
//         console.log(`${ThisArray}`)
//       }, 1000)
//       if (`${ThisArray}` === `1, 1, 1`) {
//           console.log(`its working`)
//         this.props.history.push('/game');
//         ThisArray.shift();
//         ThisArray.shift();
//         ThisArray.shift();
//       }
//       else {
//           console.log(`at least you are seeing this`)
//       }
//     }, [])
//     return (
//         <div className="timer">{time}</div>
//     )
// }

export default Timer