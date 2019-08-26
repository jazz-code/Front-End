import React from 'react'

const ScoreContext = React.createContext({
  points: '',
  totalPoints: ''
})

export const ScoreProvider = ScoreContext.Provider
export const ScoreConsumer = ScoreContext.Consumer

export default ScoreContext
