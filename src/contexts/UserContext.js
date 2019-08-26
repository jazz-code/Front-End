import React from 'react'

const UserContext = React.createContext({
  id: '',
  name: '',
  username: '',
  password: '',
  points: ''
})

export const UserProvider = UserContext.Provider
export const UserConsumer = UserContext.Consumer

export default UserContext
