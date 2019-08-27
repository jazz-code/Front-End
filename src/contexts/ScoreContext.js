import React, { createContext } from 'react'

const ScoreContext = createContext({})

export const ScoreProvider = ScoreContext.Provider
export const ScoreConsumer = ScoreContext.Consumer

export default ScoreContext
