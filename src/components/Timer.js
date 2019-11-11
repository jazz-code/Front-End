import React, { useState, useEffect } from 'react'


const Timer = () => {
  const [seconds, setSeconds] = useState(5)

  useEffect(() => {
    const myInterval = setInterval(() => {
      setSeconds(seconds - 1)
  }, 1000)
  if (seconds === 0) {
    clearInterval(myInterval)
  }
}, [seconds])

    return (
      <div>
        <h1>Time Remaining: {seconds} seconds</h1>
      </div>
    )
  
}

export default Timer