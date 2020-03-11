import React, { createContext } from 'react'

const ScoreContext = createContext()

export const ScoreContextProvider = ScoreContext.Provider
export const ScoreContextConsumer = ScoreContext.Consumer

export default ScoreContext