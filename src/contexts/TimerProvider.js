import React from 'react'

const TimerContext = React.createContext({
    secondsPassed: 5
})

export const TimerProvider = TimerContext.Provider
export const TimerConsumer = TimerContext.Consumer

export default TimerContext

// import React, { createContext } from 'react'

// const TimerContext = createContext()

// export const TimerProvider = TimerContext.Provider

// export default TimerContext