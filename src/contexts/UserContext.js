import React, { createContext } from 'react'

const UserContext = createContext({
  username: 'steve',
  password: 'jobs'
})

export const UserProvider = UserContext.Provider
export const UserConsumer = UserContext.Consumer

export default UserContext
