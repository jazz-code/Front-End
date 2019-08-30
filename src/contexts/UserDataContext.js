import React, { createContext } from 'react'

const UserDataContext = createContext()

export const UserDataProvider = UserDataContext.Provider

export default UserDataContext
